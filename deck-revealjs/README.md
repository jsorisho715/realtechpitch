# Real Tech Pitch Deck — Reveal.js Build (Phase 2A)

> The cinematic, mobile-first Reveal.js implementation of the cofounder pitch deck. Source content lives in [`../00-OUTLINE.md`](../00-OUTLINE.md). Visual contract is locked in [`../09-design-system.md`](../09-design-system.md) and [`../brand/colors.md`](../brand/colors.md). Mobile contract is locked in [`../mobile-design-north-star.md`](../mobile-design-north-star.md).

---

## Quick start

```powershell
cd deck-revealjs
npm run dev
# opens at http://localhost:3000
```

That's it. The deck is **build-free** — pure HTML / CSS / JS with CDN-loaded libraries (Reveal.js 5, canvas-confetti, CountUp.js, qrcode.js, Google Fonts). `npm run dev` just spins up `http-server` on port 3000.

---

## File map

```
deck-revealjs/
├── README.md                       ← you are here
├── package.json                    ← dev/build/deploy scripts (no deps)
├── index.html                      ← all 46 sections, in order
├── NDA-Real-Tech-Mutual.pdf        ← copy of legal/output/* for the QR link
│
├── css/
│   ├── theme.css                   ← brand tokens + 11 layout templates + mobile-first
│   ├── animations.css              ← named per-slide entry animations
│   ├── transitions.css             ← named section transitions + reduced-motion fallback
│   └── nda-gate.css                ← visual feedback for the NDA hard-stop
│
└── js/
    ├── main.js                     ← Reveal.js boot + per-slide background sync
    ├── nda-gate.js                 ← hard-blocks deck advance past slide 2 until clicked
    ├── counters.js                 ← CountUp.js wiring for [data-countup]
    ├── finale.js                   ← 10-second cinematic finale sequence
    └── slide-effects.js            ← confidentiality footer + slide-number + QR render
```

---

## Mobile validation checklist (per the SOP)

Before declaring a change done, run this against the dev server:

```
- [ ] 320×568 (iPhone SE) — text legible, no horizontal scroll on body
- [ ] 375×667 (iPhone 14)  — app slides stack to one column
- [ ] 390×844 (iPhone 14 Pro) — safe-area honored on notch
- [ ] 412×915 (Pixel 5) — Android Chrome, no jank
- [ ] 768×1024 (iPad portrait) — app slides go 2-column
- [ ] 1024×1366 (iPad landscape) — full 3-column app slides
- [ ] 1920×1080 (conference room projector) — design at full bloom
- [ ] Rotate 320 → landscape — confidentiality footer above iOS home indicator
- [ ] DevTools → Rendering → Emulate `prefers-reduced-motion: reduce` → finale still completes
- [ ] DevTools → Rendering → Emulate `prefers-contrast: more` → text still legible
- [ ] All hyperlinks tap-target ≥ 44×44 (links footer + team-card LinkedIn)
- [ ] NDA QR scannable on phone (≥ 220px rendered)
- [ ] No `100vh` anywhere — `grep -r "100vh" css/ js/`
```

---

## NDA gate (the slide-2 hard stop)

The deck enforces an NDA pause on slide 2:

- Right-arrow / spacebar / down-arrow / page-down / "n" key are **trapped** while the gate is engaged.
- Clicks on the right half of the screen (Reveal's "next" tap zone) are **trapped**.
- The "I have signed — advance the deck" button is the only way through.
- A visual flash on the **STOP** badge gives feedback when navigation is blocked.
- State is persisted in `sessionStorage` for the tab — if a cofounder navigates back to slide 2, the gate stays open (they've already signed).
- For the deck operator: `Esc` opens Reveal's overview; this is allowed and respects the gate when re-entering.

---

## The finale (slide 46)

Total duration: ~10 seconds. Sequence in [`js/finale.js`](js/finale.js):

| Time | Action |
|------|--------|
| 0.0s | Black background |
| 0.5s | "ONE STEP CLOSER" fades up |
| 2.0s | "to becoming" fades up |
| 3.0s | "MILLIONAIRES" reveals in brand-gradient text-clip |
| 3.5s | Radial shockwave pulses from center |
| 4.0s, 4.5s, 5.0s | 3 firework bursts (1 burst on phone) |
| 5.5s | Continuous confetti rain (3.5s) |
| 9.0s | "Let's build." caption appears |
| 10.0s | Settles |

`prefers-reduced-motion: reduce` skips fireworks/confetti/shockwave; the three text lines reveal at once with the closing caption appearing at 1.0s.

---

## Deploying to Vercel

Two paths:

### A. Auto-deploy on push (recommended)

If the Vercel project at <https://vercel.com/johnathans-projects-b18146ff/realtechpitch> is connected to the GitHub repo `jsorisho715/realtechpitch`:

```powershell
git add .
git commit -m "deck update"
git push
```

…and Vercel rebuilds automatically. The repo-root [`../vercel.json`](../vercel.json) tells Vercel to deploy `deck-revealjs/` as the static site.

### B. Manual deploy (if not yet connected)

```powershell
cd deck-revealjs
npx vercel --prod
```

The first run prompts for a Vercel login (browser-based) and then to link to the existing project.

---

## Print / PDF export

Reveal.js supports PDF export via a URL query parameter:

```
http://localhost:3000/?print-pdf
```

Then in the browser: **File → Print → Save as PDF**. Each slide becomes one PDF page. The `?print-pdf` mode disables animations and shows all slides in document flow.

---

## Authoring new slides

Each slide is a `<section>` inside `<div class="slides">` in [`index.html`](index.html). Pattern:

```html
<section data-slide-id="my-slide" data-transition="fadeUp">
  <div class="slide layout-statement fade-up-stagger">
    <h1>My headline.</h1>
    <p>My body.</p>
    <div class="links-footer">
      <a href="https://example.com" target="_blank" rel="noopener">link</a>
    </div>
  </div>
</section>
```

**Required:**

1. `data-slide-id` — stable identifier for routing / debugging
2. One of the 11 named layout classes (`layout-cover`, `layout-section-divider`, `layout-statement`, `layout-two-column`, `layout-app-slide`, `layout-comparison`, `layout-scorecard`, `layout-quote`, `layout-team-grid`, `layout-finale`, `layout-nda-pause`)
3. One of the named entry animations (`fade-up-stagger`, `fade-up-tight`, etc.) on the inner `.slide`
4. A `links-footer` block with the slide's hyperlinks
5. (Section boundaries only) a `data-transition` attribute matching one of the 10 named section transitions

**Forbidden:** new colors, new fonts, new shadows, new gradient stops. The brand is locked.

---

## Brand & design references

- [`../brand/colors.md`](../brand/colors.md) — palette, gradients, typography
- [`../09-design-system.md`](../09-design-system.md) — motion library, transitions, layouts, finale
- [`../mobile-design-north-star.md`](../mobile-design-north-star.md) — mobile-first contract for this repo
- [`../00-OUTLINE.md`](../00-OUTLINE.md) — slide-by-slide source of truth
- [`../08-links-inventory.md`](../08-links-inventory.md) — every URL the deck references

---

## Performance budget

Per [`../09-design-system.md`](../09-design-system.md) §8:

- Per-slide page weight: **≤ 800 KB**
- Initial load: **≤ 2.0 s** broadband, **≤ 5.0 s** 4G
- Time to first interaction: **≤ 1.0 s**
- Fonts loaded with `font-display: swap`
- Libraries via CDN for cache-warm performance

Run `npx lighthouse http://localhost:3000 --view --preset=desktop` and `--preset=mobile` periodically.

---

## Known limitations / future work

- **Screenshots are placeholders.** [`../screenshots/capture.ps1`](../screenshots/capture.ps1) hasn't been run yet. When it is, drop captured PNGs into `assets/<app-name>/` and replace the `.visual-placeholder` divs with `<img>` tags.
- **The 10 section transitions degrade to fade on phones (< 768px)** to avoid layout-thrashing on weaker GPUs. Same for `prefers-reduced-motion: reduce` users.
- **Speaker notes are disabled** by default. Add `?showNotes=true` to the URL to enable Reveal's notes view if presenting from a second screen.
- **Vercel auto-deploy from GitHub is the recommended path.** Local `vercel --prod` works but requires CLI auth.
