import type { APIRoute } from 'astro';
import Groq from 'groq-sdk';
import { retrieveContext } from '../../lib/rag.ts';

export const prerender = false;

const groq = new Groq({
    apiKey: import.meta.env.GROQ_API_KEY,
});

// System Prompts for the 3 Agents
const SYSTEM_PROMPTS = {
    sales: `You are the "Enterprise Solutions Architect" for Flixu. 
  Your goal is Value-Based Sales. 
  - QUALIFY: Always ask about team size, volume, or security requirements.
  - EDUCATE: Explain why "Enterprise" is needed (Data Sovereignty, VPC, SLA).
  - CONVERT: Your goal is to get them to book a strategy call.
  - TONE: Professional, strategic, concise.
  - CONTEXT USE: Use the provided [CONTEXT] to answer questions accurately. If the context doesn't have the answer, say you don't know, don't make it up.
  - LANGUAGE: Adapts to the user's language (English or German).`,

    tech: `You are the "Senior Debug Engineer" for Flixu.
  Your goal is Technical Resolution.
  - ANALYZE: Ask specific questions about API error codes or JSON structure.
  - DIAGNOSE: Suggest common fixes (Glossary ISO format, UTF-8 encoding).
  - RESOLVE: If you can't fix it, ask for a log paste to escalate.
  - TONE: Precise, helpful, analytical.
  - CONTEXT USE: Use the provided [CONTEXT] to answer questions accurately. If the context doesn't have the answer, say you don't know, don't make it up.
  - LANGUAGE: Adapts to the user's language (English or German).`,

    feedback: `You are the "Product Owner" for Flixu.
  Your goal is User Insight Collection.
  - LISTEN: Validate the user's feeling (frustration or excitement).
  - CATEGORIZE: Tag their input mentally as Feature Request, Bug, or UX Friction.
  - CLOSE: Thank them and mention this will go to the roadmap discussion.
  - TONE: Empathetic, grateful, attentive.
  - CONTEXT USE: Use the provided [CONTEXT] to answer questions accurately.If the context doesn't have the answer, say you don't know, don't make it up.
  - LANGUAGE: Adapts to the user's language (English or German).`
};

export const POST: APIRoute = async ({ request }) => {
    try {
        const { messages, agent, lang } = await request.json();

        if (!import.meta.env.GROQ_API_KEY) {
            return new Response(JSON.stringify({ error: "Server API Key missing" }), { status: 500 });
        }

        // 0. Retrieve Context (RAG)
        const lastUserMsg = messages[messages.length - 1];
        let context = "";
        if (lastUserMsg && lastUserMsg.role === 'user') {
            console.log(`[RAG] Searching for: "${lastUserMsg.text}"`);
            context = await retrieveContext(lastUserMsg.text);
        }

        const systemPrompt = SYSTEM_PROMPTS[agent as keyof typeof SYSTEM_PROMPTS] +
            `\n\nIMPORTANT: Respond in ${lang === 'de' ? 'German' : 'English'}. Keep responses short (max 2-3 sentences).` +
            (context ? `\n\n[CONTEXT FOUND IN KNOWLEDGE BASE]:\n${context}` : "");

        const conversation = [
            { role: "system", content: systemPrompt },
            ...messages.map((msg: any) => ({
                role: msg.role === 'user' ? 'user' : 'assistant',
                content: msg.text
            }))
        ];

        // 1. Initiate Stream
        const stream = await groq.chat.completions.create({
            messages: conversation,
            model: "llama-3.3-70b-versatile",
            temperature: 0.7,
            max_tokens: 300,
            stream: true, // Enable Streaming
        });

        // 2. Create ReadableStream
        const readable = new ReadableStream({
            async start(controller) {
                for await (const chunk of stream) {
                    const content = chunk.choices[0]?.delta?.content || "";
                    if (content) {
                        controller.enqueue(new TextEncoder().encode(content));
                    }
                }
                controller.close();
            }
        });

        // 3. Return Stream
        return new Response(readable, {
            status: 200,
            headers: {
                "Content-Type": "text/plain; charset=utf-8",
                "Transfer-Encoding": "chunked"
            }
        });

    } catch (error) {
        console.error("Groq API Error:", error);
        return new Response(JSON.stringify({ error: "Failed to process request" }), { status: 500 });
    }
};
