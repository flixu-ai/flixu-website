import { getCollection } from "astro:content";

export const prerender = true;

export async function GET() {
  const topics = await getCollection("topics");
  const comparisons = await getCollection("comparisons");
  const notes = await getCollection("notes");

  // Filter to English content only
  const enTopics = topics.filter((t) => t.id.startsWith("en/"));
  const enComparisons = comparisons.filter((c) => c.slug.startsWith("en/"));
  const enNotes = notes.filter((n) => n.id.startsWith("en/"));

  // Attempt to load glossary collection (may not exist yet)
  let enGlossary: Array<{ id: string; data: { title: string; description: string } }> = [];
  try {
    const glossary = await getCollection("glossary" as any) as Array<{ id: string; data: { title: string; description: string } }>;
    enGlossary = glossary.filter((g) => g.id.startsWith("en/"));
  } catch {
    // Glossary collection not yet created
  }

  const BASE = "https://flixu.ai";

  const lines: string[] = [
    "# Flixu AI — LLM Context File",
    "# https://flixu.ai/llms.txt",
    "# Last generated: " + new Date().toISOString().split("T")[0],
    "",
    "## About Flixu",
    "",
    "Flixu is a context-aware AI translation platform. It orchestrates multiple large language models (LLMs) with seven layers of context — glossaries, translation memory, brand voice settings, domain awareness, visual context, semantic context, and formatting constraints — to produce translations that respect terminology, tone, and layout.",
    "",
    "Flixu is used by freelance translators, translation agencies, and SaaS companies. It supports text translation, document translation (PDF, DOCX, PPTX, XLIFF, JSON, YAML, PO, XML), and context-aware workflows.",
    "",
    "Founded by Deniz Wozniak (ex-Phrase, 10+ years B2B SaaS in translation technology). Based in Germany. Member of NVIDIA Inception and Google for Startups.",
    "",
    "## Core Pages",
    "",
    `- [Homepage](${BASE}/)`,
    `- [Method — How Flixu Works](${BASE}/method)`,
    `- [Pricing](${BASE}/pricing)`,
    `- [About / Manifesto](${BASE}/about)`,
    `- [Contact](${BASE}/contact)`,
    "",
    "## Product",
    "",
    `- [Text Translation](${BASE}/product/text) — Context-aware, segment-level translation with brand voice enforcement`,
    `- [Document Translation](${BASE}/product/documents) — Layout-preserving translation for PDF, DOCX, PPTX`,
    `- [Context Awareness](${BASE}/product/context) — Seven dimensions of translation context`,
    "",
    "## Who It's For",
    "",
    `- [Freelance Translators](${BASE}/for/freelancers) — Client memory, glossary, and TM in one workspace`,
    `- [Translation Agencies](${BASE}/for/agencies) — Shared TMs, glossaries, and brand voices for teams`,
    `- [SaaS & Enterprise](${BASE}/for/enterprise) — API, RBAC, and precision TM`,
    "",
  ];

  // Topic Library
  if (enTopics.length > 0) {
    lines.push("## Topic Library", "");
    for (const topic of enTopics) {
      const slug = topic.id.replace("en/", "").replace(/\.mdx?$/, "");
      lines.push(`- [${topic.data.title}](${BASE}/topic/${slug}) — ${topic.data.description}`);
    }
    lines.push("");
  }

  // Glossary
  if (enGlossary.length > 0) {
    lines.push("## Glossary", "");
    for (const term of enGlossary) {
      const slug = term.id.replace("en/", "").replace(/\.mdx?$/, "");
      lines.push(`- [${term.data.title}](${BASE}/topic/glossary/${slug}) — ${term.data.description}`);
    }
    lines.push("");
  }

  // Comparisons
  if (enComparisons.length > 0) {
    lines.push("## Market Comparisons", "");
    for (const comp of enComparisons) {
      const slug = comp.slug.split("/").pop();
      lines.push(`- [${comp.data.title}](${BASE}/compare/${slug})`);
    }
    lines.push("");
  }

  // Notes / Journal
  if (enNotes.length > 0) {
    lines.push("## Founder Journal", "");
    for (const note of enNotes) {
      const slug = note.id.replace("en/", "").replace(/\.mdx?$/, "");
      lines.push(`- [${note.data.title}](${BASE}/notes/${slug})`);
    }
    lines.push("");
  }

  const markdown = lines.join("\n");

  return new Response(markdown, {
    status: 200,
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, max-age=86400",
    },
  });
}
