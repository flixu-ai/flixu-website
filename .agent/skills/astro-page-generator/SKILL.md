---
name: astro-page-generator
description: Generates a new Astro page following Flixu's Symmetrical Rule, Design System, and SEO best practices. Use when user asks to "create a new page", "scaffold a topic page", or "build a product page".
---

# Astro Page Generator Skill

## Instructions

When the user requests to create a new page, follow these steps to ensure architectural compliance:

### Step 1: Identify Page Intent

Determine if the page is a Topic page (informational) or a Product page (functional).

### Step 2: Scaffold the Astro Component

Create the file in `src/pages/`. Use the following structure:

```astro
---
import BaseLayout from '../layouts/BaseLayout.astro';
import Section from '../components/ui/Section.astro';
// Import other UI components as needed

const title = "Page Title";
const description = "Precise, human-readable meta description.";
---
<BaseLayout title={title} description={description}>
  <Section data-chapter="Introduction">
    <h1 class="font-instrument text-5xl">Page Headline.</h1>
    <p class="font-inter text-stone-600">Calm, precise introduction.</p>
  </Section>

  <Section data-chapter="Details">
    <!-- Content goes here -->
  </Section>
</BaseLayout>
```

### Step 3: Validate Design Rules

- Ensure NO heavy background fills are used on cards/sections.
- Verify that `<Section>` is used for all main content blocks to maintain the 128px Safe Zone symmetry.
- If interactivity is needed, import React components with `client:visible` or `client:load`.

### Step 4: SEO and Linking

- Add internal links using descriptive anchor text.
- Ensure the brand voice is applied correctly.
