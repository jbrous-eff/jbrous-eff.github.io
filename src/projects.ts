import { getCollection, type CollectionEntry } from 'astro:content';

/** Featured projects first, then newest first. */
export function sortProjects(projects: CollectionEntry<'projects'>[]) {
  return [...projects].sort((a, b) => {
    if (a.data.featured !== b.data.featured) return a.data.featured ? -1 : 1;
    return b.data.date.valueOf() - a.data.date.valueOf();
  });
}

/** Every published project (drafts excluded), sorted. */
export async function getPublishedProjects() {
  return sortProjects(await getCollection('projects', ({ data }) => !data.draft));
}
