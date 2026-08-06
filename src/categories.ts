// The buckets projects are filed under. Adding an entry here is all it takes:
// the sidebar link and the /<slug>/ page are both generated from this list.
export const CATEGORIES = [
  {
    slug: 'sports',
    label: 'Sports',
    blurb: 'Analysis of games, players, and the numbers underneath them.',
  },
  {
    slug: 'business',
    label: 'Business',
    blurb: 'Consulting and e-commerce analytics work, with client details redacted.',
  },
  {
    slug: 'misc',
    label: 'Misc',
    blurb: 'One-offs and experiments that fit nowhere else.',
  },
] as const;

export type CategorySlug = (typeof CATEGORIES)[number]['slug'];

export const CATEGORY_SLUGS = CATEGORIES.map((c) => c.slug) as [CategorySlug, ...CategorySlug[]];

export function categoryBySlug(slug: string) {
  return CATEGORIES.find((c) => c.slug === slug);
}
