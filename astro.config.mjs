import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://monkeytreemontessori.netlify.app',
  vite: {
    server: {
      allowedHosts: 'all',
    },
  },
});
