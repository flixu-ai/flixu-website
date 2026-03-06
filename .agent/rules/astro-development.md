# Astro Development Guidelines

## 1. Static Generation First

- Prefer SSG (Static Site Generation).
- Use `client:visible` or `client:load` ONLY for React Islands like the Translation Widget or Mobile Menu.

## 2. Component Structure

- `src/components/ui/` for atomic elements (Section, Button, ChapterRail).
- `src/layouts/` for BaseLayout and TopicLayout.
- `src/pages/` for routing.
- `src/content/` for Markdown/MDX topic pages.

## 3. The Section Component Rule

- **CRITICAL:** All page content MUST be wrapped in the `<Section>` component to ensure symmetrical padding for the Chapter Rail design.
- Use `<Section data-chapter="Name">` to automatically handle layout and Scroll Spy logic.

## 4. Routing Strategy

- **Topic Pages (`/ai-translation`):** Informational, structured data, "What is it?". Must link to Product pages.
- **Product Pages (`/product/text-translation`):** Functional, feature-focused, "How Flixu does it". Must link to Topic pages.
