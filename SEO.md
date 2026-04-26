# SEO Optimization — RealDataTalks

> Last updated: 2026-04-26

---

## Global Setup

| Component | Status | Details |
|-----------|--------|---------|
| Google Tag Manager | GTM-538VHG6H | All pages except research.html and 404.html |
| Google Analytics (GA4) | G-2E348VSQ5G | All pages except research.html and 404.html |
| robots.txt | OK | Allow all, sitemap reference included |
| sitemap.xml | OK | 8 URLs, last modified 2026-04-23 |
| OG image | 1200x630 | assets/og-image.jpg |

---

## Page-by-Page SEO

### index.html (Home)

| Tag | Value |
|-----|-------|
| Title | RealDataTalks — Real Estate Investment Advisory Spain · Data-Driven |
| Meta description | Data-driven real estate investment advisory across Spain and partner markets. Analytics, legal, design and construction — one team, full cycle. |
| Canonical | https://realdatatalks.com |
| OG tags | title, description, url, type, image (with dimensions) |
| Twitter card | summary_large_image — title, description, url |
| JSON-LD | None |
| H1 | Core Domains we assist |
| Sitemap priority | 1.0 / weekly |

**Issue:** Missing `twitter:image` tag.

---

### services.html

| Tag | Value |
|-----|-------|
| Title | Real Estate Data Science, Investment Advisory & Legal Services · RealDataTalks |
| Meta description | Real estate data science, business intelligence, geo marketing, legal & tax, and design & build — four investment models for foreign buyers in Spain. |
| Canonical | https://realdatatalks.com/services.html |
| OG tags | Full set including image |
| Twitter card | Full set including image |
| JSON-LD | WebPage + FAQPage (5 Q&A pairs) |
| H1 | Core Domains we assist |
| Sitemap priority | 0.9 / monthly |

**Status:** Complete.

---

### about.html

| Tag | Value |
|-----|-------|
| Title | About RealDataTalks — Integrated Real Estate Innovation |
| Meta description | RealDataTalks combines advanced analytics, law, design and urban planning for real estate investors. Integrated innovation for every stage of the investment journey. |
| Canonical | https://realdatatalks.com/about.html |
| OG tags | Full set including image |
| Twitter card | Full set including image |
| JSON-LD | WebPage |
| H1 | RealDataTalks is the best property finder and comparison service |
| Sitemap priority | 0.7 / monthly |

**Status:** Complete.

---

### blog.html

| Tag | Value |
|-----|-------|
| Title | Real Estate Market Insights Spain — Blog · RealDataTalks |
| Meta description | Real estate market insights, investment walkthroughs and data analysis for foreign investors in Spain and beyond. |
| Canonical | https://realdatatalks.com/blog.html |
| OG tags | Full set including image |
| Twitter card | Full set including image |
| JSON-LD | WebPage |
| H1 | Blog |
| Sitemap priority | 0.8 / weekly |

**Note:** No Article/BlogPosting schema yet — add when actual blog posts are published.

---

### contact.html

| Tag | Value |
|-----|-------|
| Title | Contact RealDataTalks — Free 20-min Real Estate Consultation |
| Meta description | Book a free 20-minute consultation with RealDataTalks. Real estate investment advisory for Spain and partner markets — we respond within 24 hours. |
| Canonical | https://realdatatalks.com/contact.html |
| OG tags | Full set including image |
| Twitter card | Full set including image |
| JSON-LD | WebPage |
| H1 | Tell us what you're building. |
| Sitemap priority | 0.6 / yearly |

**Status:** Complete.

---

### pricing.html

| Tag | Value |
|-----|-------|
| Title | Real Estate Advisory Pricing — From Free to Full Cycle · RealDataTalks |
| Meta description | Five stages from free market insight to full construction management. Transparent, scoped-to-project pricing for real estate investors. |
| Canonical | https://realdatatalks.com/pricing.html |
| OG tags | Full set including image |
| Twitter card | Full set including image |
| JSON-LD | WebPage |
| H1 | Priced for what you actually need |
| Sitemap priority | 0.8 / monthly |

**Status:** Complete.

---

### rdlab.html

| Tag | Value |
|-----|-------|
| Title | RealDataLab — Free Real Estate Market Intelligence · RealDataTalks |
| Meta description | Free real estate market dashboards for Spain and beyond. Upgrade to deep reports, AI consultations or in-person advisory when you're ready to invest. |
| Canonical | https://realdatatalks.com/rdlab.html |
| OG tags | Full set including image |
| Twitter card | Full set including image |
| JSON-LD | WebPage + FAQPage (5 Q&A pairs) |
| H1 | RealDataLab |
| Sitemap priority | 0.9 / weekly |

**Status:** Complete. Best-optimized page alongside services.html (dual JSON-LD schemas).

---

### research.html

| Tag | Value |
|-----|-------|
| Title | Research — RealDataTalks |
| Meta description | Live real estate data and research from RealDataLab — RealDataTalks. |
| Canonical | None |
| OG tags | None |
| Twitter card | None |
| JSON-LD | None |
| H1 | None (iframe-only page) |
| Sitemap priority | 0.7 / monthly |

**Issues (critical):**
- Missing OG tags, Twitter card, canonical link
- Missing GTM / GA4 tracking
- No JSON-LD structured data
- No H1 — page is an iframe wrapper to realdatalab.github.io

---

### 404.html

| Tag | Value |
|-----|-------|
| Title | Page not found — RealDataTalks |
| Meta description | None |
| Canonical | None |
| OG tags | None |
| Twitter card | None |
| JSON-LD | None |
| H1 | 404 / Page not found |
| Sitemap | Not listed (correct) |

**Issues:**
- Missing `<meta name="robots" content="noindex">` — should prevent indexing
- Missing GTM / GA4 tracking (loses 404 analytics data)

---

## Structured Data Summary

| Schema | Pages |
|--------|-------|
| WebPage | services, about, blog, contact, pricing, rdlab |
| FAQPage | services (5 Q&A), rdlab (5 Q&A) |
| Organization | Referenced but not explicitly defined anywhere |

---

## Issues & Recommendations

### Critical

| # | Page | Issue | Action |
|---|------|-------|--------|
| 1 | research.html | Missing OG, Twitter, canonical, GTM/GA4, JSON-LD, H1 | Add full SEO head section and tracking |
| 2 | 404.html | Missing `noindex` robots tag | Add `<meta name="robots" content="noindex">` |
| 3 | 404.html | Missing GTM/GA4 | Add tracking to capture 404 hit data |

### Medium

| # | Page | Issue | Action |
|---|------|-------|--------|
| 4 | index.html | Missing `twitter:image` | Add `<meta property="twitter:image" content="https://realdatatalks.com/assets/og-image.jpg">` |
| 5 | index.html | No JSON-LD | Add WebPage schema (other pages have it) |
| 6 | All pages | No Organization schema | Add a dedicated Organization JSON-LD block (name, logo, url, contactPoint, sameAs social links) |
| 7 | All pages | No BreadcrumbList schema | Consider adding for better SERP navigation display |

### Low

| # | Page | Issue | Action |
|---|------|-------|--------|
| 8 | All pages | SVG icons lack alt/aria-label in some places | Decorative SVGs should have `aria-hidden="true"` |
| 9 | blog.html | No Article/BlogPosting schema | Add when actual blog posts are published |

---

## Sitemap Structure

```
https://realdatatalks.com/              1.0   weekly
https://realdatatalks.com/services.html 0.9   monthly
https://realdatatalks.com/rdlab.html    0.9   weekly
https://realdatatalks.com/pricing.html  0.8   monthly
https://realdatatalks.com/blog.html     0.8   weekly
https://realdatatalks.com/about.html    0.7   monthly
https://realdatatalks.com/research.html 0.7   monthly
https://realdatatalks.com/contact.html  0.6   yearly
```

---

## Tracking

- **GTM container:** GTM-538VHG6H (script + noscript on all pages except research.html, 404.html)
- **GA4 property:** G-2E348VSQ5G (gtag.js on all pages except research.html, 404.html)
