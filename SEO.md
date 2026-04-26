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
| Title | Real Estate Market Research — Live Data & Analytics · RealDataTalks |
| Meta description | Live real estate market data, interactive dashboards and research from RealDataLab — powered by RealDataTalks. |
| Canonical | https://realdatatalks.com/research.html |
| OG tags | Full set including image |
| Twitter card | Full set including image |
| JSON-LD | WebPage |
| H1 | None (iframe-only page — acceptable for embed wrapper) |
| Sitemap priority | 0.7 / monthly |

**Status:** Fixed (2026-04-26). GTM/GA4, OG, Twitter, canonical, JSON-LD added.

---

### 404.html

| Tag | Value |
|-----|-------|
| Title | Page not found — RealDataTalks |
| Meta description | None (not needed for error pages) |
| Canonical | None (not needed for error pages) |
| OG tags | None (not needed for error pages) |
| Twitter card | None (not needed for error pages) |
| JSON-LD | None (not needed for error pages) |
| Robots | noindex |
| H1 | 404 / Page not found |
| Sitemap | Not listed (correct) |

**Status:** Fixed (2026-04-26). GTM/GA4 tracking and noindex robots tag added.

---

## Structured Data Summary

| Schema | Pages |
|--------|-------|
| WebPage | services, about, blog, contact, pricing, rdlab |
| FAQPage | services (5 Q&A), rdlab (5 Q&A) |
| Organization | Referenced but not explicitly defined anywhere |

---

## Issues & Recommendations

### Critical — all resolved

| # | Page | Issue | Status |
|---|------|-------|--------|
| 1 | research.html | Missing OG, Twitter, canonical, GTM/GA4, JSON-LD | Fixed 2026-04-26 |
| 2 | 404.html | Missing `noindex` robots tag | Fixed 2026-04-26 |
| 3 | 404.html | Missing GTM/GA4 | Fixed 2026-04-26 |

### Medium — resolved

| # | Page | Issue | Status |
|---|------|-------|--------|
| 4 | index.html | Missing `twitter:image` | Already present (was added before audit) |
| 5 | index.html | No JSON-LD | Already present — Organization + WebSite + WebPage graph |
| 6 | All pages | No Organization schema | Present on index.html (home page carries the canonical Organization schema) |

### Low — deferred

| # | Page | Issue | Action |
|---|------|-------|--------|
| 7 | All pages | No BreadcrumbList schema | Consider adding for better SERP navigation display |
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

- **GTM container:** GTM-538VHG6H (script + noscript on all pages)
- **GA4 property:** G-2E348VSQ5G (gtag.js on all pages)
