// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  // Serving from the repo jbrous-eff.github.io (user site, no base path).
  // Once jbrous.com DNS is live: change this to 'https://jbrous.com' and
  // add a public/CNAME file containing "jbrous.com".
  site: 'https://jbrous-eff.github.io',
});
