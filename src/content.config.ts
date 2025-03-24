import { defineCollection, reference, z } from 'astro:content';
import { file, glob } from 'astro/loaders';

const blog = defineCollection({
  loader: glob({ pattern: '*.md', base: 'src/contents/blog' }),
  schema: z.object({
    title: z.string(),
    cover: z.string(),
    author: reference('members'),
    createdAt: z.date(),
    tags: z.string().array(),
  }),
});

const members = defineCollection({
  loader: file('src/contents/members/members.yaml'),
  schema: z.object({
    id: z.string(),
    name: z.string(),
    icon: z.string(),
    github: z.string().optional(),
    twitter: z.string().optional(),
    website: z.string().optional(),
  }),
});

export const collections = { blog, members };
