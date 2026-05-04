# RealTech Pitch Deck

> Cinematic, executive-grade pitch deck for **Real Tech Consulting** — positioning the consulting firm, presenting the 10-app studio portfolio (plus the Life Events Suite bundle) as a buffet ranked by adoption likelihood, telling the *"SmartRent leadership spin-out"* team story, and driving a cofounder vote on the top two products to attack.
>
> *Confidential — for internal cofounder discussion only.*

---

## Why a folder of Markdown (and not a deck yet)?

Because cofounders need to **mark up the source content** before it hardens into slides. Markdown is reviewable, diffable, and lets us comment without fighting layout. The deck is the artifact; this folder is where the artifact is *agreed*.

This repo ships in three phases:

| Phase | Output | Owner | Status |
|-------|--------|-------|--------|
| **Phase 1** — Outline + research + design system + NDA | This Markdown folder + signable NDA PDF | Jonathan | **In progress** |
| **Phase 2A** — Reveal.js HTML deck (primary, deployable to Vercel) | [`deck-revealjs/`](deck-revealjs/) | TBD post Phase 1 sign-off | Not started |
| **Phase 2B** — `.pptx` fallback (for Google Slides editing) | [`deck-pptx/`](deck-pptx/) | TBD | Not started |

Phase 2A and 2B both read content from Phase 1 — specifically [`00-OUTLINE.md`](00-OUTLINE.md). **Edit Phase 1 first.**

---

## Folder map

```
RealTech-Pitch-Deck/
├── README.md                      ← you are here
├── 00-OUTLINE.md                  ← THE deck content (slide-by-slide)
├── 01-app-research.md             ← per-app fact sheets (10 apps + bundle)
├── 02-competitive-landscape.md    ← top-3 competitors per app + quadrant maps
├── 03-decision-framework.md       ← scoring rubric + scorecard (weights total 100)
├── 04-team-bios.md                ← 6 bios in deck voice
├── 05-founder-market-fit.md       ← matrix mapping each founder to apps
├── 06-bundle-strategy.md          ← Life Events Suite economics + channels
├── 07-brand-architecture.md       ← Real Tech parent vs. product brand rules
├── 08-links-inventory.md          ← every URL the deck references (per slide)
├── 09-design-system.md            ← motion · transitions · layouts · finale
│
├── brand/
│   └── colors.md                  ← exact palette + gradients + typography
│
├── assets/                        ← screenshots + brand SVGs + team photos
│   └── .gitkeep
│
├── screenshots/
│   ├── capture.ps1                ← Playwright auto-capture for live URLs
│   └── README.md                  ← manual capture + wireframe guide
│
├── legal/
│   ├── README.md                  ← legal disclaimers + signing workflow
│   ├── NDA-Real-Tech-Mutual.md    ← Mutual NDA source (the "truth" version)
│   ├── template.html              ← branded HTML wrapper for PDF generation
│   ├── build-nda.py               ← WeasyPrint build script
│   └── output/
│       └── NDA-Real-Tech-Mutual.pdf  ← generated signable PDF
│
├── deck-revealjs/                 ← Phase 2A (empty until Phase 1 signed off)
└── deck-pptx/                     ← Phase 2B (empty until Phase 1 signed off)
```

---

## Read order (~30-40 min one-sitting review)

For cofounders reviewing for the first time, the recommended order is:

1. **[`00-OUTLINE.md`](00-OUTLINE.md)** — the slide-by-slide story (skim first; this is what the deck will *be*)
2. **[`03-decision-framework.md`](03-decision-framework.md)** — the rubric. Fight the weights here, not the verdict
3. **[`05-founder-market-fit.md`](05-founder-market-fit.md)** — the matrix; this is the deck's wow moment
4. **[`04-team-bios.md`](04-team-bios.md)** — fix any factual errors about your own bio
5. **[`01-app-research.md`](01-app-research.md)** — deep dive on the apps you have opinions on
6. **[`06-bundle-strategy.md`](06-bundle-strategy.md)** — the Life Events Suite case
7. **[`02-competitive-landscape.md`](02-competitive-landscape.md)** — outside-in proof
8. **[`07-brand-architecture.md`](07-brand-architecture.md)** — Real Tech vs. product-brand rules
9. **[`09-design-system.md`](09-design-system.md)** — design tokens (mostly for the engineer building Phase 2A)
10. **[`08-links-inventory.md`](08-links-inventory.md)** — confirm/fill missing URLs (search for `[TODO]`)
11. **[`legal/README.md`](legal/README.md)** + **[`legal/NDA-Real-Tech-Mutual.md`](legal/NDA-Real-Tech-Mutual.md)** — review the NDA before any further sharing

---

## How to mark it up

Inline review tags (cofounders use these in PRs or local edits):

- `> [REVIEW: <your-name>] <comment>` — block-level question or concern
- `> [DECIDE: <topic>] <options>` — flag a decision needed in the meeting
- `~~strikethrough~~` — proposed deletion (keep with strikethrough until cofounders agree)
- `**[NEW] ...**` — proposed addition

Phase 2 build will not pick up any slide that still has unresolved `[REVIEW:]` or `[DECIDE:]` tags.

---

## What "complete" looks like for Phase 1

Acceptance criteria from the plan:

- [x] All 11 supporting docs created at the paths above
- [x] [`00-OUTLINE.md`](00-OUTLINE.md) is reviewable in one sitting (~30-40 min)
- [x] Every slide in the outline has **layout · entry animation · section transition · visual · links footer**
- [x] Each of the 10 apps + Life Events Suite has a fact sheet in [`01-app-research.md`](01-app-research.md)
- [x] Decision rubric in [`03-decision-framework.md`](03-decision-framework.md) is mathematically sound (weights sum to 100, scoring 1-10) and applied to all 10 + bundle
- [x] Founder-Market Fit matrix maps every cofounder to ≥2 apps with rationale
- [x] Bundle Strategy doc shows Life Events Suite economics
- [x] Brand Architecture doc resolves "lead with Real Tech vs. lead with product brand"
- [x] Links inventory contains every URL referenced
- [x] Design system specifies typography · motion · transitions · layouts · 10s finale frame-by-frame
- [x] Capture script is runnable: `pwsh ./screenshots/capture.ps1`
- [x] Brand spec matches `globals.css` exactly
- [x] **NDA package is complete and signable** (Markdown source + HTML template + Python build script + signable PDF + README disclaimers)

When all 6 cofounders have reviewed and signed the NDA, Phase 2A engineering kicks off.

---

## Confidentiality posture

Because **4 of 6 founders/recruits are current SmartRent leadership**, the deck is treated as confidential to the cofounder group:

- Every slide carries the footer: *"Real Tech LLC · Confidential · For internal cofounder discussion only"*
- Slide 2 is a **hard-stop NDA pause** — the deck does not advance until everyone has signed
- All SmartRent personnel are framed as *"Founding Team / Founding Executive Pool we're building"* — never as "leaving SmartRent on date X"
- Real Tech is positioned as building the layer **SmartRent doesn't ship** (complementary, not competitive)
- The Mutual NDA includes an explicit **third-party IP protection clause** — no party will share any current employer's confidential information
- Cofounders decide on the day how broadly to circulate the deck after Phase 2A ships

---

## Phase 2A & 2B — when they kick off

Phase 1 sign-off = all 6 cofounders have:
1. Reviewed [`00-OUTLINE.md`](00-OUTLINE.md) and resolved any `[REVIEW:]` / `[DECIDE:]` tags
2. Signed the Mutual NDA at [`legal/output/NDA-Real-Tech-Mutual.pdf`](legal/output/NDA-Real-Tech-Mutual.pdf)
3. Filled in any `[TODO]` placeholders in [`08-links-inventory.md`](08-links-inventory.md) (LinkedIn slugs, customer URLs, etc.)
4. Approved the recommendation logic on slide 27 (Path A vs. Path B presentation)

When all four hold, Phase 2A starts. Targeted output: a Vercel-deployed Reveal.js deck with the full design system implemented + the 10-second cinematic finale.

Phase 2B (`.pptx` for Google Slides comments) ships after Phase 2A so cofounders can leave comments on the canonical layout.

---

## Quick-start for cofounders

1. Clone or pull this folder
2. Open this README first
3. Skim [`00-OUTLINE.md`](00-OUTLINE.md)
4. Open [`legal/README.md`](legal/README.md) and sign the NDA
5. Mark up the docs with `[REVIEW:]` / `[DECIDE:]` tags
6. Push or share back to the cofounder channel
