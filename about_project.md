# About This Project

Personal portfolio website for **Waqad Arshad** (Senior Flutter Developer). It is a single-page marketing/portfolio site with hero, about, skills, projects, experience, and contact sections.

**Live site (configured):** [https://waqadarshad.github.io/portfolio](https://waqadarshad.github.io/portfolio)  
**GitHub repo:** [https://github.com/waqadArshad/portfolio](https://github.com/waqadArshad/portfolio)

---

## Tech Stack & Languages

| Layer | Technology | Role |
|--------|------------|------|
| **Frontend language** | **TypeScript** (+ JSX/TSX) | All app UI and logic |
| **UI library** | **React 19** | Components and client interactivity |
| **Framework** | **Next.js 15** (App Router) | Routing, layout, static export, fonts |
| **Styling** | **Tailwind CSS v4** + PostCSS | Utility-first styling |
| **Animation** | **Framer Motion** | Hero and motion effects |
| **Helpers** | `class-variance-authority`, `tailwind-merge`, `react-scroll` | UI variants, class merging, smooth scroll |
| **Backend language** | **None (no custom server API)** | Site is built as a **static export** |
| **Hosting** | **GitHub Pages** | Static HTML/CSS/JS from `out/` |
| **CI/CD** | **GitHub Actions** (`.github/workflows/nextjs.yml`) | Build + deploy on push to `master` |

### Important notes

- This is **not** a Flutter/Dart app. The parent folder name may suggest Flutter, but this repo is a **Next.js web portfolio**.
- There is **no Node/Express/Firebase backend inside this project**. Content (projects, experience, links) lives in React components.
- In production, Next.js is configured with `output: 'export'`, so it becomes a **static website** suitable for GitHub Pages (no Node server required at runtime).

---

## Project Structure

```text
portfolio/
├── app/
│   ├── layout.tsx      # Root layout, SEO metadata, fonts
│   ├── page.tsx        # Main portfolio page (hero → footer)
│   └── globals.css     # Global styles / Tailwind entry
├── components/
│   ├── Lightbox.tsx
│   ├── sections/
│   │   └── Projects.tsx   # Project cards + lightbox
│   └── ui/
│       ├── button.tsx
│       ├── card.tsx
│       └── container.tsx
├── lib/
│   └── utils.ts        # Shared helpers (e.g. className merge)
├── public/             # Static assets (SVGs, images if present)
├── .github/workflows/
│   └── nextjs.yml      # Deploy to GitHub Pages
├── next.config.ts      # Static export + basePath for GH Pages
├── package.json
└── tsconfig.json
```

### Page sections (`app/page.tsx`)

1. **Hero** – intro + CTAs (View Projects, Download Resume)
2. **About** – bio
3. **Skills & Tools** – Flutter, Dart, Node.js, Firebase, etc.
4. **Projects** – showcase with images and store/website links
5. **Experience** – timeline of roles
6. **Contact** – LinkedIn, Email, GitHub
7. **Footer**

---

## Prerequisites

Install before running locally:

1. **Node.js 20+** (recommended; workflow uses Node 20)  
   Check: `node -v`
2. **npm** (comes with Node; repo uses `package-lock.json`)  
   Check: `npm -v`
3. **Git** (to clone / push)

---

## How to Run Locally

From the project root (`portfolio/`):

### 1. Install dependencies

```bash
npm install
```

### 2. Start the development server

```bash
npm run dev
```

### 3. Open in browser

Visit: [http://localhost:3000](http://localhost:3000)

Hot reload is enabled — edits under `app/` and `components/` refresh automatically.

### Useful scripts

| Command | What it does |
|---------|----------------|
| `npm run dev` | Local development server |
| `npm run build` | Production build (static `out/` when `NODE_ENV=production`) |
| `npm run start` | Serve a Next.js production server (less relevant for static GH Pages) |
| `npm run lint` | Run ESLint |

### Local vs production paths

`next.config.ts` sets:

- **Development:** `basePath` and `assetPrefix` empty → site at `/`
- **Production:** `basePath: '/portfolio'`, `assetPrefix: '/portfolio/'` → site at `/portfolio` on GitHub Pages

So locally you use `http://localhost:3000`, while the published URL is `https://waqadarshad.github.io/portfolio/`.

---

## How to Publish as a Site on GitHub Pages

This repo is already set up for GitHub Pages with static export + Actions.

### What is already configured

1. **`next.config.ts`**
   - `output: 'export'` in production → builds static files into `out/`
   - `basePath` / `assetPrefix`: `/portfolio` (matches repo name)
   - `images.unoptimized: true` (required for static hosting)

2. **`.github/workflows/nextjs.yml`**
   - Triggers on push to **`master`** (and manual `workflow_dispatch`)
   - Installs deps, runs `next build`, uploads `./out`, deploys to Pages

3. **SEO `metadataBase`** in `app/layout.tsx` points to  
   `https://waqadarshad.github.io/portfolio`

### Publish / update steps

#### A. One-time GitHub settings

1. Open the repo on GitHub: **Settings → Pages**
2. Under **Build and deployment → Source**, choose **GitHub Actions**
3. Ensure Actions are enabled for the repository

#### B. Push your code

```bash
git add .
git commit -m "Update portfolio"
git push origin master
```

#### C. Wait for the workflow

1. Open **Actions** tab on GitHub
2. Watch **Deploy Next.js site to Pages**
3. When green, site is live at:

**https://waqadarshad.github.io/portfolio/**

### If the repo name or username changes

Update these to match:

| File | What to change |
|------|----------------|
| `next.config.ts` | `basePath` and `assetPrefix` (e.g. `/new-repo-name`) |
| `app/layout.tsx` | `metadataBase`, Open Graph / author URLs |
| `components/sections/Projects.tsx` | Uses `nextConfig.basePath` for image paths — usually fine if config is correct |

### User site vs project site

- **Project site (current):** `username.github.io/repo-name` → keep `basePath: '/portfolio'`
- **User site:** `username.github.io` (repo named `username.github.io`) → set `basePath` and `assetPrefix` to `''`

### Alternative: deploy with Vercel

You can also connect the same GitHub repo to [Vercel](https://vercel.com). For Vercel you typically **remove or adjust** static-export/`basePath` settings, because Vercel can run Next.js as a full app. GitHub Pages is already the primary path for this project.

---

## Content Editing Guide

| Want to change… | Edit… |
|-----------------|--------|
| Hero / About / Skills / Experience / Contact | `app/page.tsx` |
| Project list, images, store links | `components/sections/Projects.tsx` |
| Site title, description, OG tags | `app/layout.tsx` |
| Colors / global CSS | `app/globals.css` |
| Buttons / cards look | `components/ui/*` |

Project images are expected under paths like `/images/projects/...` (with `basePath` prepended in production). Place assets in `public/images/projects/` so they are served as `/images/projects/...`.

---

## Summary

| Question | Answer |
|----------|--------|
| Frontend language? | **TypeScript** + **React** |
| Framework? | **Next.js 15** |
| Backend language? | **None** — static frontend only |
| Styling? | **Tailwind CSS v4** |
| Run locally? | `npm install` → `npm run dev` → http://localhost:3000 |
| Publish on GitHub? | Enable Pages (Actions) → push to `master` → live at `https://waqadarshad.github.io/portfolio/` |
