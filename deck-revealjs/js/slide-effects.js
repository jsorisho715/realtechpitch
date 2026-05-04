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
