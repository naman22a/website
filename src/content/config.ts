import { defineCollection, z } from 'astro:content';

const landing = defineCollection({
    type: 'data',
    schema: z.object({
        bgText1: z.string(),
        bgText2: z.string(),
        smallText: z.string(),
        name: z.string(),
        description: z.string(),
        buttonText: z.string()
    })
});

export const collections = { landing };
