# Mobile Design North Star — RealTech Pitch Deck

> Required by `~/.cursor/skills/mobile-ui-design/SKILL.md` first-touch ritual.
>
> **Brand state:** **LOCKED** — extracted from existing repo files. **No new tokens may be invented in this project.** Creative work happens *inside the system* (typographic hierarchy, asymmetric layouts, motion choreography, micro-interactions), never by overriding tokens.

---

## 1. Source files (the brand truth)

Read these for any UI work in this repo, in this order:

1. **[`brand/colors.md`](brand/colors.md)** — palette, gradients, typography stack, type scale, weights, line-heights, iconography (Lucide @ 1.5px stroke), SmartRent badge, confidentiality footer, card surface, DO/DO NOT
2. **[`09-design-system.md`](09-design-system.md)** — motion library (named easings + durations), per-slide entry animations (`fadeUpStagger`, `imageBlurReveal`, `countUpReveal`, `cardTilt3D`, `strokeDraw`, `gradientTextClip`, `noTransition`), 10 named section transitions, the 10s finale frame-by-frame, 11 layout templates (`L1-Cover` … `L11-NdaPause`), responsive breakpoints, performance budget, accessibility
3. **[`07-brand-architecture.md`](07-brand-architecture.md)** — voice per brand, parent vs. product brand rules, naming conventions
4. **[`00-OUTLINE.md`](00-OUTLINE.md)** — every slide declares its layout + entry animation + section transition + visual + links footer, all referencing the named primitives in (1)–(3)

If any UI suggestion contradicts (1)–(3), the suggestion loses. Always.

---

## 2. Locked tokens — the contract

**Colors** (no new shades; derive via opacity if needed):

```
--rt-deep-navy:  #1e3a8a   primary headers, CTAs, sidebar
--rt-gold:       #ca8a04   premium / consulting accents
--rt-warm-grey:  #dbd1cd   intermission / section backgrounds
--rt-turquoise:  #32bdcd   success / accent / dark-mode primary
--rt-salmon:     #ed7e66   energy / 3rd gradient stop
--rt-coral:      #f06666   urgency / NDA "stop" indicator
--rt-black:      #000000   finale background only
--rt-white:      #ffffff   card surfaces, body text on dark
```

**Signature gradient** — `linear-gradient(135deg, #1e3a8a 0%, #32bdcd 50%, #ed7e66 100%)`. Used on cover, section dividers, and the finale "MILLIONAIRES" text-clip. Never on body text.

**Type stack:**

| Role | Family | Source |
|------|--------|--------|
| Display | **Fraunces** | Google Fonts |
| Sans (UI) | **Inter** | Google Fonts |
| Mono (data, KPIs, prices) | **JetBrains Mono** | Google Fonts |

**Type scale** (the desktop scale; mobile uses `clamp()` to ramp down — see §6):

```
--font-display-xl: 8.0rem   /* 128px — finale "MILLIONAIRES" */
--font-display-lg: 6.0rem   /* 96px  — cover headline */
--font-display-md: 4.5rem   /* 72px  — section dividers */
--font-display-sm: 3.0rem   /* 48px  — slide headlines */
--font-h1:         2.0rem   /* 32px */
--font-h2:         1.5rem   /* 24px */
--font-body:       1.125rem /* 18px — default body */
--font-caption:    0.875rem /* 14px — footer / captions / links bar */
--font-micro:      0.75rem  /* 12px — confidentiality footer */
```

**Tracking:** display `-0.02em`, headlines `-0.01em`, body `0`, ALL-CAPS labels `+0.08em`.

**Spacing scale** (per the SOP — never 5/7/11/13): `4 / 8 / 12 / 16 / 24 / 32 / 48 / 64`.

**Radius:** `8` (chips), `12` (cards), `16` (sheets / modals), `999` (pills, avatars).

---

## 3. Audience and product context

- **Audience:** 6 cofounders / founding executive pool — 5 are current SmartRent leadership (3 VPs + 2 Directors; the 2 Directors are Wil in Smart Communities and Halim in Engineering). High visual literacy. Reading on **laptop primary, phone secondary** (the deck is a presentation artifact, not a consumer app — but cofounders WILL skim on phone before / after meetings).
- **Distribution:** Vercel URL · PDF export via `?print-pdf` · `.pptx` fallback (Phase 2B). All three must work.
- **Confidentiality:** every slide carries `Real Tech LLC · Confidential · For internal cofounder discussion only`. Slide 2 is a **hard-stop NDA pause** that must block deck advance until manually clicked through.

---

## 4. Form-factor strategy

The Phone bucket gets the most discipline because it's the most-likely-to-break form factor.

| Bucket | Width | Pointer | Strategy |
|--------|-------|---------|----------|
| **Phone portrait** | < 480 | coarse | Full-bleed slides; type ramps down via `clamp()`; tables collapse to card lists; multi-column app slides stack to one column; **NDA "STOP" badge stays in top-right corner** at 32px; finale shockwave/fireworks honor `prefers-reduced-motion` |
| **Phone landscape** | 480–767 | coarse | Type stays at phone scale; horizontal scrolling for the scorecard table allowed; finale reduced |
| **Tablet portrait** | 768–1023 | coarse | App slides go 2-column (screenshot · content); scorecard table stays full-width with horizontal scroll if needed |
| **Tablet landscape / desktop** | ≥ 1024 | fine | Full design system as authored in `00-OUTLINE.md`; hover effects (`cardTilt3D`) only here |

**Pointer over breakpoint.** All hover-only effects must be wrapped in `@media (hover: hover) and (pointer: fine)`. Anything that's a "hover tooltip" on desktop becomes static on touch devices — there is no long-press tooltip in this deck (presentations don't need them).

---

## 5. Primitive matrix (deck-specific)

The general primitive matrix from the SOP applies; here are the deck-specific resolutions:

| Pattern | Phone | Tablet | Desktop |
|---------|-------|--------|---------|
| Slide navigation | Tap left/right edge OR swipe | Tap edges OR keyboard | Keyboard arrows + click |
| Section overview (Reveal.js `Esc`) | Vertical scroll list of slide thumbnails | Grid 3-col | Grid 4-col |
| Speaker notes (`S`) | Disabled by default (no second screen) | Disabled | Optional |
| **NDA pause** | Full-bleed warm-grey + huge centered QR + 3 stacked info blocks (1 column) | 3-column blocks + side QR | 3-column blocks + side QR + corner STOP badge |
| **Cover slide** | Title at 14vw min, Fraunces; subhead 6vw | Title 96px Fraunces; subhead 32px | Authored scale |
| **App slide** (`L5-AppSlide`) | One column: header → screenshot → problem/solution → stats → competitors/moat/channel → links footer | Two-column: screenshot left, content right | Three-column as authored |
| **Founder grid** (`L9-TeamGrid`) | 1×6 vertical | 2×3 grid | 3×2 grid |
| **Scorecard table** (`L7-Scorecard`) | Top-row sticky + horizontal scroll; first column sticky | Full-width with sticky first row | Full-width |
| **Founder-Market Fit matrix** | Vertical card list (one per app) with star pills | Compact matrix with horizontal scroll | Full matrix with arrows |
| **Comparison** (`L6-Comparison`) | Stacked vertically with divider rule | Side-by-side | Side-by-side |
| **Statement** (`L3-Statement`) | Full-bleed text at `clamp()` scale | Same | Same, larger |
| **Finale** | Reduced fireworks (1 burst, smaller particle count) | 3 bursts, full | 3 bursts, full |

---

## 6. Fluid type ramp

The desktop scale at §2 is the ceiling. Mobile uses `clamp(min, viewport-relative, max)` so type smoothly ramps. The named tokens become:

```css
--font-display-xl: clamp(4rem, 14vw, 8rem);   /* finale */
--font-display-lg: clamp(2.75rem, 9vw, 6rem); /* cover */
--font-display-md: clamp(2.25rem, 6.5vw, 4.5rem); /* section dividers */
--font-display-sm: clamp(1.75rem, 4.5vw, 3rem);   /* slide headlines */
--font-h1:         clamp(1.375rem, 2.5vw, 2rem);
--font-h2:         clamp(1.125rem, 2vw, 1.5rem);
--font-body:       clamp(1rem, 1.5vw, 1.125rem);  /* min 16px to avoid iOS zoom */
--font-caption:    clamp(0.8125rem, 1vw, 0.875rem);
--font-micro:      0.75rem; /* footer stays small */
```

**Rule:** body text never goes below **16px** on phone (prevents iOS auto-zoom on focus). Caption can dip to 13px on phone if necessary.

---

## 7. Edge gutter contract (per the SOP)

```css
:root {
  --gutter-phone:    max(16px, env(safe-area-inset-left));
  --gutter-tablet:   max(24px, env(safe-area-inset-left));
  --gutter-desktop:  max(32px, env(safe-area-inset-left));
}

.slide {
  padding-inline: var(--gutter-phone);
}
@media (min-width: 768px) {
  .slide { padding-inline: var(--gutter-tablet); }
}
@media (min-width: 1024px) {
  .slide { padding-inline: var(--gutter-desktop); }
}
```

**Top/bottom safe area:** every slide reserves `pt-safe` (top notch) and `pb-safe` (home indicator). The confidentiality footer band sits above the safe-area inset.

**No content kisses the device edge** unless it's an intentional full-bleed gradient (cover, section divider, finale) — and those still respect top/bottom safe area for the slide-number marker and confidentiality footer.

---

## 8. Viewport units

**Forbidden:** `100vh`. iOS Safari address bar collapse causes content jumps.

**Used:** `100dvh` for slide containers (dynamic viewport height — adjusts for browser chrome). Fallback chain:

```css
.slide-container {
  min-height: 100svh;      /* small viewport — safest fallback */
  min-height: 100dvh;      /* dynamic — preferred where supported */
}
```

Reveal.js's default scaling is configured to fit content into the viewport's actual height, so `dvh` plays nicely.

---

## 9. Motion contract

From `09-design-system.md` §1, with mobile additions:

```css
:root {
  --ease-snap:     cubic-bezier(0.4, 0, 0.2, 1);
  --ease-glide:    cubic-bezier(0.16, 1, 0.3, 1);
  --ease-out:      cubic-bezier(0, 0, 0.2, 1);
  --ease-in:       cubic-bezier(0.4, 0, 1, 1);

  --dur-micro:     150ms;
  --dur-small:     300ms;
  --dur-medium:    500ms;
  --dur-large:     800ms;
  --dur-cinematic: 1200ms;
  --dur-counter:   1500ms;
  --dur-finale-step: 500ms;
}

@media (prefers-reduced-motion: reduce) {
  :root {
    --dur-micro:     1ms;
    --dur-small:     1ms;
    --dur-medium:    1ms;
    --dur-large:     1ms;
    --dur-cinematic: 1ms;
    --dur-counter:   1ms;
    --dur-finale-step: 1ms;
  }
  .shockwave, .confetti-canvas { display: none !important; }
}

@media (hover: none) and (pointer: coarse) {
  /* halve durations on touch devices for snappier feel */
  :root {
    --dur-medium:    300ms;
    --dur-large:     500ms;
    --dur-cinematic: 800ms;
  }
}
```

**Animations are gated by `prefers-reduced-motion: no-preference`** for everything beyond a 200ms opacity fade. The finale's reduced-motion fallback is already specified in `09-design-system.md` §9.

---

## 10. Touch targets

The deck is presentation, not chat — interactive surfaces are limited to:

- **Slide-navigation tap zones** (Reveal.js's left/right keys + edge taps): full-height invisible regions on left/right ~25% of viewport — easy 44px+ targets by default
- **Hyperlinks in the per-slide links footer:** all link tags get **min-height 44px** with vertical padding so they're tappable on phone, while still reading as a small caption row visually:

```css
.links-footer a {
  min-height: 44px;
  display: inline-flex;
  align-items: center;
  padding: 8px 4px;
  font-size: clamp(0.8125rem, 1vw, 0.875rem);
}
```

- **NDA QR code** on slide 2: minimum render size 220×220 CSS px on phone (scannable, visible).

No dropdowns, no menus, no composers in this deck. Mobile concerns reduce dramatically.

---

## 11. Performance budget

Per `09-design-system.md` §8, plus mobile additions:

- **Per-slide page weight:** ≤ 800 KB (after image optimization)
- **Initial load (first slide rendered):** ≤ 2.0s on broadband, ≤ 5.0s on 4G
- **Time to first interaction:** ≤ 1.0s
- **CDN-delivered libraries** (Reveal.js, canvas-confetti, CountUp.js, Google Fonts) for cache-warm loads
- **No build step required** — static HTML/CSS/JS deploys directly from `deck-revealjs/`
- **Fonts:** `font-display: swap`. WOFF2 only.

---

## 12. Accessibility (per the SOP)

- All animations gated by `prefers-reduced-motion`
- Every icon-only button has an `aria-label` (the deck has very few of these)
- Hover effects only inside `@media (hover: hover) and (pointer: fine)`
- Color contrast WCAG 2.1 AA: 4.5:1 body, 3:1 large text (the locked palette tested clean)
- Focus rings use gold `#ca8a04` 2px outline
- Reveal.js `printPdf` mode disables animations for the PDF export — checked

---

## 13. The 13 non-negotiables (deck application)

| # | Non-negotiable | Deck application |
|---|----------------|-------------------|
| 1 | Read the north star first | This file. Read on every UI invocation in this repo. |
| 2 | Pick the primitive first | Each slide's layout (`L1`…`L11`) IS the primitive. See §5. |
| 3 | Mobile first | All CSS authored in mobile-first order: base styles for `<480px`, then `@media (min-width: …)` for tablet/desktop. |
| 4 | Touch targets ≥ 44×44 | Links footer + QR — see §10. |
| 5 | Use `100dvh`, never `100vh` | See §8. |
| 6 | `pb-safe` on bottom-anchored | Confidentiality footer band. |
| 7 | Inputs ≥ 16px | No inputs in this deck (presentation only). N/A. |
| 8 | Scroll lock on open | Reveal.js handles this for overview / search. |
| 9 | Edge gutters | See §7. |
| 10 | No fixed widths on cards | App-grid uses `repeat(auto-fit, minmax(min(280px, 100%), 1fr))`. |
| 11 | Creativity bounded by brand | Brand is locked. All "expression" comes from layout asymmetry, motion choreography, type-scale rhythm. |
| 12 | Animations gated by reduced-motion | See §9. |
| 13 | Hover only inside `@media (hover: hover)` | See §10 + §9. |

---

## 14. Pre-write checklist (run before any slide CSS edit)

- [ ] Layout is one of the 11 named templates from `09-design-system.md` §5
- [ ] Animation is one of the named primitives from `09-design-system.md` §2
- [ ] Section transition (only on section boundaries) is one of the 10 named in `09-design-system.md` §3
- [ ] Mobile (320×568) breakpoint considered first
- [ ] No new colors / fonts / shadows introduced
- [ ] Edge gutter formula respected
- [ ] Fluid type uses `clamp()` from §6
- [ ] Confidentiality footer present
- [ ] Links footer with `min-height: 44px` per link
- [ ] Reduced-motion fallback in place

---

## 15. Validation workflow (run AFTER each major slide / section)

```
- [ ] Inspect at 320, 375, 390, 412, 768, 1024, 1440, 1920
- [ ] Rotate 320 → landscape (568 wide); confirm safe-area on iPhone notch
- [ ] Reduced-motion enabled → finale completes without shockwave/confetti
- [ ] Lighthouse mobile a11y > 95 (run after deploy)
- [ ] PDF export (?print-pdf) renders without visual breakage
- [ ] No 100vh anywhere (grep)
- [ ] No fixed pixel widths > 320px on a card
- [ ] All hyperlinks ≥ 44px tap target
- [ ] Confidentiality footer visible and not behind iOS home indicator
- [ ] NDA pause hard-blocks via JS (not just CSS)
```

---

## 16. Last researched

- **Brand state detected:** 2026-05-04 (this file's creation date)
- **SOP last reviewed by skill author:** 2026-04-25 (per SKILL.md)
- **Re-research trigger:** if any of `brand/colors.md`, `09-design-system.md`, `07-brand-architecture.md` is edited, or 90 days from above date

---

## 17. Anti-patterns specific to this deck

| Don't | Do |
|-------|-----|
| Use Reveal.js's default `100vh` for slide containers | Override with `100dvh` (and `100svh` fallback) |
| Use the default Reveal.js theme | Custom `theme.css` mounting only the locked tokens |
| Rely on hover-only popovers for any "more info" affordance | Inline expand-in-place; no popovers in this deck |
| Show the same finale on phone as on desktop | Fall back to single firework + reduced confetti |
| Let the NDA QR code shrink below 220px on phone | Cap minimum size; user must be able to scan |
| Use a tab-bar / hamburger nav | Reveal.js handles navigation; no custom nav menu needed |
| Animate `width` / `height` / `top` / `left` | Only `transform` and `opacity` |
| Skip safe-area on the confidentiality footer | Always reserve `env(safe-area-inset-bottom)` |
| Bake in a fixed dark/light mode toggle | Out of scope — the deck has authored backgrounds per slide |
