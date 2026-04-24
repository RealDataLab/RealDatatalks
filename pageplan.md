# Page Plan — realdatatalks Web Project
> **Reference source:** https://mutesix.com/  
> **Stack:** Astro · Tailwind CSS · Sanity CMS · Mux/Cloudflare Stream · Vercel  
> **Goal:** Replicate the structure and UX of mutesix.com without WordPress/PHP

---

## Tech Stack

| Layer | Tool | Notes |
|---|---|---|
| Frontend framework | Astro | Static-first, island architecture |
| Styling | Tailwind CSS + CSS custom properties | Dark theme, utility-first |
| CMS (blog/case studies) | Sanity | API-driven, editor-friendly dashboard |
| Video (self-hosted reel) | Cloudflare Stream or Mux | Replace mutesix self-hosted 40MB MP4 |
| Video (lead capture) | Wistia | Same as mutesix — platform-agnostic |
| Hosting | Vercel or Cloudflare Pages | Edge-delivered, free tier available |
| CDN | Cloudflare | Same CDN mutesix already uses |
| Forms | Resend API + custom HTML form | Replace WPForms |
| Analytics | Plausible | Privacy-friendly, lightweight |

---

## Page Structure

### `/` — Homepage

#### Sections (top to bottom)

1. **Header / Mega-Menu**
   - Logo: animated GIF version (desktop) + static PNG (mobile)
   - Nav items: Services (dropdown), About, Success, Blog, CTA button
   - CSS-only mega-menu using `:focus-within` — no jQuery UI
   - Sticky on scroll, transparent → solid background transition

2. **Hero Section**
   - Full-width dark background
   - Headline: large, bold, white (`text-5xl font-extrabold`)
   - Sub-headline + short body copy
   - Video hero: HTML5 `<video>` with `poster` attribute (no GIF-link trick)
   - Click-to-play, `preload="none"` for performance
   - Video hosted on Cloudflare Stream (replaces `/wp-content/uploads/...mp4`)

   ```html
   <video
     poster="/assets/hero-poster.jpg"
     controls
     preload="none"
     playsinline
     class="w-full rounded-lg"
   >
     <source src="https://customer-xyz.cloudflarestream.com/demo-reel/manifest/video.mp4" type="video/mp4">
   </video>
   ```

3. **Stats Bar**
   - Two or three large KPI numbers (e.g. $1.2B+ revenue driven, 27B+ impressions)
   - CSS Grid, 2–3 columns, dark card background
   - Animate on scroll with Intersection Observer (no jQuery)

4. **Case Study Slider**
   - Cards: platform badge (Meta, TikTok, Amazon…), client image, 3 metric stats, CTA link
   - Desktop: horizontal scroll with CSS `overflow-x: scroll` + `scroll-snap`
   - Mobile: stacked single-column
   - Content sourced from Sanity CMS (no hardcoded HTML per case study)
   - Duplicate render avoided — single responsive component (unlike mutesix double-render pattern)

5. **Client Logo Grid**
   - Static image grid of partner/client logos
   - CSS Grid, auto-fit, grayscale → color on hover
   - Images served from `/public/logos/`

6. **M6 Difference / Value Props**
   - 3-column layout: Omnichannel, Creative Production, Measurement
   - Icon or photo per column
   - Each with headline, body copy, and internal CTA link

7. **Why Choose Us — CTA Block**
   - Full-width dark section
   - Short paragraph + lead capture form
   - Form posts to Resend API endpoint (Astro API route)

8. **Footer**
   - Logo + copyright
   - 4-column link grid: Services, Company, Legal, Social
   - LinkedIn pixel equivalent (Plausible event tracking instead)

---

### `/services/` — Services Overview
- Two-panel layout: Marketing Services / Creative Services
- Cards link to individual service pages
- Content managed in Sanity

### `/services/[slug]` — Individual Service Page
- Dynamic route in Astro (`getStaticPaths` from Sanity)
- Hero, description, platform logos, related case studies
- Wistia embed for service explainer video (lazy-loaded via `/swatch` pattern)

### `/case-study-index/` — Case Studies Index
- Grid of cards pulled from Sanity
- Filter by platform (Meta, TikTok, Google, Amazon…)
- Alpine.js for filter toggle — no React needed

### `/blog/case-study/[slug]` — Individual Case Study
- Full-page layout: client logo, challenge, approach, results
- Stats displayed in large-number cards
- Content fully in Sanity (rich text + image blocks)

### `/oursuccess/` — Testimonials + Results
- Testimonial carousel (CSS scroll-snap)
- Case study summary grid

### `/contact/` — Contact / Let's Talk
- Form: name, company, email, budget range, message
- Submits to Astro API route → Resend email
- No WPForms dependency

### `/blog/` — Blog Index
- Posts from Sanity, paginated
- Tag filtering with Alpine.js

### `/blog/[slug]` — Blog Post
- Sanity Portable Text renderer
- Estimated read time
- Related posts sidebar

---

## Video Preparation Workflow

Mirrors the mutesix approach but improved:

| Step | Tool | Output |
|---|---|---|
| Edit demo reel | Premiere / DaVinci Resolve | Master file (high quality) |
| Export for web | HandBrake or FFmpeg | H.264 MP4, ~30–50MB, 1080p |
| Generate poster frame | FFmpeg | `poster.jpg` (single frame at 2s) |
| Upload video | Cloudflare Stream or Mux | CDN-delivered adaptive stream |
| Version naming | `demo-reel-2024-v16.mp4` | Match mutesix versioning discipline |
| Secondary video | Wistia | Testimonials / case study videos |

**FFmpeg poster generation:**
```bash
ffmpeg -i demo-reel.mp4 -ss 00:00:02 -vframes 1 hero-poster.jpg
```

---

## CSS Architecture

```
src/
  styles/
    global.css        # CSS custom properties (colors, spacing, type scale)
    typography.css    # Headings, body, display sizes
  components/
    Header.astro      # Mega-menu, logo swap, sticky scroll
    Hero.astro        # Video section
    CaseStudyCard.astro
    StatBar.astro
    Footer.astro
```

**Key CSS variables (dark theme matching mutesix palette):**
```css
:root {
  --color-bg:        #0a0a0f;
  --color-surface:   #12121a;
  --color-accent:    #4f6ef7;
  --color-text:      #ffffff;
  --color-muted:     #8a8a9a;
  --font-display:    'Inter', sans-serif;
  --radius-card:     12px;
}
```

---

## Performance Targets

| Metric | Target | Strategy |
|---|---|---|
| LCP | < 1.5s | Poster image preloaded, video deferred |
| CLS | < 0.05 | Fixed aspect-ratio video container |
| FID/INP | < 100ms | Minimal JS, no jQuery |
| Lighthouse score | 95+ | Static Astro output, Cloudflare edge |
| Bundle JS | < 50KB | Alpine.js only, no React on homepage |

---

## File / Folder Structure

```
project-root/
  src/
    pages/
      index.astro
      services/
        index.astro
        [slug].astro
      blog/
        index.astro
        [slug].astro
      case-study-index.astro
      oursuccess.astro
      contact.astro
    components/
    layouts/
    styles/
  public/
    assets/
      hero-poster.jpg
      logos/
  sanity/               # Sanity studio (separate or monorepo)
  astro.config.mjs
  tailwind.config.mjs
  package.json
```

---

*Generated from analysis of https://mutesix.com/ — architecture, CSS approach, and video strategy.*
