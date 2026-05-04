# Screenshots — Capture Guide

How to populate `assets/` with imagery the Reveal.js deck and `.pptx` will embed.

---

## Quick Start

From this folder:

```powershell
# Capture everything (live products + all competitors). ~5 minutes.
pwsh ./capture.ps1

# Just our live products (faster, ~1 min)
pwsh ./capture.ps1 -LiveOnly

# Just competitors
pwsh ./capture.ps1 -CompetitorsOnly

# Watch the browser as it runs (debug mode)
pwsh ./capture.ps1 -Headed
```

Output lands in `../assets/<target-name>/{hero.png, fullpage.png, mobile.png}`.

---

## Prerequisites

- **Node.js 22+** (you have it; nvm4w v22.20.0)
- **Playwright** — the script auto-installs if missing:
  ```powershell
  npm install -g @playwright/test
  npx playwright install chromium
  ```
- **PowerShell 7+ (`pwsh`)** — Windows PowerShell 5.1 also works but `pwsh` is preferred

---

## What Gets Captured

### Our live products (5 sites, with mobile views)
- realtechconsultant.com
- rovian.ai
- edgenote.ai
- dealpayment.com
- startakith.com

### Competitor sites (per app, no mobile)
~25 competitor sites across all 10 apps

### Credibility context
*(none captured by default; previously included a current-employer URL but that was removed during the branding scrub)*

Each target produces:
- `hero.png` — above-the-fold (1920×1080 @ 2x)
- `fullpage.png` — full scroll (variable height @ 2x)
- `mobile.png` — iPhone 14 viewport (live products only)

---

## Concept Apps (No Live Site)

For products without a live URL — **Channel Partner Portal**, **Rehabit**, **Cannabis HighTide**, **Baby Tracker** — the script can't capture screenshots. Use one of:

### Option A — Capture from local dev server

```powershell
# In the product's repo:
pnpm dev

# Then in this folder:
pwsh ./capture.ps1 -LiveOnly  # edit capture.ps1 to add http://localhost:3000 with kind="live"
```

### Option B — Generate wireframe SVGs

For Channel Partner Portal and Rehabit (concept-only, no code), the deck uses **wireframe placeholders** to communicate the product idea without faking a screenshot.

Drop these PNGs in `../assets/<app-name>/wireframe.png`:

| App | What to wireframe |
|-----|-------------------|
| Channel Partner Portal | Two-sided dashboard: operator side (work-order list with bid count) + vendor side (bid form with rating display) |
| Rehabit | Property card with AI-deal-score, ROI projection, and a map view |

Use Figma, Excalidraw, or hand-draw + scan. Keep them intentionally low-fidelity — wireframes signal "concept" honestly. **Don't fake polished UI you don't have.**

### Option C — Use marketing mockups

For HighTide and Baby Tracker (early code exists), capture the v0 frontends from your local dev servers and label them clearly as "early build."

---

## Image Optimization for Phase 2

Before deploying the Reveal.js deck, optimize images:

```powershell
# From repo root:
npx @squoosh/cli --webp '{"quality":85}' --avif '{"cqLevel":33}' assets/**/*.png
```

This drops payload from ~200KB → ~30KB per screenshot, hits the 2-second load budget.

---

## Directory Structure (after capture)

```
assets/
  real-tech-consultant/
    hero.png
    fullpage.png
    mobile.png
  rovian-ai/
    hero.png
    fullpage.png
    mobile.png
  edgenote-ai/
    hero.png
    fullpage.png
    mobile.png
  dealpayment/
    ...
  kith/
    ...
  competitor-apollo/
    hero.png
    fullpage.png
  competitor-clay/
    ...
    ... (all 25+ competitors)
  team/
    jonathan.jpg
    halim.jpg
    tim.jpg
    justin.jpg
    braeden.jpg
    wil.jpg
  channel-partner-portal/
    wireframe.png
  rehabit/
    wireframe.png
  high-tide/
    wireframe.png  (or local-dev capture)
  baby-tracker/
    wireframe.png  (or local-dev capture)
```

---

## Re-running

The script is idempotent — re-running overwrites previous captures. Useful when:
- A competitor redesigns their site
- Our products ship new features
- You want updated mobile views after a brand refresh

---

## Known Gotchas

1. **Cookie / privacy banners** — some sites block above-the-fold screenshots with GDPR banners. The script doesn't auto-dismiss them. Use `-Headed` to manually click through, or pre-set cookies via `context.addCookies()`.

2. **Cloudflare bot detection** — a few sites (notably Apollo, HubSpot) may block headless Chromium. Workaround: `-Headed` mode + manual page navigation, or use the saved screenshot from a real browsing session.

3. **Network-idle timeout** — sites with infinite-scroll feeds (TheKnot blog) may never reach `networkidle`. The script has a 30s timeout. If it fails, capture manually.

4. **Auth-required pages** — `realtechconsultant.com/admin/gtm` requires a logged-in session. Capture this manually after logging in, save as `assets/real-tech-consultant/admin-gtm.png`.

---

## Manual Captures You Need

After running the script, **manually capture** these (the script can't do them):

| File | What to capture |
|------|-----------------|
| `assets/real-tech-consultant/admin-gtm.png` | Real Tech GTM admin dashboard (logged in) |
| `assets/real-tech-wedding/admin-dashboard.png` | Wedding Planner admin dashboard (logged in) |
| `assets/real-tech-wedding/intake-wizard.png` | A page from the intake wizard showing the luxury aesthetic |
| `assets/real-tech-wedding/scott-fiona.png` | Scott & Fiona's deployed customer site (with their permission) |
| `assets/rovian-ai/dashboard.png` | Rovian dashboard (logged in) |
| `assets/kith/space-view.png` | A populated Kith space (use a test account, blur PII) |
| `assets/channel-partner-portal/wireframe.png` | Hand-drawn or Figma wireframe |
| `assets/rehabit/wireframe.png` | Hand-drawn or Figma wireframe |
| `assets/team/*.jpg` | Founder headshots (1080px square, professional) |

---

*Run the script before the Phase 2A Reveal.js build so all imagery is in place.*
