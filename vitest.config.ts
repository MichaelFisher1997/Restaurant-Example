import { defineConfig } from 'vitest/config';
import { getViteConfig } from 'astro/config';

export default defineConfig({
  test: {
    environment: 'happy-dom', // or 'jsdom' if you prefer
  },
  ...getViteConfig({}),
});
