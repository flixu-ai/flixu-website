// @ts-check
import { defineConfig } from 'astro/config';

import react from '@astrojs/react';
import tailwindcss from '@tailwindcss/vite';

import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";

import vercel from "@astrojs/vercel";

// https://astro.build/config
export default defineConfig({
  site: 'https://flixu.ai',
  output: 'server',
  adapter: vercel(),
  i18n: {
    defaultLocale: "en",
    locales: [
      "en", "de", "fr", "es", "it", "nl", "pt", "pl", "tr", "ru", // Europe/Global
      "da", "sv", "no", "fi", // Nordics
      "ja", "ko", "zh", "id", "vi", "th", // Asia
      "ar", "he", // Middle East (RTL)
      "hi", "cs", "hu", "ro", "el", "ca", "ms", "tl", "sk", "hr", "bg", "et" // RoW
    ],
    routing: {
      prefixDefaultLocale: false // flixu.ai = English, flixu.ai/de = German
    }
  },
  integrations: [react(), mdx(), sitemap()],

  vite: {
    plugins: [tailwindcss()],
    server: {
      watch: {
        ignored: ['**/knowledge/**']
      }
    }
  }
});