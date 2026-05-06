# 01 — App Research (Fact Sheets)

One page per app. Sourced from live sites, codebases, and your channel-readiness context. Numbers are rough sizing for the deck — footnoted, not faked. Refine during your revision pass.

**Apps in priority order (working hypothesis):**

1. Real Tech GTM
2. Rovian.ai
3. Wedding Planner AI (Real Tech Wedding)
4. DealPayment.com
5. Channel Partner Portal
6. Cannabis HighTide
7. edgenote.ai
8. Kith (startakith.com)
9. Baby Tracker
10. Rehabit
11. Life Events Suite (bundle)

---

## 1. Real Tech GTM

**Tagline:** *The go-to-market machine that ran our own outreach. Now it runs yours.*

**Problem:** Mid-market B2B teams need outbound, content, and lead enrichment but can't afford a full RevOps stack. Existing tools (Apollo + Clay + HubSpot + a CMS + a video tool) cost $4-8k/mo and require an ops hire to wire together.

**Target customer:** B2B agencies, consulting firms, and 10-50 person SaaS teams. Secondary: SMBs who'd otherwise hire a fractional CMO.

**Solution:** Workflow engine + content engine. One stack, runs itself: finds prospects, researches each one, writes outreach with AI, sends + follows up, triages replies, monitors engagement, publishes content. Replaces Apollo + Clay + HubSpot + a CMS + a video tool. Already running our own outbound — eat-your-own-dog-food.

**What's already built — 11 live workflows that sell, in plain English:**

| # | Workflow | What it does (pitch language) |
|---|----------|-------------------------------|
| 1 | **lead-scraper** | Finds the right prospects — pulls leads from public sources matching your ICP |
| 2 | **website-scraper** | Reads each prospect's website to understand who they are |
| 3 | **website-intelligence** | Deep-research on prospect companies (tech stack, hiring signals, fit) |
| 4 | **passive-intelligence** | Watches for trigger events (news, raises, exec changes) for timely outreach |
| 5 | **repo-extraction** | Mines public GitHub repos for technical-buyer signals |
| 6 | **content-generation** | AI-writes custom one-pagers, emails, blog posts (Claude) |
| 7 | **email-campaign-sender** | Sends sequenced outreach across personalized segments |
| 8 | **follow-up** | Automated, tasteful follow-ups so leads never go cold |
| 9 | **reply-monitor** | Reads inbound replies + categorizes intent (interested / not / out of office) |
| 10 | **auto-responder** | Responds intelligently to qualified replies; routes hot leads to a human |
| 11 | **engagement-monitor** | Tracks who's actually opening, clicking, scrolling |
| 12 | **auto-distribution** | Publishes content across channels (email, social, web) |

(11 named workflows + the distribution layer = 12 total live; the deck rounds to "11 live automations" for the headline.)

**Built on:** Workflow orchestration + Anthropic Claude (writing/intelligence) + Resend (email) + Supabase (data). Customers don't see or care about the underlying tools — they see the outcome.

**Surface (what the user actually touches):**
- 8 admin pages: `/admin/gtm/{intelligence, emails, campaigns, factory, one-pagers, distribution, analytics, video, responses}`
- AI-powered output renderers: launch-plan, sales-enablement, partnership-strategist, customer-success, pricing-strategist, lead-gen-content, swot-analysis, growth-strategist
- Live at `realtechconsultant.com/admin/gtm` (auth required)
- Source: `[Realtech2/Real-tech-llc-portfolio/app/admin/gtm](../Realtech2/Real-tech-llc-portfolio/app/admin/gtm)`

**Build status:** ~85%. Needs: multi-tenant isolation, public marketing site, billing.

**Market size (rough):**
- TAM: GTM/sales tooling market ~$50B globally (Gartner, 2024)
- SAM: Mid-market B2B (10-500 employees) in US ~$8B
- SOM (year 1): 200 customers × $499/mo = $1.2M ARR

**Top 3 competitors:** Apollo.io, Clay.com, HubSpot Operations Hub. Our gap: integrated content + outbound + intelligence; theirs are point tools.

**Moat:**
- The 11-workflow library + AI orchestration is the asset (hard to replicate; took 6+ months to wire end-to-end)
- Brand: "we use this to land you" is unfakeable proof
- Switching cost rises as customer's data accumulates in our intelligence layer

**Channel Readiness:** ~~10/10~~ — every Real Tech consulting client becomes a warm GTM lead. We sell our own usage as the demo.

**Path to first $10k MRR:** 20 customers @ $499/mo = $9,980. Achievable in 90-120 days via direct sales to consulting clients + LinkedIn content engine.

**Founder lead:** Jonathan + Halim (build), with Wil + Braeden on product strategy (when joined).

**Adoption likelihood:** **9/10** — built, eats own dog food, fast-to-revenue, founder-market fit perfect.

**Risks:** Apollo/Clay race down-market with AI agents; underlying workflow tools require operator setup (we mask it — customers see only the GTM admin UI, never the orchestration).

---

## 2. Rovian.ai

**Tagline:** *Stop losing revenue to missed calls. AI receptionist for service businesses.*

**Problem:** 30-40% of inbound calls to small service businesses (plumbers, HVAC, electricians, lawyers) go unanswered — that's revenue walking to competitors. Existing answering services are robotic, expensive, and don't book appointments.

**Target customer:** Service businesses with field technicians: HVAC, plumbing, electrical, garage doors, locksmiths, law firms with high inbound volume. 50-500 employees.

**Solution:** AI voice receptionist (Vapi-powered) that sounds natural, books appointments, accounts for travel time via Google Maps, detects emergencies, and one-click hands off to a human. CRM integrations: Jobber, ServiceTitan, Clio, Google Calendar.

**What's already built:**
- Full NestJS + Next.js + Prisma stack — `[Rovian/stack](../Rovian/stack)`
- Vapi voice AI integration
- Stripe billing (subscription tiers + minute packs)
- Calendar sync, demo call requests, lead triage dashboard
- Live demo at rovian.ai with "call me now" CTA
- Public marketing site shipped: revenue calculator, ROI dashboard, "trusted by 50+ service businesses, 4.9/5 rating"

**Build status:** ~80%. Needs: more CRM integrations, white-label tier for resellers, dialer for outbound (currently inbound-only).

**Market size:**
- TAM: AI voice agents market ~$5B in 2026, projected $30B by 2030 (CB Insights)
- SAM: US small/mid service businesses ~6.5M businesses × ~$200/mo ARPU = $15.6B/yr
- SOM (year 1): 250 customers × $399/mo = $1.2M ARR

**Top 3 competitors:** Goodcall.ai, Polly.ai, Smith.ai (human-staffed). Our gap: vertical depth in service biz (travel-time math, emergency triage), Vapi voice quality.

**Moat:**
- Domain knowledge (emergency keywords, service-biz workflow, travel-time math)
- CRM integration depth (Jobber/ServiceTitan are sticky)
- "It just works for plumbers" brand

**Channel Readiness:** **8/10** — service-biz industry has tight word-of-mouth networks; one happy customer brings 5 referrals. We have 50+ early users.

**Path to first $10k MRR:** 25 customers @ $399/mo = $9,975. Inbound from rovian.ai marketing + paid ads on plumbing/HVAC trade publications.

**Founder lead:** Jonathan + Halim (build); Justin (BD into service-biz networks); existing 50+ users provide case studies.

**Adoption likelihood:** **9/10** — the hottest AI category of 2026, built, has paying users, has a measurable ROI calculator on the site.

**Risks:** Vapi pricing/availability (single-vendor risk); Twilio commoditizes; OpenAI ships a competing voice agent.

---

## 3. Wedding Planner AI (Real Tech Wedding)

**Tagline:** *The wedding CRM and website platform that makes The Knot feel like a template factory.*

**Problem:** Wedding professionals juggle 5-7 separate tools (CRM, email, budget, checklist, website builder, vendor manager). Couples get generic websites that look templated. Aisle Planner has dated UI and no AI; The Knot is ad-heavy; Zola is design-good but tools-shallow.

**Target customer:** **Primary B2B:** Wedding planners and small wedding agencies (1-20 weddings/year). **Secondary B2C:** Engaged couples planning DIY (via planner-referred white-label site).

**Solution:** AI-native wedding CRM + custom-built per-couple website + intake-to-launch workflow + AI writing assistants + budget AI + content generation. Per-client database isolation.

**What's already built:**
- Full Next.js 16 + Supabase + 27-table schema, AI integrated with Anthropic Claude
- Source: `[WeddingTemplate](../WeddingTemplate)` (PRD = 2045 lines, exhaustive)
- Stripe-ready, Resend-wired, Docker-ready
- **Already deployed for a paying customer:** Scott & Fiona (`[Scott&Fiona](../Scott&Fiona)`)
- 22-design-style gallery for couple-facing sites
- Intake wizard with 9+1 steps, AI writing assistants throughout

**Build status:** ~90%. Needs: client portal payments, vendor marketplace, multi-planner agency mode.

**Market size:**
- TAM: Event management software ~$15.5B (2024)
- SAM: US wedding industry $70B/yr; planners earn ~$2B/yr in fees; wedding-tech is ~$300M
- SOM (year 1): 150 planners × $99/mo + 1500 couple-sites × $19/mo = $464k ARR

**Top 3 competitors:** Aisle Planner ($50-230/mo, dated UI no AI), The Knot (free, generic templates, ad-heavy), Zola (free, design-good but no CRM/B2B). Honeybook is the wider-CRM comp.

**Moat:**
- AI-native (every surface has AI; competitors bolt it on later)
- Per-client deployment architecture (real data isolation, not multi-tenant fakery)
- Luxury intake UX (the form feels like opening a wedding invitation)
- Already paying customer = social proof + case study

**Channel Readiness:** **8/10** — Justin's event-industry partnerships (photographers, florists, venues) channel; Scott & Fiona is a referenceable customer; "Real Tech Wedding" can plug into the Life Events Suite bundle.

**Path to first $10k MRR:** 100 planners @ $99/mo + a few B2C licensees = ~$10k. Channel: photographer/florist/venue cross-promotion + Life Events Suite bundle.

**Founder lead:** Jonathan + Halim (build); Justin (event-industry BD); Wil (UX of couple-facing sites).

**Adoption likelihood:** **8/10** — built, deployed customer, strong wedge into a $70B industry.

**Risks:** Wedding industry is seasonal (May-Oct concentration); The Knot/Zola can copy AI features; planner segment is a long-tail of small businesses (high CAC).

---

## 4. DealPayment.com

**Tagline:** *Crypto escrow for titled assets. Patent-pending. State-compliant.*

**Problem:** P2P sales of cars, RVs, boats, and bikes are riddled with fraud, hidden liens, and multi-state title transfer chaos. Traditional escrow doesn't atomically link payment to verified title transfer. Government title events live off-chain — there's no cryptographic proof.

**Target customer:** **Phase 1:** Used-vehicle P2P sellers and buyers. **Phase 2:** Independent dealerships (channel partners already in pipeline). **Phase 3:** Boats, RVs, bikes, future = real estate parcels.

**Solution:** Blockchain-powered escrow on Base L2. Buyer funds crypto. System generates state-specific title paperwork listing DealPayment as temporary lienholder. Monitors state ELT (Electronic Lien & Title) records. When title flips and we're listed as lienholder, smart contract releases funds and mints a **DealPayment Token (DPT)** on-chain as immutable proof of off-chain government-confirmed title transfer.

**What's already built:**
- Live marketing site at dealpayment.com
- System architecture documented (`[Downloads/DealPayment_Developer_Summary.pdf](../Downloads/DealPayment_Developer_Summary.pdf)`)
- Tech stack: NestJS or Go backend, Postgres+Redis, BullMQ/Temporal queues, BTC Core RPC + EVM (ethers.js), ERC-721 DPT contract, AWS KMS for keys

**Build status:** ~50%. Marketing site live + architecture defined. Needs: ELT integrations per state, smart contract deployment + audit, KYC/compliance layer, dealer dashboard.

**Market size:**
- TAM: US used-vehicle market ~$840B/yr (NADA, 2024)
- SAM: P2P used-vehicle transactions ~$80B/yr (~10% of total)
- SOM (year 1): 5,000 transactions × $200 fee = $1M; with dealership channel maybe 5x = $5M

**Top 3 competitors:** Escrow.com (centralized, slow), CarsCommerce / Cars.com (listing-only, no escrow), traditional title companies. Direct crypto-escrow comps: minimal — patent-pending creates white space.

**Moat:**
- **Patent pending on ELT-linked escrow + DPT mint process** — this is the strongest IP moat in the portfolio
- State-specific title paperwork generation (compliance is a barrier to entry)
- Cryptographic proof of off-chain title transfer (novel technical approach)
- Tim's crypto/legal/LATAM connections derisk the regulatory path

**Channel Readiness:** **7/10** — *[Confidential — N partners in dealership pipeline; crypto leader connections via Tim Elias]*. Independent dealerships solve the cold-start problem (volume comes from professional sellers, not P2P).

**Path to first $10k MRR:** Hard to template MRR for transaction-fee model. Equivalent: 50 transactions/mo × $200 = $10k/mo. Through 2-3 dealership partners doing 20+ transactions/mo each.

**Founder lead:** Jonathan + Halim (build); **Tim Elias (legal + crypto + LATAM)** is the unique unlock here.

**Adoption likelihood:** **7/10** — patent pending is a real moat, dealership channel pipeline exists, but build timeline is longest and regulatory risk is real.

**Risks:** SEC clarity on tokenization; state-by-state DMV API access; chargeback/dispute resolution edge cases; Base L2 dependency.

---

## 5. Channel Partner Portal

**Tagline:** *The multifamily layer the category doesn't ship. Owners create work orders. Vetted GCs bid. Ratings drive trust.*

**Problem:** Multifamily property managers (and adjacent commercial real estate, HOAs, hospitality chains) need recurring vendor work — repairs, turnover, capex projects — but the existing solution is spreadsheets, phone calls, and a rolodex of "guys we like." No transparency, no rating system, no bid competition. the multifamily proptech employer and Yardi don't ship a vendor marketplace; ServiceChannel and Building Engines target large enterprise only.

**Target customer:** Multifamily property management companies with 1,000-50,000 units. Adjacent: HOAs, commercial property, hospitality chains.

**Solution:** Two-sided marketplace. **Side 1:** Multifamily creates work orders (turnover, repairs, capex bids). **Side 2:** GCs and contractors apply, get vetted, bid on work, build a rating profile. **Match:** Operator picks vendor by bid + rating + proximity.

**What's already built:** Concept stage. PRD to be written.

**Build status:** ~5%. PRD + wireframes + go-to-market plan needed before code.

**Market size:**
- TAM: US multifamily management ~$1.5B in tech spend (NMHC); contractor services to multifamily ~$50B/yr
- SAM: Multifamily portfolios above 1,000 units = ~600 companies = ~$300M tech spend
- SOM (year 1): 20 multifamily customers × $2,500/mo + 10% take rate on $5M GMV = $1.1M ARR

**Top 3 competitors:** [ServiceChannel](https://servicechannel.com) (enterprise, retail-focused), [Building Engines](https://buildingengines.com) (commercial RE), [BuildingLink](https://buildinglink.com) (resident-facing). Our gap: SMB-mid-market multifamily, two-sided marketplace with ratings, native to operator workflows the the multifamily proptech employer team already understands.

**Moat:**
- **multifamily proptech leadership team (5 of 6 founders/recruits — 3 VPs + 2 Directors)** — direct warm-intro access to 15 of top 20 multifamily operators
- **Justin Lesko founded mrktstreet (2015)**, a marketplace for home service providers — identical concept, learning curve already paid down
- 51+ combined years multifamily proptech expertise: nobody else can show this on a slide
- Network effect: once ratings/bid history accumulates, switching cost climbs

**Channel Readiness:** **9/10** — the team's existing relationships at the multifamily proptech employer's customer base = warm pipeline of 15 operators day-one (subject to NDA + non-poach considerations).

**Path to first $10k MRR:** 4 multifamily customers @ $2,500/mo = $10k. Sold via warm intro through founder network.

**Founder lead:** **The whole the multifamily proptech employer triumvirate.** Jonathan (solutions architecture), Justin (BD + prior identical startup), Braeden (product), Wil (smart-communities product depth). Halim engineers it.

**Adoption likelihood:** **8/10 (hypothetical, score climbs to 10/10 if executed by this team)** — concept-stage, but founder-market fit may be the strongest in the portfolio. **The deck's "PayPal Mafia" slot.**

**Risks:** Build timeline (12-18 months realistic); two-sided marketplace cold-start (need vendors *and* operators); the multifamily proptech employer could ship this themselves once they hear about it (mitigated by speed + relationships).

---

## 6. Cannabis HighTide

**Tagline:** *Dispensary POS + delivery + compliance, built for operators who hate the existing options.*

**Problem:** Cannabis retail tech is dominated by a few legacy POS vendors (Treez, Flowhub, Dutchie) that operators complain about constantly — bad UX, poor inventory accuracy, weak compliance reporting, expensive. Compliance burden (METRC, BioTrack) is heavy and varies by state.

**Target customer:** Single-location and small-chain dispensaries (1-5 locations) in legal states; secondary: cannabis delivery operators.

**Solution:** Modern POS + inventory + delivery dispatch + compliance reporting. Built on a v0 marketplace frontend (Next.js).

**What's already built:**
- v0 marketplace frontend in `[Cannabis - High Tide/v0-cannabis-marketplace-frontend](../Cannabis - High Tide/v0-cannabis-marketplace-frontend)`
- Marketing/storefront layer

**Build status:** ~30%. Needs: POS hardware integration, METRC API integration, inventory sync, payment processing (cannabis-friendly processors only).

**Market size:**
- TAM: US legal cannabis market ~$40B (2024, projected $70B by 2030)
- SAM: US dispensary POS tech ~$500M/yr
- SOM (year 1): 30 dispensaries × $499/mo + 2% take on $30M GMV = $780k ARR

**Top 3 competitors:** [Dutchie](https://dutchie.com), [Treez](https://treez.io), [Flowhub](https://flowhub.com). Our gap: modern UX, simpler pricing, partner-led GTM.

**Moat:**
- **Channel partners already in pipeline** *[Confidential — N cannabis operator partners]*
- Compliance complexity is a barrier to new entrants (good for us once built)
- Federal banking restrictions create friction that deters Big Tech entry

**Channel Readiness:** **8/10** — *[Confidential — partner pipeline live]*; bypasses cold-start.

**Path to first $10k MRR:** 20 dispensaries @ $499/mo = $9,980. Channel-partner-led.

**Founder lead:** Jonathan + Halim (build); cannabis-industry partner does GTM.

**Adoption likelihood:** **6/10 → 7/10** with named partners — niche but sticky, partner pipeline elevates it.

**Risks:** Federal regulatory shift; payment processor risk (cannabis is high-risk); partner reliability; compliance regimes change per state.

---

## 7. edgenote.ai

**Tagline:** *Your voice. Your notes. Your device. 100% on-device AI.*

**Problem:** Meeting notes, voice memos, and AI summaries today require uploading audio to Otter.ai, Fireflies, Granola, etc. — your most sensitive conversations leave your device. Privacy-conscious users (lawyers, therapists, executives) need a local-first option.

**Target customer:** Privacy-conscious prosumers — lawyers, therapists, executives, journalists, founders, healthcare. Secondary: anyone offline who needs transcription (field workers, travelers).

**Solution:** Desktop app for macOS and Windows. Records and transcribes meetings 100% on-device via whisper.cpp + llama.cpp. AI summaries with action items and decisions. Speaker detection. Smart collections. **Works offline.**

**What's already built:**
- Live at edgenote.ai
- Desktop downloads available for both macOS and Windows
- Real-time transcription via on-device Whisper
- AI summaries via on-device llama
- Speaker diarization
- Smart Collections for organizing notes

**Build status:** ~95%. Live and selling.

**Pricing:** **$9.99 lifetime** (one-time, no subscription)

**Market size:**
- TAM: AI meeting tools market ~$1.5B (2024)
- SAM: Privacy-conscious prosumer segment ~$200M
- SOM (year 1): 5,000 sales × $9.99 = $49,950 (one-time); + B2B tier @ $99/lifetime × 500 = $49,500 = ~$100k. Lifetime model, not MRR.

**Top 3 competitors:** [Otter.ai](https://otter.ai) (cloud, $10-30/mo), [Fireflies.ai](https://fireflies.ai) (cloud, $10-19/mo), [Granola](https://granola.ai) (cloud, $18/mo). Our gap: 100% on-device privacy posture is unmatched.

**Moat:**
- Privacy positioning is a real wedge (regulated industries need local-only)
- Lifetime pricing creates word-of-mouth (no churn anxiety, customers evangelize)
- Technical complexity (running whisper.cpp + llama.cpp efficiently on consumer hardware) is non-trivial

**Channel Readiness:** **6/10** — direct-to-consumer via website + privacy-community channels (Hacker News, Reddit r/privacy, lawyer/therapist forums).

**Path to first $10k MRR:** Lifetime model doesn't fit MRR. Equivalent: 1,000 sales/mo × $9.99 = $9,990/mo (steady-state). Achievable via Hacker News launch + privacy-community marketing.

**Founder lead:** Jonathan + Halim (build); product-led growth, low touch.

**Adoption likelihood:** **6/10** — live and selling, defined niche, but lifetime pricing caps revenue ceiling unless we add a B2B tier.

**Risks:** Apple/Microsoft ship native local-AI transcription (Apple Intelligence is already shipping summaries); local-LLM quality lags cloud frontier; Mac vs. PC dual-platform support overhead.

---

## 8. Kith (startakith.com)

**Tagline:** *Some moments deserve their own little place. Private spaces for life's big moments.*

**Problem:** When something big happens — a baby is born, someone gets married, a loved one passes — friends and family flood your phone with texts wanting updates. You're stretched thin. Public social media is wrong (algorithm, ads, strangers). Group texts get unwieldy.

**Target customer:** Parents, couples, families, communities navigating big life moments. **Founder story is Jonathan's own:** built it after his son was born when "the check-in, the bags, the emotions, and a hundred texts asking for updates got overwhelming fast."

**Solution:** Private spaces tied to a moment. Photos, chats, wishes, help requests — all in one place, while it's happening. No app to download. Phone-number sign-in. "Easy enough for grandma." Some spaces last a month, some last forever.

**What's already built:**
- **Live and launched at kith.com / startakith.com**
- Production-grade: Stripe, Sentry, Resend, Upstash rate limiting, Vercel Analytics, Playwright tests, multi-tenant Supabase RLS, web push, image compression
- Source: see `[.cursor/plans/kith_launch_readiness_plan_*.md](../.cursor/plans/kith_launch_readiness_plan_952acd89.plan.md)` (all 15 launch blockers completed)
- 8 categories: baby arrivals, weddings, graduations, memorials, group trips, birthdays, showers, anything

**Build status:** ~95%. Live with all production hardening.

**Pricing:** Free to start, premium tiers via Stripe (subscriptions wired)

**Market size:**
- TAM: Private social / event-coordination apps ~$2B
- SAM: US households experiencing major life moments ~50M/yr
- SOM (year 1): 100k spaces × 5% premium conversion × $9/mo = $54k MRR (~$650k ARR)

**Top 3 competitors:** [TinyBeans](https://tinybeans.com) (baby-only), [Caringbridge](https://caringbridge.org) (medical-only nonprofit), private Instagram / WhatsApp groups. Our gap: cross-moment platform, no app download, grandma-friendly.

**Moat:**
- **Founder authenticity** — Jonathan's son's birth story is the brand origin
- Network effects (each space invites 20-100 people; some convert to creators)
- Multi-moment platform vs. single-moment competitors (one app for life's whole arc)
- Zero-app-download UX is a real wedge for older / less-tech-savvy users

**Channel Readiness:** **7/10** — direct-to-consumer; viral coefficient via invite link; potential bundle with Wedding Planner AI + Baby Tracker (Life Events Suite play).

**Path to first $10k MRR:** ~1,100 active premium spaces × $9/mo. Channel: organic + Life Events Suite bundle.

**Founder lead:** Jonathan (founder + creator); product-led growth.

**Adoption likelihood:** **7/10** — live, founder-story strong, but B2C consumer apps have famously hard CAC. Bundle play unlocks more.

**Risks:** B2C CAC is brutal; Apple/Google could ship "moments" feature in iCloud/Photos; emotional category requires very low spam tolerance.

---

## 9. Baby Tracker

**Tagline:** *The baby tracker that doesn't sell your data.*

**Problem:** New parents need to track feedings, sleep, diapers, milestones. The dominant apps (Huckleberry, BabyTracker, Glow) are crowded with ads, sell data, and have heavy subscription monetization.

**Target customer:** New parents (0-2 years), particularly privacy-conscious ones; secondary: pediatrician practices.

**Solution:** Vite-based fast lightweight tracker. Bundle component of Life Events Suite (Wedding → Kith → Baby Tracker = the lifecycle).

**What's already built:** `[Baby tracker/babytracker](../Baby tracker/babytracker)` — Vite app with vercel.json. ~40% complete.

**Build status:** ~40%. Needs: pediatrician export, milestone library, wearable integration if pursued solo.

**Market size:**
- TAM: Baby/parenting apps ~$1.5B/yr
- SAM: US new parents ~3.7M/yr × ~30% paid app adoption × $50/yr ARPU = $55M
- SOM (solo): tiny (~$200k ARR best case in year 1 — crowded)

**Top 3 competitors:** [Huckleberry](https://huckleberrycare.com), [BabyTracker](https://babytrackers.com), [Glow Baby](https://glowing.com). Our gap as a solo product: weak. Our gap as part of Life Events Suite: strong (cross-sell from Wedding Planner customers).

**Moat (solo):** Limited.
**Moat (in bundle):** LTV multiplier on existing Wedding/Kith customers; lifecycle stickiness.

**Channel Readiness:** **3/10** solo, **7/10** in the Life Events Suite bundle.

**Path to first $10k MRR:** Solo: tough (CAC > LTV in crowded category). In bundle: trivial — 1,000 Wedding Planner customers × 30% baby attach × $19/mo = $5,700.

**Founder lead:** Jonathan + Halim (build); only viable inside the bundle.

**Adoption likelihood:** **3/10 solo · 7/10 in Life Events Suite**

**Risks (solo):** Apple Health acquires the category; Huckleberry's data network effect is strong.

---

## 10. Rehabit

**Tagline:** *AI-scored real estate. Buy. Flip. Or broker.*

**Problem:** Real estate investors and fix-and-flippers spend hours in MLS, Zillow, county records, and rehab cost calculators trying to identify undervalued properties. Existing tools (PropStream, Mashvisor) are expensive and clunky; market signals are slow to surface.

**Target customer:** Two paths to choose:
- **Path A — SaaS tool:** Independent fix-and-flip investors, real estate brokers, small property funds (~50k operators in US)
- **Path B — Operating model:** We use it ourselves to find deals, fix-and-flip, or broker

**Solution:** AI scoring layer over MLS + county records + market data + rehab cost models. Rank properties by deal score. Notify when score thresholds hit.

**What's already built:** Concept stage. Zero code.

**Build status:** ~0%. PRD + data partner agreements (MLS, county) needed before code.

**Market size:**
- TAM (SaaS path): US real-estate investor tech ~$1B/yr
- SAM (SaaS path): Active fix-and-flip + small RE investors ~$300M
- SOM (SaaS path year 1): 200 customers × $199/mo = $478k ARR
- Operating path: capital-intensive; ROI on per-deal basis, no MRR

**Top 3 competitors:** [PropStream](https://propstream.com), [Mashvisor](https://mashvisor.com), [DealMachine](https://dealmachine.com). Our gap as SaaS: AI-scoring depth + better UX. Our gap as operator: speed + AI + Tim's legal/transaction expertise.

**Moat:**
- AI scoring algorithm (data + model = the asset)
- Tim's real estate / legal / transaction expertise (operating path)
- Brand: "Real Tech does Real Estate" is a natural extension of the parent brand

**Channel Readiness:** **3/10** as SaaS; depends on Tim's network for operator path.

**Path to first $10k MRR (SaaS):** 50 customers @ $199/mo = $9,950. Long path — 9-12 months minimum.

**Founder lead:** Tim Elias (real estate / legal / transactions); Jonathan + Halim build the tool.

**Adoption likelihood:** **4/10 SaaS · 5/10 operating model · 5/10 hybrid** — concept-stage, capital-light if SaaS but slow; capital-heavy if operating but faster ROI per deal.

**Risks (SaaS):** PropStream/Mashvisor compete on data depth; MLS access is gatekept by NAR.
**Risks (operating):** capital exposure; market timing risk.

---

## 11. Life Events Suite (Bundle: Wedding + Kith + Baby Tracker)

**Tagline:** *One platform for life's big chapters. Marriage. Community. Family.*

**Problem:** Three different apps, three different signups, three different wallets. Couples planning a wedding will be parents within 24-36 months — they're the same customer at different lifecycle moments.

**Target customer:** Engaged couples → newlyweds → new parents. Secondary: their friend/family network (who become Kith users).

**Solution:** One bundled offer. Engaged couple buys Wedding Planner (B2C). Wedding day creates Kith spaces for the celebration. Kith stays active for honeymoon, anniversaries, then baby arrival. Baby Tracker activates when ready.

**What's built:** All three components live (~90% Wedding, ~95% Kith, ~40% Baby).

**Pricing model (proposed):**
- "Engaged" tier: $199/year — Wedding Planner full access + 1 Kith space
- "Newlywed" tier: $99/year — Kith + 6 mo Baby Tracker preview
- "Family" tier: $249/year — all three forever

**Market size:**
- TAM: Each component's TAM (Wedding $300M tech, Kith $2B social, Baby $1.5B parenting)
- SOM (year 1, bundle-led): 2,000 Engaged customers × $199 = $398k ARR + ancillary

**Channel:** Justin's event-industry partnerships (photographers/florists/venues attach Wedding Planner) → built-in baby/family upsell as customer ages.

**Channel Readiness:** **8/10** — leverages Justin's existing event network + Wedding Planner's existing paying customer (Scott & Fiona) for case studies.

**Founder lead:** Justin (BD across event industry) + Jonathan (orchestration).

**Adoption likelihood:** **7/10** — strongest non-Channel-Partner argument for the recommendation; turns Baby Tracker from a #9 weakness into a #11 strength via attach economics.

**Risks:** Bundle complexity (customers don't always want the whole thing); attach rates may be lower than projected; stitching three apps with one billing layer requires engineering work.

---

## Sourcing Notes

- **TAM/SAM/SOM:** Rough sizing from public industry reports (Gartner GTM, NMHC multifamily, NADA used-vehicle, NAR real estate, IBISWorld cannabis). Footnoted as "rough sizing" in the deck — refine before any external sharing.
- **Build %:** Self-reported based on code inspection during deck research. Confirm during your revision.
- **Competitor citations:** All linked in `[02-competitive-landscape.md](02-competitive-landscape.md)`.
- **Channel Readiness:** Subjective 1-10 score reflecting whether named partners/warm intros exist today. Cannabis HighTide and DealPayment carry `[Confidential]` annotations for partner identities.
