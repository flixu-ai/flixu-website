---
title: "Document Fidelity: Why Layouts Break (And How to Fix It)"
description: "Translating a PDF is easy. Keeping the formatting intact is hard. How structural parsing separates content from geometry to save hours of DTP work."
category: "Engineering"
relatedProduct: "documents"
---

# The Geometry of Language

In document translation, there is a fundamental physical problem: **Text Expansion.**

Different languages take up different amounts of space to say the same thing.
*   **English:** "Buy now" (7 characters)
*   **German:** "Jetzt kaufen" (12 characters) -> **+70% width**
*   **French:** "Acheter maintenant" (18 characters) -> **+150% width**

If a translation engine simply replaces the text string inside a PDF or PowerPoint without understanding the geometry, the text overflows. Buttons break, tables misalign, and pagination is destroyed. This forces teams to spend hours on manual Desktop Publishing (DTP) to fix the layout.

## The Solution: Structural Parsing

To solve this, Flixu does not treat a document as a flat image or a stream of text. We treat it as a **Tree Structure** of elements.

Before a single word is translated, our engine parses the document to understand the "Skeleton":
1.  **Bounding Boxes:** Where does this text block start and end?
2.  **Font Metrics:** What is the font size, weight, and kerning?
3.  **Flow Logic:** Does this paragraph continue on the next page?

### Decoupling Content from Coordinates

We separate the layer of *Meaning* from the layer of *Presentation*. The translation happens in a neutral state, and the re-assembly happens with "Elastic Layout" logic.

If the German translation is too long for the English bounding box, our engine has two choices (configurable):
1.  **Auto-Kerning:** Slightly reduce letter-spacing or font-size to fit the box.
2.  **Reflow:** Expand the box vertically and push the elements below it down, preserving the relative whitespace.

## Technical Visualization

Here is how Flixu "sees" a document element before translation:

```json
{
  "element_id": "text_block_42",
  "content": "Quarterly Report",
  "geometry": {
    "x": 100,
    "y": 50,
    "width": 200,
    "height": 40,
    "max_expansion": 1.2
  },
  "style": {
    "font": "Helvetica Neue",
    "size": 24,
    "align": "center"
  }
}
```

## The End of Manual Formatting

By respecting these constraints programmatically, we deliver localized documents that are ready to publish.

*   **Marketing Decks (PPTX):** Slides remain visually balanced.
*   **Legal Contracts (PDF):** Clause numbering and indentation stay rigorous.
*   **Print Brochures (InDesign/IDML):** Images and captions stay aligned.

We believe that a translation is only finished when the document looks like it was originally written in the target language—pixels and all.
