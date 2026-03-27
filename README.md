# CorpDash — Corporate Dashboard Landing Page

A modern corporate dashboard landing page built with [Next.js](https://nextjs.org) (App Router), TypeScript, and Tailwind CSS.

## Getting Started

First, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Project Structure

```
app/
  layout.tsx       # Root layout with metadata
  page.tsx         # Main page composing all sections
  globals.css      # Global styles and Tailwind imports
components/
  Navbar.tsx       # Sticky navigation with mobile hamburger menu
  Hero.tsx         # Hero section with headline, CTAs, and SVG graphic
  Features.tsx     # 6 feature cards with hover effects
  Stats.tsx        # 4 key stats on a blue background
  Testimonials.tsx # 3 customer testimonial cards
  Pricing.tsx      # 3-tier pricing (Free, Pro, Enterprise)
  CTABanner.tsx    # Call-to-action banner
  Footer.tsx       # Footer with links and copyright
```

## Tech Stack

- **Next.js 16** — App Router, server components
- **TypeScript** — Static typing
- **Tailwind CSS** — Utility-first styling
- Uses system fonts (no external font dependencies)

## Build

```bash
npm run build
```

## Learn More

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
