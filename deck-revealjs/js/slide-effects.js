/* =============================================================================
   Per-slide effects — confidentiality footer + slide-number marker + QR code
   for the NDA pause slide. Runs on every slide change.
   ============================================================================= */

(function () {
  'use strict';

  function ensureGlobalChrome() {
    // Confidentiality footer (singleton)
    if (!document.querySelector('.deck-footer')) {
      const footer = document.createElement('div');
      footer.className = 'deck-footer';
      footer.textContent = 'Real Tech LLC · Confidential · For internal cofounder discussion only';
      document.body.appendChild(footer);
    }

    // Slide-number marker (singleton)
    if (!document.querySelector('.slide-number-mark')) {
      const mark = document.createElement('div');
      mark.className = 'slide-number-mark';
      mark.id = 'rt-slide-num';
      document.body.appendChild(mark);
    }
  }

  // Mobile nav: Reveal's own controls live INSIDE .reveal, which has
  // transform: scale() applied. CSS position:fixed inside a transformed
  // ancestor pins to that ancestor, not the viewport — so on phone the
  // arrows render at ~6px (invisible). We mount viewport-scale buttons
  // outside .reveal as siblings, proxying to Reveal's API.
  function mountMobileNav(reveal) {
    if (document.getElementById('rt-mobile-nav')) return;

    const wrap = document.createElement('div');
    wrap.id = 'rt-mobile-nav';
    wrap.innerHTML =
      '<button type="button" id="rt-mnav-prev" aria-label="Previous slide">' +
        '<svg width="24" height="24" viewBox="0 0 24 24" aria-hidden="true">' +
          '<path d="M15 6l-6 6 6 6" stroke="currentColor" stroke-width="2.5" fill="none" stroke-linecap="round" stroke-linejoin="round"/>' +
        '</svg>' +
      '</button>' +
      '<button type="button" id="rt-mnav-next" aria-label="Next slide">' +
        '<svg width="24" height="24" viewBox="0 0 24 24" aria-hidden="true">' +
          '<path d="M9 6l6 6-6 6" stroke="currentColor" stroke-width="2.5" fill="none" stroke-linecap="round" stroke-linejoin="round"/>' +
        '</svg>' +
      '</button>';
    document.body.appendChild(wrap);

    const prevBtn = document.getElementById('rt-mnav-prev');
    const nextBtn = document.getElementById('rt-mnav-next');

    function refreshState() {
      const idx = reveal.getIndices();
      const total = reveal.getTotalSlides();
      const cur = idx.h || 0;
      prevBtn.disabled = cur === 0;
      nextBtn.disabled = cur >= total - 1;
      // While on NDA slide, force user to use the NDA CTA, not the arrow.
      const ndaCta = document.querySelector('[data-nda-release]');
      if (cur === 1 && ndaCta && !ndaCta.disabled) {
        nextBtn.disabled = true;
      }
      // Invert nav-button colors on dark/gradient slides for contrast.
      const slideEl = reveal.getCurrentSlide();
      const layout = slideEl ? slideEl.querySelector('.slide') : null;
      const isDark = layout && (
        layout.classList.contains('layout-cover') ||
        layout.classList.contains('layout-section-divider') ||
        layout.classList.contains('layout-finale') ||
        layout.classList.contains('gradient-bg')
      );
      wrap.classList.toggle('on-dark', !!isDark);
    }

    prevBtn.addEventListener('click', function () {
      try { reveal.prev(); } catch (_) {}
    });
    nextBtn.addEventListener('click', function () {
      try { reveal.next(); } catch (_) {}
    });

    reveal.on('slidechanged', refreshState);
    refreshState();
  }

  function updateSlideNumber(reveal) {
    const indices = reveal.getIndices();
    const total = reveal.getTotalSlides();
    const mark = document.getElementById('rt-slide-num');
    if (mark) {
      // 1-indexed for human readability
      const current = (indices.h || 0) + 1;
      mark.textContent = String(current).padStart(2, '0') + ' / ' + total;
    }
  }

  function renderQrCode(slide) {
    const canvas = slide.querySelector('.qr-canvas');
    if (!canvas || canvas.dataset.rendered === 'true') return;
    if (typeof window.QRCode === 'undefined') return;

    const url = (window.location.origin && window.location.origin !== 'null')
      ? window.location.origin + '/NDA-Real-Tech-Mutual.pdf'
      : 'https://realtechpitch.vercel.app/NDA-Real-Tech-Mutual.pdf';

    try {
      window.QRCode.toCanvas(canvas, url, {
        width: 280,
        margin: 1,
        color: { dark: '#1e3a8a', light: '#ffffff' },
        errorCorrectionLevel: 'H',
      }, function (error) {
        if (error) {
          // Fallback: display the URL as text
          const fallback = document.createElement('div');
          fallback.className = 'qr-fallback caption';
          fallback.textContent = url;
          canvas.replaceWith(fallback);
        }
      });
      canvas.dataset.rendered = 'true';
    } catch (_) {
      // No-op; CSS will show the empty canvas as the document background
    }
  }

  function attachReveal(reveal) {
    ensureGlobalChrome();

    if (window.matchMedia && window.matchMedia('(max-width: 767px)').matches) {
      mountMobileNav(reveal);
    }

    reveal.on('ready', function () {
      updateSlideNumber(reveal);
      renderQrCode(reveal.getCurrentSlide());
      if (typeof window.RT_fireCounters === 'function') {
        window.RT_fireCounters(reveal.getCurrentSlide());
      }
    });

    reveal.on('slidechanged', function (event) {
      updateSlideNumber(reveal);
      const slide = event.currentSlide;
      if (!slide) return;

      // QR code on NDA pause
      if (slide.querySelector('.qr-canvas')) {
        renderQrCode(slide);
      }

      // Number counters
      if (typeof window.RT_fireCounters === 'function') {
        window.RT_fireCounters(slide);
      }

      // Finale
      if (slide.classList.contains('layout-finale') ||
          slide.querySelector('.layout-finale')) {
        if (typeof window.RT_playFinale === 'function') {
          window.RT_playFinale(
            slide.classList.contains('layout-finale') ? slide :
            slide.querySelector('.layout-finale')
          );
        }
      } else {
        if (typeof window.RT_resetFinale === 'function') {
          window.RT_resetFinale();
        }
      }
    });
  }

  window.RT_attachSlideEffects = attachReveal;
})();
