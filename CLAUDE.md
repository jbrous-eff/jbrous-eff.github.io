# Project Hub

Personal portfolio site where the user posts all their various projects (data experiments, writing, freelance work, one-offs). Built July 2026 with Astro 7, static output, no backend.

**About the user:** self-described "vibe coding guy" — they direct, Claude implements. Don't hand them manual code edits to make; do the work, and keep any instructions for them non-technical (README.md has their plain-English guide for adding projects).

## How the site works

- **One project = one markdown file** in `src/content/projects/`. The filename is the URL slug (`my-thing.md` → `/projects/my-thing/`).
- `src/content/projects/_template.md` is the copy-me starter (files starting with `_` are excluded from the collection).
- Frontmatter schema lives in `src/content.config.ts`: title, description, date, tags, optional link/repo, `featured` (pins to top of homepage), `draft` (hides from site). Change the schema there if new fields are needed.
- `src/pages/index.astro` — homepage list, featured first then newest first.
- `src/pages/projects/[slug].astro` — project detail page.
- `src/layouts/Base.astro` — shared shell. **Styling is placeholder-only**; a real design pass is planned but hasn't happened yet — discuss UI direction with the user before restyling.

## Status / roadmap

- [x] Foundation: scaffold, content collection, list + detail pages, template
- [ ] Design pass (user wants to discuss UI direction first)
- [ ] Deployment (likely GitHub Pages or Netlify — not yet decided; will need `site` set in `astro.config.mjs` when it happens)
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
