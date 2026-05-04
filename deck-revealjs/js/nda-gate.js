/* =============================================================================
   NDA Pause Gate — slide #2 hard-blocks deck advance until manually clicked.
   Mirrors 00-OUTLINE.md slide-2 spec: "no autoplay advance".
   The gate releases when the user clicks the "I have signed" CTA OR presses
   the spacebar/right-arrow with the modifier (so cofounders can override
   in case the deck is being projected and someone forgot to click).
   ============================================================================= */

(function () {
  'use strict';

  const GATE_RELEASED_KEY = 'rt-deck-nda-gate-released';
  const NDA_SLIDE_INDEX = 1; // zero-indexed: slide 2 is index 1

  function isGateReleased() {
    try {
      return sessionStorage.getItem(GATE_RELEASED_KEY) === 'true';
    } catch (_) {
      return false;
    }
  }

  function releaseGate() {
    try {
      sessionStorage.setItem(GATE_RELEASED_KEY, 'true');
    } catch (_) {}
    document.body.classList.remove('nda-gate-active');
    const ctaBtn = document.querySelector('[data-nda-release]');
    if (ctaBtn) {
      ctaBtn.textContent = 'Resumed — proceed →';
      ctaBtn.disabled = true;
    }
  }

  function lockGate() {
    document.body.classList.add('nda-gate-active');
  }

  function isOnNdaSlide(reveal) {
    const indices = reveal.getIndices();
    return indices.h === NDA_SLIDE_INDEX;
  }

  // ---------------------------------------------------------------------------
  // Mobile fix: Reveal applies `transform: scale()` to the deck wrapper. CSS
  // `position: fixed` inside a transformed ancestor is positioned relative to
  // THAT ancestor, not the viewport — so a "fixed" button inside the deck
  // still scales down with the deck. Workaround: render a sibling button
  // OUTSIDE the .reveal element and proxy its click to the in-deck button's
  // handler. This sibling lives at viewport scale, fully tappable.
  // ---------------------------------------------------------------------------
  function mountMobileNdaButton(reveal) {
    if (document.getElementById('rt-nda-mobile-cta')) return;

    const btn = document.createElement('button');
    btn.id = 'rt-nda-mobile-cta';
    btn.type = 'button';
    btn.textContent = 'I have signed \u2014 advance the deck';
    btn.setAttribute('aria-label', 'Advance the deck after signing the NDA');
    document.body.appendChild(btn);

    function refreshVisibility() {
      const onNda = isOnNdaSlide(reveal);
      const released = isGateReleased();
      btn.dataset.visible = (onNda && !released) ? 'true' : 'false';
    }
    refreshVisibility();

    reveal.on('slidechanged', refreshVisibility);

    btn.addEventListener('click', function () {
      releaseGate();
      btn.dataset.visible = 'false';
      try { reveal.next(); } catch (_) {}
      // Belt-and-suspenders fallback: if we somehow didn't advance, hash-jump.
      setTimeout(function () {
        if (reveal.getIndices().h === NDA_SLIDE_INDEX) {
          window.location.hash = '#/3';
        }
      }, 200);
    });
  }

  function attachReveal(reveal) {
    // Mobile-only: mount the viewport-positioned NDA CTA outside .reveal
    if (window.matchMedia && window.matchMedia('(max-width: 767px)').matches) {
      mountMobileNdaButton(reveal);
    }

    // Trap navigation past the NDA slide until released
    const blockKey = function (event) {
      if (isGateReleased()) return;
      if (!isOnNdaSlide(reveal)) return;

      const nextKeys = ['ArrowRight', 'ArrowDown', 'PageDown', ' ', 'Spacebar', 'n'];
      if (nextKeys.indexOf(event.key) !== -1) {
        event.preventDefault();
        event.stopPropagation();
        flashStop();
      }
    };
    document.addEventListener('keydown', blockKey, true);

    // Trap forward swipes / clicks on the right-edge advance zone
    const blockClick = function (event) {
      if (isGateReleased()) return;
      if (!isOnNdaSlide(reveal)) return;
      // Allow clicks on the release CTA, the QR canvas (download), and links
      const target = event.target;
      if (
        target.closest('[data-nda-release]') ||
        target.closest('[data-nda-allow-click]') ||
        target.tagName === 'A'
      ) {
        return;
      }
      // Block the right half of the screen (Reveal's "next" tap zone)
      const x = event.clientX || (event.touches && event.touches[0] && event.touches[0].clientX);
      if (x !== undefined && x > window.innerWidth * 0.5) {
        event.preventDefault();
        event.stopPropagation();
        flashStop();
      }
    };
    document.addEventListener('click', blockClick, true);
    document.addEventListener('touchstart', blockClick, true);

    // Hook the CTA button — release immediately, then advance, then
    // hash-jump as a safety net.
    const ctaBtn = document.querySelector('[data-nda-release]');
    if (ctaBtn) {
      ctaBtn.addEventListener('click', function () {
        releaseGate();
        try { reveal.next(); } catch (_) {}
        setTimeout(function () {
          if (reveal.getIndices().h === NDA_SLIDE_INDEX) {
            window.location.hash = '#/3';
          }
          const mob = document.getElementById('rt-nda-mobile-cta');
          if (mob) mob.dataset.visible = 'false';
        }, 200);
      });
    }

    // Reset gate state if the user navigates back to the NDA slide
    reveal.on('slidechanged', function () {
      if (isOnNdaSlide(reveal) && !isGateReleased()) {
        lockGate();
      } else {
        document.body.classList.remove('nda-gate-active');
      }
    });

    // Initial lock if we land on slide 2 directly via deep-link
    if (isOnNdaSlide(reveal) && !isGateReleased()) {
      lockGate();
    }
  }

  function flashStop() {
    const badge = document.querySelector('.layout-nda-pause .stop-badge');
    if (!badge) return;
    badge.classList.remove('flash');
    void badge.offsetWidth; // restart animation
    badge.classList.add('flash');
  }

  // Expose a setup function consumed by main.js once Reveal is initialized
  window.RT_attachNdaGate = attachReveal;
})();
