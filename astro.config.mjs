import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig(
{
  site: 'https://Scott-Tatham.github.io',
  base: '/GroupoSCE',
  vite:
      {
        plugins: [tailwindcss()]
      }
});