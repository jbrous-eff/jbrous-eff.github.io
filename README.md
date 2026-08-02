# Project Hub

My personal site for posting projects.

## How to add a project (the only thing you need to know)

1. Go to `src/content/projects/`
2. Copy `_template.md` and rename it — the filename becomes the web address (e.g. `nba-shot-charts.md` → `jeffbrous.com/projects/nba-shot-charts`)
3. Fill in the title, description, date, and tags at the top
4. Leave `category:` as `sports` — it's the only section right now (more can be added later)
5. Write about the project below the `---` line — normal text works, and so does markdown
6. Delete the `draft: true` line when it's ready to go live

That's it. Or just ask Claude to do it.

## Seeing the site locally

```bash
npm run dev
```

Then open http://localhost:4321 in your browser.

## Everything else

Ask Claude — the technical details live in `CLAUDE.md`.
