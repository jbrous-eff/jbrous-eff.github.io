# Project Hub

My personal site for posting projects.

## How to add a project (the only thing you need to know)

1. Go to `src/content/projects/`
2. Copy `_template.md` and rename it — the filename becomes the web address (e.g. `nba-shot-charts.md` → `jeffbrous.com/projects/nba-shot-charts`)
3. Fill in the title, description, date, and tags at the top
4. Set `category:` to `sports`, `business`, or `misc` — that picks which section it shows in
5. Want it to show as a big chart card instead of a text listing? Put your chart image in a folder under `public/images/` and add one line: `cardImage: "/images/your-folder/your-chart.png"`. Chart cards are self-contained — the chart plus your title and description ARE the piece, and there's no separate page for it, so you can skip writing anything below the `---` line
6. Otherwise, write about the project below the `---` line — normal text works, and so does markdown
7. Delete the `draft: true` line when it's ready to go live

That's it. Or just ask Claude to do it.

## Seeing the site locally

```bash
npm run dev
```

Then open http://localhost:4321 in your browser.

## Everything else

Ask Claude — the technical details live in `CLAUDE.md`.
