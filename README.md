# Siew Wei En — Portfolio

Personal portfolio site built with Next.js 15 (App Router), TypeScript, and Tailwind CSS. Single-page, dark-themed, with a sticky nav, smooth scrolling, and subtle scroll-triggered motion.

## Stack

- [Next.js 15](https://nextjs.org) — App Router, TypeScript
- [Tailwind CSS v4](https://tailwindcss.com)
- [Framer Motion](https://www.framer.com/motion/) for scroll-reveal animation
- [Lucide](https://lucide.dev) for icons

## Project structure

```
src/
  app/
    layout.tsx      # fonts, metadata, root HTML shell
    page.tsx         # assembles all sections
    globals.css      # theme tokens, grid background, scrollbar styling
  components/
    Nav.tsx          # sticky nav with scroll-spy + mobile menu
    Hero.tsx
    About.tsx
    Projects.tsx
    Skills.tsx
    Contact.tsx
    Footer.tsx
    ui/              # Reveal (scroll animation), SectionHeading, brand icons
  data/
    data.ts          # ALL editable content: profile, bio, projects, skills, nav links
  lib/
    utils.ts         # small `cn()` classname helper
public/
  resume.pdf         # placeholder — replace with your real resume (same filename)
```

## Editing content

Everything you're likely to change — name, tagline, bio, project list, tech tags, links, skills — lives in a single file: [`src/data/data.ts`](src/data/data.ts). You shouldn't need to touch component code to update copy.

Before you deploy:

1. Open `src/data/data.ts` and replace the placeholder `github` / `linkedin` URLs with your real profile URLs.
2. Replace [`public/resume.pdf`](public/resume.pdf) with your actual resume PDF, keeping the filename `resume.pdf` (the Download Resume button links to `/resume.pdf` directly, so no code changes needed).
3. Update project GitHub/demo links in the `projects` array to point at your real repos.

## Running locally

Requires Node.js 18.18+ (Node 20+ recommended).

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

Other scripts:

```bash
npm run build   # production build
npm run start   # serve the production build locally
npm run lint    # ESLint
```

## Deploying to Vercel

1. **Push to GitHub**

   ```bash
   git add -A
   git commit -m "Initial portfolio"
   git branch -M main
   git remote add origin https://github.com/<your-username>/<your-repo>.git
   git push -u origin main
   ```

2. **Import into Vercel**
   - Go to [vercel.com/new](https://vercel.com/new) and sign in with GitHub.
   - Select the repo you just pushed.
   - Framework preset should auto-detect as **Next.js** — no config changes needed.
   - Click **Deploy**.

3. Vercel will give you a live URL (and redeploys automatically on every push to `main`). Add a custom domain later from the project's **Settings → Domains** if you want one.

That's it — free tier covers a personal portfolio comfortably.
