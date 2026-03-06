---
name: content-creator
description: Generates standardized markdown content pieces (in English) for topics, notes, or knowledge base, and orchestrates the automated translation script. Use when asked to "write a new article", "create a content piece", or "document a new feature".
---

# Content Creator Skill

## Instructions

When the user asks you to create a new content piece (such as a topic, note, or knowledge base article), follow this strict multi-step process.

### Step 1: Content Scoping and Placement

Identify the nature of the content:

- **Knowledge Base:** Use `knowledge/` (e.g., `auto-topics-en-brand-voice.md`)
- **Topics (Public):** Use `src/content/topics/en/`
- **Notes (Public/Technical):** Use `src/content/notes/en/`

### Step 2: Drafting the English Baseline

All Flixu content is authored in English first. Create the `.md` or `.mdx` file in the identified directory.

- You MUST ensure the frontmatter contains at least `title` and `description`.
- You MUST apply the Flixu Brand Voice ("Calm. Precise. Human. Warm."). Do not use hype words. Use Flixu terminology ("Workspace", "Context", "Domain Awareness").

### Step 3: Localizing the Content

Once the English file is written and saved to the disk, you are responsible for translating it to all supported languages.
Execute the localization script via bash:

```bash
node scripts/localize.js
```

The script will automatically pick up the new file in the `en` folder and use the Dashscope (Qwen) and OpenAI APIs to translate the content in parallel.

### Step 4: Output

Wait for the localization script to finish successfully. Inform the user that the English baseline was created and that the content has been localized across the 34 platform languages.
