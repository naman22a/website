// @ts-check
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import solidJs from '@astrojs/solid-js';
import rehypeSlug from 'rehype-slug';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';

export default defineConfig({
    server: { port: 3000 },
    integrations: [tailwind(), solidJs({ devtools: true })],
    markdown: {
        shikiConfig: {
            theme: 'catppuccin-mocha'
        },
        rehypePlugins: [
            rehypeSlug,
            [rehypeAutolinkHeadings, { behavior: 'wrap' }]
        ]
    }
});
