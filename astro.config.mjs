// @ts-check
import { fileURLToPath } from 'node:url';
import tailwindcss from '@tailwindcss/vite';
import { defineConfig } from 'astro/config';

const site = process.env.SITE_URL || 'https://mimoworks.app';
const rawBase = process.env.BASE_PATH || '/';
const base = rawBase === '/' ? '/' : `/${rawBase.replace(/^\/|\/$/g, '')}/`;
const astroPrerenderEntrypoint = fileURLToPath(
  import.meta.resolve('astro/entrypoints/prerender'),
);

export default defineConfig({
  site,
  base,
  output: 'static',
  trailingSlash: 'always',
  integrations: [],
  vite: {
    resolve: {
      alias: {
        'astro/entrypoints/prerender': astroPrerenderEntrypoint,
      },
    },
    plugins: [tailwindcss()],
  },
});
