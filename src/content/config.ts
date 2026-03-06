import { defineCollection, z } from 'astro:content';

// Reusable FAQ schema
const faqSchema = z.object({
    question: z.string(),
    answer: z.string(),
});

const notes = defineCollection({
    type: 'content',
    schema: z.object({
        title: z.string(),
        description: z.string(),
        publishDate: z.coerce.date(),
        dateModified: z.coerce.date().optional(),
        author: z.string().optional().default('Deniz Wozniak'),
        tags: z.array(z.string()).optional(),
        isDraft: z.boolean().optional().default(false),
        isFeatured: z.boolean().optional().default(false),
        visualVariant: z.string().optional(),
    }),
});

const topics = defineCollection({
    type: 'content',
    schema: z.object({
        title: z.string(),
        description: z.string(),
        category: z.string(),
        relatedProduct: z.string().optional(),
        dateModified: z.coerce.date().optional(),
        tldr: z.string().optional(),
        keyTakeaways: z.array(z.string()).optional(),
        faqs: z.array(faqSchema).optional(),
    }),
});

const docs = defineCollection({
    type: "content",
    schema: z.object({
        title: z.string(),
        section: z.string(),
        order: z.number(),
    }),
});

const legal = defineCollection({
    type: 'content',
    schema: z.object({
        title: z.string(),
        lastUpdated: z.string().transform((str) => new Date(str)),
        description: z.string().optional(),
    }),
});

const comparisons = defineCollection({
    type: 'content',
    schema: z.object({
        title: z.string(),
        description: z.string(),
        type: z.enum(['list', 'versus']),
        publishDate: z.coerce.date(),
        dateModified: z.coerce.date().optional(),
        relatedProduct: z.string().optional(),
        tldr: z.string().optional(),
        faqs: z.array(faqSchema).optional(),
    }),
});

const glossary = defineCollection({
    type: 'content',
    schema: z.object({
        title: z.string(),
        description: z.string(),
        relatedTerms: z.array(z.string()).optional(),
        relatedTopics: z.array(z.string()).optional(),
        dateModified: z.coerce.date().optional(),
    }),
});

export const collections = { notes, topics, docs, legal, comparisons, glossary };

