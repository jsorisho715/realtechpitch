/* =============================================================================
   Main boot — initializes Reveal.js with our config, then attaches the NDA
   gate, slide effects, finale, and counters.
   ============================================================================= */

(function () {
  'use strict';

  if (typeof window.Reveal === 'undefined') {
    console.error('[RT-Deck] Reveal.js failed to load.');
    return;
  }

  const reduced = window.matchMedia &&
    window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  // Reveal.js config — mobile-friendly defaults, custom transitions per slide
  const config = {
    width: 1280,
    height: 800,
    margin: 0.04,             // small margin so content breathes on tablet
    minScale: 0.2,
    maxScale: 2.0,

    hash: true,               // URL hash navigation (#/2 for slide 2 etc.)
    hashOneBasedIndex: true,
    history: true,
    controls: true,
    progress: true,
    slideNumber: false,       // we render our own
    keyboard: true,
    touch: true,

    transition: 'fade',                // base; per-section overrides via data-transition
    transitionSpeed: reduced ? 'fast' : 'default',
    backgroundTransition: 'fade',

    autoSlide: 0,             // never auto-advance
    loop: false,

    // Print export support — Reveal scales each slide to fit a single page
    pdfMaxPagesPerSlide: 1,
    pdfSeparateFragments: false,

    // Plugins (none required for this build — Reveal core handles all we need)
    plugins: [],
  };

  window.Reveal.initialize(config).then(function () {
    if (typeof window.RT_attachSlideEffects === 'function') {
      window.RT_attachSlideEffects(window.Reveal);
    }
    if (typeof window.RT_attachNdaGate === 'function') {
      window.RT_attachNdaGate(window.Reveal);
    }

    // Override Reveal's slide background on the body so the deck wrapper
    // never shows the wrong color when we transition between gradient
    // and solid-bg slides.
    window.Reveal.on('slidechanged', function (event) {
      const slide = event.currentSlide;
      if (!slide) return;
      const layout = slide.querySelector('.slide');
      if (!layout) return;

      // Sync confidentiality footer color when the slide background is dark
      const isDark = layout.classList.contains('layout-cover') ||
                     layout.classList.contains('layout-section-divider') ||
                     layout.classList.contains('layout-finale') ||
                     layout.classList.contains('gradient-bg');
      const footer = document.querySelector('.deck-footer');
      const num = document.querySelector('.slide-number-mark');
      if (footer) {
        footer.style.color = isDark ? 'rgba(255,255,255,0.65)' : '';
      }
      if (num) {
        num.style.color = isDark ? 'rgba(255,255,255,0.55)' : '';
      }
    });
  });
})();
