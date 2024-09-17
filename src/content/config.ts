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

const projectSchema = z.object({
    title: z.string(),
    description: z.string(),
    previewLink: z.string().optional(),
    githubLink: z.string(),
    image: z.string(),
    tags: z.array(z.string())
});

const projects = defineCollection({
    type: 'data',
    schema: z.object({ projects: z.array(projectSchema) })
});

export type ProjectSchemaType = z.infer<typeof projectSchema>;

export const collections = { landing, skillset, projects };
