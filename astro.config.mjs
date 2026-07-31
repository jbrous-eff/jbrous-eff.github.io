// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  // Custom domain jeffbrous.com, served from the repo jbrous-eff.github.io
  // (user site, no base path). public/CNAME tells GitHub Pages the domain.
  site: 'https://jeffbrous.com',
});
