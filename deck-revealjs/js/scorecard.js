/* =============================================================================
   Editable scorecard (slide 34) — live weighted-total recompute + localStorage
   persistence so cofounder edits survive page reloads during the meeting.
   ============================================================================= */

(function () {
  'use strict';

  var STORAGE_KEY = 'rt-scorecard-v1';

  function clamp(v) {
    if (v < 0) return 0;
    if (v > 10) return 10;
    return v;
  }

  function readWeights(table) {
    try {
      return JSON.parse(table.getAttribute('data-weights') || '{}');
    } catch (_) {
      return {};
    }
  }

  function recomputeRow(row, weights) {
    var cells = row.querySelectorAll('td[data-w]');
    var total = 0;
    var weightSum = 0;
    cells.forEach(function (cell) {
      var key = cell.getAttribute('data-w');
      var weight = Number(weights[key]) || 0;
      var raw = parseFloat(cell.textContent);
      var score = isFinite(raw) ? clamp(raw) : 0;
      total += score * weight;
      weightSum += weight;
    });
    var weighted = weightSum > 0 ? total / weightSum : 0;
    var out = row.querySelector('[data-weighted]');
    if (out) {
      var prev = parseFloat(out.textContent);
      var next = Math.round(weighted * 10) / 10;
      out.textContent = next.toFixed(1);
      if (isFinite(prev) && Math.abs(prev - next) > 0.05) {
        out.classList.add('is-changed');
        setTimeout(function () { out.classList.remove('is-changed'); }, 1200);
      }
    }
  }

  function recomputeAll(table) {
    var weights = readWeights(table);
    table.querySelectorAll('tbody tr').forEach(function (row) {
      recomputeRow(row, weights);
    });
  }

  function snapshot(table) {
    var data = {};
    table.querySelectorAll('tbody tr').forEach(function (row) {
      var rowKey = row.getAttribute('data-row');
      if (!rowKey) return;
      data[rowKey] = {};
      row.querySelectorAll('td[data-w]').forEach(function (cell) {
        data[rowKey][cell.getAttribute('data-w')] = cell.textContent.trim();
      });
    });
    return data;
  }

  function persist(table) {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(snapshot(table)));
    } catch (_) { /* localStorage may be unavailable (private mode) */ }
  }

  function captureDefaults(table) {
    if (!table.dataset.defaults) {
      table.dataset.defaults = JSON.stringify(snapshot(table));
    }
  }

  function restore(table) {
    var saved;
    try {
      saved = JSON.parse(localStorage.getItem(STORAGE_KEY) || 'null');
    } catch (_) { saved = null; }
    if (!saved) return;
    table.querySelectorAll('tbody tr').forEach(function (row) {
      var rowKey = row.getAttribute('data-row');
      if (!rowKey || !saved[rowKey]) return;
      row.querySelectorAll('td[data-w]').forEach(function (cell) {
        var w = cell.getAttribute('data-w');
        if (saved[rowKey][w] !== undefined) {
          cell.textContent = saved[rowKey][w];
        }
      });
    });
  }

  function reset(table) {
    var defaults;
    try {
      defaults = JSON.parse(table.dataset.defaults || 'null');
    } catch (_) { defaults = null; }
    if (!defaults) return;
    table.querySelectorAll('tbody tr').forEach(function (row) {
      var rowKey = row.getAttribute('data-row');
      if (!rowKey || !defaults[rowKey]) return;
      row.querySelectorAll('td[data-w]').forEach(function (cell) {
        var w = cell.getAttribute('data-w');
        if (defaults[rowKey][w] !== undefined) {
          cell.textContent = defaults[rowKey][w];
        }
      });
    });
    try { localStorage.removeItem(STORAGE_KEY); } catch (_) { /* noop */ }
    recomputeAll(table);
  }

  function attachCellHandlers(table) {
    table.querySelectorAll('td[contenteditable="true"]').forEach(function (cell) {
      cell.addEventListener('input', function () {
        // Strip non-numeric chars except dot
        var text = cell.textContent.replace(/[^0-9.\-]/g, '');
        if (text !== cell.textContent) {
          cell.textContent = text;
          // Move caret to end
          var range = document.createRange();
          range.selectNodeContents(cell);
          range.collapse(false);
          var sel = window.getSelection();
          if (sel) { sel.removeAllRanges(); sel.addRange(range); }
        }
        recomputeRow(cell.parentElement, readWeights(table));
        persist(table);
      });
      cell.addEventListener('keydown', function (e) {
        if (e.key === 'Enter') {
          e.preventDefault();
          cell.blur();
        }
      });
      cell.addEventListener('blur', function () {
        var raw = parseFloat(cell.textContent);
        if (!isFinite(raw)) {
          cell.textContent = '0';
        } else {
          cell.textContent = String(clamp(raw));
        }
        recomputeRow(cell.parentElement, readWeights(table));
        persist(table);
      });
    });
  }

  function init() {
    document.querySelectorAll('table[data-scorecard]').forEach(function (table) {
      captureDefaults(table);
      restore(table);
      attachCellHandlers(table);
      recomputeAll(table);

      var resetBtn = table.closest('section, .slide')
        ? table.closest('section, .slide').querySelector('[data-scorecard-reset]')
        : null;
      if (resetBtn && !resetBtn.dataset.bound) {
        resetBtn.dataset.bound = 'true';
        resetBtn.addEventListener('click', function () { reset(table); });
      }
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
  // Re-init on Reveal slide change in case the slide hadn't been parsed yet
  if (window.Reveal && typeof window.Reveal.on === 'function') {
    window.Reveal.on('ready', init);
  } else {
    document.addEventListener('reveal:ready', init);
  }
})();
