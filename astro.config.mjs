// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  // Zmień na właściwy URL strony przed deploymentem
  site: 'https://example.com',

  integrations: [
    sitemap({
      changefreq: 'weekly',
      priority: 1.0,
      lastmod: new Date(),
    }),
  ],

  build: {
    // Optymalizacja dla SEO
    inlineStylesheets: 'auto',
  },

  compressHTML: true,
});
