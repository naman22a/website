// @ts-check
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
    server: { port: 3000 },
    integrations: [tailwind()]
});
