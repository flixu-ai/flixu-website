import { pipeline } from '@xenova/transformers';
import fs from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { syncContentToKnowledge } from './knowledge-sync.ts';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const KNOWLEDGE_DIR = path.resolve(__dirname, '../../knowledge');

// Singleton to hold the vector store
let vectorStore: { text: string; source: string; embedding: number[] }[] | null = null;
let embedder: any = null;

// Cosine Similarity
function cosineSimilarity(a: number[], b: number[]) {
    const dotProduct = a.reduce((sum, val, i) => sum + val * b[i], 0);
    const magnitudeA = Math.sqrt(a.reduce((sum, val) => sum + val * val, 0));
    const magnitudeB = Math.sqrt(b.reduce((sum, val) => sum + val * val, 0));
    return dotProduct / (magnitudeA * magnitudeB);
}

// Simple chunking strategy (Paragraphs + Overlap usually better, but keeping it simple)
function chunkText(text: string, maxChars = 500) {
    const chunks: string[] = [];
    const paragraphs = text.split('\n\n');

    for (const para of paragraphs) {
        if (para.length < 50) continue; // Skip tiny chunks
        // If paragraph too long, simple split (refinement possible)
        chunks.push(para.trim());
    }
    return chunks;
}

export async function initializeRAG() {
    if (vectorStore) {
        console.log(`[RAG] Already initialized. Store size: ${vectorStore.length}`);
        return;
    }

    console.log("[RAG] Initializing...");

    // 1. Sync Content
    await syncContentToKnowledge();

    // 2. Load Model (Quantized for speed)
    if (!embedder) {
        console.log("[RAG] Loading Embedding Model...");
        embedder = await pipeline('feature-extraction', 'Xenova/all-MiniLM-L6-v2');
    }

    // 3. Read Files
    const files = await fs.readdir(KNOWLEDGE_DIR);
    const store = [];

    console.log(`[RAG] Indexing ${files.length} knowledge files...`);

    for (const file of files) {
        if (!file.endsWith('.md') && !file.endsWith('.mdx')) continue;

        const content = await fs.readFile(path.join(KNOWLEDGE_DIR, file), 'utf-8');
        const chunks = chunkText(content);

        for (const chunk of chunks) {
            // Generate Embedding
            const output = await embedder(chunk, { pooling: 'mean', normalize: true });
            const embedding = Array.from(output.data) as number[];

            store.push({
                text: chunk,
                source: file,
                embedding: embedding
            });
        }
    }

    vectorStore = store;
    console.log(`[RAG] Ready. Indexed ${store.length} text chunks.`);
}

export async function retrieveContext(query: string, topK = 3): Promise<string> {
    if (!vectorStore) await initializeRAG();
    if (!vectorStore || !embedder) {
        console.error("[RAG] Failed to initialize vector store or embedder.");
        return "";
    }

    console.log(`[RAG] Retrieval for query: "${query}"`);

    // Embed Query
    const output = await embedder(query, { pooling: 'mean', normalize: true });
    const queryEmbedding = Array.from(output.data) as number[];

    // Rank by Similarity
    const ranked = vectorStore.map(doc => ({
        ...doc,
        score: cosineSimilarity(queryEmbedding, doc.embedding)
    })).sort((a, b) => b.score - a.score);

    // Context Logging
    console.log(`[RAG] Top match score: ${ranked[0]?.score.toFixed(4)} from ${ranked[0]?.source}`);
    console.log(`[RAG] 2nd match score: ${ranked[1]?.score.toFixed(4)} from ${ranked[1]?.source}`);

    // Get Top K
    const topDocs = ranked.slice(0, topK);

    return topDocs.map(d => `[Source: ${d.source}]\n${d.text}`).join("\n\n");
}
