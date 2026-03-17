# Strata — Software Built in Layers

Premium portfolio website for **Strata**, a software development company. Built with Next.js 14, TypeScript, Tailwind CSS, and Framer Motion.

## Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Animations:** Framer Motion
- **Icons:** Lucide React
- **Theme:** next-themes (dark/light toggle)

## Getting Started

```bash
# Install dependencies
npm install

# Run the development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Build for Production

```bash
npm run build
npm start
```

## Project Structure

```
src/
├── app/
│   ├── globals.css       # Global styles + CSS variables
│   ├── layout.tsx        # Root layout with Navigation + ThemeProvider
│   └── page.tsx          # Home page — assembles all sections
├── components/
│   ├── Navigation.tsx    # Sticky nav with dark/light toggle + mobile menu
│   ├── ThemeProvider.tsx # next-themes wrapper
│   ├── Footer.tsx        # Footer with links
│   └── sections/
│       ├── Hero.tsx      # Cinematic hero with stats
│       ├── Portfolio.tsx # Project grid + case study modal
│       ├── Services.tsx  # Service cards
│       ├── TechStack.tsx # Tech stack by category
│       ├── About.tsx     # Philosophy + values grid
│       └── Contact.tsx   # Contact form + email/calendar links
├── data/
│   ├── projects.ts       # Project data with case study details
│   ├── services.ts       # Service definitions
│   └── techStack.ts      # Tech stack items by category
└── lib/
    └── utils.ts          # cn() utility (clsx + tailwind-merge)
```

## Design System

- **Dark-first**: `dark` class on `<html>` by default via `next-themes`
- **CSS variables**: `--background`, `--foreground`, `--surface`, `--border`, `--muted` in `globals.css`
- **Glass effect**: `.glass` utility class (backdrop-blur + subtle border)
- **Gradient text**: `.gradient-text` utility (indigo → purple → cyan)
- **Accent color**: `#6366f1` (indigo-500)

## Sections

1. **Hero** — Cinematic headline, stats, animated scroll indicator
2. **Portfolio** — Project cards with case study modal (problem/solution/results)
3. **Services** — 5 service cards with hover effects
4. **Tech Stack** — Technologies grouped by category
5. **About** — Philosophy, team stats, and values grid
6. **Contact** — Project inquiry form + email/scheduling links
