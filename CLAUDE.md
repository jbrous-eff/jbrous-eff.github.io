# Project Hub

Personal portfolio site where the user posts all their various projects (data experiments, writing, freelance work, one-offs). Built July 2026 with Astro 7, static output, no backend.

**About the user:** self-described "vibe coding guy" — they direct, Claude implements. Don't hand them manual code edits to make; do the work, and keep any instructions for them non-technical (README.md has their plain-English guide for adding projects).

## How the site works

- **One project = one markdown file** in `src/content/projects/`. The filename is the URL slug (`my-thing.md` → `/projects/my-thing/`).
- `src/content/projects/_template.md` is the copy-me starter (files starting with `_` are excluded from the collection).
- Frontmatter schema lives in `src/content.config.ts`: title, description, date, `category`, tags, optional link/repo, `featured` (pins to top), `draft` (hides from site). Change the schema there if new fields are needed.
- **Categories** are defined once in `src/categories.ts` (slug, label, blurb) — currently Sports / Business / Misc. That list drives the sidebar nav, the zod enum in the content schema, and the generated category pages. Adding a bucket = adding an entry there; nothing else needs touching. Projects default to `misc`.
- `src/pages/index.astro` — welcome/landing page: intro plus the 5 most recent projects.
- `src/pages/[category].astro` — one page per bucket (`/sports/`, `/business/`, `/misc/`), header + that bucket's projects.
- `src/pages/projects/[slug].astro` — project detail page; back link returns to the project's category.
- `src/components/ProjectList.astro` — the project list markup, shared by the homepage and category pages.
- `src/projects.ts` — `getPublishedProjects()` / `sortProjects()` (featured first, then newest).
- `src/layouts/Base.astro` — shared shell and global styles. Two-column grid: sticky category nav on the left, content on the right; collapses to a stacked layout with a horizontal nav under 46rem.

## Design

Dark mode, minimal, **no accent hue in the chrome**. Cool graphite background (`#111214`), bone text (`#f2efe9`), and that's the whole palette — links carry an underline rather than a color, and emphasis (active nav item, featured star, hover) is done with brightness. `--accent` / `--accent-bright` are still the variable names but they hold bone/white, not a hue.

**The reason matters:** the user is a data-analysis writer, and their charts encode meaning in color (green/red = make/miss in the Clark piece). A colored chrome would both compete with and muddy that. Saturated color belongs to the charts; the page stays quiet. Don't reintroduce an accent hue without asking.

This replaced an earlier warm "workshop at night" theme (warm near-black + ember orange + radial glow + fade-up-on-load animation). The user's own critique: it read as obviously LLM-designed. The glow and the entry animation were deleted for the same reason — don't add them back.

Type: Fraunces for display, IBM Plex Sans for body, IBM Plex Mono for dates/tags/nav (Google Fonts). The **wordmark is deliberately IBM Plex Sans, not Fraunces** — Fraunces' `f` has a long overhanging hook and the `ff` in "jeffbrous" collides. All colors are CSS variables in `Base.astro`. Keep new UI within this system.

## Deployment

Target: GitHub Pages under the user's account **jbrous-eff**, repo name `jbrous-eff.github.io` (user site → serves at root, no `base` path). Workflow at `.github/workflows/deploy.yml` builds and deploys on every push to main.

Custom domain: **jeffbrous.com**, registered at Cloudflare (2026-07-31). `site` in `astro.config.mjs` and `public/CNAME` both point at it. DNS lives in Cloudflare: four A records for the apex → GitHub Pages IPs (185.199.108–111.153), `www` CNAME → `jbrous-eff.github.io`. Records must be **DNS only** (grey cloud) — Cloudflare's proxy breaks GitHub's Let's Encrypt cert issuance.

## Status / roadmap

- [x] Foundation: scaffold, content collection, list + detail pages, template
- [x] Design pass (dark theme, see Design section)
- [x] Deployed and LIVE at https://jbrous-eff.github.io (2026-07-31). Repo: https://github.com/jbrous-eff/jbrous-eff.github.io — every push to main auto-deploys. gh CLI is installed at `C:\Program Files\GitHub CLI\gh.exe` (may need PATH export in bash) and authed as jbrous-eff.
- [x] Bought **jeffbrous.com** on Cloudflare (2026-07-31); repo config + `public/CNAME` updated
- [ ] Cloudflare DNS records + GitHub Pages custom domain setting + Enforce HTTPS (user-side clicks)
- [ ] Backfill real projects from `C:\Users\jbrou\Documents\Projects` (Bloch, NYC.data, pro-sports, Writing_Creative, Fun_One_Offs, etc.)

## Development

When starting the dev server, use background mode:

```
astro dev --background
```

Manage the background server with `astro dev stop`, `astro dev status`, and `astro dev logs`.

`npm run build` must pass before committing — it validates every project file against the schema, so it's also the check that the user's hand-edited markdown is well-formed.

## Documentation

Full documentation: https://docs.astro.build

Consult these guides before working on related tasks (note: this is Astro 7 — verify against current docs rather than trained knowledge):

- [Adding pages, dynamic routes, or middleware](https://docs.astro.build/en/guides/routing/)
- [Working with Astro components](https://docs.astro.build/en/basics/astro-components/)
- [Using React, Vue, Svelte, or other framework components](https://docs.astro.build/en/guides/framework-components/)
- [Adding or managing content](https://docs.astro.build/en/guides/content-collections/)
- [Adding styles or using Tailwind](https://docs.astro.build/en/guides/styling/)
