# 09 — Design System

The motion, layout, and animation contract for the deck. Every slide in `[00-OUTLINE.md](00-OUTLINE.md)` references one of the named animations, transitions, and layouts in this document.

Brand colors and typography live in `[brand/colors.md](brand/colors.md)`.

---

## 1. Motion Library

All durations are paired with a single named easing. Never invent new pairings.

```css
:root {
  /* Easings */
  --ease-snap: cubic-bezier(0.4, 0, 0.2, 1);     /* default UI */
  --ease-glide: cubic-bezier(0.16, 1, 0.3, 1);   /* cinematic, dramatic */
  --ease-in: cubic-bezier(0.4, 0, 1, 1);         /* exits */
  --ease-out: cubic-bezier(0, 0, 0.2, 1);        /* entrances */

  /* Durations (named) */
  --dur-micro: 150ms;       /* hover, focus */
  --dur-small: 300ms;       /* text fade-up, label reveal */
  --dur-medium: 500ms;      /* card scale-in, image reveal */
  --dur-large: 800ms;       /* slide transitions */
  --dur-cinematic: 1200ms;  /* section dividers */
  --dur-counter: 1500ms;    /* CountUp on numbers */
  --dur-finale-step: 500ms; /* finale text reveals */

  /* Stagger */
  --stagger-tight: 60ms;
  --stagger-normal: 80ms;
  --stagger-loose: 120ms;
}
```

---

## 2. Per-Slide Entry Animations (named)

Each slide in the outline references one of these. Reveal.js implementation in `js/slide-effects.js`.

### `fadeUpStagger`
Headlines fade up over `--dur-small` with `--stagger-normal` between lines.

```css
@keyframes fadeUpStagger {
  from { opacity: 0; transform: translateY(16px); }
  to   { opacity: 1; transform: translateY(0); }
}
.section.present .fade-up-stagger > * {
  opacity: 0;
  animation: fadeUpStagger var(--dur-small) var(--ease-out) forwards;
}
.section.present .fade-up-stagger > *:nth-child(1) { animation-delay: 0ms; }
.section.present .fade-up-stagger > *:nth-child(2) { animation-delay: 80ms; }
.section.present .fade-up-stagger > *:nth-child(3) { animation-delay: 160ms; }
.section.present .fade-up-stagger > *:nth-child(4) { animation-delay: 240ms; }
.section.present .fade-up-stagger > *:nth-child(5) { animation-delay: 320ms; }
```

### `countUpReveal`
Number counts up from 0 to target value over `--dur-counter` using [CountUp.js](https://github.com/inorganik/countUp.js).

```js
// Triggered on slide enter via Reveal's `slidechanged` event
new CountUp('#tam-figure', 21800000000, { duration: 1.5, separator: ',', prefix: '$' }).start();
```

Used on: TAM/SAM/SOM figures, MRR targets, customer counts, the "51+ years multifamily proptech" stat.

### `imageBlurReveal`
Image starts at `scale(1.05)` with 8px motion blur, animates to `scale(1.0)` with 0px blur over `--dur-medium`.

```css
@keyframes imageBlurReveal {
  from { transform: scale(1.05); filter: blur(8px); opacity: 0; }
  to   { transform: scale(1.0); filter: blur(0); opacity: 1; }
}
.section.present .image-blur-reveal {
  animation: imageBlurReveal var(--dur-medium) var(--ease-out) forwards;
}
```

Used on: every screenshot in the deck (apps, competitors, team photos).

### `cardTilt3D`
3D card tilt on hover for app-buffet grid (slide 9).

```css
.card-3d-tilt {
  transition: transform var(--dur-small) var(--ease-snap);
  transform-style: preserve-3d;
  perspective: 1000px;
}
.card-3d-tilt:hover {
  transform: rotateX(4deg) rotateY(-4deg) translateZ(8px);
}
```

### `strokeDraw`
For chart lines, scorecards, and the founder-market-fit matrix arrows.

```css
@keyframes strokeDraw {
  from { stroke-dashoffset: 100%; }
  to   { stroke-dashoffset: 0; }
}
.section.present path.draw-on {
  stroke-dasharray: 100%;
  stroke-dashoffset: 100%;
  animation: strokeDraw 1000ms var(--ease-out) forwards;
}
```

### `gradientTextClip`
For the finale "MILLIONAIRES" headline — gradient is text-clipped and slowly shifts hue.

```css
.gradient-text {
  background: linear-gradient(135deg, #1e3a8a 0%, #32bdcd 50%, #ed7e66 100%);
  background-size: 200% 200%;
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  animation: gradientShift 4s var(--ease-glide) infinite;
}
@keyframes gradientShift {
  0%, 100% { background-position: 0% 50%; }
  50%      { background-position: 100% 50%; }
}
```

### `noTransition` (intentional stop)
For the NDA pause slide (#2) — no animation, no transition. The lack of motion is the design.

---

## 3. Section Transitions (named, one per section boundary)

Each transition defines how slide N exits and slide N+1 enters. Reveal.js implementation in `css/transitions.css`.

| From → To | Transition Name | Visual | Duration |
|-----------|-----------------|--------|----------|
| **Cover (1) → NDA (2)** | `hardCut` | No animation. Brand says "stop." | 0ms |
| **NDA (2) → Section 1 (3)** | `releaseFade` | Fade-through-black, then content fades in | `--dur-large` |
| **Section 1 → Section 2 (Firm)** | `gradientWashLR` | Navy→turquoise→salmon sweeps L→R as the wipe | `--dur-cinematic` |
| **Section 2 → Section 3 (Buffet)** | `dollyZoom` | Camera dolly back; current slide miniaturizes into the buffet grid | `--dur-cinematic` |
| **Section 3 → Section 4 (App slides)** | `cardFlip3D` | 3D card flip, X-axis | `--dur-large` |
| **Section 4 → 4.5 (Bundle)** | `triadConverge` | Three app slides fly into one stacked bundle slide | `--dur-cinematic` |
| **Section 4.5 → 5 (Competitive)** | `splitScreenWipe` | Center-out vertical split-wipe | `--dur-large` |
| **Section 5 → 6 (Recommendation)** | `zoomBlurFocus` | Zoom into the scorecard, blur background | `--dur-cinematic` |
| **Section 6 → 7 (GTM)** | `moneyRain` | Brief dollar-sign / pixel rain (canvas-confetti, scaled-down) | 1800ms |
| **Section 7 → 8 (Plan)** | `timelineUnfurl` | A horizontal timeline line draws across, slide content slides up | `--dur-cinematic` |
| **Section 8 → 9 (Ask)** | `spotlightFocus` | Background dims, single spotlight on each cofounder | `--dur-cinematic` |
| **Section 9 → 10 (Appendix/Finale)** | `fadeToBlack` | 2-second hold on black before finale | 2000ms |

---

## 4. The Cinematic Finale Sequence (slide 45)

Total duration: ~10 seconds. Implementation in `js/finale.js`. Triggers on slide enter.

| Time | Action | Tech |
|------|--------|------|
| 0.0s | Black background. Total silence. | CSS `background: #000` |
| 0.5s | "ONE STEP CLOSER" fades up — Fraunces 96px white | `fadeUpStagger` 500ms |
| 2.0s | "TO BECOMING" fades up below — Fraunces 72px white at 80% opacity | `fadeUpStagger` 500ms |
| 3.0s | "MILLIONAIRES" reveals in brand-gradient text-clip — Fraunces 144px, scale 1.05 → 1.0 bounce | `gradientTextClip` + scale spring |
| 3.5s | Radial shockwave pulse expands from screen center, 1200ms ease-out | Custom CSS keyframe |
| 4.0s | Firework burst #1 from bottom-left | `canvas-confetti` `fireworks` preset |
| 4.5s | Firework burst #2 from bottom-right | `canvas-confetti` |
| 5.0s | Firework burst #3 from bottom-center | `canvas-confetti` |
| 5.5s | Continuous confetti rain begins from top — brand colors only (navy, turquoise, salmon, gold) | `canvas-confetti` looped |
| 9.0s | "Let's build." appears bottom-center — Inter 14px caps, +0.08em tracking, 80% white | `fadeUpStagger` |
| 10.0s | Confetti settles. Slide holds. Click to exit (or `ESC`). | — |

### Shockwave keyframe

```css
@keyframes shockwave {
  0%   { transform: scale(0); opacity: 1; border-width: 8px; }
  100% { transform: scale(8); opacity: 0; border-width: 1px; }
}
.shockwave {
  position: fixed;
  top: 50%; left: 50%;
  width: 200px; height: 200px;
  margin-top: -100px; margin-left: -100px;
  border-radius: 50%;
  border: 8px solid;
  border-image: linear-gradient(135deg, #1e3a8a, #32bdcd, #ed7e66) 1;
  animation: shockwave 1200ms var(--ease-out) forwards;
  pointer-events: none;
}
```

### Confetti config (canvas-confetti)

```js
import confetti from 'canvas-confetti';

const colors = ['#1e3a8a', '#32bdcd', '#ed7e66', '#ca8a04'];

// Firework burst (called 3x at 4.0s, 4.5s, 5.0s)
function firework(originX) {
  confetti({
    particleCount: 80,
    spread: 70,
    startVelocity: 55,
    origin: { x: originX, y: 0.9 },
    colors,
    scalar: 1.2,
  });
}

// Continuous rain from 5.5s → 9.0s
function startRain() {
  const end = Date.now() + 3500;
  (function frame() {
    confetti({
      particleCount: 4,
      angle: 90,
      spread: 60,
      startVelocity: 30,
      origin: { x: Math.random(), y: -0.1 },
      colors,
      gravity: 0.9,
      ticks: 200,
    });
    if (Date.now() < end) requestAnimationFrame(frame);
  })();
}
```

---

## 5. Layout Templates (10 named master layouts)

Every slide in `[00-OUTLINE.md](00-OUTLINE.md)` declares its layout from this list.

### `L1-Cover`
Full-bleed brand gradient. Centered Fraunces title (display-lg), centered subhead (h1), small Real Tech mark top-left.

### `L2-SectionDivider`
Full-bleed brand gradient. Section number (96px Fraunces, 30% opacity) + section title (display-md, white).

### `L3-Statement`
Solid white or warm-grey background. One enormous sentence (display-md, navy) centered. Optional caption below.

### `L4-TwoColumn` (50/50)
Left: visual zone (screenshot, wireframe, image). Right: headline (h1) + 3-5 body bullets + CTA. Vice-versa swap variant.

### `L5-AppSlide`
Designed specifically for the per-app slides (#11–20). Top header strip (app name + logo + live URL link). Three-column body:

```
┌──────────────────────────────────────────────────┐
│  HEADER: [logo] App Name · Live URL              │
├──────────────────────────────────────────────────┤
│              │                       │           │
│ SCREENSHOT   │   PROBLEM / SOLUTION  │  STATS    │
│  (parallax)  │   (text)              │  TAM      │
│              │                       │  Build %  │
│              │                       │  Score    │
├──────────────────────────────────────────────────┤
│  COMPETITORS  │  MOAT  │  CHANNEL READINESS      │
├──────────────────────────────────────────────────┤
│  LINKS FOOTER (live URL · 3 competitors · LinkedIn) │
└──────────────────────────────────────────────────┘
```

### `L6-Comparison`
Before/After or Us/Them. Two large blocks side-by-side with a center divider. Used on positioning slides.

### `L7-Scorecard`
Full-width data table. Sticky top row (criteria), one row per app, color-coded scoring cells (red→amber→green). Used on slide 26 (the master scorecard).

### `L8-Quote`
Centered Fraunces pull-quote (display-md), attribution beneath in Inter caps. Used for testimonials and the "this started one night in a hospital room" Kith story.

### `L9-TeamGrid`
6 cards in a 3×2 grid (or 2×3 on mobile). Each card: photo + name + role + Multifamily badge (if applicable) + LinkedIn icon. Used on slide 7 and slide 42.

### `L10-Finale`
Black background, full-bleed. Reserved exclusively for slide 45.

### `L11-NdaPause` (the intermission)
Full-bleed warm-grey `#dbd1cd` background. Single Fraunces statement: *"Before we proceed."* Three info blocks below (Why now / What it covers / How). Large QR code centered. Coral `#f06666` "STOP" indicator in top-right corner. **No transition or entry animation.**

---

## 6. Per-Slide-Type Visual Standard

Every slide carries:
1. **Visual zone** (screenshot, wireframe, branded chart, or photograph)
2. **Links footer** (small caption row with hyperlinked URLs)
3. **Confidentiality footer** (the universal `Real Tech LLC · Confidential · For internal cofounder discussion only`)
4. **Slide number** (bottom-right, 10px Inter, 30% opacity)
5. **Named entry animation** from Section 2 above
6. **Named section transition** from Section 3 above (only at section boundaries)

---

## 7. Responsive Breakpoints

The Reveal.js deck targets these viewports. All layouts must remain legible at:

| Breakpoint | Width | Use case |
|------------|-------|----------|
| Desktop XL | 1920×1080 | Conference room projector, 4K display |
| Desktop | 1440×900 | Laptop fullscreen |
| Tablet | 1024×768 | iPad share-screen |
| Mobile | 375×667 | iPhone fallback (PDF reading, not presenting) |

PDF export (`?print-pdf` URL parameter) targets letter (8.5×11in) landscape.

---

## 8. Performance Budget

- Page weight per slide: ≤ 800 KB (after image optimization)
- All screenshots converted to WebP with AVIF fallback
- Initial load: ≤ 2.0s on broadband, ≤ 5.0s on 4G
- Time to first interaction: ≤ 1.0s
- All fonts loaded via `font-display: swap`

---

## 9. Accessibility

- Every slide must pass WCAG 2.1 AA contrast (4.5:1 for body, 3:1 for large text)
- All animations respect `prefers-reduced-motion: reduce` — fall back to instant transitions
- Every image has alt text matching the slide's intent
- Hyperlinks have visible focus rings (gold `#ca8a04` 2px outline)
- Finale fireworks/confetti have a `prefers-reduced-motion` fallback that just shows the gradient text without animation
