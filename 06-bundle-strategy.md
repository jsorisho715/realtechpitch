# 06 — Bundle Strategy: Life Events Suite

The Wedding Planner AI + Kith + Baby Tracker bundle. Why it's a strategy, not a feature.

---

## The Insight

A 28-year-old getting engaged today will, on average, become a parent within 24-36 months. They are the **same customer** at three different lifecycle moments. Every wedding-tech company stops at the wedding. Every baby-tech company starts at the baby. **Nobody owns the connective tissue.**

The Life Events Suite is what happens when you realize that wedding planning, family communication, and baby tracking are not three markets — they're three quarters of the same customer's life.

---

## The Funnel

```
                    Engagement
                        │
                        ▼
         ┌──────────────────────────────┐
         │      Wedding Planner AI      │  $499/yr "Engaged" tier
         │  (Real Tech Wedding)         │  9-12 month relationship
         └──────────────┬───────────────┘
                        │
                        ▼
         ┌──────────────────────────────┐
         │              Kith            │  Wedding day creates Kith space
         │  (private space for guests)  │  $9/mo "Newlywed" continuation
         └──────────────┬───────────────┘
                        │
                        ▼
         ┌──────────────────────────────┐
         │          Baby Tracker         │  ~24-36 mo later for ~50%
         │   (private, in-bundle)        │  $19/mo "Family" tier
         └──────────────────────────────┘

Each stage uses the same login, same billing, same brand.
Customer doesn't shop for 3 tools. They graduate through 1 platform.
```

---

## Pricing Architecture

### Tier 1 — "Engaged" — $199 / year (or $19/mo)
- Full Wedding Planner AI access
- 1 free Kith space (the wedding itself)
- Lifetime invite link (so guests can re-access photos forever)

### Tier 2 — "Newlywed" — $99 / year (or $9/mo)
- Continued Kith access (anniversary, first home, group trips)
- 6-month preview of Baby Tracker (active when ready)
- Honeymoon trip Kith space included

### Tier 3 — "Family" — $249 / year (or $24/mo)
- Wedding Planner data archive (retained forever for milestones, anniversaries)
- Unlimited Kith spaces
- Full Baby Tracker
- Pediatrician export, milestone library, photo backup

### Tier 4 — "Lifetime" — $999 one-time
- All three apps forever
- Future apps in the suite included (graduations, memorials, milestones)
- Concierge migration if joining mid-relationship

---

## Unit Economics (working hypothesis)

### Solo (each app priced separately)
- Wedding Planner standalone: $19/mo × 12 = $228/yr
- Kith standalone: $9/mo × 12 = $108/yr
- Baby Tracker standalone: $9/mo × 12 = $108/yr
- **Theoretical total if customer bought all 3 separately:** $444/yr
- **Realistic separate-buy attach rate:** ~10% (most buy one)
- **Average effective revenue per customer:** ~$240/yr

### Bundle (Life Events Suite)
- Engaged tier: $199/yr (year 1)
- Newlywed tier: $99/yr (year 2)
- Family tier: $249/yr (year 3+)
- **Average customer LTV (3-year window):** $547
- **Compared to solo theoretical:** $444 ceiling
- **Compared to solo realistic:** $240 actual
- **LTV multiplier vs. realistic solo:** ~2.3x

The bundle isn't priced lower per app — it's priced for retention. A customer buying piecewise drops off between life stages. The bundle keeps them in the platform through all three.

---

## Channel Strategy

This is where Justin Lesko's lane lights up.

### Channel 1 — Wedding professionals (B2B → B2C funnel)

| Partner type | Why they refer | What we give them |
|--------------|----------------|--------------------|
| Wedding planners | Need a CRM that doesn't suck (Wedding Planner B2B) | $99/mo planner-CRM, free for first couple to drive usage |
| Photographers | Sell post-wedding photo-archive package | 20% revenue share on bundled customer |
| Florists | Cross-sell premium events to existing brides | Co-branded landing pages |
| Venues | Their couples need planning tools | White-label Wedding Planner as their offering |
| Officiants | Often have closest couple relationship | Affiliate code; first month commission |

### Channel 2 — Direct via Kith (B2C virality)

Kith already has a viral coefficient — every wedding/baby/birthday space invites 20-100 people. Of those invitees, **some percentage are themselves engaged or expecting**. The bundle's "Engaged" tier upsell appears in the Kith UX when relevant moments are detected.

### Channel 3 — Hospital and registry partnerships

Phase 2 (after first 1,000 customers):
- Maternity-ward partnerships (hospitals offer Family Tier discount in their welcome packets)
- Registry partnerships (Zola, BabyList, MyRegistry — co-marketing)
- Pediatrician practice referrals (Baby Tracker as the share-with-your-pediatrician tool)

---

## What Each App Brings to the Bundle

### Wedding Planner AI brings:
- Highest-WTP (willingness-to-pay) entry point — couples spend $35K avg on weddings; $199/yr is rounding error
- Long planning runway (9-12 months) means deep onboarding
- Already shipped + already has paying customer (Scott & Fiona)
- B2B revenue stream from wedding planners offsets B2C CAC

### Kith brings:
- Production-grade infrastructure (already live, already monetized via Stripe)
- Viral coefficient (every space invites 20-100 people, some of whom become customers)
- The most emotional, high-NPS surface area
- The "stickiness" between life stages — Kith is the only thing always running

### Baby Tracker brings:
- Massive repeat-engagement (used multiple times/day for 12-24 months)
- Deepest data dependency (baby logs are extremely sticky once started)
- Lowest individual willingness-to-pay (~$9-19/mo solo)
- **Wouldn't justify standalone investment but is invaluable as bundle anchor for Year 3+ retention**

---

## Why This Beats "Build Three Separate Companies"

| Solo Strategy | Bundle Strategy |
|---------------|-----------------|
| 3 brand-builds (Wedding, Kith, Baby) | 1 brand-build (Life Events Suite as a sub-brand) |
| 3 marketing budgets | 1 funnel, 3 monetization moments |
| 3 customer-acquisition costs | 1 CAC amortized across 3 LTV moments |
| 3 product roadmaps competing | 1 unified roadmap with sequenced launches |
| Solo Baby Tracker dies in crowded market | Baby Tracker thrives via internal cross-sell |

**Founder-time spend:** Same 3 apps, same engineering effort. **Marketing/CAC savings:** ~60% per dollar spent.

---

## Risk Register

| Risk | Likelihood | Mitigation |
|------|:---:|------|
| Bundle pricing too complex; customers churn from confusion | Medium | Default tier per life-moment + upgrade nudges; never force the bundle |
| Wedding-only buyers (50%+) never advance | High | Accept it. Engaged tier is profitable on its own |
| Kith viral loop fails to attract Engaged customers | Medium | Add explicit "engaged?" UX prompts in spaces |
| Baby Tracker engineering load exceeds bundle ROI | Medium | Defer Baby until Wedding+Kith hit $25k MRR |
| Apple/Google ship native "Life Moments" suite | Low-Medium | Our wedge is privacy + multi-app coherence + B2B planner CRM tier |
| The Knot or Zola counter-bundles | Medium-High | Speed: ship the bundle BEFORE the incumbents notice |

---

## Founder Lead

- **Justin Lesko** — partnership channel (event industry → registry → hospitals)
- **Jonathan Sorisho** — orchestration; brand (Real Tech Family / Life Events Suite naming)
- **Wil Gomez** — UX of the connecting tissue between apps (single sign-on, billing, lifecycle prompts)
- **Halim Khaldi** — engineering the unified billing + identity layer that ties three apps to one customer

---

## Success Metrics

If we launch the Life Events Suite, the bundle is winning when:

| Metric | Year 1 target | Year 2 target |
|--------|--------------|--------------|
| Engaged-tier customers | 1,000 | 5,000 |
| Engaged → Newlywed retention | 60% | 70% |
| Newlywed → Family retention | 40% | 55% |
| Bundle ARR | $400k | $2.5M |
| % bundle customers vs. standalone | 30% | 60% |
| Wedding-pro partner channel customers | 200 | 1,500 |

---

## Why This Should Be on the "Do" List

The Life Events Suite is not the recommended top-2 in the deck (that's Real Tech GTM + Channel Partner Portal). But it's the **recommended #3** because:

1. Three apps already built (Wedding 90%, Kith 95%, Baby 40%)
2. Unique strategic moat: nobody else owns the lifecycle
3. Activates Justin's BD lane in a way that doesn't require multifamily access
4. Generates B2C brand visibility that helps Real Tech Consulting B2B sales (parents who use our tools become operators who hire us)
5. Compatible with the "Real Tech parent + product brands" architecture in `[07-brand-architecture.md](07-brand-architecture.md)`

If the meeting decides to pick **3** apps instead of **2**, this is the obvious third.
