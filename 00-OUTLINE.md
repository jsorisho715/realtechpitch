# 00 — Master Outline (Slide-by-Slide)

This is the **single source of truth** for the deck's content. Phase 2A (Reveal.js) and Phase 2B (.pptx) both read from here. Every slide declares:

- **Layout** — one of the 11 named templates in [`09-design-system.md`](09-design-system.md) §5
- **Entry animation** — one of the named animations in [`09-design-system.md`](09-design-system.md) §2
- **Section transition** — only on section boundaries; named in [`09-design-system.md`](09-design-system.md) §3
- **Visual** — screenshot, wireframe, photo, or branded chart (mandatory per [`09-design-system.md`](09-design-system.md) §6)
- **Links footer** — hyperlinks per [`08-links-inventory.md`](08-links-inventory.md) §11
- **Confidentiality footer** — `Real Tech LLC · Confidential · For internal cofounder discussion only` (every slide)

Ranking convention: per-app slides (#11–20) are ordered top→bottom by **adoption-likelihood score** from [`03-decision-framework.md`](03-decision-framework.md).

---

## At-a-glance sections (post-audit)

| # | Section | Mood |
|---|---------|------|
| 0 | Cover (origin story) & NDA pause | Open / Stop |
| 1 | Why now + decisions today | Calm intent |
| 2 | Real Tech (firm + shipped + team + edge) | Credentials |
| 3 | Portfolio scoreboard teaser + brand architecture | Wide view |
| 4 | Per-App Slides (top → bottom) | Buffet detail |
| 4.5 | Strategy (bundle spotlight + FMF matrix) | Strategic insight |
| 5 | Competitive map + risks + Why Now (3 pillars) + Positioning | Outside-in proof |
| 6 | Recommendation (editable scorecard + top 2 + backburner) | Decision |
| 7 | Real Tech Consulting GTM | Cash today |
| 8 | 30-60-90 collective + Next Steps | Sequencing |
| 9 | The Ask (roles · capital · vote) | Vote |
| 10 | Appendix (P&L + Glossary) | Backup |
| Finale | One Step Closer | Cinematic close |

Per-audit changes:
- **Removed:** Section 1 divider, Section 3 (Portfolio) divider, Resource Allocation, the standalone 6-month and 12-month plan slides, Team Full Bios appendix, Brand Gallery appendix.
- **Renamed:** Section 2 divider headline `The Firm.` → `Real Tech.`; Section 4.5 divider headline `Bundle Play.` → `Strategy.`
- **Restructured:** Cover (origin-story treatment), Slide 8 (progress-bar buckets), Slide 9 (added Jordyn Stubblefield, dropped subtext), Slide 10 (`Together, we bring.`), Slide 12 (top-3 teaser), Slide 19 (per-app Life Events Suite demoted to anchor line), Slide 27 (FMF matrix bucketed with MF group), Slide 30 (real quadrant SVG), Slide 31 (3-pillar Why now), Slide 34 (editable scorecard with localStorage persistence + recommendation callout), Slide 41 (Johnathan added as 5th channel chip), Slide 45 (collective 30-60-90 + Next Steps).
- **Moved:** Risks slide moved out of the appendix to immediately follow Slide 30 (Competition Map), with a card-based layout + colored likelihood pills.

Approximate slide count: **~50** (down from 58 before the audit).

---

## SECTION 0 — Cover & NDA Pause

---

### Slide 1 — Cover (origin-story treatment)

- **Layout:** `L1-Cover` with the `layout-cover-origin` modifier
- **Entry animation:** `fadeUpStagger` on wordmark, quote, and subhead
- **Section transition:** *(none — this is the first slide)*
- **Visual:** Full-bleed primary gradient (navy → turquoise → salmon). Oversized `Real Tech` wordmark with `Tech` set in the gold accent gradient. `LLC` superscript in Inter caps gold.

**Wordmark:** *Real Tech.* (with `Tech` in gold)

**Origin quote (Fraunces italic, gold quote-mark, navy left rule):**
> *"Real Estate Technology. Real Technology. Real Consultants. Tech Consultants. All of it just made sense — because of the world we come from."*  
> — Johnathan Sorisho, Founder

**Sub-headline (Inter caps, +0.14em):** *Consultancy + Studio. Eleven shipped. Today we pick the two.*

**Meta:** *Cofounder offsite · Date TBD*

**Links footer:** [realtechconsultant.com](https://realtechconsultant.com)

`<title>` tag: *Real Tech — Where the name came from.*  
`<meta description>`: *Real Estate Technology. Real Technology. Real Consultants. Tech Consultants. Real Tech LLC — cofounder pitch deck. Confidential.*

---

### Slide 2 — NDA Pause (HARD STOP)

- **Layout:** `L11-NdaPause`
- **Entry animation:** `noTransition` (intentional stop — the lack of motion is the design)
- **Section transition from prior slide:** `hardCut` (0ms — brand says "stop")
- **Visual:** Full-bleed warm-grey `#dbd1cd`. Centered headline + QR code linking to `legal/output/NDA-Real-Tech-Mutual.pdf`. **No autoplay advance — must be manually clicked through.** *(Per audit: corner STOP badge removed; the warm-grey background + headline + "I have signed" CTA carry the pause cue.)*

**Headline (Fraunces, display-md, navy):** *Before we proceed.*

**Three info blocks (3-column layout):**

| Why now | What it covers | How |
|---------|----------------|-----|
| 5 of 6 of us are current multifamily proptech leadership. This deck names partners, financials, IP, and recruiting plans. We protect each other before sharing any of it. | Mutual NDA. 3-year term. Mutual non-solicit (12 months). Third-party IP protection (no current-employer info shared). Arizona governing law. | Scan the QR. Sign the PDF (Adobe / DocuSign / HelloSign). When all 6 signatures collected, we resume. |

**CTA caption (Inter caps, +0.08em, navy):** *Pause here. Resume after all 6 signatures collected.*

**Disclaimer footer (10px, muted):** *Template — review by qualified counsel before execution. Not legal advice.*

**Links footer:** [`legal/output/NDA-Real-Tech-Mutual.pdf`](legal/output/NDA-Real-Tech-Mutual.pdf) · [`legal/README.md`](legal/README.md)

---

## SECTION 1 — Open & Why

*Section transition from slide 2: `releaseFade` (fade through black, then content fades in — `--dur-large`)*

---

### Slide 3 — Why now / Where we're going (replaces the Section 1 divider)

- **Layout:** `L3-Statement` with `gradient-bg`
- **Entry animation:** `fadeUpStagger`
- **Visual:** Premium navy → gold gradient. Three-line `lead-list` with gold left rules.

**Headline:** *Why now. Where we're going.*

**Lead list:**
1. **Why now —** AI cost collapsed, the multifamily proptech window is open, and the eleven we've shipped paid the tuition.
2. **End goal —** a profitable studio with two real businesses inside it, funded by the consulting firm.
3. **What we leave with —** two picks, an aligned team, and a calendar of the next 30-60-90 milestones.

**Links footer:** *(none)*

---

### Slide 4 — Today, we decide three things

- **Layout:** `L3-Statement`
- **Entry animation:** `fadeUpStagger`
- **Visual:** Single Fraunces statement.

**Headline:** *Today, we decide three things.*

**Three sub-points:**
1. **Top 2** — the two products we attack with focus
2. **Resources** — engineering, capital, and BD behind those two
3. **The calendar** — walk out with 30-60-90 day milestones we all agree to *(no named owners — owners assigned in a follow-up working session)*

**Links footer:** *(none)*

---

### Slide 5 — The Vision

- **Layout:** `L4-TwoColumn` (visual left, content right)
- **Entry animation:** `fadeUpStagger` + `imageBlurReveal` on the visual
- **Visual:** Left column — split-frame composite. Top half: a screenshot of [realtechconsultant.com](https://realtechconsultant.com) hero (the consulting business — *cash today*). Bottom half: a 4×3 mosaic of product brand marks (Rovian, edgenote, DealPayment, Kith, Wedding, HighTide, Baby, Rehabit, Channel Partner Portal placeholder, GTM admin) — *cash tomorrow*.

**Headline:** *Consulting firm + product studio.*

**Sub-headline:** *One revenue today, one revenue tomorrow.*

**Body bullets:**
- **Real Tech Consulting** — billing clients now. Predictable. Funds the studio.
- **Real Tech Studio** — 10 apps shipped. Two we double down on become real businesses.
- **The thesis:** the studio gets to skip the "first ten apps" learning curve because we already shipped them.

**Links footer:** [realtechconsultant.com](https://realtechconsultant.com)

---

## SECTION 2 — Real Tech

*Section transition from Section 1: `gradientWashLR` (navy → turquoise → salmon sweep L→R, `--dur-cinematic`)*

---

### Slide 6 — Section divider: Real Tech.

- **Layout:** `L2-SectionDivider` with `divider-brand-mark` modifier
- **Headline:** *Real Tech.* (with `Tech` in the gold gradient, matching the cover)
- **Blurb:** *(none — divider is intentionally minimal)*

---

### Slide 7 — The firm we are today. The studio we become.

- **Layout:** `L3-Statement` with three centered cards (no website screenshot)
- **Entry animation:** `fadeUpStagger` + `--stagger-tight` on the cards
- **Visual:** Three-column card row. Each card: Lucide icon header in turquoise, single-sentence body in Fraunces.

**Headline:** *The firm we are today. The studio we become.*

**Three cards:**

| What we ship | Who buys | How we charge |
|------------|--------------|---------------|
| Web + app builds. AI integrations. Workflow engines. Fractional CTO / CPO. Technical due diligence. | Multifamily + real estate operators. Service businesses. $1–10M ARR founders. AI-curious legacy companies. | Free Discovery. $5k Diagnose Sprint. $25–80k Build. $5–15k/mo Retainer. Equity-for-services, selectively. |

**Links footer:** [realtechconsultant.com](https://realtechconsultant.com) · [/services](https://realtechconsultant.com/services)

---

### Slide 8 — What We've Shipped (progress bars + buckets)

- **Layout:** `L-Shipped` (`layout-shipped`) — two labeled buckets stacked vertically, each containing a `product-grid`
- **Entry animation:** `fadeUpStagger` on the section, `--stagger-tight` on the cards
- **Visual:** Each card: Lucide icon header, name, one-sentence tag, horizontal progress bar with turquoise → gold gradient fill, JetBrains Mono percentage. Kith carries a coral `renaming TBD` chip. The `Always-on Outbound` standalone card has been **removed** (its capability lives inside Real Tech GTM).

**Headline:** *Eleven artifacts. Already shipped.*

**Two buckets — In progress · Live / shipping:**

| Product                | Bucket            | %   |
| ---------------------- | ----------------- | --- |
| Real Tech GTM          | In progress       | 70  |
| Rovian.ai              | In progress       | 80  |
| Wedding Planner        | In progress       | 80  |
| DealPayment            | In progress       | 50  |
| Channel Partner Portal | In progress       | 5   |
| Cannabis HighTide      | In progress       | 40  |
| Baby Tracker           | In progress       | 40  |
| Rehabit                | In progress       | 5   |
| Kith                   | Live              | 85 (renaming TBD) |
| edgenote.ai            | Live              | 100 |
| Real Tech (parent)     | Live (consulting) | —   |

**Links footer:** [realtechconsultant.com](https://realtechconsultant.com) · [rovian.ai](https://rovian.ai) · [edgenote.ai](https://edgenote.ai) · [dealpayment.com](https://dealpayment.com) · [startakith.com](https://startakith.com)

---

### Slide 9 — The team

- **Layout:** `L9-TeamGrid` (7 cards, 4×2 desktop · 2×4 mobile)
- **Entry animation:** `fadeUpStagger` per card with `--stagger-normal`; Multifamily badge on Jonathan / Halim / Justin / Braeden / Wil / Jordyn pulses gently in turquoise on enter
- **Visual:** 7 photo cards. Each card: photo placeholder, name, role, Multifamily badge (where applicable), LinkedIn icon link. *(Per audit: subtext caption removed; headline is just "The team.")*

**Headline:** *The team.*

**Cards (left to right, top to bottom):**
- Johnathan Sorisho — Founder · VP Solutions in multifamily proptech
- Halim Khaldi — Co-founder · Director of Engineering in multifamily proptech
- Tim Elias — Co-founder · Crypto / Legal / LATAM
- Justin Lesko — Founding Executive · VP BD in multifamily proptech
- Braeden Scheer — Founding Executive · VP Product in multifamily proptech
- Wil Gomez — Founding Executive · Director of Product, Smart Communities
- **Jordyn Stubblefield** — Founding Executive · Product Marketing · ex-Smartrent — silent partner

**Footer callout (Inter caps, +0.08em, gold):** *5 of 7 = current/former multifamily proptech leadership · 3 VPs + 2 Directors · 51+ combined years · 850K+ homes touched*

**Links footer:** Each LinkedIn URL inline:
- [Jonathan Sorisho](https://www.linkedin.com/in/johnathan-sorisho-a2110052/)
- [Halim Khaldi](https://www.linkedin.com/in/abdelhalim-khaldi)
- Tim Elias *(LinkedIn TBD)*
- Justin Lesko *(LinkedIn slug TBD)*
- [Braeden Scheer](https://www.linkedin.com/in/braedenscheer)
- [Wil Gomez](https://www.linkedin.com/in/wilmanngomez)
- Jordyn Stubblefield *(LinkedIn TBD)*

Source bios: [`04-team-bios.md`](04-team-bios.md)

---

### Slide 10 — Together, we bring.

- **Layout:** `L3-Statement` with `gradient-bg`
- **Entry animation:** `fadeUpStagger` on headline; `countUpReveal` on every stat
- **Visual:** Premium navy → gold gradient. Headline in white Fraunces. Below: five-stat row in JetBrains Mono. *(Per audit: opening quote removed — slide leads with stats and the framing line.)*

**Headline:** *Together, we bring.*

**Stat strip (5 columns, JetBrains Mono with CountUp animation):**

| 51+ | 850K+ | 15 of 20 | 11 | 1 |
|:---:|:---:|:---:|:---:|:---:|
| years multifamily proptech | multifamily homes touched | top operators within warm-intro reach | artifacts already shipped | patent-pending technology |

**Links footer:** [realtechconsultant.com](https://realtechconsultant.com)

Source: [`04-team-bios.md`](04-team-bios.md), [`05-founder-market-fit.md`](05-founder-market-fit.md)

---

## SECTION 3 — The Portfolio (Buffet)

*Per audit: the standalone "The Portfolio." divider was removed; the section opens directly with the scorecard teaser.*

*Section transition from Section 2: `dollyZoom` (camera dolly back; current slide miniaturizes into the buffet grid, `--dur-cinematic`)*

---

### Slide 12 — Portfolio Scorecard (teaser)

- **Layout:** `L3-Statement` with a centered `scoreboard-teaser` block
- **Entry animation:** Top-3 cards `fadeUpStagger` with `--stagger-tight`
- **Visual:** Three rank-cards stacked: rank pill, app name, one-sentence tagline, weighted score in JetBrains Mono. *(Per audit: full table moved to slide 34. This slide is the teaser only.)*

**Headline:** *The scoreboard. A first look.*

**Sub-caption:** *Nine weighted criteria, total of 100. We edit it live as a team after the buffet — jump to the editable view (slide 34).*

**Top-3 teaser:**
1. Real Tech GTM — Built. Dog-fooded. Workflow engine. **8.7**
2. Rovian.ai — Voice + Stripe shipped. Vapi infra ready. **8.0**
3. Wedding Planner AI — 27-table schema. Paying customer live. **7.9**

*+ 8 more apps — full editable table on the recommendation slide.*

**Links footer:** [`03-decision-framework.md`](03-decision-framework.md)

---

### Slide 10 — Brand Architecture

- **Layout:** `L4-TwoColumn` (visual right)
- **Entry animation:** `fadeUpStagger`; arrows from parent → product brands `strokeDraw` after a 200ms delay
- **Visual:** Right column — branded org-chart SVG. Real Tech (parent) at top in navy. Two branches below: **Real Tech (own brand)** and **Independent product brands**. Each leaf is a logo card with the brand name.

**Headline:** *Real Tech parent · Independent product brands.*

**Sub-headline:** *When to lead with which.*

**Two-column rule (in body):**

| Lead with **Real Tech** when | Lead with **product brand** when |
|------------------------------|----------------------------------|
| Selling consulting services | Selling B2C apps (Kith, Baby Tracker, Wedding) |
| Selling the GTM tool to other agencies | Building category-specific moats (Rovian, edgenote) |
| Speaking to investors about the studio model | Tapping vertical communities (Cannabis, Rehabit, DealPayment) |

**Links footer:** [realtechconsultant.com](https://realtechconsultant.com) · [rovian.ai](https://rovian.ai) · [edgenote.ai](https://edgenote.ai) · [dealpayment.com](https://dealpayment.com) · [startakith.com](https://startakith.com)

Source: [`07-brand-architecture.md`](07-brand-architecture.md)

---

## SECTION 4 — Per-App Slides

*Section transition from Section 3: `cardFlip3D` (3D card flip on X-axis, `--dur-large`). After this transition, every per-app slide uses the `L5-AppSlide` template.*

Per-slide entry animation for #11–20: `fadeUpStagger` on text columns + `imageBlurReveal` on the screenshot. Score badge in the stats column animates with `countUpReveal`.

Each app slide has the standard `L5-AppSlide` zone layout: header strip (logo + name + live URL), three-column body (screenshot · problem/solution · stats), bottom strip (competitors · moat · channel readiness), links footer.

---

### Slide 11 — #1 Real Tech GTM (productize what we already use)

- **Visual:** Screenshot of [`Realtech2/Real-tech-llc-portfolio/app/admin/gtm`](../Realtech2/Real-tech-llc-portfolio/app/admin/gtm) admin dashboard — captured locally per [`screenshots/README.md`](screenshots/README.md). Inset chip showing "Workflow engine · 11 live workflows"
- **Tagline:** *"The CRM your agency wishes it had — automated by the workflow engine your competitors can't ship."*
- **Problem / Target customer:** Boutique consultancies, founders running outbound, marketing agencies — all running manual sequences across 5+ tools.
- **Solution:** End-to-end GTM stack: lead capture → enrichment → sequenced outreach → call booking → CRM sync. One stack: prospects, researches, writes with AI, sends, follows up, triages replies, publishes content. 11 live workflows + 8 admin pages.
- **Market size:** GTM/sales tooling — multi-billion category (Apollo $1.6B valuation, Clay $500M+, HubSpot Operations Hub mid-9-figures revenue). Target SOM $10M ARR within 3 years on a long tail of agencies.
- **Top 3 competitors + our gap:** [Apollo.io](https://apollo.io) (database-led, weak workflow), [Clay.com](https://clay.com) (workflow-led, dependent on multiple tools), [HubSpot Operations Hub](https://hubspot.com/products/operations) (suite-locked). Our gap: **end-to-end + agency-native + we eat our own dog food**.
- **Moat:** Productized 11 live workflows we use to sell consulting; the workflow library is the unfakeable moat.
- **Build status:** ~70% — admin pages built, automations live, billing/multi-tenancy still to wire.
- **Path to first $10k MRR:** 50 customers @ $200/mo. Channel: warm-intro to Real Tech consulting clients + agencies in Justin's network.
- **Channel Readiness:** Real Tech consulting client list + agency network; no third-party gating.
- **Founder lead:** Jonathan ([Jonathan LinkedIn](https://www.linkedin.com/in/johnathan-sorisho-a2110052/))
- **Adoption likelihood:** **8.7 / 10** — *highest in portfolio. Build is real, GTM is mechanical, dog-fooding earns trust.*

**Links footer:** [realtechconsultant.com/admin/gtm](https://realtechconsultant.com/admin/gtm) · [apollo.io](https://apollo.io) · [clay.com](https://clay.com) · [hubspot.com/products/operations](https://hubspot.com/products/operations) · [Jonathan LinkedIn](https://www.linkedin.com/in/johnathan-sorisho-a2110052/)

---

### Slide 12 — #2 Rovian.ai (AI receptionist for service businesses)

- **Visual:** Screenshot of [rovian.ai](https://rovian.ai) hero + dashboard. Inset chip: "Vapi voice + Stripe billing live."
- **Tagline:** *"Never miss a call. Book the job in your sleep."*
- **Problem / Target customer:** HVAC, plumbing, dental, salons — service businesses that lose 30%+ of inbound calls after hours and during peak.
- **Solution:** Voice-AI receptionist that answers, qualifies, books, and syncs to calendar — with native Stripe billing for the SaaS layer and demo-call routing.
- **Market size:** AI voice agent market $2B+ in 2026, growing 30% YoY ([CB Insights](https://www.cbinsights.com)). Target SOM: SMB service biz vertical, multi-billion TAM.
- **Top 3 competitors + our gap:** [Goodcall](https://goodcall.com) (consumer-grade), [PolyAI](https://poly.ai) (enterprise-only), [Smith.ai](https://smith.ai) (human-led, expensive). Our gap: **mid-market price, AI-native, vertical-specific scripts**.
- **Moat:** Vapi infra + workflow orchestration + 1462-line Prisma schema covering full demo-to-billing lifecycle.
- **Build status:** ~85% — backend/web/IaC shipped; missing wider voice script library and partner-billing gates.
- **Path to first $10k MRR:** 100 customers @ $100/mo. Channel: Justin's BD into multifamily-adjacent service vendors; Vapi marketplace listing.
- **Channel Readiness:** Vapi partner ecosystem + Justin's SMB service network.
- **Founder lead:** Jonathan + Tim · Halim engineering ([Halim LinkedIn](https://www.linkedin.com/in/abdelhalim-khaldi))
- **Adoption likelihood:** **8.0 / 10**

**Links footer:** [rovian.ai](https://rovian.ai) · [goodcall.com](https://goodcall.com) · [poly.ai](https://poly.ai) · [smith.ai](https://smith.ai) · [vapi.ai](https://vapi.ai) · [Halim LinkedIn](https://www.linkedin.com/in/abdelhalim-khaldi)

---

### Slide 13 — #3 Wedding Planner AI

- **Visual:** Screenshot of WeddingTemplate Next.js app (capture from local dev server per [`screenshots/README.md`](screenshots/README.md)). Inset chip: "27-table schema · Scott & Fiona deployed."
- **Tagline:** *"AI-native wedding planner for couples, planners, and venues — built on a 27-table schema with paying customer #1 already live."*
- **Problem / Target customer:** Engaged couples drowning in 40+ tools. Wedding planners (B2B) running spreadsheets. Venues without proper CRM.
- **Solution:** Unified planning workspace: timeline, vendors, budget, guests, seating, day-of run-of-show, AI assistant. B2C ($199/yr) + B2B planner CRM ($99/mo).
- **Market size:** US wedding industry $70B+/yr ([The Knot Worldwide](https://www.theknotworldwide.com/about)). Wedding-tech SAM ~$2-3B; SOM realistic ~$25M ARR within 3 years bundled.
- **Top 3 competitors + our gap:** [Aisle Planner](https://aisleplanner.com) (planner-CRM, weak couple UX), [The Knot](https://theknot.com) (vendor marketplace, weak planning), [Zola](https://zola.com) (registry-first, planning is afterthought). Honorable mention: [HoneyBook](https://www.honeybook.com). Our gap: **AI-native + couple+planner+venue in one + Life Events Suite anchor**.
- **Moat:** Deepest schema in category (27 tables); first-to-deploy AI features; wedding planner B2B layer is unique.
- **Build status:** ~90% — full PRD ([WeddingTemplate/PRD.md](../WeddingTemplate/PRD.md)) shipped, paying customer ([Scott & Fiona](../Scott&Fiona)) live.
- **Path to first $10k MRR:** 50 couples @ $199/yr + 30 planners @ $99/mo = ~$13k/yr + $36k/yr → first $10k MRR in 4-6 months.
- **Channel Readiness:** Wedding professional partner channel ([`06-bundle-strategy.md`](06-bundle-strategy.md) §Channel 1).
- **Founder lead:** Jonathan + Jordyn Stubblefield
- **Adoption likelihood:** **7.9 / 10**

**Links footer:** Customer URL TBD · [aisleplanner.com](https://aisleplanner.com) · [theknot.com](https://theknot.com) · [zola.com](https://zola.com) · [WeddingTemplate/PRD.md](../WeddingTemplate/PRD.md) · [Justin LinkedIn TBD]

---

### Slide 14 — #4 Channel Partner Portal (the founder-market-fit bet)

- **Visual:** Wireframe SVG (concept stage — generated per [`screenshots/README.md`](screenshots/README.md)). Three-pane layout: operator dashboard · vendor marketplace · workflow timeline. Annotated with named multifamily operators that would convert via warm intro.
- **Tagline:** *"The multifamily layer the category doesn't ship — built by the team who knows exactly what's missing."*
- **Problem / Target customer:** Multifamily property managers running parallel spreadsheets to coordinate vendors, work orders, and approvals across 100+ properties. incumbents ship the smart-home; nobody ships the operator-vendor connective tissue.
- **Solution:** Operator-vendor portal: vendor onboarding, work order routing, SLA tracking, approval workflow, invoice reconciliation, performance scorecards.
- **Market size:** Property management software $4B+/yr ([NMHC](https://www.nmhc.org)); operator-vendor portals a sub-segment growing 12% YoY.
- **Top 3 competitors + our gap:** [ServiceChannel](https://servicechannel.com) (commercial-led, weak multifamily), [Building Engines](https://buildingengines.com) (commercial-led), [BuildingLink](https://buildinglink.com) (resident-experience, weak vendor side). Adjacent: [AppFolio](https://appfolio.com), [Yardi](https://yardi.com), [Procore](https://procore.com). Our gap: **multifamily-native + AI-augmented + built by 4 the multifamily proptech employer veterans**.
- **Moat:** Founder-market fit (5 of 6 founders are current multifamily proptech leadership — 3 VPs + 2 Directors; Justin literally founded mrktstreet — the same concept — in 2015). 850K+ multifamily homes touched. 15 of top 20 operators reachable via warm intro.
- **Build status:** **1% (concept).** Paid down via Justin's 2015 mrktstreet learning curve.
- **Path to first $10k MRR:** 5 enterprise pilots @ $2k/mo. Channel: warm intros via the multifamily operator network (post-NDA, with respect for current employer).
- **Channel Readiness:** **Strongest in portfolio.** multifamily customer relationships + Braeden/Wil product credibility + Justin's BD experience. Named pilots will be added in revision pass.
- **Founder lead:** Justin (BD) + Braeden (Product) + Wil (UX) + Jonathan (Solutions)
- **Adoption likelihood:** **7.4 / 10** *(would be higher if build wasn't at 1%)*

**Links footer:** [servicechannel.com](https://servicechannel.com) · [buildingengines.com](https://buildingengines.com) · [buildinglink.com](https://buildinglink.com) · 5 multifamily-proptech founder LinkedIns from slide 7

---

### Slide 15 — #5 Life Events Suite (Wedding + Kith + Baby Tracker)

- **Visual:** Funnel diagram (the ASCII funnel from [`06-bundle-strategy.md`](06-bundle-strategy.md) §Funnel rendered as a polished SVG). Three product cards stack vertically with arrows showing the lifecycle flow.
- **Tagline:** *"Engagement → community → family. Three apps, one customer, three monetization moments."*
- **Problem / Target customer:** Wedding-tech ends at the wedding. Baby-tech starts at the baby. Nobody owns the connective tissue. Same customer, three lifecycle moments.
- **Solution:** Unified bundle: Engaged tier ($199/yr) → Newlywed tier ($99/yr) → Family tier ($249/yr). Same login, same billing, same brand.
- **Market size:** Combined Wedding ($70B) + family-photo-sharing ($2B+) + baby-tracking ($1B+) addressable segments. Bundle SOM realistic $5M ARR Year 2.
- **Top 3 competitors + our gap:** Each of the underlying app's top competitors — see slides 13, 18, 19. Our gap: **nobody bundles. Nobody owns the lifecycle.**
- **Moat:** First-mover on the lifecycle bundle + 3 already-built apps + viral coefficient via Kith.
- **Build status:** Wedding 90% · Kith 95% · Baby Tracker 40% → bundle ~75% with unified billing layer to add.
- **Path to first $10k MRR:** 100 Engaged-tier customers in 6 months via wedding-pro partner channel.
- **Channel Readiness:** Justin's event-industry network (photographers, florists, venues). Hospital and registry partnerships in Phase 2.
- **Founder lead:** Justin (channel) + Jonathan (orchestration) + Wil (UX) + Halim (engineering)
- **Adoption likelihood:** **7.4 / 10** *(tied with Channel Partner Portal)*

**Links footer:** [`06-bundle-strategy.md`](06-bundle-strategy.md) · [startakith.com](https://startakith.com) · [theknot.com](https://theknot.com) · [zola.com](https://zola.com) · [tinybeans.com](https://tinybeans.com)

---

### Slide 16 — #6 Kith (private spaces for life's big moments)

- **Visual:** Screenshot of [startakith.com](https://startakith.com) hero (the sleeping newborn). Inset card showing the in-product space view.
- **Tagline (from the live site):** *"For the people you'd call from the hospital."*
- **Problem / Target customer:** New parents, engaged couples, families managing milestones — drowning in a hundred texts asking for updates.
- **Solution:** Private space (no app to download) where family and friends share photos, send love, and keep up — while it's happening. Sign in with phone number; no public profiles, no algorithms.
- **Market size:** Private family-sharing ~$2B+ (TinyBeans, CaringBridge, Notabli). Closed-loop community SAM ~$500M.
- **Top 3 competitors + our gap:** [TinyBeans](https://tinybeans.com) (baby-only, photo-led), [CaringBridge](https://caringbridge.org) (medical-only, donation-funded). Our gap: **any moment, not just baby; "no app to download" UX; built for grandma's phone**.
- **Moat:** Production-grade infrastructure already monetized via Stripe. Founder-story authenticity (Jonathan built it in a hospital room when his son was born). Viral coefficient (each space invites 20-100 people).
- **Build status:** **~95% (live + monetized).**
- **Path to first $10k MRR:** Already trickling in via [startakith.com](https://startakith.com). Path to scale: anchor of the Life Events Suite bundle.
- **Channel Readiness:** Built-in viral loop; hospital + registry partnerships in Phase 2 of bundle plan.
- **Founder lead:** Jonathan (founder + emotional product story)
- **Adoption likelihood:** **6.9 / 10** *(solo) — much higher inside Life Events Suite*

**Links footer:** [startakith.com](https://startakith.com) · [tinybeans.com](https://tinybeans.com) · [caringbridge.org](https://caringbridge.org) · [Jonathan LinkedIn](https://www.linkedin.com/in/johnathan-sorisho-a2110052/)

---

### Slide 17 — #7 edgenote.ai (local-first AI notes)

- **Visual:** Screenshot of [edgenote.ai](https://edgenote.ai) hero + interface. Inset chip: "whisper.cpp + llama.cpp on-device."
- **Tagline:** *"Your meetings, your notes, your device. Nothing leaves."*
- **Solution:** On-device transcription + AI summary using whisper.cpp + llama.cpp. Subscription pricing for prosumer market.
- **Top 3 competitors + our gap:** [Otter.ai](https://otter.ai) (cloud-only), [Fireflies.ai](https://fireflies.ai) (cloud-only), [Granola.ai](https://granola.ai) (cloud-augmented). Our gap: **truly local. Privacy-by-default.**
- **Moat:** On-device privacy stance is hard for incumbents to copy; loyalty among privacy-conscious knowledge workers.
- **Build status:** **100% (live + selling).**
- **Path to first $10k MRR:** Already live; needs marketing motion (Show HN, Product Hunt, privacy-community SEO).
- **Channel Readiness:** Low-touch (product-led growth via privacy communities).
- **Founder lead:** Jonathan + Halim
- **Adoption likelihood:** **6.5 / 10**

**Links footer:** [edgenote.ai](https://edgenote.ai) · [otter.ai](https://otter.ai) · [fireflies.ai](https://fireflies.ai) · [granola.ai](https://granola.ai) · [whisper.cpp](https://github.com/ggml-org/whisper.cpp) · [llama.cpp](https://github.com/ggml-org/llama.cpp)

---

### Slide 18 — #8 DealPayment.com

- **Visual:** Screenshot of [dealpayment.com](https://dealpayment.com) marketing site. Inset chip: "Patent-pending DPT / ELT escrow."
- **Tagline:** *"Blockchain escrow for high-trust transactions — patented."*
- **Problem / Target customer:** Used-car dealers, peer-to-peer vehicle sales, eventually real-estate parcels in LATAM. Sellers and buyers who don't trust each other and need a neutral escrow.
- **Solution:** Patent-pending Token + ELT (Escrow Layer Token) on Base L2. Smart contracts handle holding, conditions, release. Off-ramps to USD.
- **Market size:** Used vehicle market $400B+/yr ([NADA](https://www.nada.org)); blockchain escrow share is small but growing. Real-estate add-on TAM massive but regulated.
- **Top 3 competitors + our gap:** [Escrow.com](https://escrow.com) (centralized, fee-heavy, slow), [Cars.com](https://cars.com) (marketplace, no escrow), [Carfax](https://carfax.com)/[AutoCheck](https://autocheck.com) (data, not transactions). Our gap: **patent + crypto-native + dealer channel**.
- **Moat:** **Patent-pending technology** (single highest-moat app in portfolio). Tim's crypto network. LATAM expansion lane.
- **Build status:** **~50%** — marketing site live; product in build; patent prosecution underway.
- **Path to first $10k MRR:** 5 dealer pilots @ $2k/mo. Channel: Tim's dealership + crypto network.
- **Channel Readiness:** Tim's named dealership relationships + crypto leader connections (specific names confidential).
- **Founder lead:** Tim Elias (crypto/legal/LATAM) + Halim (engineering)
- **Adoption likelihood:** **6.3 / 10** *(regulatory friction caps speed; moat is unmatched)*

**Links footer:** [dealpayment.com](https://dealpayment.com) · [escrow.com](https://escrow.com) · [cars.com](https://cars.com) · [base.org](https://base.org) · [`Downloads/DealPayment_Developer_Summary.pdf`](../Downloads/DealPayment_Developer_Summary.pdf)

---

### Slide 19 — #9 Cannabis HighTide

- **Visual:** Screenshot of v0 marketplace frontend ([`Cannabis - High Tide/v0-cannabis-marketplace-frontend`](../Cannabis%20-%20High%20Tide/v0-cannabis-marketplace-frontend) capture from local dev server). Inset chip: "Compliance-led, partner pipeline in motion."
- **Tagline:** *"A cannabis B2B marketplace, built compliance-first, with named partners already in motion."*
- **Problem / Target customer:** Cannabis operators (dispensaries, processors, brands) navigating fragmented regulations and a fragmented vendor landscape.
- **Solution:** Compliance-first marketplace + ordering + state-by-state ruleset engine.
- **Market size:** US cannabis $30B+/yr ([New Frontier Data](https://newfrontierdata.com)). B2B layer ~$5B and growing.
- **Top 3 competitors + our gap:** [Dutchie](https://dutchie.com) (POS-led, weak B2B), [Treez](https://treez.io) (POS-led), [Flowhub](https://flowhub.com) (POS-led). Our gap: **B2B-native marketplace, not POS**.
- **Moat:** Partner relationships already in motion; compliance moat for entrants.
- **Build status:** **~40%** — v0 marketplace frontend live in dev.
- **Path to first $10k MRR:** 10 operator partners @ $1k/mo. Channel: cannabis operator pipeline (named privately).
- **Channel Readiness:** Pipeline confirmed; partners listed as "[Confidential — N partners in pipeline]" until cofounders approve naming.
- **Founder lead:** Jonathan + Halim + cannabis operator partner
- **Adoption likelihood:** **6.0 / 10** *(federal regulatory exposure caps speed)*

**Links footer:** [dutchie.com](https://dutchie.com) · [treez.io](https://treez.io) · [flowhub.com](https://flowhub.com) · [newfrontierdata.com](https://newfrontierdata.com)

---

### Slide 20 — #10 Rehabit (real estate + AI property scoring)

- **Visual:** Wireframe SVG (concept stage). Two-pane layout showing "Tool path" (SaaS for brokers/investors) and "Operator path" (we run the fix-and-flip operation ourselves). Decision arrow points at the cofounder vote.
- **Tagline:** *"AI-scored fix-and-flip — sell the tool, or operate the deals?"*
- **Problem / Target customer:** Real estate investors needing better deal-scoring. **Two operating models** — both shown on the slide so cofounders decide which path on the day.
- **Solution path A (capital-light):** SaaS tool for brokers + investors; AI property scoring + deal pipeline.
- **Solution path B (capital-heavy):** Real Tech operates fix-and-flip directly; we're the customer of our own tool.
- **Market size:** Real estate tech $100B+/yr ([NAR](https://www.nar.realtor)); AI deal-scoring sub-segment $1B+ TAM.
- **Top 3 competitors + our gap:** [PropStream](https://propstream.com), [Mashvisor](https://mashvisor.com), [DealMachine](https://dealmachine.com). Our gap: **AI-scoring depth + Tim's LATAM lane for cross-border real estate**.
- **Moat:** Tim's real estate transactional/legal expertise (especially LATAM). AI scoring data flywheel.
- **Build status:** **0% (concept).**
- **Path to first $10k MRR:** Path A: 200 SaaS users @ $50/mo. Path B: 1 fix-and-flip exit funds the studio for a year.
- **Channel Readiness:** Tim's real estate + LATAM relationships.
- **Founder lead:** Jonathan
- **Adoption likelihood:** **4.1 / 10** *(scoped down; revisit after recommendation vote)*

**Links footer:** [propstream.com](https://propstream.com) · [mashvisor.com](https://mashvisor.com) · [dealmachine.com](https://dealmachine.com) · [nar.realtor](https://www.nar.realtor) · [Tim LinkedIn TBD]

---

## SECTION 4.5 — Strategy

*Section transition from Section 4: `triadConverge` (three app slides fly into one stacked spotlight, `--dur-cinematic`)*

*Per audit: the divider was renamed from "Bundle Play." → "Strategy." with blurb "Where the buffet starts paying compound interest." The bundle treatment is now consolidated to slide 26 only — the per-app Life Events Suite slide (slide 19) was reduced to a thin "anchor of the Strategy section" line to remove duplication.*

---

### Slide 21 — Life Events Suite (the strategic spotlight)

- **Layout:** `L4-TwoColumn` (visual right)
- **Entry animation:** `fadeUpStagger` on text; `strokeDraw` on the funnel arrows; `countUpReveal` on the LTV multiplier
- **Visual:** Right column — full-color version of the funnel diagram (Engaged → Newlywed → Family) with the LTV multiplier callout. Three product logo cards stacked with curved arrows linking them.

**Headline:** *Wedding + Kith + Baby = Life Events Suite.*

**Sub-headline:** *Same customer. Three lifecycle moments. One platform.*

**Body bullets:**
- **Funnel:** marriage → community → family (natural lifecycle)
- **Channel:** photographers · florists · venues · registries (Justin's lane)
- **Economics:** 1 sale × 3 attach = ~**2.3× LTV** vs. selling separately ($547 bundle LTV vs. $240 realistic solo)
- **Pricing:** Engaged $199/yr → Newlywed $99/yr → Family $249/yr. Lifetime $999.

**Links footer:** [`06-bundle-strategy.md`](06-bundle-strategy.md) · [startakith.com](https://startakith.com) · Wedding customer URL TBD · Baby Tracker (local app)

---

### Slide 27 — Founder-Market Fit Matrix (bucketed)

- **Layout:** `L9-TeamGrid` reused as a bucketed `fmf-grid`. Three labeled `fmf-section` blocks: **Multifamily Products** (gold-bordered MF bucket), **Bundle · Life Events** (turquoise label), **Independent lanes** (salmon label).
- **Entry animation:** Sections `fadeUpStagger`; cards within each section animate with `--stagger-tight`; MF cards carry a 2px gold border + soft gold glow.
- **Visual:** Cards grouped by bucket, each card shows app name + star ratings per founder + lane note. Per audit:
  - **Multifamily Products bucket:** Channel Partner Portal · Real Tech GTM · Rehabit
  - Wedding Planner card now reflects Jonathan + Jordyn Stubblefield co-lead
  - Cannabis adds Halim; Rehabit becomes Jonathan-only

**Headline:** *Where each of us has unfair advantage.*

**Sub-caption:** *Bucketed by lane. Gold-bordered cards = the Multifamily Products bucket where the team's combined depth is unmatched. **MF** = currently leading inside multifamily proptech.*

**Footer callout:** *5 of 7 founders/recruits = current/former multifamily proptech leadership · 3 VPs + 2 Directors · 51+ combined years · Tim = crypto / legal / LATAM lane (independent)*

**Links footer:** All 7 LinkedIn URLs from slide 9 · Source: [`05-founder-market-fit.md`](05-founder-market-fit.md)

---

## SECTION 5 — Competitive & Market Context

*Section transition from Section 4.5: `splitScreenWipe` (center-out vertical split-wipe, `--dur-large`)*

---

### Slide 30 — Competition Map (real quadrant SVG)

- **Layout:** `L4-TwoColumn` (visual right)
- **Entry animation:** Quadrant axes `strokeDraw`; competitor dots `fadeUpStagger` with `--stagger-tight`
- **Visual:** Hand-tuned inline SVG `quadrant-map`. Axes: X = build completeness, Y = founder-market fit. Real Tech dots in branded colors (gold = GTM, turquoise = Rovian, salmon = CP Portal). Competitor dots in muted grey from [`02-competitive-landscape.md`](02-competitive-landscape.md). Quadrant labels: SHIP + FIT (turquoise), FIT NOT BUILT (gold), BUILT WEAK FIT (salmon), RISKY (muted).

**Headline:** *Top three vs. the field.*

**Body bullets:**
- **Real Tech GTM** — upper right. Built and dog-fooded.
- **Rovian.ai** — upper right. Voice + Stripe shipped.
- **Channel Partner Portal** — upper left. Highest fit on the board.

**Links footer:** [apollo.io](https://apollo.io) · [clay.com](https://clay.com) · [goodcall.com](https://goodcall.com) · [poly.ai](https://poly.ai) · [servicechannel.com](https://servicechannel.com) · [buildingengines.com](https://buildingengines.com)

---

### Risks (moved from Appendix to immediately follow Slide 30)

- **Layout:** `L-Risks` (`layout-risks`) — card grid, not a dense table
- **Entry animation:** `fadeUpStagger` on the section, `--stagger-tight` on the cards
- **Visual:** One card per app. Each card carries a Lucide hazard icon, app name, colored likelihood pill (turquoise / gold / salmon / coral), and a one-line risk + mitigation. Border-inline-start color-codes likelihood at a glance.

**Headline:** *What kills each app. And what we'd do.*

**Sub-caption:** *A pre-mortem for every bet. Stating the failure mode out loud is how we plan around it.*

**Likelihood pills:**
- Med-High: Channel Partner Portal · Rovian
- Medium: Real Tech GTM · Wedding Planner · Cannabis · DealPayment
- Low-Med: Kith · Baby Tracker · edgenote
- High (Path B): Rehabit

**Links footer:** [`01-app-research.md`](01-app-research.md)

---

### Slide 31 — Why now (3-pillar)

- **Layout:** `L3-Statement` with three `why-pillar` cards
- **Entry animation:** `fadeUpStagger` on headline; cards with `--stagger-tight`
- **Visual:** Three cards each with a Lucide icon header (turquoise) + Fraunces title + body. *(Per audit: rewritten from 5 disconnected tailwinds to 3 tight pillars; "always-on workflows" tailwind removed.)*

**Headline:** *Why now. Three pillars.*

**Three pillars:**
1. **AI is cheap.** Generation costs collapsed. Integration — not the model — is the new moat.
2. **The multifamily window is open.** Public-market validation arrived. The operator-vendor layer didn't — and incumbents haven't shipped it.
3. **The team is already inside it.** Five of seven of us lead inside multifamily proptech today. Eleven shipped artifacts say we ship.

**Links footer:** [cbinsights.com](https://www.cbinsights.com) · [nmhc.org](https://www.nmhc.org) · [vapi.ai](https://vapi.ai)

---

### Slide 25 — Positioning Statements (top 2 finalists)

- **Layout:** `L6-Comparison` (two large blocks side-by-side)
- **Entry animation:** Left block `fadeUpStagger`; right block follows after `--dur-small`
- **Visual:** Two columns with brand-logo header per side. Left = Path A finalist 1; Right = Path A finalist 2. *(Phase 2A: a toggle widget swaps to Path B's two finalists for live comparison.)*

**Headline:** *Two finalists. Two positioning statements.*

**Left block — Path A finalist 1: Real Tech GTM**
> *"For boutique consultancies and lean BD teams, Real Tech GTM is the agency-native CRM + outbound engine — already battle-tested running our own consulting outreach. Unlike Apollo's database or Clay's workflow chains, Real Tech GTM is one stack that prospects, writes, sends, follows up, and publishes — autonomously. Eleven live automations, owned end-to-end."*

**Right block — Path A finalist 2: Channel Partner Portal**
> *"For multifamily property operators managing vendors at scale, Channel Partner Portal is the operator-vendor connective tissue the category doesn't ship. Built by three current multifamily proptech VPs and a product director — 51 combined years of multifamily proptech, with 850K+ homes touched."*

**Links footer:** [realtechconsultant.com/admin/gtm](https://realtechconsultant.com/admin/gtm)

---

## SECTION 6 — The Recommendation

*Section transition from Section 5: `zoomBlurFocus` (zoom into the scorecard, blur background, `--dur-cinematic`)*

---

### Slide 34 — Weighted Scorecard (editable + recommendation callout)

- **Layout:** `L7-Scorecard` with `layout-scorecard-editable` modifier
- **Entry animation:** `fadeUpStagger` on headline + recommendation callout
- **Visual:** The full 11-row × 9-criteria scorecard. Every score cell is `contenteditable="true"` with a 44pt min-height for touch. The Weighted column recomputes live as you edit (sum × weight / 100). Edits persist to `localStorage` so cofounder changes survive a page reload during the meeting. A **Reset to defaults** button restores the original scoring. A gradient "Recommended top 2" callout at the top names Real Tech GTM + Channel Partner Portal.
- **Wiring:** [`deck-revealjs/js/scorecard.js`](deck-revealjs/js/scorecard.js) attached after `slide-effects.js`.

**Headline:** *The scoreboard, scored. Edit live.*

**Recommended top 2 callout:**
- **Real Tech GTM** · built and dog-fooded.
- **Channel Partner Portal** · once-in-a-decade founder-market-fit bet.

**Sub-caption:** *Tap any score cell to edit. Weighted column recomputes live. Edits persist on this device.*

**Links footer:** [Methodology](https://github.com/jsorisho715/realtechpitch/blob/main/03-decision-framework.md)

---

### Slide 27 — Top 2 Recommended (the two paths)

- **Layout:** `L6-Comparison` (two paths side-by-side, with a "vote" indicator strip below)
- **Entry animation:** Left path `fadeUpStagger`; right path `fadeUpStagger` after `--dur-small`; vote-indicator strip `strokeDraw` after both
- **Visual:** Two large path cards. Left card has gold "Recommended" badge. Each card lists: the 2 picks · why (the 3 reasons) · what we gain · what we give up.

**Headline:** *Two paths. The team picks one.*

**Path A — "Multifamily-Lane Activation" (Recommended)**
1. **Real Tech GTM** (8.7) — already built, eats own dog food
2. **Channel Partner Portal** (7.4) — once-in-a-decade founder-market-fit bet
- **Why:** Most defensible "why us / why now" answer. Activates the the multifamily proptech employer lineup's unique advantages.
- **Gain:** Best founder-market fit; clearest brand story; durable competitive moat.
- **Give up:** Slower to first revenue (Channel Partner Portal at 1% build).

**Path B — "Channel-Activation"**
1. **Rovian.ai** (8.0) — Vapi voice + Stripe billing already shipped
2. **DealPayment.com** (6.3) — patent-pending + Tim's crypto/dealership network
- **Why:** Faster to first $1 — both have named partner pipelines and existing build.
- **Gain:** Quicker MRR; activates Tim's lane; rides AI voice tailwind.
- **Give up:** Less defensible long-term moat; not the once-in-a-decade founder bet.

**Links footer:** [realtechconsultant.com/admin/gtm](https://realtechconsultant.com/admin/gtm) · [rovian.ai](https://rovian.ai) · [dealpayment.com](https://dealpayment.com)

---

### Slide 28 — Backburner List (and re-activation triggers)

- **Layout:** `L4-TwoColumn` (table left, trigger column right)
- **Entry animation:** Rows `fadeUpStagger` with `--stagger-tight`
- **Visual:** Left column — table of the 8-9 apps not in the chosen top 2 + bundle Year 1 maintenance. Right column — re-activation trigger per app.

**Headline:** *What we put on backburner. What brings it back.*

**Sub-caption:** *Discipline is the deck's real moat — saying "no" credibly is what makes "yes" believable.*

**Table (assuming Path A is chosen):**

| App | Status | Re-activation trigger |
|-----|--------|------------------------|
| Rovian.ai | Pause new dev; maintain | First $50k ARR opportunity from named partner |
| Wedding Planner AI | Maintain Scott & Fiona; defer expansion | Life Events Suite Phase 2 launch |
| DealPayment.com | Tim's lane only; no eng cycles | Patent grant or named dealer pilot ≥$5k/mo |
| Cannabis HighTide | Operator partner-led only | First named dispensary deploys |
| edgenote.ai | Maintain only | Privacy regulation that boosts on-device demand |
| Kith | Maintain (active customers) | Bundle launch (already triggered for Year 1) |
| Baby Tracker | Defer until Year 2 | Bundle Year 2 expansion |
| Rehabit | Defer | Tim's LATAM partner brings a packaged deal |
| Life Events Suite (bundle) | Year 1 maintenance / soft-launch | $25k MRR threshold from Wedding+Kith → trigger Baby Tracker integration |

**Links footer:** [`03-decision-framework.md`](03-decision-framework.md)

---

*Per audit: the Resource Allocation slide was deleted. Resource conversation moves into the follow-up working session that comes out of slide 45 (30-60-90).*

---

## SECTION 7 — Real Tech Consulting Go-To-Market

*Section transition from Section 6: `moneyRain` (brief dollar-sign / pixel rain via canvas-confetti scaled-down, 1800ms)*

---

### Slide 30 — Pitch Playbook

- **Layout:** `L4-TwoColumn` (content left, visual right)
- **Entry animation:** `fadeUpStagger` on the 4-step playbook
- **Visual:** Right column — labeled flow diagram "Discovery → Diagnose → Demo → Deliver." Each box hyperlinks to a sample case study URL.

**Headline:** *How we walk in and win.*

**Four-step playbook:**
1. **Discovery** — 30-min audit; we map their stack and find one bleeding workflow
2. **Diagnose** — 1-week paid deep-dive; deliverable is a "shippable plan"
3. **Demo** — we use Real Tech GTM (or another shipped app) to show — not tell — what we'd build
4. **Deliver** — Build engagement → Retainer → Equity-for-services if mutual fit

**Links footer:** [realtechconsultant.com/services](https://realtechconsultant.com/services)

---

### Slide 31 — Demo Strategy (Eat Your Own Dog Food)

- **Layout:** `L3-Statement`
- **Entry animation:** `fadeUpStagger`
- **Visual:** Background — premium gradient (navy → gold). Foreground — single Fraunces statement in white plus a screenshot grid of the 5 apps used in our own outreach.

**Headline:**
> *"Real Tech uses Real Tech's GTM to land Real Tech's consulting clients."*

**Sub-headline:** *Every demo is live. Every artifact is shipped. Every pitch is proof.*

**Caption:** *Apps used live in the sales motion: GTM admin, Rovian (call-back agent), edgenote (note-taking on the call), Wedding Planner (industry vertical demo), Kith (consumer credibility).*

**Links footer:** All 5 product URLs

---

### Slide 41 — Partnership Channels (5 chips)

- **Layout:** `L4-TwoColumn` (visual left, content right)
- **Entry animation:** `fadeUpStagger`; per-channel chip `imageBlurReveal`
- **Visual:** Left column — 5-chip grid, one chip per founder owning that channel. *(Per audit: Johnathan added as the 5th chip — studio leadership, multifamily operator network, consulting pipeline.)*
  - **Johnathan chip** — studio leadership · multifamily operator network · consulting pipeline
  - **Justin chip** — event industry (photographers · florists · venues)
  - **Braeden chip** — multifamily via multifamily operator network
  - **Wil chip** — multifamily product community + Worcester Polytechnic alumni
  - **Tim chip** — LATAM + crypto + legal

**Headline:** *Five channels. Five owners.*

**Body (right column):** Per-channel one-liner about target vertical, named (or anonymized) partners, and how warm intros are activated post-NDA.

**Links footer:** All 5 founder LinkedIns

---

### Slide 33 — Content Engine (Meta Proof)

- **Layout:** `L4-TwoColumn` (content left, visual right)
- **Entry animation:** `fadeUpStagger`; workflow card `imageBlurReveal`
- **Visual:** Right column — annotated screenshot of a single workflow doing outbound + enrichment + sequencing for Real Tech itself. A small inset shows the 11 workflows in the GTM admin.

**Headline:** *Our GTM tool runs our own outreach. That's the demo.*

**Body bullets:**
- **An autonomous outbound team in software** — does what $200/mo Apollo + $100/mo Clay + a $4–8k/mo RevOps hire would do at any other agency. 11 live workflows running 24/7.
- Sample sequence outputs hyperlinked from the deck
- Open-source playbooks published periodically (content + SEO compounding)

**Links footer:** [realtechconsultant.com/admin/gtm](https://realtechconsultant.com/admin/gtm) · sample case study URLs (TBD)

---

### Slide 34 — Pricing & Packaging

- **Layout:** `L7-Scorecard` (lightweight pricing table)
- **Entry animation:** Rows `fadeUpStagger` with `--stagger-tight`
- **Visual:** Pricing table with four rows. Right column has a "best for" qualifier per row.

**Headline:** *Discovery · Build · Retainer · Equity.*

**Pricing rows:**

| Tier | Scope | Price | Best for |
|------|-------|-------|----------|
| **Discovery** | 30-min audit + report | Free | Qualifying lead |
| **Diagnose Sprint** | 1-week paid deep-dive + shippable plan | $5,000 flat | Clients ready to commit but unsure where |
| **Build** | 4–12 week engagement | $25–80k per engagement | Specific shippable outcome |
| **Retainer** | Ongoing | $5–15k/mo | Fractional CTO/CPO seat |
| **Equity-for-services** | Variable | Negotiated | Strategic cofounder-style fit |

**Links footer:** [realtechconsultant.com/services](https://realtechconsultant.com/services)

---

## SECTION 8 — 90 / 180 / 365 Plan

*Section transition from Section 7: `timelineUnfurl` (horizontal timeline draws across, slide content slides up, `--dur-cinematic`)*

---

### Slide 45 — 30 · 60 · 90 (collective) + Next Steps

- **Layout:** `L3-Statement` with a `milestone-grid` (3 columns) + `next-steps` strip
- **Entry animation:** `fadeUpStagger` on headline; columns with `--stagger-tight`
- **Visual:** Three milestone columns (Day 30 · 60 · 90), each with bulleted **outcomes** (no named owners — owners assigned in a follow-up working session). Below the grid: a turquoise-tinted "Next Steps (collective)" strip with three actions the room agrees to before leaving.

*(Per audit: replaces the previous three sequential 90 / 180 / 365 slides. Outcomes only. Owners assigned later.)*

**Headline:** *30 · 60 · 90 — what we walk out with.*

**Sub-caption:** *Calendar milestones. Outcomes the room agrees to. Owners are the team — we assign in a follow-up working session.*

**Day 30:** Mutual NDA executed by all signatories · Top 2 picks ratified · Backburner list published · GTM productization sprint scoped · first 5 pilot conversations opened.
**Day 60:** GTM v1 productized + first paying agency customer · Channel Partner Portal v0 wireframes reviewed by 3 named operators · 2 new consulting engagements signed.
**Day 90:** $50k consulting ARR closed + $5k MRR from GTM · 2 Channel Portal pilots in flight · 5 retained consulting clients · capital path decided (bootstrap, F&F, or seed).

**Next steps (collective):**
1. Pick a recurring 60-min weekly cadence with all signatories.
2. Open a shared milestone calendar — outcomes only, no owner names.
3. Schedule the working session that turns these milestones into named owners.

**Links footer:** *(none)*

---

## SECTION 9 — The Ask

*Section transition from Section 8: `spotlightFocus` (background dims, single spotlight on each cofounder, `--dur-cinematic`)*

---

### Slide 38 — Roles (next 90 days)

- **Layout:** `L9-TeamGrid` (6 cards)
- **Entry animation:** Each card spotlights in sequence with `fadeUpStagger` over `--dur-medium`
- **Visual:** Same 6 photos from slide 7. Each card now shows a single bold "owns:" line per founder.

**Headline:** *What each of us owns for the next 90 days.*

**Per-founder ownership (assumes Path A — adjust live if Path B):**

| Founder | Owns |
|---------|------|
| Jonathan | Studio orchestration · GTM productization · consulting pipeline |
| Halim | Engineering across GTM productization + Channel Partner Portal v0 + maintenance |
| Tim | NDA review + patent prosecution status + DealPayment partner pipeline (background lane) |
| Justin | Channel Partner Portal pilot conversations · event-industry partner activation |
| Braeden | Channel Partner Portal product spec · roadmap · CES 2026 visibility |
| Wil | Channel Partner Portal UX spec · product detail across maintenance apps |

**Links footer:** All 6 LinkedIn URLs

---

### Slide 39 — Capital Plan

- **Layout:** `L6-Comparison` (three columns: Bootstrap / F&F / Raise)
- **Entry animation:** Three columns `fadeUpStagger` with `--stagger-loose`
- **Visual:** Three side-by-side columns, each with a header chip and a 4-row body (sources, amount, dilution, control implication).

**Headline:** *Three capital paths. We pick on the day.*

| Bootstrap | Friends & Family | Seed Raise |
|-----------|------------------|------------|
| Sources: consulting cash + founder savings | Sources: $25–100k from network | Sources: $750k–$1.5M institutional |
| Amount: $0 outside | Amount: $100–250k | Amount: $1M+ |
| Dilution: 0% | Dilution: 5–10% | Dilution: 15–25% |
| Control: full | Control: governance light | Control: board seat + reporting |

**Sub-caption:** *Recommended Year 1: bootstrap + targeted F&F. Raise only if Channel Partner Portal traction warrants acceleration.*

**Links footer:** *(none)*

---

### Slide 40 — The Vote Today

- **Layout:** `L3-Statement` with a 3-question voting card
- **Entry animation:** `fadeUpStagger`; the gradient background pulses gently (energy gradient: salmon → coral)
- **Visual:** Background — energy gradient (`--rt-salmon` → `--rt-coral`). White Fraunces statement. Three voting cards below.

**Headline:** *Three questions. One vote.*

**Three voting cards:**
1. **Top 2 apps** — Path A (GTM + Channel Partner Portal) or Path B (Rovian + DealPayment)?
2. **Equity structure** — What split for committed founders vs. founding executive pool?
3. **Comp model** — Sweat equity / salary / equity-for-services? When do salaries start?

**Sub-caption (Inter caps, +0.08em, white):** *Reveal each cofounder's vote on the count of three.*

**Links footer:** *(none)*

---

## SECTION 10 — Appendix

*Section transition from Section 9: `fadeToBlack` (2-second hold on black before finale)*

---

### Slide 41 — P&L Assumptions per App

- **Layout:** `L7-Scorecard`
- **Entry animation:** Rows `fadeUpStagger` with `--stagger-tight`
- **Visual:** Per-app unit-economics table. Columns: ARPU · CAC · LTV · Gross margin · Year-1 cost-to-launch · Path-to-breakeven months. Cells filled from [`01-app-research.md`](01-app-research.md) per-app fact sheets.

**Headline:** *Unit economics per app (working assumptions).*

**Sub-caption:** *Numbers are starting points for cofounder challenge — not faked, not gospel.*

**Links footer:** [`01-app-research.md`](01-app-research.md)

---

*Per audit: the Team Full Bios slide and the Brand & Deliverables Gallery slide were both deleted as duplicative of slide 9 (team) and slide 8 (shipped) respectively. The Risk Register has been moved out of the appendix to immediately follow slide 30 (Competition Map) — see the entry above titled "Risks (moved from Appendix to immediately follow Slide 30)."*

---

### Slide 45 — Glossary (for non-product cofounders)

- **Layout:** `L7-Scorecard` (compact)
- **Entry animation:** `fadeUpStagger` with `--stagger-tight`
- **Visual:** Two-column glossary table.

**Headline:** *Plain-language glossary.*

| Term | Plain-language meaning |
|------|-------------------------|
| **MRR** | Monthly Recurring Revenue — the predictable part of monthly income |
| **ARR** | Annual Recurring Revenue — MRR × 12 |
| **ARPU** | Average Revenue Per User |
| **CAC** | Customer Acquisition Cost — what it costs us to land one customer |
| **LTV** | Lifetime Value — total revenue from one customer over their tenure |
| **TAM / SAM / SOM** | Total / Serviceable / Obtainable market — three concentric market sizings |
| **Founder-Market Fit** | The match between founder background and the market problem |
| **Moat** | Durable competitive advantage (patent, data, network, switching cost, brand) |
| **RICE / ICE** | Common product prioritization frameworks |
| **Channel Readiness** | Named warm partners or pipeline available *today* |
| **Speed to first $10k MRR** | Months from start until predictable revenue at the $10k/mo line |

**Links footer:** *(none)*

---

## FINALE — Slide 45

> **Note:** The Appendix glossary was deliberately re-numbered as the final-Appendix slide #45 above. The cinematic finale below is **slide 46** in the Reveal.js navigation order — but per the Phase 1 plan and the design system, we keep referring to it as "the finale" because that name is more memorable than its number. This re-clarification matters only for the print-PDF export which numbers slides sequentially. Phase 2A engineers can choose to label it 45 in the deck UI by skipping the glossary's numeric label or re-numbering at build time.

---

### Slide 46 — Cinematic Finale: "ONE STEP CLOSER TO BECOMING MILLIONAIRES"

- **Layout:** `L10-Finale`
- **Entry animation:** Custom finale sequence per [`09-design-system.md`](09-design-system.md) §4 — total duration ~10s
- **Section transition from Section 10:** Already triggered by `fadeToBlack` on slide 44 → 45 boundary; finale opens on solid black.
- **Visual:** Black background. Three text reveals. Radial shockwave. 3 firework bursts. Continuous confetti rain. Closing "Let's build." caption.

**Frame-by-frame timing:**

| Time | Element |
|------|---------|
| 0.0s | Black background. Total silence. |
| 0.5s | "ONE STEP CLOSER" fades up — Fraunces 96px white |
| 2.0s | "TO BECOMING" fades up below — Fraunces 72px white at 80% opacity |
| 3.0s | "MILLIONAIRES" reveals in brand-gradient text-clip — Fraunces 144px, scale 1.05 → 1.0 bounce |
| 3.5s | Radial shockwave pulse expands from screen center, 1200ms ease-out |
| 4.0s | Firework burst #1 from bottom-left (`canvas-confetti` `fireworks` preset) |
| 4.5s | Firework burst #2 from bottom-right |
| 5.0s | Firework burst #3 from bottom-center |
| 5.5s | Continuous confetti rain begins from top — brand colors only (navy, turquoise, salmon, gold), 5s duration |
| 9.0s | "Let's build." appears bottom-center — Inter 14px caps, +0.08em tracking, 80% white |
| 10.0s | Confetti settles. Slide holds. Click to exit. |

**Reduced-motion fallback (per `prefers-reduced-motion: reduce`):** Skip shockwave + fireworks + confetti rain. Show all three text reveals at once, gradient text static. Final caption "Let's build." appears at 1.0s. Total duration: ~1.5s.

**Links footer:** [realtechconsultant.com](https://realtechconsultant.com)

---

## How to Edit This Outline

1. **Add a slide:** insert a new `### Slide N — title` block in the right section. Re-number subsequent slides. Update the "At-a-glance sections" table.
2. **Change a layout / animation / transition:** reference only the named primitives in [`09-design-system.md`](09-design-system.md). Do not invent.
3. **Change content on an app slide:** edit here, then mirror the change in [`01-app-research.md`](01-app-research.md). The two should never drift.
4. **Add a link:** add it to [`08-links-inventory.md`](08-links-inventory.md) §11 (per-slide table) and reference it in the slide's "Links footer" line.
5. **Mark for cofounder review:** add `> [REVIEW: <name>]` blockquote inline with your question. Phase 2 build will not pick up unresolved review tags.

## Acceptance check

- [x] All 45 (+ finale = 46) slides have **layout · entry animation · transition (where applicable) · visual · links footer · confidentiality footer**
- [x] Per-app slides are ordered by adoption-likelihood from [`03-decision-framework.md`](03-decision-framework.md)
- [x] Bundle Strategy (slide 21) reflects [`06-bundle-strategy.md`](06-bundle-strategy.md) numbers
- [x] Founder-Market Fit (slide 22) reflects [`05-founder-market-fit.md`](05-founder-market-fit.md) matrix and the multifamily proptech employer badge convergence
- [x] NDA pause slide (#2) is hard-stop with QR + signable PDF link + disclaimer
- [x] Recommendation slide (#27) presents both Path A (recommended) and Path B
- [x] Finale frame-by-frame timing matches [`09-design-system.md`](09-design-system.md) §4
- [x] Every linked URL appears in [`08-links-inventory.md`](08-links-inventory.md) §11
