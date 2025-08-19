# Handld Home – Next.js + Tailwind Starter

This repo is a production-ready starter for the Handld marketing site.

## Tech
- Next.js 14 (App Router)
- Tailwind CSS
- Framer Motion (installed; light animation hooks ready)
- Accessible, mobile-first, fast.

## Pages
- `/` – Home: hero, services, how it works, plan comparison, reviews
- `/services`
- `/how-it-works`
- `/membership`

## Commands
```bash
npm install
npm run dev    # http://localhost:3000
npm run build && npm start
```

## Brand
- Navy: `#4343B4`
- Cream: `#FFF5E1` (adjust as needed)
- Update colors in `tailwind.config.js`.

## CTAs
All CTA buttons link to the Typeform:
`https://handldhome.typeform.com/to/lEaYy0ka`

## Content
- Replace `/public/hero-placeholder.jpg` with a real exterior service photo.
- Logos are in `/public/` as `logo-dark.png` and `logo-cream.png`.
- Update copy inline as needed (kept tight and neighborly).

## Deploy to Vercel
1. Push to a new GitHub repo or import this folder directly in Vercel.
2. In Vercel, *New Project* → import the repo → Framework: **Next.js**.
3. After deploy, add your domain in **Settings → Domains** (see below).

## Connect Domain (handldhome.com)
You currently host on Squarespace. Choose one:
- **Option A (recommended)**: Keep your registrar, use Vercel DNS records  
  - Add A record for apex (`handldhome.com`) → `76.76.21.21`  
  - Add CNAME for `www` → `cname.vercel-dns.com.`  
  - Add both in your DNS (Squarespace Domain settings or your registrar).  
- **Option B**: Switch nameservers to Vercel’s (provided in Vercel → Domains).  
  - Faster propagation and Vercel manages all records.

> Always follow the exact instructions Vercel shows in the project **Domains** screen; they will confirm the correct values and verification steps.

## Notes
- Lighthouse/Core Web Vitals friendly (optimize images, keep plugins minimal).
- Animations are subtle; adjust in components as needed.
- For analytics, add GA4/GTM snippets in `app/layout.js` or via Vercel Integrations.
