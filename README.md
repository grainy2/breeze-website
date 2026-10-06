# Breeze Restaurant & Lounge (Kaduna) - Official Website

The official, fast, mobile-first static website for **Breeze Restaurant & Lounge** in Kaduna, Nigeria. Built with pure semantic HTML5, CSS3, and lightweight vanilla JavaScript — zero heavy frameworks, instant loading, and optimized for both desktop and mobile devices.

---

## 🎨 Branding & Visual System

- **Typography**: 
  - Wordmark, Headings & Page Titles: **Bodoni Moda** (Didone serif via Google Fonts)
  - Body, Prices & Buttons: **Inter** (Modern sans-serif via Google Fonts)
- **Color Palette**:
  - Brand Maroon: `#721C2B` (Buttons, active accents, badges, borders)
  - Charcoal Background: `#1F1F1C`
  - Cream Text & Accents: `#F3ECE2`
  - Subtle Muted Gray: `#B5ADA3`
  - Elevated Card Surface: `#262622`
  - *Accessibility*: Maroon text is never placed on charcoal surfaces; all text passes WCAG AA contrast standards.
- **Favicon**: Branded circular badge featuring the classic crossed fork-and-spoon in cream and maroon.

---

## 📂 Project Structure

```text
breeze-website/
├── index.html            # Main semantic HTML document (all 7 sections + SEO schema)
├── favicon.svg           # Branded fork-and-spoon SVG favicon
├── netlify.toml          # Netlify deployment configuration & cache headers
├── robots.txt            # Search engine crawler permissions
├── sitemap.xml           # XML sitemap for SEO discovery
├── .gitignore            # Git ignore file
├── README.md             # Project documentation and setup guide
├── css/
│   └── style.css         # Responsive mobile-first CSS (variables, grids, media queries)
├── js/
│   └── main.js           # Fast vanilla JS (mobile menu toggle, smooth scrolling, copyright year)
└── images/
    ├── favicon.svg       # SVG favicon asset
    ├── og-image.svg      # High-res 1200x630 Open Graph card for social sharing
    ├── honey-glazed-wings.webp
    ├── prawn-mayo-spring-rolls.webp
    ├── pad-thai-noodles.webp
    ├── chicken-penne-arrabbiata.webp
    ├── bbq-chicken-wings.webp
    ├── chow-mein-noodles.webp
    ├── gallery-lounge-terrace.svg
    ├── gallery-evening-interior.svg
    ├── gallery-rattan-seating.svg
    └── gallery-guests-garden.svg
```

---

## 🚀 Running Locally

Because this is a pure static website with no compilation step, you can run it using any local static file server or by opening `index.html` directly in your browser.

### Option 1: Using `npx serve` (Recommended)
```bash
npx serve .
# Or specify a port:
npx serve . -l 3000
```
Then visit `http://localhost:3000` in your web browser.

### Option 2: Using Python
```bash
# Python 3
python -m http.server 3000
```

### Option 3: Direct File Opening
Double-click `index.html` or drag it into any modern web browser (Google Chrome, Apple Safari, Mozilla Firefox, Microsoft Edge).

---

## 🌐 Deploying to Netlify

### Automatic Continuous Deployment (via GitHub)
1. Push this repository to GitHub (see instructions below).
2. Go to your [Netlify Dashboard](https://app.netlify.com/) and click **"Add new site" > "Import an existing project"**.
3. Select **GitHub** and authorize access to `breeze-website`.
4. Netlify will automatically detect the settings from `netlify.toml`:
   - **Build command**: *(leave blank)*
   - **Publish directory**: `.`
5. Click **"Deploy site"**. Your site will be live on an SSL-enabled `.netlify.app` domain.

### Manual Drag & Drop Deployment
1. Open the [Netlify Drop](https://app.netlify.com/drop) dashboard.
2. Drag and drop the `breeze-website` folder directly into the browser upload box.

---

## 📝 TODO Placeholders to Fill In

Before public promotion, replace the following clearly marked `TODO` placeholders in `index.html`:

| Placeholder | Location in `index.html` | Description & Example |
| :--- | :--- | :--- |
| `TODO: PHONE` | LocalBusiness Schema, Hero CTA, Contact section, Mobile bottom bar | Restaurant phone number (e.g. `+234 800 123 4567`) and `tel:+2348001234567` |
| `TODO: ADDRESS` | LocalBusiness Schema, Hours & Location section | Physical street address in Kaduna (e.g. `12 Isa Kaita Road, Ungwan Sarki, Kaduna`) |
| `TODO: OPENING_HOURS` | Hours & Location section (`#hours`) | Actual operating hours for Mon–Thu, Fri–Sat, Sun (e.g. `12:00 PM – 11:00 PM`) |
| `TODO: WHATSAPP` | Contact card (`#contact`) | WhatsApp direct chat number or link (e.g. `2348001234567` for `https://wa.me/2348001234567`) |
| `TODO: INSTAGRAM` | Contact card (`#contact`) | Official Instagram handle link (e.g. `https://instagram.com/breeze_kaduna`) |

---

## 🔗 Connected Digital Menu

The website is wired to link to the live digital ordering menu:
- **Live Menu**: [https://breeze-menu.netlify.app](https://breeze-menu.netlify.app)
- **Menu Header**: Contains a **"Back to website"** link pointing to this website via the `SITE_URL` configuration in `breeze-menu`.
