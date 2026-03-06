---
description: How to orchestrate the generation and translation of new content pieces.
---

# Create Content Workflow

1. **Information Gathering:** Collect the raw information, data, or draft text to be transformed into a Flixu content piece.
2. **Determine Target Location:**
   - Is it internal/agent documentation? -> Target `knowledge/` directory.
   - Is it a Topic page? -> Target `src/content/topics/en/`.
   - Is it a Note or technical doc? -> Target `src/content/notes/en/`.
3. **Draft the Content (English Base):**
   - Write the markdown file in the target `en` directory.
   - Use the `content-optimizer` skill to ensure the tone is "Calm. Precise. Human. Warm."
   - Include proper YAML frontmatter (e.g., `title`, `description`, `category`).
4. **Localization / Automated Translation:**
   - Once the English (`en`) file is finalized and saved, run the localization script:
     ```bash
     node scripts/localize.js
     ```
   - This script will automatically use the AI models (Qwen for Asia, GPT-4o for ROW) to translate the newly created English file into all 34 supported languages and place them in their respective language folders.
5. **Verification:**
   - Check the console output of the `localize.js` script to ensure there were no critical pipeline failures.
   - Run a quick build or dev server preview if it is a public-facing file.
