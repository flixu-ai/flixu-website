---
title: "Domain Awareness: Why Context Reduces Risk"
description: "In legal and medical translation, 'good enough' is dangerous. How domain-specific AI prevents costly liability errors and ensures compliance."
category: "Risk & Compliance"
relatedProduct: "documents"
---

# The High Cost of Ambiguity

In casual conversation, a mistranslation is an embarrassment. In regulated industries like law, healthcare, or finance, it is a liability.

**Domain Awareness** is the capability of a translation system to understand the specific jargon, regulatory requirements, and stylistic conventions of a subject matter. A general-purpose AI model is trained on the entire internet—Reddit, Wikipedia, and novels. When asked to translate a contract or a patient diagnosis, this broad training becomes a weakness, not a strength.

## The "Execute" Problem

Consider the English verb **"to execute"**.

1.  **General Context:** To kill or carry out a death sentence.
2.  **Tech Context:** To run a program or script.
3.  **Legal Context:** To sign and validate a contract (*"The contract was executed"*).

If a generic translation engine translates a software manual's instruction *"Execute the program"* into a language where the word implies "kill", the result is absurd. If it translates a legal document's *"The agreement was executed"* incorrectly, it could render the contract void in a foreign court.

## Case Study: The $71 Million Word

The importance of domain awareness is best illustrated by the tragic case of Willie Ramirez in Florida.

His family brought him to a hospital and described his condition in Spanish as **"intoxicado"**. In Cuban Spanish, this implies "poisoned" or "sick from something eaten". The staff (using general bilingual knowledge, not medical expertise) translated it as **"intoxicated"** (drunk/drug overdose).

Doctors treated him for a drug overdose rather than the actual brain hemorrhage he was suffering. The delay in proper treatment left him quadriplegic. The resulting malpractice settlement was **$71 million**.

This tragedy highlights a core truth: **Subject-matter expertise is not optional.**

## How Flixu Enforces Domains

Flixu moves beyond generic models by implementing **Domain Routing**. When you classify a project as "Legal" or "Medical", we switch the underlying logic:

1.  **Terminology Enforcement:** We prioritize specific glossaries (e.g., ICD-10 codes for medical, standard clauses for legal).
2.  **Model Selection:** We route the text to Large Language Models (LLMs) that have been fine-tuned on corpora of European Law, FDA regulations, or Technical Manuals.
3.  **Conservative Settings:** For high-stakes domains, the AI's "temperature" (creativity) is lowered to near zero to favor precision over style.

In regulated industries, creativity is a bug. Precision is the only feature that matters.
