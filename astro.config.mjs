// @ts-check
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import solidJs from '@astrojs/solid-js';
import rehypeSlug from 'rehype-slug';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
    site: 'https://namanarora.xyz',
    output: 'static',
    server: { port: 3000 },
    integrations: [tailwind(), solidJs({ devtools: true }), sitemap()],
    markdown: {
        shikiConfig: {
            theme: 'catppuccin-mocha'
        },
        rehypePlugins: [
            rehypeSlug,
            [rehypeAutolinkHeadings, { behavior: 'wrap' }]
        ]
    },
    redirects: {
        '/blogs': '/blogs/1'
    }
});
