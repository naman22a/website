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

const skillset = defineCollection({
    type: 'data',
    schema: z.object({
        smallText: z.string(),
        largeText1: z.string(),
        largeText2: z.string(),
        buttonText: z.string(),
        description: z.string(),
        skills: z.array(
            z.object({
                name: z.string(),
                icon: z.string(),
                href: z.string()
            })
        )
    })
});

export const collections = { landing, skillset };
