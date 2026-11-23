# Omar Mohamed — portfolio

An editorial, responsive portfolio for Omar Mohamed. The site uses a small Vite build with plain JavaScript modules; project copy lives in `src/content/projects.js` and shared layouts/interactions live in `src/main.js`.

## Local preview

```sh
npm install
npm run dev
```

Vite prints the local URL. Build the production files with `npm run build`, then preview the build with `npm run preview`. The public site assets are the updated portrait at `public/media/omar-opera-house.jpg` and the updated CV at `public/files/Omar_Mohamed_Ibrahim_CV.pdf`. Original inputs remain in `new-assets/`.

## Routes

- `/` — introduction followed by the complete portfolio.
- `/portfolio` — portfolio content only.
- `/projects/sentinel-ai`
- `/projects/opspilot`
- `/projects/traffic-law-rag`
- `/projects/smart-mask-detection`

`vercel.json` provides the build command, `dist` output, and rewrites for the portfolio and project routes so direct navigation and refresh resolve through the app.

## Existing Vercel project

The connected project identified during the redesign is the existing `portfolio` project, linked in Vercel to `Omarmohammed99/Portfolio`. The project reports these current domains: `omarrportfolio.vercel.app`, `portfolio-omar-4b2c.vercel.app`, and `portfolio-git-main-omar-4b2c.vercel.app`. This work does not change project, repository, or domain settings.

Before publishing, verify in that same project's Vercel settings:

1. Root Directory is the repository root (`.`).
2. The project uses the build command `npm run build` and output directory `dist` (also declared in `vercel.json`).
3. `omarrportfolio.vercel.app` remains attached as the intended production URL.
4. The Git connection still points to `Omarmohammed99/Portfolio`.

Do not create another Vercel project or change the production domain for this redesign. No deployment, push, or merge was performed.

## Content verification notes

Experience, education, skills, and certifications are taken from the updated CV. The CV documents Sentinel AI, OpsPilot, and the bilingual traffic-law RAG project; the older portfolio provides the Smart Mask project link and description. Metrics without supporting detail (including the Smart Mask latency claim) are omitted. The portfolio repository does not contain evaluation artifacts for the first three systems; the case studies identify implementation limits where supporting evidence is absent. The RAG source URL was supplied during the final refinement.
