import { defineConfig } from 'astro/config'
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://bengkel-las.com',
  base: '/',
  compressHTML: true,
  integrations: [sitemap()]
})
