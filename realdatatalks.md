# RealDataTalks v2 — Site Documentation

> **Brand:** RealDataTalks
> **Tagline:** Investment intelligence and execution across four markets
> **Description:** Investment intelligence platform for real estate investors across Spain, Portugal, Greece and Italy
> **Website:** https://realdatatalks.com
> **Stack:** Static HTML + Tailwind CDN + vanilla JS (zero build step)
> **Style direction:** Dark cinematic, full-bleed hero video, oversized display type, Instrument Serif italic accents

---

## 1. File / folder layout

```
web_realdatatalks_2/
│
├── pageplan.md                      # original reference spec
├── realdatatalks.md                 # this document
│
├── index.html ★ cinematic homepage
├── services.html                    # 4 core services + 4 plans + supporting
├── about.html                       # story + 4-point "why us"
├── contact.html                     # form + contact cards
├── blog.html                        # Insights: RealDataLab feature + planned tracks
├── pricing.html                     # 5-stage funnel pricing page
├── rdlab.html                       # RealDataLab investment intelligence product
├── 404.html                         # dark error page
│
├── css/
│   └── site.css                     # tokens · hero-video · marquee
│                                    # display-xxl · cat-card-xl · orbs
├── js/
│   ├── header.js                    # sticky scroll · mobile toggle · year
│   ├── stats.js                     # IntersectionObserver counters + reveal
│   └── form.js                      # Google Apps Script POST + "Other" toggle
│
└── assets/
    ├── favicon.svg
    └── images/
        ├── logo/
        │   ├── logo.svg
        │   └── logo-2.svg
        └── investments/
            └── inv_01.jpg … inv_12.jpg   (12 category images)
```

---

## 2. Brand positioning

**Four-market platform:**
- **Spain** — hub, full in-house service (data · legal · design · construction)
- **Portugal** — Lisbon · Porto · Algarve (partner network)
- **Greece** — Athens · Peloponnese · Islands (partner network)
- **Italy** — Milan · Rome · Venice (partner network)

**Spain cities:** Barcelona · Madrid · Valencia · Málaga · Bilbao · Canarias

**Five-stage investment funnel:**
```
Stage 01 — Insight              Investigate the landscape. Free via RealDataLab.
Stage 02 — Analysis             Prove a selected property for investment. Quoted.
Stage 03 — Concept              Individual legal and technical check. Quoted.
Stage 04 — Business Model       Bespoke due diligence and business model. Quoted.
Stage 05 — Construction Mgmt    Full engagement: purchase, design, build. Quoted.
```

---

## 3. Navigation (all pages)

**Desktop nav:**
```
[RealDataTalks logo]  Services  About  RealDataLab  Insights  Pricing  [Book consultation]
```

**Services mega-menu (dropdown):**
```
┌ Main Professional Services ─┐  ┌ Prêt-à-porter Models ──┐
│ Real Estate Data Science    │  │ PLAN A — LIVE          │
│ Business Intelligence       │  │ PLAN B — RENT          │
│ Geo Marketing               │  │ PLAN C — SELL          │
│ Business Modelling          │  │ PLAN X — BUSINESS      │
│                             │  │ ───────────────────    │
│                             │  │ Legal and Tax          │
│                             │  │ Design and Build       │
└─────────────────────────────┘  └────────────────────────┘
```

**Mobile nav order:** Services · About · RealDataLab · Insights · Pricing · Contact

---

## 4. services.html — section order

```
HERO  ─ "Four core services, four investment models"
   │
   ▼
① MAIN PROFESSIONAL SERVICES (2×2 grid)
    01 Real Estate Data Science     02 Business Intelligence
    03 Geo Marketing                04 Business Modelling
   │
   ▼
② PRÊT-À-PORTER INVESTMENT MODELS (2×2 grid)
    PLAN A — Invest to LIVE         PLAN B — Invest to RENT
    PLAN C — Invest to SELL         PLAN X — Invest to BUSINESS
   │
   ▼
③ SUPPORTING SERVICES (2-col)
    Legal and Tax                   Design and Build
   │
   ▼
CTA  ─ "Ready to start?"
FOOTER
```

---

## 5. index.html — section stack (top → bottom)

```
 ╔═══════════════════════════════════════════════════════╗
 ║  ① HERO — full-bleed video stage (100vh)              ║
 ║     ┌─ autoplay YouTube bg (aflK56-sQts, muted loop)  ║
 ║     ├─ dark veil + noise overlay                      ║
 ║     ├─ word-reveal headline: "Real estate,            ║
 ║     │     rebuilt around data."                       ║
 ║     ├─ meta row: tagline · [Explore] · [WhatsApp]     ║
 ║     └─ scroll hint (right corner)                     ║
 ╠═══════════════════════════════════════════════════════╣
 ║  ② MARQUEE — infinite ticker                          ║
 ║     Real Estate Data Science · Business Intelligence  ║
 ║     Geo Marketing · Business Modelling                ║
 ║     LIVE · RENT · SELL · BUSINESS · Legal · Design    ║
 ╠═══════════════════════════════════════════════════════╣
 ║  ③ STATS BAND (with floating orbs bg)                 ║
 ║     Heading: "Founded on expertise. Built for scale." ║
 ║     ┌───────┬───────┬───────┬───────┐                 ║
 ║     │   4   │   4   │  12+  │ 100%  │  count-up       ║
 ║     │ core  │ models│ cats. │ data  │                 ║
 ║     └───────┴───────┴───────┴───────┘                 ║
 ╠═══════════════════════════════════════════════════════╣
 ║  ④ AUDIENCE FORK — two paths                          ║
 ║     Card A: "Show me where to invest next"            ║
 ║     Card B: "Take me straight to execution"           ║
 ╠═══════════════════════════════════════════════════════╣
 ║  ⑤ MAIN PROF. SERVICES — editorial grid               ║
 ║     01 Data Science · 02 BI · 03 Geo · 04 Biz Mod    ║
 ║     + pill links: Legal & Tax · Design & Build        ║
 ╠═══════════════════════════════════════════════════════╣
 ║  ⑥ WHERE WE WORK — network map                        ║
 ║     Spain (hub) · Portugal · Greece · Italy           ║
 ╠═══════════════════════════════════════════════════════╣
 ║  ⑦ HOW IT WORKS — value ladder (5 stages)             ║
 ║     Stage 01 Insight → 02 Analysis → 03 Concept       ║
 ║     → 04 Business Model → 05 Construction Mgmt        ║
 ╠═══════════════════════════════════════════════════════╣
 ║  ⑧ CASE STUDIES — "Capital at work"                   ║
 ║     Project 01: Barcelona industrial conversion       ║
 ║     Project 02: Marbella heritage renovation          ║
 ║     Project 03: Patras Airbnb retrofit (Greece)       ║
 ╠═══════════════════════════════════════════════════════╣
 ║  ⑨ CTA + FORM                                         ║
 ║     "Let's build something measurable"                ║
 ╠═══════════════════════════════════════════════════════╣
 ║  ⑩ FOOTER — 4 columns                                 ║
 ║     Brand │ Core services │ Investment models │ Connect
 ╚═══════════════════════════════════════════════════════╝
```

---

## 6. Service taxonomy (verbatim)

### Main Professional Services (4 core)

**01 · Real Estate Data Science**
- Big-data acquisition & cleaning
- Predictive property valuation models
- Market trend forecasting
- Machine learning for deal screening
- Custom statistical research
- Integration with public datasets (INE, Catastro, INE-PT, ELSTAT)

**02 · Business Intelligence**
- KPI dashboards for portfolios
- ETL pipelines from heterogeneous sources
- Performance benchmarking
- Executive reporting
- Interactive visualizations
- Real-time data monitoring

**03 · Geo Marketing**
- Location intelligence & catchment analysis
- Demographic & socioeconomic profiling
- Competitor mapping
- Site selection scoring
- Heatmap & spatial segmentation
- Foot-traffic & POI analytics

**04 · Business Modelling**
- Feasibility studies & pro formas
- Cash-flow projections
- Scenario & sensitivity analysis
- Capex / opex planning
- Exit strategy modelling
- Risk assessment matrices

### Prêt-à-porter Investment Models (4 turnkey plans)

**PLAN A — Invest to LIVE**
Search and assess property · Design + permit · Renovation / construction works · Quality / finance control · Related legal services · Tailored interior design + decoration

**PLAN B — Invest to RENT**
Search and assess property · Design + permit · Renovation / construction works · Quality / finance control · Related legal services · Interior design + decoration · Rental maintenance

**PLAN C — Invest to SELL**
Search and assess property · Design + permit · Renovation / construction works · Quality / finance control · Related legal services · Marketing to sell

**PLAN X — Invest to BUSINESS**
Search and assess property (RESTAURANT / COWORKING / COLIVING) · Design + permit · Renovation / construction works · Quality / finance control · Related legal services · Set up business processes / business plan

### Supporting services

**Legal and Tax Services**
Personal documents · Mortgage for foreigners · Company formation (Spain · Portugal · Greece · Italy) · Taxes and accounting · Due diligence · Rent your property · Buy and sell property

**Design and Build Services**
Technical assessment · Architecture, design and engineering · Renovation / construction works · Assessment of sustainability and green building certification · Construction and finance control · Rental maintenance

---

## 7. pricing.html — 5-stage funnel

| Stage | Name | Description | Price | CTA |
|---|---|---|---|---|
| 01 | Insight | Investigate the landscape for prospective investments | **Free** | Try RealDataLab |
| 02 | Analysis | Prove a selected property for investment | Quoted | Quote service |
| 03 | Concept *(Popular)* | Individual legal and technical check online | Quoted | Quote service |
| 04 | Business Model | Bespoke business intelligence, due diligence and business model | Quoted | Quote service |
| 05 | Construction Management | Full engagement in purchase, design and construction management | Quoted | Quote service |

Quote drivers: Scope · Market · Property value · Timeline

Quote process: Free consultation (20 min) → Scoped proposal → Delivery & reporting

---

## 8. rdlab.html — RealDataLab

Investment intelligence product. URL: `rdlab.html`

**Intelligence tiers:**

| Tier | Price | Name | Description |
|---|---|---|---|
| 0 | Free | Market signals | Live dashboards on RealDataLab. Four markets. No login. |
| 1 | €50–€200 / report | Deep reports | AI-generated, country/city/deal-type specific |
| 2 *(Popular)* | €200–€500 / consultation | AI consultation | Country-trained AI via WhatsApp or Telegram |
| 3 | From €500 / 4h session | In-person advisory | Spain-based senior session, on-site analysis |
| 4 | €500–€5,000+ project | Full execution | Spain in-house · Portugal, Greece, Italy via partners |

**Live dashboards (RealDataHub):**
01 Investment radar · Mediterranean
02 Residential transfer · Spain
03 Home sales · Barcelona
04 Energy efficiency · Madrid
05 Heritage & prices · Barcelona
06 Rural revival · Spain

External platform: `https://realdatalab.github.io/`
Investment radar: `https://realdatalab.github.io/pages/16.html`

---

## 9. blog.html — Insights

```
HERO  ─ "Data, in the open."
   │
   ▼
REALDATALAB FEATURE BLOCK  (gradient bordered card)
   ├─ Heading: "Meet RealDataLab"
   ├─ [Open RealDataLab] [Request custom dashboard]
   └─ 6 mini-tile grid of live dashboards:
        01 Residential transfer · Spain
        02 Home sales · Barcelona
        03 Energy efficiency · Madrid
        04 Heritage & prices · Barcelona
        05 Festival industry · Spain
        06 Rural revival · Spain
   │
   ▼
UPCOMING CONTENT (3-col editorial)
   Case studies · Market reports · How-to guides
   │
   ▼
CTA  ─ Get notified · YouTube · Telegram
FOOTER
```

---

## 10. Live projects (index.html case studies)

**Project 01 — Barcelona**
Old manufactory transformed into 7 loft apartments + supermarket + commercial premises for rent. 1,200m² GFA (750m² residential). Metropolitan Barcelona region. Start 2024. Investment €2M. ROI expected 20% / 3 years + 12% market appreciation. In progress.
Tags: Industrial conversion · Multi-unit · Commercial

**Project 02 — Marbella**
Heritage building structural renovation with horizontal segregation into separate apartments. 320m² GFA. Historical center of Marbella. Start 2024. Investment €3.9M. ROI expected 30% / 5 years + 30% market appreciation. In progress.
Tags: Heritage · Renovation · Luxury

**Project 03 — Patras, Greece**
House upgrade and retrofit for Airbnb. 130m² GFA. Ancient center of Patras, Achaia, Peloponnese. Since 2019. Investment €100k. ROI 18% annually. In progress.

*All figures are projected. Projects anonymised for client confidentiality.*

---

## 11. Page inventory

| Page | Purpose | Key sections |
|---|---|---|
| `index.html` | Cinematic homepage | Hero video · Marquee · Stats · Audience fork · 4-service grid · Network map · Value ladder · Case studies · CTA form |
| `services.html` | Full services catalogue | 4 Main services · 4 Investment models · 2 Supporting services · CTA |
| `about.html` | Company story | Hero · Story · 4-point "Why us" · CTA |
| `contact.html` | Contact + form | Hero · Contact cards · Form with grouped topic dropdown |
| `blog.html` | Insights hub | Hero · RealDataLab feature block (6 live dashboards) · Planned tracks |
| `pricing.html` | 5-stage funnel pricing | Stage rows · What drives the quote · How quoting works · CTA |
| `rdlab.html` | RealDataLab product | Hero · What is RealDataLab · RealDataHub tool · Intelligence tiers · CTA |
| `404.html` | Error page | Big 404 + back-to-home |

---

## 12. Design tokens

```
Colors
  bg       #0a0a0f     surface  #12121a     surface2  #1a1a24
  accent   #4f6ef7     muted    #8a8a9a     line      rgba(255,255,255,0.08)

Typography
  sans     Inter (400/500/600/700/800/900)
  serif    Instrument Serif (italic display accent)

Radius
  card     12px        pill     999px
```

---

## 13. Contact

| Channel | Value |
|---|---|
| Email | `ask@realdatatalks.com` |
| Phone | `+34 627 051 735` |
| WhatsApp | `https://wa.me/34627051735?text=Hi%2C%20I%20would%20like%20to%20ask%20for%20consultation` |
| Telegram | `https://t.me/realdatatalks` *(channel rename pending)* |
| LinkedIn | `https://www.linkedin.com/company/realdatatalks` *(page creation pending)* |
| Facebook | `https://www.facebook.com/groups/3781499088780911` |
| YouTube | `https://www.youtube.com/@RealDataTalks` |
| RealDataLab | `https://realdatalab.github.io/` |
| Website | `https://realdatatalks.com` |

### Contact form topic groups

```
Main Professional Services
  · Real Estate Data Science
  · Business Intelligence
  · Geo Marketing
  · Business Modelling

Prêt-à-porter Investment Models
  · Invest to LIVE (Plan A)
  · Invest to RENT (Plan B)
  · Invest to SELL (Plan C)
  · Invest to BUSINESS (Plan X)

Supporting
  · Legal and Tax
  · Design and Build

Other
```

---

## 14. Investment categories (homepage slider — 12 images)

| # | Title | Subtitle |
|---|---|---|
| 01 | LUXURY REAL ESTATE | Palace · Castle · Haute Couture · Michelin · ***** |
| 02 | URBAN HOUSE | Houses to rent and sell |
| 03 | RURAL MANSION | Mansions for residences and HoReCa |
| 04 | UNFINISHED CONSTRUCTION | Cottages · houses · mixed-use blocks |
| 05 | FLIPPING | Apartments · homes |
| 06 | PLOT TO BUILD | Houses · housings · condominiums |
| 07 | CO-LIVING | Flat · house to co-live |
| 08 | GROUND FLOOR CONVERSION | Commercial · industrial to residential |
| 09 | MULTI-UNIT BUILDING | Mixed used buildings · housings |
| 10 | ART RESIDENCE | Spaces to create, work and expose art |
| 11 | CO-WORKING | Spaces to co-work and entertain |
| 12 | HoReCa | Restaurant · cafe · bar · hotel · camping |

---

## 15. Data flow

```
Contact form ─POST─► Google Apps Script
                     (existing endpoint reused from v1)
                                ↓
                     Google Sheet (same as v1)
```

Endpoint (full):
```
https://script.google.com/macros/s/AKfycbycCEABZ7