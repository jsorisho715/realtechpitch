# Real Tech LLC — Brand Specification

Source of truth: extracted from `[Realtech2/Real-tech-llc-portfolio/app/globals.css](../../Realtech2/Real-tech-llc-portfolio/app/globals.css)` and confirmed across `[WeddingTemplate/PRD.md](../../WeddingTemplate/PRD.md)`. Use these tokens exactly. No inventing new shades.

---

## Color Palette

### Primary tokens

| Role | Name | Hex | Usage |
|------|------|-----|-------|
| **Primary** | Deep Navy | `#1e3a8a` | Headers, primary CTAs, sidebar bg, brand mark |
| **Accent / Premium** | Gold | `#ca8a04` | Premium CTAs, consulting highlights, hero accents |
| **Accent / Vibrant** | Turquoise | `#32bdcd` | Success states, dark-mode primary, GTM section |
| **Energy / CTA** | Salmon | `#ed7e66` | Alerts, app-buffet "hot" badges, 3rd gradient stop |
| **Energy / Strong** | Coral | `#f06666` | Urgency, "stop" treatment on NDA pause slide |
| **Neutral / Warm** | Warm Grey | `#dbd1cd` | Section backgrounds, intermission slides |
| **Anchor / Light** | White | `#ffffff` | Card surfaces, body text on dark |
| **Anchor / Dark** | Black | `#000000` | Finale background only |

### CSS custom properties (copy into Reveal.js theme)

```css
:root {
  --rt-deep-navy: #1e3a8a;
  --rt-gold: #ca8a04;
  --rt-warm-grey: #dbd1cd;
  --rt-turquoise: #32bdcd;
  --rt-salmon: #ed7e66;
  --rt-coral: #f06666;
  --rt-black: #000000;
  --rt-white: #ffffff;

  /* Semantic tokens */
  --color-bg: var(--rt-white);
  --color-bg-alt: var(--rt-warm-grey);
  --color-fg: #111827;
  --color-fg-muted: #6b7280;
  --color-primary: var(--rt-deep-navy);
  --color-accent: var(--rt-gold);
  --color-success: var(--rt-turquoise);
  --color-alert: var(--rt-salmon);
  --color-danger: var(--rt-coral);
  --color-border: rgba(17, 24, 39, 0.08);
}

.dark {
  --color-bg: #0f172a;
  --color-bg-alt: #1e293b;
  --color-fg: #f1f5f9;
  --color-fg-muted: #94a3b8;
  --color-primary: var(--rt-turquoise);
  --color-accent: #eab308;
  --color-border: rgba(241, 245, 249, 0.08);
}
```

---

## Signature Gradients

These are the deck's identity. Use them on section dividers, the cover, and key transition slides.

### Primary gradient (the Real Tech signature)

```css
background: linear-gradient(
  135deg,
  var(--rt-deep-navy) 0%,
  var(--rt-turquoise) 50%,
  var(--rt-salmon) 100%
);
```

Used on:
- Cover slide (slide 1)
- All section divider slides (2 → 3, 3 → 4, etc.)
- "MILLIONAIRES" text clip on the finale (slide 45)

### Premium gradient (consulting / executive surfaces)

```css
background: linear-gradient(
  135deg,
  var(--rt-deep-navy) 0%,
  var(--rt-gold) 100%
);
```

Used on:
- "The Firm" section (slides 5-8)
- "The Ask" section (slides 38-40)

### Energy gradient (CTA / decision moments)

```css
background: linear-gradient(
  135deg,
  var(--rt-salmon) 0%,
  var(--rt-coral) 100%
);
```

Used on:
- "Vote today" slide (slide 40)
- Urgency callouts on app slides

---

## Typography

### Font Families

| Role | Family | Source | Usage |
|------|--------|--------|-------|
| **Display** | Fraunces | [Google Fonts](https://fonts.google.com/specimen/Fraunces) | Cover, section dividers, finale, big-statement slides |
| **Sans (UI)** | Inter | [Google Fonts](https://fonts.google.com/specimen/Inter) | All body, headers, data, navigation |
| **Mono (data)** | JetBrains Mono | [Google Fonts](https://fonts.google.com/specimen/JetBrains+Mono) | KPIs, prices, code, scorecard numbers |

### Type Scale

```css
--font-display-xl: 8.0rem;   /* 128px - finale "MILLIONAIRES" */
--font-display-lg: 6.0rem;   /* 96px - cover headline */
--font-display-md: 4.5rem;   /* 72px - section dividers */
--font-display-sm: 3.0rem;   /* 48px - slide headlines */
--font-h1: 2.0rem;           /* 32px */
--font-h2: 1.5rem;           /* 24px */
--font-body: 1.125rem;       /* 18px - default body */
--font-caption: 0.875rem;    /* 14px - footer, captions, links bar */
--font-micro: 0.75rem;       /* 12px - confidentiality footer, source citations */
```

### Tracking & Weight

| Element | Family | Weight | Tracking |
|---------|--------|--------|----------|
| Display headlines | Fraunces | 600 | -0.02em |
| Slide headlines | Fraunces | 500 | -0.01em |
| Body | Inter | 400 | 0 |
| Strong body | Inter | 600 | 0 |
| ALL-CAPS labels | Inter | 500 | +0.08em |
| Numbers / KPIs | JetBrains Mono | 500 | 0 |

### Line Height

- Display: 1.0
- Headlines: 1.15
- Body: 1.55
- Captions: 1.4

---

## Iconography

- **Library:** [Lucide](https://lucide.dev) (used across all your shipped products)
- **Stroke width:** 1.5px (slightly thinner than default for premium feel)
- **Default size:** 24px in body, 32px in card headers, 64px in hero
- **Color:** `currentColor` so icons inherit semantic color from parent

---

## Visual Treatments

### "SmartRent badge" (used on team slides)

```css
.smartrent-badge {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 4px 10px;
  border-radius: 9999px;
  background: linear-gradient(135deg, #1e3a8a 0%, #32bdcd 100%);
  color: #ffffff;
  font-family: 'Inter', sans-serif;
  font-size: 0.75rem;
  font-weight: 600;
  letter-spacing: 0.04em;
  text-transform: uppercase;
}
```

### Confidentiality footer (every slide)

```css
.deck-footer {
  position: fixed;
  bottom: 12px;
  left: 0;
  right: 0;
  text-align: center;
  font-family: 'Inter', sans-serif;
  font-size: 10px;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: var(--color-fg-muted);
  opacity: 0.6;
}
```

Text: `Real Tech LLC · Confidential · For internal cofounder discussion only`

### Card surface

```css
.deck-card {
  background: var(--color-bg);
  border: 1px solid var(--color-border);
  border-radius: 16px;
  padding: 24px;
  box-shadow: 0 1px 3px rgba(17, 24, 39, 0.04);
  transition: transform 220ms cubic-bezier(0.4, 0, 0.2, 1),
              box-shadow 220ms cubic-bezier(0.4, 0, 0.2, 1);
}
.deck-card:hover {
  transform: translateY(-2px) rotateX(2deg) rotateY(-2deg);
  box-shadow: 0 12px 32px rgba(30, 58, 138, 0.12);
}
```

---

## DO and DO NOT

### DO

- Use the navy → turquoise → salmon gradient for major identity moments
- Pair Fraunces with Inter (never two display faces)
- Keep most slides on white or warm-grey background — let the gradients punctuate
- Use Gold sparingly — it signals "premium" and loses meaning if everywhere
- Render KPIs in JetBrains Mono so they read as deliberate facts, not afterthoughts

### DO NOT

- Don't introduce any new colors. If you need another shade, derive it from the palette via opacity
- Don't use the coral `#f06666` outside urgency / NDA pause / stop-signal contexts
- Don't put the signature gradient on body text (it's for backgrounds and big text-clip moments only)
- Don't use shadows on the navy or gold gradient surfaces — let the gradient carry visual weight
- Don't put more than one gradient on a single slide

---

*Last updated: from globals.css extraction during deck build*
