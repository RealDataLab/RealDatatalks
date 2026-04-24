# SEO — Remaining Action Plan
> RealDataTalks · realdatatalks.com
> Technical implementation completed 2026-04-23. Items below require either manual account actions or content creation.

---

## 1. Submit to Search Engines (do first — highest impact)

### Google Search Console
1. Go to https://search.google.com/search-console
2. Add property → select **URL prefix** → enter `https://realdatatalks.com`
3. Verify ownership — easiest method: download the HTML verification file and place it in the root folder (`web_realdatatalks_2/`)
4. Once verified → **Sitemaps** → enter `https://realdatatalks.com/sitemap.xml` → Submit
5. After indexing starts, monitor **Coverage** and **Core Web Vitals** reports weekly

### Bing Webmaster Tools
1. Go to https://www.bing.com/webmasters
2. Add site → enter `https://realdatatalks.com`
3. Import from Google Search Console (easiest if GSC is already set up)
4. Submit sitemap: `https://realdatatalks.com/sitemap.xml`

---

## 2. Create LinkedIn Company Page

- URL to create: https://www.linkedin.com/company/setup/new/
- Company name: **RealDataTalks**
- Website: `https://realdatatalks.com`
- Industry: Real Estate / Financial Services
- Description: use the meta description from index.html as a starting point
- Logo: use `assets/images/logo/logo.svg`
- Once created, update the `sameAs` array in the Organization JSON-LD on `index.html` — the LinkedIn URL is already placeholder there

---

## 3. Create OG Image (replace generated placeholder)

Current file: `assets/og-image.jpg` — generated programmatically, functional but basic.

For better LinkedIn/social performance, create a proper branded 1200×630px image:
- Dark background `#0a0a0f`
- RealDataTalks wordmark prominent
- Tagline: "Investment intelligence for real estate."
- URL pill: `realdatatalks.com`
- Export as JPG at 90–92% quality
- Replace `assets/og-image.jpg` with the new file — all pages already reference this path

---

## 4. Content to Create (biggest remaining SEO lever)

No amount of technical fixes substitutes for rankable content. These are ordered by keyword opportunity vs. effort.

### Priority 1 — Quick wins (1–2 hours each)

| Article | Target keyword | Notes |
|---|---|---|
| Spain real estate market outlook 2026 | `spain real estate market 2026` | Use RealDataLab data — this is uniquely credible |
| Co-living investment Spain — what you need to know | `co-living investment spain` | Low competition, maps directly to Plan X |
| HoReCa investment Spain — hotels, restaurants, cafés | `horeca investment spain` | Near-zero competition, exact match to Plan D |
| Invest to rent vs invest to sell — which model fits you | `invest to rent spain` | Educational, maps to Plans B and C |

### Priority 2 — Moderate effort (half day each)

| Article | Target keyword | Notes |
|---|---|---|
| How to buy property in Spain as a foreigner — 2026 guide | `buy property spain foreign investor` | Highest volume query in the niche |
| Barcelona vs Madrid — where to invest in 2026 | `barcelona madrid property investment` | High engagement, shareable format |
| Real estate due diligence checklist Spain | `real estate due diligence spain` | Commercial intent, links to services |
| Spain Golden Visa property guide 2026 | `spain golden visa real estate 2026` | Very high search volume from foreign buyers |

### Priority 3 — Substantial (multi-day)

| Page | Notes |
|---|---|
| Case study: Barcelona industrial conversion (standalone page) | Expand homepage teaser → full page with investment figures |
| Case study: Marbella heritage renovation (standalone page) | Same treatment |
| Case study: Patras Airbnb retrofit (standalone page) | Same treatment |
| Spanish real estate glossary for investors | Long-tail keyword magnet, builds topical authority |

---

## 5. Internal Linking (half day)

Currently pages link to each other only through the navigation. Add contextual in-body links:

- From `index.html` case studies → link to future case study pages
- From `services.html` each service section → link to `rdlab.html` and `pricing.html`
- From `rdlab.html` intelligence tiers → link to `pricing.html`
- From `blog.html` → link to `services.html` and `rdlab.html`
- From all future blog articles → link to relevant service sections

---

## 6. Update sitemap.xml when new pages are added

File: `sitemap.xml` in project root.

Every time a new page is published (blog article, case study, landing page):
1. Add a new `<url>` block with the correct `<loc>`, `<lastmod>` and `<priority>`
2. Re-submit the sitemap in Google Search Console → Sitemaps → Resubmit

---

## 7. Technical — already implemented ✅

For reference — these are done and do not need revisiting:

- `sitemap.xml` — all current pages listed
- `robots.txt` — allows all crawlers, references sitemap
- Canonical tags — all pages
- Organization + WebSite + WebPage JSON-LD schema — all pages
- FAQ schema — `rdlab.html` and `services.html`
- `og:image` — all pages → `assets/og-image.jpg`
- `og:title`, `og:url`, `og:type` — all pages
- Title tags — keyword-optimised on all pages
- Meta descriptions — keyword-optimised on all pages

---

## 8. Monitoring (ongoing)

Once live and submitted to GSC:

- **Weekly:** check Google Search Console → Coverage for crawl errors
- **Weekly:** check which queries are bringing impressions (Search Console → Performance)
- **Monthly:** update `<lastmod>` dates in `sitemap.xml` for pages that changed
- **Quarterly:** review keyword rankings and add new content based on what's gaining traction
