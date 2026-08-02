import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';
import { CATEGORY_SLUGS } from './categories';

// Every project is a markdown file in src/content/projects/.
// Files starting with "_" (like _template.md) are ignored.
const projects = defineCollection({
  loader: glob({ pattern: '**/[^_]*.md', base: './src/content/projects' }),
  schema: z.object({
    title: z.string(),
    description: z.string(), // one-liner shown on the homepage card
    date: z.coerce.date(), // when you finished/posted it
    category: z.enum(CATEGORY_SLUGS).default('sports'), // which bucket it lives in
    tags: z.array(z.string()).default([]), // e.g. ["data", "nba"]
    link: z.string().url().optional(), // live demo / external link
    repo: z.string().url().optional(), // GitHub repo, if any
    image: z.string().optional(), // social-preview image, e.g. /images/foo/chart.png
    featured: z.boolean().default(false), // pin to top of homepage
    draft: z.boolean().default(false), // true = hidden from the site
  }),
});

export const collections = { projects };
