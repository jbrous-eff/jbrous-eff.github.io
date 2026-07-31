import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

// Every project is a markdown file in src/content/projects/.
// Files starting with "_" (like _template.md) are ignored.
const projects = defineCollection({
  loader: glob({ pattern: '**/[^_]*.md', base: './src/content/projects' }),
  schema: z.object({
    title: z.string(),
    description: z.string(), // one-liner shown on the homepage card
    date: z.coerce.date(), // when you finished/posted it
    tags: z.array(z.string()).default([]), // e.g. ["data", "nba"]
    link: z.string().url().optional(), // live demo / external link
    repo: z.string().url().optional(), // GitHub repo, if any
    featured: z.boolean().default(false), // pin to top of homepage
    draft: z.boolean().default(false), // true = hidden from the site
  }),
});

export const collections = { projects };
