// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
import netlify from '@astrojs/netlify';

// https://docs.astro.build/en/guides/deploy/netlify/
export default defineConfig({
  // Enable server runtime for API routes. Static pages can still be prerendered.
  output: 'server',
  adapter: netlify(),
});
