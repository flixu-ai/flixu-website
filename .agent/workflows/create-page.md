---
description: How to create a new Topic or Product page in Flixu's Astro website.
---

# Create Page Workflow

1. **Determine Page Type:** Decide if it is a Topic Page (`/topic-name`) or a Product Page (`/product/feature-name`).
2. **Scaffold the File:** Create the `.astro` file in the appropriate directory inside `src/pages/`.
3. **Apply Layout:** Wrap the page content in the appropriate layout component (e.g., `BaseLayout` or `TopicLayout`).
4. **Use Sections:** Break the content down into logical chapters. Wrap EACH chapter in the `<Section data-chapter="Chapter Name">` component to enforce the Symmetrical Padding Rule.
5. **Apply Design System:**
   - Use `Instrument Serif` for headings.
   - Use `Inter` for body text.
   - Use `Geist Mono` for badges or technical data.
   - Apply 1px borders instead of background fills for cards.
6. **Internal Linking:** Ensure Topic pages link to relevant Product pages, and Product pages link to relevant Topic pages.
7. **SEO/AIO Review:** Ensure semantic HTML, proper meta tags, and adherence to the "Calm, Precise, Human, Warm" brand voice.
