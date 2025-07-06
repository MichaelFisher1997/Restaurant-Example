// @ts-check
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
  site: 'http://localhost:4321/',
  integrations: [tailwind()],

  vite: {
    server: {
      host: '0.0.0.0',
      port: 4321,
      hmr: false,
      allowedHosts: ['dev'],
    },
  },
});