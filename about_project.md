# About This Project

Personal portfolio website for **Saif Ullah** (Flutter Developer). It is a single-page marketing/portfolio site with hero, about, skills, projects, experience, and contact sections.

**Your live URL (after publish):** [https://saifullah45152.github.io/portfolio/](https://saifullah45152.github.io/portfolio/)  
**Friend’s example site:** [https://waqadarshad.github.io/portfolio/](https://waqadarshad.github.io/portfolio/)  
**Your GitHub:** [https://github.com/saifullah45152](https://github.com/saifullah45152)

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
| **CI/CD** | **GitHub Actions** (`.github/workflows/nextjs.yml`) | Build + deploy on push to `main` |

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
4. A **GitHub account** (yours: `saifullah45152`)

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

So locally you use `http://localhost:3000`, while the published URL will be `https://saifullah45152.github.io/portfolio/`.

---

## Publish as website

This is how your friend published [https://waqadarshad.github.io/portfolio/](https://waqadarshad.github.io/portfolio/).  
You will get the same kind of free public link:

**https://saifullah45152.github.io/portfolio/**

The project is already prepared for GitHub Pages (static export + GitHub Actions). Follow the steps below once.

### How it works (simple)

1. You push code to a GitHub repository named **`portfolio`**.
2. GitHub Actions builds the Next.js site into static files (`out/`).
3. GitHub Pages hosts those files.
4. Anyone can open your portfolio with a normal website URL.

---

### Step 1 — Create a GitHub repository

1. Open [https://github.com/new](https://github.com/new) while logged in as **saifullah45152**.
2. Set **Repository name** to exactly: `portfolio`  
   (This name matters. The URL becomes `username.github.io/portfolio/`.)
3. Choose **Public**.
4. Do **not** add a README / .gitignore / license if this folder already has a project (avoids merge conflicts).
5. Click **Create repository**.

Your empty repo URL will look like:

`https://github.com/saifullah45152/portfolio`

---

### Step 2 — Connect this local project to GitHub

Open a terminal in your project folder (`c:\0_Flutter_Projects\portfolio`) and run:

```bash
git status
```

#### If this folder is already a git repo

Set / update the remote to **your** GitHub repo:

```bash
git remote remove origin
git remote add origin https://github.com/saifullah45152/portfolio.git
git branch -M main
git add .
git commit -m "Prepare portfolio for GitHub Pages"
git push -u origin main
```

#### If git is not initialized yet

```bash
git init
git remote add origin https://github.com/saifullah45152/portfolio.git
git branch -M main
git add .
git commit -m "Initial portfolio commit"
git push -u origin main
```

If GitHub asks you to sign in, complete login (browser / token), then push again.

---

### Step 3 — Update SEO links to your username (recommended)

Before or after the first push, update URLs in `app/layout.tsx` from the old friend’s domain to yours:

| Setting | Change to |
|---------|-----------|
| `metadataBase` | `https://saifullah45152.github.io/portfolio` |
| `authors` name / url | Saif Ullah + your portfolio URL |
| Open Graph `url` / `siteName` | Your name + `https://saifullah45152.github.io/portfolio/` |
| Twitter / titles mentioning old name | Saif Ullah |

`next.config.ts` already uses `basePath: '/portfolio'` — keep that **as long as the repo is named `portfolio`**.

---

### Step 4 — Enable GitHub Pages (one-time)

1. Open your repo: [https://github.com/saifullah45152/portfolio](https://github.com/saifullah45152/portfolio)
2. Go to **Settings** → **Pages**
3. Under **Build and deployment** → **Source**, select **GitHub Actions**
4. Make sure **Actions** are enabled for the repo (**Settings** → **Actions** → **General** → allow Actions)

This matches how the friend’s site is deployed.

---

### Step 5 — Wait for the deploy workflow

1. Open the **Actions** tab in your repo.
2. You should see a workflow named **Deploy Next.js site to Pages** (from `.github/workflows/nextjs.yml`).
3. Click it and wait until both **build** and **deploy** are green (✓).
4. First deploy can take 1–3 minutes.

If it fails, open the red job → read the error log → fix → push again.

---

### Step 6 — Open your live website

When the workflow succeeds, open:

**https://saifullah45152.github.io/portfolio/**

That is the same pattern as your friend’s link:

`https://waqadarshad.github.io/portfolio/`  
→ `https://YOUR_USERNAME.github.io/REPO_NAME/`

---

### Step 7 — Update the site later (any time)

After you edit content locally, use the **Commands for deploying** section below.

GitHub Actions will rebuild and republish automatically. Refresh the live URL after the Action turns green.

---

## Commands for deploying

Run these from the project root: `c:\0_Flutter_Projects\portfolio`

### First-time deploy (new GitHub repo)

```bash
git remote add origin https://github.com/saifullah45152/portfolio.git
git branch -M main
git add .
git commit -m "Initial portfolio commit"
git push -u origin main
```

If `origin` already exists and points to the old repo:

```bash
git remote remove origin
git remote add origin https://github.com/saifullah45152/portfolio.git
git branch -M main
git add .
git commit -m "Prepare portfolio for GitHub Pages"
git push -u origin main
```

### Deploy updates (after content changes)

```bash
git add .
git commit -m "Update portfolio content"
git push origin main
```

### Check status before pushing

```bash
git status
git branch
git remote -v
```

You should see branch **`main`** and remote:

`origin  https://github.com/saifullah45152/portfolio.git`

### After you push

1. Open **Actions** on GitHub.
2. Wait for **Deploy Next.js site to Pages** to turn green.
3. Open: [https://saifullah45152.github.io/portfolio/](https://saifullah45152.github.io/portfolio/)

The workflow in `.github/workflows/nextjs.yml` runs on every push to **`main`**.

---

### What is already configured in this project

| File | Purpose |
|------|---------|
| `next.config.ts` | `output: 'export'`, `basePath: '/portfolio'`, unoptimized images |
| `.github/workflows/nextjs.yml` | On push to `main`, build Next.js and deploy `./out` to Pages |
| `app/layout.tsx` | Site title / SEO metadata |

You do **not** need to buy a domain or pay for hosting for this setup.

---

### Common problems

| Problem | Fix |
|---------|-----|
| Site 404 after deploy | Confirm repo name is `portfolio` and Pages source is **GitHub Actions** |
| CSS / images broken | Keep `basePath` / `assetPrefix` as `/portfolio` in production |
| Workflow never runs | Push to branch **`main`** (workflow listens to `main`), or run **Actions → workflow → Run workflow** |
| Wrong username in URL | URL always uses your GitHub username: `saifullah45152.github.io` |
| Repo name is not `portfolio` | Either rename the repo to `portfolio`, or change `basePath` / `assetPrefix` in `next.config.ts` to `/your-repo-name` |

---

### Optional: custom domain later

You can keep the free `*.github.io` URL, or later add a custom domain in **Settings → Pages → Custom domain**. Not required to publish.

### Alternative: Vercel

You can also deploy with [Vercel](https://vercel.com) by connecting the same GitHub repo. For Vercel you usually adjust/remove static-export `basePath` settings. **GitHub Pages is the path that matches your friend’s setup.**

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
| Publish as website? | Create public repo `portfolio` → enable Pages (GitHub Actions) → push to `main` → live at `https://saifullah45152.github.io/portfolio/` |
| Friend’s example? | [https://waqadarshad.github.io/portfolio/](https://waqadarshad.github.io/portfolio/) |
