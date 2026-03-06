---
description: Perform a technical SEO and AIO audit on an existing page.
---

# SEO & AIO Audit Workflow

1. **Check Metadata:** Verify the presence and accuracy of `<title>`, `<meta name="description">`, and canonical links.
2. **Review Headings:** Ensure a single `<h1>` and a logical hierarchy of `<h2>` and `<h3>` tags.
3. **Verify Links:** Check internal links. Ensure Topic pages and Product pages are properly interconnected.
4. **Brand Voice Check:** Read through the text to ensure it avoids hype words and uses the correct terminology (Workspace, Domain Awareness, Context, Resonance).
5. **AIO Scannability:** Ensure the page uses semantic HTML (`<article>`, `<section>`, etc.) and clear class names so LLMs can easily parse the page structure.
6. **Performance:** Ensure React components are only hydrated when necessary (`client:visible` or `client:load`) and static content is purely HTML.
