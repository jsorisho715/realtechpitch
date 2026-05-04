/* =============================================================================
   Finale (slide 46) — 10-second cinematic sequence.
   Mirrors 09-design-system.md §4 frame-by-frame.
   Reduced-motion: skips fireworks/confetti/shockwave; reveals all text at 1s.
   Touch + small viewport: single firework instead of three.
   ============================================================================= */

(function () {
  'use strict';

  const reduced = window.matchMedia &&
    window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  const isPhone = window.matchMedia &&
    window.matchMedia('(max-width: 767px)').matches;

  let played = false;

  function playFinale(slide) {
    if (played) return;
    played = true;

    const line1 = slide.querySelector('.line-1');
    const line2 = slide.querySelector('.line-2');
    const line3 = slide.querySelector('.line-3');
    const closing = slide.querySelector('.closing');
    const shockwave = slide.querySelector('.shockwave');

    // Reduced motion fallback ------------------------------------------------
    if (reduced) {
      if (line1) line1.style.opacity = '1';
      if (line2) line2.style.opacity = '1';
      if (line3) line3.style.opacity = '1';
      if (closing) {
        setTimeout(function () { closing.style.opacity = '1'; }, 1000);
      }
      return;
    }

    // 0.5s — Line 1 ----------------------------------------------------------
    setTimeout(function () {
      if (!line1) return;
      line1.style.transition = 'opacity 500ms cubic-bezier(0,0,0.2,1), transform 500ms cubic-bezier(0,0,0.2,1)';
      line1.style.transform = 'translateY(0)';
      line1.style.opacity = '1';
    }, 500);

    // 2.0s — Line 2 ----------------------------------------------------------
    setTimeout(function () {
      if (!line2) return;
      line2.style.transition = 'opacity 500ms cubic-bezier(0,0,0.2,1), transform 500ms cubic-bezier(0,0,0.2,1)';
      line2.style.transform = 'translateY(0)';
      line2.style.opacity = '0.8';
    }, 2000);

    // 3.0s — Line 3 with bounce ---------------------------------------------
    setTimeout(function () {
      if (!line3) return;
      line3.style.transition = 'opacity 500ms cubic-bezier(0.16,1,0.3,1), transform 500ms cubic-bezier(0.16,1,0.3,1)';
      line3.style.transform = 'scale(1.0)';
      line3.style.opacity = '1';
    }, 3000);

    // 3.5s — Shockwave -------------------------------------------------------
    setTimeout(function () {
      if (!shockwave) return;
      shockwave.style.animation = 'none';
      void shockwave.offsetWidth;
      shockwave.style.animation = 'shockwave 1200ms cubic-bezier(0,0,0.2,1) forwards';
    }, 3500);

    // 4.0s, 4.5s, 5.0s — Fireworks ------------------------------------------
    setTimeout(function () { firework(0.2); }, 4000);
    if (!isPhone) {
      setTimeout(function () { firework(0.8); }, 4500);
      setTimeout(function () { firework(0.5); }, 5000);
    }

    // 5.5s — Confetti rain (3.5s duration) ----------------------------------
    setTimeout(function () { startRain(); }, 5500);

    // 9.0s — Closing line ---------------------------------------------------
    setTimeout(function () {
      if (!closing) return;
      closing.style.transition = 'opacity 500ms cubic-bezier(0,0,0.2,1)';
      closing.style.opacity = '1';
    }, 9000);
  }

  function reset() {
    played = false;
  }

  // ---------------------------------------------------------------------------
  // canvas-confetti integration (loaded via CDN)
  // ---------------------------------------------------------------------------

  const COLORS = ['#1e3a8a', '#32bdcd', '#ed7e66', '#ca8a04'];

  function firework(originX) {
    if (typeof window.confetti !== 'function') return;
    window.confetti({
      particleCount: isPhone ? 50 : 80,
      spread: 70,
      startVelocity: 55,
      origin: { x: originX, y: 0.9 },
      colors: COLORS,
      scalar: isPhone ? 0.9 : 1.2,
      ticks: 200,
    });
  }

  function startRain() {
    if (typeof window.confetti !== 'function') return;
    const end = Date.now() + 3500;
    (function frame() {
      window.confetti({
        particleCount: isPhone ? 2 : 4,
        angle: 90,
        spread: 60,
        startVelocity: 30,
        origin: { x: Math.random(), y: -0.1 },
        colors: COLORS,
        gravity: 0.9,
        ticks: 200,
      });
      if (Date.now() < end) requestAnimationFrame(frame);
    })();
  }

  window.RT_playFinale = playFinale;
  window.RT_resetFinale = reset;
})();
