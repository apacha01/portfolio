import { basePrefix } from '/src/constants/deploy.js';
import { defineConfig } from 'astro/config';

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
	integrations: [tailwind()],
	site: 'https://apacha01.github.io',
	base: basePrefix,
	i18n: {
		defaultLocale: 'en',
		locales: ['en', 'es'],
		routing: {
			prefixDefaultLocale: false
		},
		fallback: {
			es: 'en'
		}
	}
});