# Nivethith Arasakumar — Portfolio

A premium, highly-animated personal portfolio for **Nivethith Arasakumar**, an
aspiring AI, Machine Learning, Data Science & DevOps Engineer. Built as a
high-end software product: exceptional typography, generous whitespace, a rich
motion system and strong visual hierarchy — with first-class accessibility,
performance and SEO.

## Tech stack

- **Next.js 15** (App Router, React Server Components)
- **React 19** + **TypeScript** (strict, `noUncheckedIndexedAccess`)
- **Tailwind CSS v4** (CSS-first design tokens)
- **shadcn/ui**-style primitives (Radix UI + CVA)
- **Framer Motion** + the **View Transitions API** for advanced animation
- **Lucide** icons
- **next-themes** (one-click animated light / dark switch, no theme flash)
- **react-hook-form** + **zod** for a validated, spam-resistant contact form
- **ESLint** + **Prettier** (with Tailwind class sorting)

## Animation system

Reusable, reduced-motion-aware primitives live in `src/components/shared/`:

- `SplitText` — word-by-word blur-and-rise headline reveals
- `TextRotate` — springy rotating role words
- `Magnetic` — elements that pull toward the cursor
- `SpotlightCard` — 3D tilt + pointer-tracking glow
- `AuroraBackground` / `CursorGlow` — ambient, drifting colour and a cursor halo
- `Parallax` — scroll-linked depth
- `ScrollProgress` / `ScrollToTop` — reading-progress bar and ring button
- `CountUp` — numbers that count up in view
- `Marquee` — seamless, pause-on-hover ticker

The **theme toggle** uses the View Transitions API to reveal the new theme with
a circular sweep from the button (graceful fallback where unsupported), and
everything degrades cleanly under `prefers-reduced-motion`.

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

### Scripts

| Script                 | Description                          |
| ---------------------- | ------------------------------------ |
| `npm run dev`          | Start the dev server (Turbopack)     |
| `npm run build`        | Production build                     |
| `npm run start`        | Serve the production build           |
| `npm run lint`         | Run ESLint                           |
| `npm run typecheck`    | Type-check without emitting          |
| `npm run format`       | Format the codebase with Prettier    |
| `npm run format:check` | Verify formatting                    |

## Project structure

```
src/
  app/                 # App Router: layout, page, metadata, SEO routes, OG images
    api/contact/       # Contact form endpoint (Supabase + Resend)
  components/
    layout/            # Navbar, Footer, ThemeProvider, ThemeToggle
    sections/          # Hero, About, Projects, Skills, Education, Contact
    projects/          # Project case-study card + dialog
    contact/           # Contact form
    shared/            # Container, Section, SectionHeading, Reveal/Stagger
    ui/                # shadcn-style primitives (Button, Card, Dialog, …)
  data/                # Typed content: profile, projects, skills, education
  hooks/               # useActiveSection (scroll-spy)
  lib/                 # site config, utils (cn), validations, structured data
  types/               # Shared TypeScript types
public/
  resume.pdf           # Nivethith's résumé
```

## Making it yours

All content lives in `src/data/` and `src/lib/site.ts` — no need to touch
components:

1. **`src/lib/site.ts`** — site name, description, canonical URL, keywords.
2. **`src/data/profile.ts`** — name, headline, intro, stats, timeline, socials.
3. **`src/data/projects.ts`** — case studies (cover image, problem, solution…).
4. **`src/data/skills.ts`**, **`education.ts`** — the rest.
5. **`public/resume.pdf`** — replace with your real résumé.

Set the production URL for correct SEO metadata:

```bash
# .env.local
NEXT_PUBLIC_SITE_URL=https://your-domain.com
```

### Theming

Colours are defined once as CSS variables in `src/app/globals.css` (`:root` and
`.dark`). Change `--accent` to rebrand the whole site. Light, dark and system
themes are handled by `next-themes` with no flash of incorrect theme.

### Contact form

`src/app/api/contact/route.ts` validates with Zod, rate-limits, uses a honeypot,
saves to Supabase (`contact_messages`), and emails you via Resend. Copy
`.env.example` → `.env.local` (and the same vars into Vercel).

## SEO

- Rich metadata: title template, description, keywords, canonical, Open Graph +
  Twitter cards, and dynamic 1200×630 OG images via `next/og`
- Structured data (JSON-LD): `Person` (with `knowsAbout`, credentials, languages),
  `WebSite`, and `ProfilePage` listing projects as `CreativeWork`
- `sitemap.xml`, `robots.txt`, and a PWA web manifest
- Search Console / Bing verification via `NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION`
  and `NEXT_PUBLIC_BING_SITE_VERIFICATION`

## Production & security

- Security headers (HSTS, `X-Content-Type-Options`, `X-Frame-Options`,
  `Referrer-Policy`, `Permissions-Policy`) via `next.config.ts`
- `poweredByHeader` disabled, compression enabled
- Clean `next build` with lint + strict type-checking
- Contact endpoint rate-limited and honeypot-protected

### Deploy

Deploy to [Vercel](https://vercel.com) (recommended for Next.js):

1. Push this repo to GitHub and import it in Vercel.
2. Set env vars from `.env.example` (at minimum `NEXT_PUBLIC_SITE_URL`).
3. Deploy — the build command is `next build`.

Or self-host: `npm run build && npm run start`.

## Accessibility & performance

- Semantic HTML, skip-to-content link, keyboard navigation, visible focus rings
- WCAG AA contrast in both themes; `prefers-reduced-motion` respected everywhere
- Mostly Server Components; client JS limited to interactive pieces
- Optimised fonts (Geist), `next/image`, dynamic OG images via `next/og`
