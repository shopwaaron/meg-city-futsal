# Meg City Futsal — Brand Kit

Compiled from the live site's HTML/CSS (`styles.css` + all page files). Use this as a reference for recreating the brand in other tools (Canva, decks, print, etc.).

---

## 1. Colors

All colors are defined as CSS custom properties in `styles.css` (`:root`).

| Name | Hex / Value | Used for |
|---|---|---|
| **Coral (primary accent)** | `#FF5A5F` | Primary brand color. Buttons, links, headline highlight words, active nav state, price text, icons, borders on hover, the animated "live" dot in the eyebrow pill |
| **Coral Deep** | `#E63E44` | Defined but not directly referenced elsewhere in current CSS — reserved for darker coral needs (e.g. pressed states) |
| **Coral Soft** | `#FF7F83` | Hover state for primary buttons and nav "Register" button (lighter coral on hover) |
| **Coral background tint** | `rgba(255,90,95,0.08)` | Eyebrow pill background |
| **Coral border tint** | `rgba(255,90,95,0.25)` | Eyebrow pill border, "closed" status badge border |
| **Background (base)** | `#0A0A0A` (near-black) | Page `<html>` background; the true base color behind everything |
| **Background layer 2** | `rgba(10,10,10,0.75)` | Card/tile backgrounds, footer background, alternating section backgrounds |
| **Background layer 3 (coral-tinted dark)** | `rgba(26,10,10,0.85)` | Featured tile backgrounds, hover state for cards, schedule note callouts, CTA block gradient |
| **Border (default)** | `#1F1F1F` | Standard hairline borders between sections, cards, tables |
| **Border (secondary/lighter)** | `#2A2A2A` | Input borders, outline-button borders, mobile nav divider |
| **Text (primary)** | `#FFFFFF` | Headlines, primary body text, nav links on hover |
| **Text (soft)** | `#AAAAAA` | Secondary body copy, lead paragraphs, nav link default state |
| **Text (muted)** | `#888888` | Tertiary text — captions under tile headlines, fine print labels |
| **Text (faint)** | `#555555` | Least prominent text — stat labels, footer bottom bar, schedule range labels |
| **Status: Open/Enrolling (green)** | `#00C864` (bg `rgba(0,200,100,0.12)`) | "Accepting Sign Ups" status badge |
| **Status: Coming Soon (yellow/amber)** | `#FFB400` (bg `rgba(255,180,0,0.12)`) | "Coming Soon" status badge |
| **Status: Closed (coral)** | uses primary coral | "Closed" status badge |
| **Boys schedule accent (blue)** | `#378ADD` (text `#85B7EB`) | Boys' session pills/dots on the schedule grid |
| **Girls schedule accent (pink)** | `#D4537E` (text `#ED93B1`) | Girls' session pills/dots on the schedule grid |

**Note:** Boys/girls blue and pink are the *only* non-coral accent colors used anywhere on the site, intentionally scoped to the schedule tables only.

---

## 2. Fonts

| Family | Weights used | Where used |
|---|---|---|
| **Inter** (Google Fonts) | 400, 500, 600, 700, 800, 900 | Primary typeface for everything: headlines (`.display`, `.heading-lg/md/sm` at weight 800–900), body copy (400–600), buttons (700), nav links (500) |
| **JetBrains Mono** (Google Fonts) | 400, 500, 700 | Used exclusively for small uppercase "label" text: eyebrow labels, coral section labels (`.coral-label`), schedule table headers, status badges, footer column headers, form field labels, stat bar labels — anything styled as an uppercase mono caption |

**Type scale reference:**
- `.display` (H1s): 900 weight, `clamp(48px, 7vw, 88px)`, tight letter-spacing (`-0.04em`)
- `.heading-lg` (H2s): 900 weight, `clamp(32px, 4vw, 52px)`
- `.heading-md`: 800 weight, 24px
- `.heading-sm`: 800 weight, 18px
- `.lead` (intro paragraphs): 400 weight, 17px, soft gray
- `.body`: 400 weight, 15px, soft gray
- `.coral-label` / `.caption`: JetBrains Mono, 11px, uppercase, letter-spacing `0.15em`

Fonts are loaded from Google Fonts CDN (`fonts.googleapis.com`) with `font-display: swap` via a preload trick for performance.

---

## 3. Logo

**Primary logo file:** `logo-mark-oncircle.png` (592×592px, PNG with transparency)

**Description:** A circular emblem — black line-art logo on a white circular disc. The design reads "MEG CITY" curved along the top inside edge of the ring and "FUTSAL" curved along the bottom inside edge, with a large stylized "M" overlapping a "C" shape in the center (the M and C are built as thick geometric letterforms, not a typeface — the C's open bracket shape wraps around/behind the M). Two concentric ring outlines frame the whole mark.

**Usage across the site:**
- Nav bar (top-left, ~38px tall, paired with "Meg City Futsal" wordmark text next to it — the text is live HTML, not baked into the image)
- Footer brand block (~32px tall, same pairing with text)
- Favicon (`favicon.png`) and Apple touch icon (`apple-touch-icon.png`) are cropped/derived versions of this same mark

**If recreating from scratch:** it's a two-tone (black ink / white disc) circular badge/seal logo, roughly styled like a stamped emblem or vintage sports crest. No gradients or drop shadows — flat, high-contrast line art only, consistent with the site's overall flat design language.

**Note:** an earlier version of the mark existed as pure black-on-transparent (no white disc) — the white-circle-background version (current) was a deliberate revision requested mid-project, so if you find older exported files elsewhere, the round-with-white-background version above is the current canonical one.

---

## 4. Page / Section Inventory

The site is a multi-page static site (Vercel-hosted, one real HTML file per route). Every page shares the same nav and footer.

| Page | Route | Summary |
|---|---|---|
| **Home** | `/` | Hero with headline "EXPERIENCE MEG CITY," intro tiles (featured season, New Players, pricing teaser), stat bar, "What is futsal?" explainer, two season cards (Aug–Nov / Jan–May), a Summer Camps banner, a live Instagram feed embed, and a closing CTA |
| **New Players** | `/new-players` | Onboarding guide for first-time families: what futsal is, who it's for, what a first session looks like (3 steps), what to wear/bring checklist, and a two-step "Apply → Register" CTA |
| **Aug–Nov Season** | `/aug-nov` | Fall season detail page: enrollment status, what's included, full Friday/Sunday schedule grid (toggle tabs), and pricing card |
| **Jan–May Season** | `/jan-may` | Spring season detail page — same structure as Aug–Nov (status, inclusions, schedule grid, pricing) |
| **Off-Season** | `/off-season` | Explains the Dec/June/July gap between seasons — describes Summer Camps (select dates, not weekly sessions) replacing regular training during this window |
| **About** | `/about` | Mission statement, three core values (Respect, Kindness, Fun), a combined Regional & National Events list (pulled from both seasons), and two family testimonials |
| **Staff** | `/staff` | Coach bio cards — name, role/title, and a short bio for each staff member |
| **Contact** | `/contact` | Phone, email, mailing address, social links, and a simple "Email Us" button (no embedded form) |
| **Admin** | `/admin` | Password-protected panel (not part of public brand) — lets the site owner toggle each season's enrollment status between Open / Coming Soon / Closed |
| **404** | any unmatched URL | Custom "Off the court." not-found page with nav back to popular pages |

---

## 5. Program Names & Key Copy

**Note:** internal program names (e.g. old names for skill tiers) are intentionally *not* used publicly — the site organizes everything by **season**, not by named program tier. Public-facing names/copy only:

### Site-wide identity
- **Brand name:** Meg City Futsal
- **Tagline (footer, meta descriptions):** "Year-round youth futsal in Rancho Cucamonga, Upland, and the Inland Empire."
- **Age range served:** 7–12
- **Two seasons per year:** Aug–Nov (Fall) and Jan–May (Spring)

### Headlines by page
- **Home:** "EXPERIENCE MEG CITY" (hero H1)
- **New Players:** "New to futsal? *Start here.*"
- **Aug–Nov:** "The *Aug–Nov* Season."
- **Jan–May:** "The *Jan–May* Season."
- **Off-Season:** "The *Off-Season*."
- **About:** "Building *complete* players in SoCal."
- **Staff:** "Meet our *staff*."
- **Contact:** "Got a *question*? We're here."

*(Italics above = the word(s) styled in coral within the headline)*

### Recurring CTAs / buttons
- **"Apply to Play →"** — primary CTA, links to the SportsEngine registration form
- **"Register"** — secondary CTA, links to the SportsEngine waiver/registration survey
- **"New to Futsal?" / "New Players"** — routes to the onboarding page

### Key recurring phrases
- "Games, tournaments, and other events are not a guaranteed part of the program" (disclaimer used on pricing and events sections)
- "Skill-based groupings — players are placed by age, experience, and ability" (replaces any specific tier/program naming)
- "Sessions run in 1-hour blocks on Fridays and Sundays in Rancho Cucamonga and Upland"
- Status badge language: **"Accepting Sign Ups"** (open/green) · **"Coming Soon"** (yellow) · **"Closed"** (coral)

### Values (About page)
1. **Respect** — "For coaches, referees, parents, teammates, and opponents. Always and without exception."
2. **Kindness** — "The youth futsal and soccer community is competitive, but we are all connected and work together."
3. **Fun** — "Experience is key. We hope every player enjoys the game and stays in it for life."

---

## 6. Visual Style Notes

**Overall vibe:** Bold, minimal, athletic, dark-mode-only. Coral-on-black with zero gradients or drop shadows anywhere — every surface is flat.

- **Palette discipline:** Coral is the *only* brand accent color. The only exceptions are the semantic status badges (green/yellow for open/coming-soon) and the schedule grid's blue/pink boys-vs-girls indicators — both are functional, not decorative.
- **Corner radius:** Consistently rounded but restrained — `9px` (small, buttons), `14px` (default, cards/tiles), `20px` (large, testimonials/forms/season cards). Pills and badges are fully rounded (`999px`).
- **Typography-led:** Huge, heavy (weight 900) display headlines with tight letter-spacing carry most of the visual weight — imagery is secondary to type.
- **Labels as texture:** Small uppercase monospace labels (JetBrains Mono, wide letter-spacing) are used everywhere as a structural/organizational device — section eyebrows, badges, table headers — giving the site a technical/sporty "spec sheet" feel against the bold display type.
- **Cards everywhere:** Nearly every content block (tiles, testimonials, schedule cells, contact rows, cost cards) is a bordered, subtly-tinted card on the dark background — consistent 1px hairline borders (`#1F1F1F`), hover states brighten the border to coral and nudge the card up 1–2px.
- **Imagery style:** A single dark, coral-overlaid court/action photo used as a fixed full-viewport background behind all content (not per-section imagery) — text and cards float on top. No product photography or team photos used in the layout itself (Instagram embed is the only source of real photos, pulled live).
- **Buttons:** Two styles only — solid coral fill (primary) or transparent with a subtle border that turns coral on hover (outline/secondary). No third button style, no icon-only buttons except the hamburger and social icons.
- **Whitespace:** Generous vertical section padding (80px desktop, scaling down responsively), each section separated by a single hairline border rather than heavy dividers or shadows.
- **Motion:** Minimal and functional only — hover lifts (translateY), color transitions, and a soft pulsing "live" dot in the eyebrow pill. No decorative animation.

---

## 7. Image / Icon / Logo Files in Project

All located at the project root (`C:\Users\awils\projects\meg-city-futsal\`):

| File | Size | Purpose |
|---|---|---|
| `logo-mark-oncircle.png` | 592×592, 87KB | **Primary logo** — round emblem, black on white disc. Used in nav + footer |
| `favicon.png` | 10KB | Browser tab icon (white mark on transparent, small) |
| `apple-touch-icon.png` | 12KB | iOS home-screen icon (solid dark background version) |
| `og-image.jpg` | 1200×630, 97KB | Social share preview card (Facebook/Twitter/iMessage link previews) — logo + wordmark + tagline on dark background |
| `background.jpg` | 117KB | Full-site fixed background photo (desktop) |
| `background-mobile.jpg` | 112KB | Full-site fixed background photo (mobile crop/version) |
| `ig-logo.png` | 128×128, 21KB | Official Instagram gradient camera icon — footer social button |
| `fb-logo.png` | 128×128, 4KB | Official Facebook "f" icon (blue circle) — footer social button |
| `x-logo.png` | 128×128, 3.5KB | X (Twitter) logo, white line-art on transparent — footer social button |

**Not present in the project folder (would need to be sourced separately if needed elsewhere):** any raw/editable source file for the logo (e.g. `.ai`, `.svg`, `.psd`) — only flattened PNG exports exist. If you need a vector version for print or large-format use, it will need to be recreated or requested from whoever originally designed the mark.
