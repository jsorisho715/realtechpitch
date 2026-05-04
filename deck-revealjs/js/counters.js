/* =============================================================================
   Animated number counters — used on the stat strip (slide 8) and any slide
   with [data-countup="targetValue"] markup.
   Uses CountUp.js loaded via CDN; falls back to instant render if unavailable.
   Honors prefers-reduced-motion.
   ============================================================================= */

(function () {
  'use strict';

  const reduced = window.matchMedia &&
    window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  function fireCounters(slide) {
    const targets = slide.querySelectorAll('[data-countup]');
    if (!targets.length) return;

    targets.forEach(function (el) {
      const raw = el.getAttribute('data-countup');
      const target = parseFloat(raw);
      if (Number.isNaN(target)) return;

      const opts = {
        startVal: 0,
        duration: reduced ? 0.001 : 1.5,
        separator: el.dataset.separator || ',',
        prefix: el.dataset.prefix || '',
        suffix: el.dataset.suffix || '',
        decimalPlaces: parseInt(el.dataset.decimals || '0', 10),
      };

      if (typeof window.CountUp === 'undefined' || reduced) {
        el.textContent = opts.prefix + target.toLocaleString() + opts.suffix;
        return;
      }

      try {
        const counter = new window.CountUp(el, target, opts);
        if (!counter.error) {
          counter.start();
        } else {
          el.textContent = opts.prefix + target.toLocaleString() + opts.suffix;
        }
      } catch (_) {
        el.textContent = opts.prefix + target.toLocaleString() + opts.suffix;
      }
    });
  }

  window.RT_fireCounters = fireCounters;
})();
