# 08 — Links Inventory

Master list of every URL the deck references. Phase 2 uses this to hyperlink every named element. **Confirm/update during your revision pass — placeholder values marked with `[TODO]`.**

---

## 1. Real Tech (parent)

- Site: https://realtechconsultant.com
- Admin: https://realtechconsultant.com/admin
- GTM tool path: https://realtechconsultant.com/admin/gtm
- Local code: `[Realtech2/Real-tech-llc-portfolio](../Realtech2/Real-tech-llc-portfolio)`

## 2. Founders & Recruits

| Person | LinkedIn | Notes |
|--------|----------|-------|
| Johnathan Sorisho | https://www.linkedin.com/in/johnathan-sorisho-a2110052/ | Confirmed |
| Halim Khaldi | https://www.linkedin.com/in/abdelhalim-khaldi | Confirmed |
| Tim Elias | `[TODO — needs LinkedIn URL]` | Confirm during revision |
| Justin Lesko | `[TODO — confirm slug]` | Profile gated; theorg.com confirms VP BD the multifamily proptech employer |
| Braeden Scheer | https://www.linkedin.com/in/braedenscheer | Confirmed |
| Wil Gomez | https://www.linkedin.com/in/wilmanngomez | Confirmed |

Photos: drop in `assets/team/<name>.jpg` (1080px square, professional)

## 3. Real Tech Apps (live products)

| Product | URL | Status |
|---------|-----|--------|
| Real Tech GTM | https://realtechconsultant.com/admin/gtm | Auth-required (live, internal) |
| Rovian.ai | https://www.rovian.ai | Live |
| Real Tech Wedding (customer) | `[TODO — confirm Scott&Fiona deployment URL]` | Live for paying customer |
| DealPayment.com | https://dealpayment.com | Marketing site live; product in build |
| edgenote.ai | https://www.edgenote.ai | Live + selling |
| Kith | https://startakith.com (also https://kith.com) | Live + monetized |
| Channel Partner Portal | *Concept — no URL* | Wireframes only |
| Cannabis HighTide | *No public URL* | Build in progress |
| Baby Tracker | *No public URL* | Local Vite app |
| Rehabit | *Concept — no URL* | No code yet |

## 4. Competitor URLs (per app)

### Real Tech GTM
- https://apollo.io
- https://clay.com
- https://hubspot.com/products/operations

### Rovian.ai
- https://goodcall.com
- https://poly.ai
- https://smith.ai

### Real Tech Wedding
- https://aisleplanner.com
- https://theknot.com
- https://zola.com
- (Honorable mention: https://www.honeybook.com)

### DealPayment.com
- https://escrow.com
- https://cars.com
- (Adjacent: https://carfax.com, https://autocheck.com)

### Channel Partner Portal
- https://servicechannel.com
- https://buildingengines.com
- https://buildinglink.com
- (Adjacent: https://appfolio.com, https://yardi.com, https://procore.com)

### Cannabis HighTide
- https://dutchie.com
- https://treez.io
- https://flowhub.com

### edgenote.ai
- https://otter.ai
- https://fireflies.ai
- https://granola.ai

### Kith
- https://tinybeans.com
- https://caringbridge.org

### Baby Tracker
- https://huckleberrycare.com
- https://babytrackers.com
- https://glowing.com

### Rehabit
- https://propstream.com
- https://mashvisor.com
- https://dealmachine.com

## 5. Source / Citation URLs (for TAM / market figures)

| Topic | Source |
|-------|--------|
| Multifamily proptech | https://www.nmhc.org |
| Used vehicle market | https://www.nada.org |
| Cannabis market sizing | https://newfrontierdata.com |
| Wedding industry | https://www.theknotworldwide.com/about |
| Event mgmt software | https://www.gartner.com (referenced; specific report URL during revision) |
| Real estate tech | https://www.nar.realtor |
| AI voice agent market | https://www.cbinsights.com |
| GTM/sales tooling | https://www.gartner.com (referenced) |

## 6. Team / Press / Industry References

- the multifamily proptech employer (parent of 4 founders' day-jobs, a publicly-traded multifamily proptech): #
- publicly-traded multifamily proptech at CES 2025: #
- current employer IR: #
- The Org (org chart for a multifamily proptech employer confirming roles): #

## 7. Tech Stack & Tooling References (for credibility slides)

- Vapi (Rovian's voice infrastructure): https://vapi.ai
- Anthropic Claude (AI partner across products): https://anthropic.com
- Supabase (auth + DB across products): https://supabase.com
- Vercel (deploys all products): https://vercel.com
- Stripe (billing): https://stripe.com
- Resend (email): https://resend.com
- n8n (GTM workflow engine): https://n8n.io
- Base L2 (DealPayment chain): https://base.org
- whisper.cpp (edgenote on-device): https://github.com/ggml-org/whisper.cpp
- llama.cpp (edgenote on-device): https://github.com/ggml-org/llama.cpp

## 8. Internal File References (linked from the deck for audit trail)

- Outline: `[00-OUTLINE.md](00-OUTLINE.md)`
- App research: `[01-app-research.md](01-app-research.md)`
- Competitive: `[02-competitive-landscape.md](02-competitive-landscape.md)`
- Decision framework: `[03-decision-framework.md](03-decision-framework.md)`
- Team bios: `[04-team-bios.md](04-team-bios.md)`
- Founder-market fit: `[05-founder-market-fit.md](05-founder-market-fit.md)`
- Bundle strategy: `[06-bundle-strategy.md](06-bundle-strategy.md)`
- Brand architecture: `[07-brand-architecture.md](07-brand-architecture.md)`
- Design system: `[09-design-system.md](09-design-system.md)`
- NDA: `[legal/NDA-Real-Tech-Mutual.md](legal/NDA-Real-Tech-Mutual.md)`

## 9. Local Code References (for "what we already shipped" slide)

- Real Tech consulting site: `[Realtech2/Real-tech-llc-portfolio](../Realtech2/Real-tech-llc-portfolio)`
- Wedding Planner template: `[WeddingTemplate](../WeddingTemplate)` (PRD: `[WeddingTemplate/PRD.md](../WeddingTemplate/PRD.md)`)
- Wedding customer deployment: `[Scott&Fiona](../Scott&Fiona)`
- Rovian backend: `[Rovian/stack/backend](../Rovian/stack/backend)` (Prisma: `[Rovian/stack/backend/prisma/schema.prisma](../Rovian/stack/backend/prisma/schema.prisma)`)
- Rovian web: `[Rovian/stack/web](../Rovian/stack/web)`
- Rovian IaC: `[Rovian/stack/IaC](../Rovian/stack/IaC)`
- Cannabis HighTide: `[Cannabis - High Tide/v0-cannabis-marketplace-frontend](../Cannabis%20-%20High%20Tide/v0-cannabis-marketplace-frontend)`
- Baby Tracker: `[Baby tracker/babytracker](../Baby%20tracker/babytracker)`
- Kith launch plan: `[.cursor/plans/kith_launch_readiness_plan_952acd89.plan.md](../.cursor/plans/kith_launch_readiness_plan_952acd89.plan.md)`
- Kith admin plan: `[.cursor/plans/kith_admin_panel_6d77db3e.plan.md](../.cursor/plans/kith_admin_panel_6d77db3e.plan.md)`
- Agora (predecessor of Kith): `[.cursor/plans/agora_prd_gaps_implementation_9c72e61f.plan.md](../.cursor/plans/agora_prd_gaps_implementation_9c72e61f.plan.md)`
- DealPayment summary: `[Downloads/DealPayment_Developer_Summary.pdf](../Downloads/DealPayment_Developer_Summary.pdf)`
- WebApp Template (the studio's standard kit): `[WebApp Template](../WebApp%20Template)`

## 10. Legal & Confidentiality

- Mutual NDA (signable PDF): `[legal/output/NDA-Real-Tech-Mutual.pdf](legal/output/NDA-Real-Tech-Mutual.pdf)` (generated from `[legal/NDA-Real-Tech-Mutual.md](legal/NDA-Real-Tech-Mutual.md)`)
- Legal disclaimers: `[legal/README.md](legal/README.md)`
- Real Tech privacy / terms (existing): https://realtechconsultant.com/privacy , https://realtechconsultant.com/terms

## 11. Per-Slide Hyperlink Quick-Reference

This table makes Phase 2 hyperlink-stamping mechanical.

| Slide # | Slide name | Required hyperlinks |
|---------|------------|---------------------|
| 1 | Cover | https://realtechconsultant.com |
| 2 | NDA Pause | `legal/output/NDA-Real-Tech-Mutual.pdf` |
| 3 | Today's Purpose | — |
| 4 | The Vision | — |
| 5 | Real Tech Consulting | https://realtechconsultant.com |
| 6 | What We've Shipped | All 10 product URLs above |
| 7 | Founding Team + Pool | All 6 LinkedIn URLs |
| 8 | The Multifamily-Lane Activation | # + 4 LinkedIns |
| 9 | Portfolio Scorecard | — |
| 10 | Brand Architecture | All product URLs |
| 11 | Real Tech GTM | Apollo, Clay, HubSpot URLs + GTM admin URL |
| 12 | Rovian.ai | Goodcall, PolyAI, Smith URLs + rovian.ai |
| 13 | Real Tech Wedding | Aisle Planner, The Knot, Zola URLs + Scott&Fiona URL |
| 14 | DealPayment.com | Escrow.com, Cars.com URLs + dealpayment.com + DPT info |
| 15 | Channel Partner Portal | ServiceChannel, Building Engines, BuildingLink URLs |
| 16 | Cannabis HighTide | Dutchie, Treez, Flowhub URLs |
| 17 | edgenote.ai | Otter, Fireflies, Granola URLs + edgenote.ai |
| 18 | Kith | TinyBeans, CaringBridge URLs + startakith.com |
| 19 | Baby Tracker | Huckleberry, BabyTracker, Glow URLs |
| 20 | Rehabit | PropStream, Mashvisor, DealMachine URLs |
| 21 | Life Events Suite | Wedding + Kith + Baby URLs |
| 22 | Founder-Market Fit Matrix | All 6 LinkedIn URLs |
| 23 | Competition Map | Top competitor URLs for top-3 candidates |
| 24 | Why Now | Each market-research source URL |
| 25 | Positioning Statements | Top 2 candidate URLs |
| 26 | Weighted Scorecard | — |
| 27 | Top 2 Recommended | Top 2 candidate URLs |
| 28 | Backburner | All "no" app URLs |
| 29 | Resource Allocation | — |
| 30 | Pitch Playbook | https://realtechconsultant.com/services |
| 31 | Demo Strategy | All product URLs |
| 32 | Partnership Channels | Justin/Braeden/Wil/Tim LinkedIns |
| 33 | Content Engine | https://realtechconsultant.com/admin/gtm + samples |
| 34 | Pricing & Packaging | — |
| 35 | 90-day plan | — |
| 36 | 6-month plan | — |
| 37 | 12-month plan | — |
| 38 | Roles | All 6 LinkedIn URLs |
| 39 | Capital Plan | — |
| 40 | The Vote | — |
| 41 | P&L Assumptions | — |
| 42 | Team Full Bios | All 6 LinkedIn URLs |
| 43 | Brand Gallery | All product URLs |
| 44 | Risk Register | — |
| 45 | Finale | https://realtechconsultant.com (the "Let's build." link) |

---

## Items to Resolve During Your Revision Pass

1. Tim Elias's LinkedIn URL
2. Justin Lesko's LinkedIn slug confirmation
3. Scott & Fiona deployment URL (to feature as a customer reference)
4. Final brand name for Channel Partner Portal
5. Real Tech parent-brand tagline (proposed: *"Built ten times before we sold it once."*)
6. Photo URLs for each cofounder
