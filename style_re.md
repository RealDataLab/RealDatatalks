# Style & Libraries Reference — RealDataTalks

> Last updated: 2026-04-26

---

## Libraries & External Dependencies

| Library | Version / Source | Purpose |
|---------|-----------------|---------|
| Tailwind CSS | CDN (`cdn.tailwindcss.com`) | Utility-first CSS framework — layout, spacing, typography, responsive |
| Google Fonts | CDN | `Inter` (sans-serif, 400–900) and `Instrument Serif` (italic display headings) |
| Google Tag Manager | GTM-538VHG6H | Tag management, analytics orchestration |
| Google Analytics (GA4) | G-2E348VSQ5G via gtag.js | Site analytics |

No build tools, no bundler, no npm. Pure static HTML + CSS + vanilla JS.

---

## CSS Architecture

### File: `css/site.css`

Single CSS file, ~595 lines. No preprocessor. Uses CSS custom properties for theming.

### Design Tokens (CSS Custom Properties)

```css
--color-bg:          #0a0a0f       /* Page background — near-black */
--color-surface:     #12121a       /* Card/panel background */
--color-surface-2:   #1a1a24       /* Elevated surface */
--color-accent:      #4f6ef7       /* Primary blue */
--color-accent-hover: #6b85ff      /* Accent hover state */
--color-text:        #ffffff       /* Primary text */
--color-muted:       #8a8a9a       /* Secondary/muted text */
--color-border:      rgba(255,255,255,0.08)  /* Subtle borders */
--radius-card:       12px          /* Card border radius */
--radius-pill:       999px         /* Pill/button radius */
--font-display:      'Inter', system-ui, sans-serif
```

### Tailwind Config (inline per page)

Mirrors the CSS custom properties — extends Tailwind with project-specific tokens:

```js
tailwind.config = {
  theme: {
    extend: {
      colors: {
        bg: '#0a0a0f',
        surface: '#12121a',
        surface2: '#1a1a24',
        accent: '#4f6ef7',
        muted: '#8a8a9a',
        line: 'rgba(255,255,255,0.08)',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        serif: ['"Instrument Serif"', 'serif'],
      },
      borderRadius: { card: '12px' },
    },
  },
};
```

---

## Component Styles

### Header (`site-header`)
- Fixed position, transparent by default
- On scroll (`header-scrolled`): blurred glass background (`backdrop-filter: blur(14px)`)
- Mega-menu dropdowns (`nav-panel`) — CSS-only hover/focus-within, no JS

### Buttons
- **`.btn-primary-cta`** — Accent fill, pill shape, hover lifts (`translateY(-1px)`)
- **`.btn-ghost-cta`** — Transparent with border, hover tints accent

### Cards
- **`.service-card`** — Surface background, border, hover lifts and accent border
- **`.cat-card`** — Small category card (300px) with image + text
- **`.cat-card-xl`** — Cinematic card (380px, 3:4 aspect ratio), image cover with gradient overlay, zoom on hover, rotating arrow indicator

### Typography
- **`.display-xxl`** — Hero heading: `clamp(3rem, 9vw, 9.5rem)`, weight 800, tight tracking
- **`.display-xxl em`** — Italic gradient text (blue → light blue)
- **`.section-eyebrow`** — Uppercase small label, accent color, wide tracking
- **`.section-title`** — Section heading: `clamp(1.75rem, 4vw, 2.75rem)`, weight 800
- **`.stat-xl`** — Large stat number with gradient fill (white → blue)

### Animations
- **`.reveal`** — Fade-up on scroll (opacity 0 → 1, translateY 24px → 0), triggered by IntersectionObserver
- **`.word-reveal`** — Word-by-word slide-up animation for hero text
- **`.marquee`** — Infinite horizontal scroll ticker (40s loop), pauses on hover
- **`.orb`** — Floating gradient blur circles for ambient background (12s float animation)
- **`.scroll-hint`** — Bouncing scroll indicator (bottom-right)

### Form Controls (`.field`)
- Dark input fields with border, focus accent glow
- Status messages: `.success` (green), `.error` (red)

### WhatsApp Float (`.wa-float`)
- Fixed bottom-right, green circle, `!important` overrides to guarantee visibility
- Hover scales 1.1x with enhanced shadow

---

## JavaScript Files

### `js/header.js`
- Sticky header class toggle on scroll (`header-scrolled` at 40px)
- Mobile hamburger menu toggle (`data-menu-toggle` / `data-mobile-menu`)
- Auto-updates `[data-year]` elements with current year
- Scroll reveal observer for `.reveal` elements

### `js/stats.js`
- Animated KPI counters (`[data-counter]`) — easeOutCubic, 1.4s duration
- Supports `data-prefix` and `data-suffix` attributes
- Secondary reveal observer for `.reveal` elements
- Scroll arrow controls for horizontal snap rows (`[data-scroll-target]`)

### `js/form.js`
- Contact form submission via `fetch` POST to Google Apps Script
- "Other" topic conditional field toggle
- Phone value prefixed with `'` to force string in Google Sheets
- Success/error status message display

---

## Responsive Breakpoints

| Breakpoint | Behavior |
|------------|----------|
| `max-width: 640px` | Category cards shrink to 260px |
| `max-width: 700px` | Cinematic cards shrink to 280px, scroll hint hidden, hero meta stacks, buttons full-width |
| `max-width: 900px` | Desktop nav dropdowns hidden, mobile menu enabled |

Tailwind's default breakpoints are also used inline: `sm:` (640px), `md:` (768px), `lg:` (1024px).

---

## Color Palette Summary

| Role | Hex | Usage |
|------|-----|-------|
| Background | `#0a0a0f` | Page bg, inputs |
| Surface | `#12121a` | Cards, panels, footer |
| Surface 2 | `#1a1a24` | Elevated elements |
| Accent | `#4f6ef7` | CTAs, links, highlights |
| Accent hover | `#6b85ff` | Button hover state |
| White | `#ffffff` | Primary text |
| Muted | `#8a8a9a` | Secondary text, labels |
| Border | `rgba(255,255,255,0.08)` | Subtle dividers |
| WhatsApp | `#25d366` | Float button |

---

## Typography Scale

| Element | Size | Weight | Font |
|---------|------|--------|------|
| Hero heading | `clamp(3rem, 9vw, 9.5rem)` | 800 | Inter |
| Hero em | Same size | 500 italic | Instrument Serif |
| Section heading | `clamp(1.75rem–5.5vw)` | 800 | Inter |
| Card title (xl) | 1.3rem | 800 | Inter |
| Body text | 1rem (default) | 400 | Inter |
| Muted/description | 0.85–0.95rem | 400 | Inter |
| Eyebrow label | 0.75rem | 600 uppercase | Inter |
| Stat number | `clamp(2.5rem, 5vw, 4rem)` | 800 | Inter |
