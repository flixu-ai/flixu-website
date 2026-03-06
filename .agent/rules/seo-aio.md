# SEO & AIO (AI Optimization) Guidelines

## 1. Technical SEO

- Use semantic HTML tags (`<article>`, `<section>`, `<nav>`).
- Ensure one H1 per page, nested H2s and H3s correctly.
- Optimize images using Astro's `<Image>` or `<Picture>` components.
- Ensure all pages have proper `meta` titles, descriptions, and canonical URLs.

## 2. AIO (AI Optimization)

- LLMs read code as context. Ensure class names and component structures are semantic and human-readable where possible.
- Use explicit data attributes if necessary for clarity.
- Provide clear context in markdown files within `src/content/`.

## 3. Content Routing & Internal Linking

- **Topic Pages:** Focus on educational intent ("What is it?"). Must contain links to relevant Product pages.
- **Product Pages:** Focus on transactional/functional intent ("How we do it"). Must link back to Topic pages.
- Use descriptive anchor text for internal links.

## 4. Brand Voice

- **Calm. Precise. Human. Warm.**
- Use "Workspace" instead of "Tool" or "App".
- Use "Domain Awareness" instead of "Industry features".
- Use "Context" instead of "Data".
- Use "Resonance" instead of "Optimization".
- Avoid hype words ("Revolutionary", "Explode").
