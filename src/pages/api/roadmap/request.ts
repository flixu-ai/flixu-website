import type { APIRoute } from 'astro';
import { neon } from '@neondatabase/serverless';

export const POST: APIRoute = async ({ request }) => {
  try {
    const { title, description } = await request.json();
    if (!title) return new Response(JSON.stringify({ error: 'Missing title' }), { status: 400 });

    const sql = neon(import.meta.env.DATABASE_URL);
    // Automatically give 1 upvote
    const result = await sql`
      INSERT INTO roadmap_features (title, description, status, upvotes)
      VALUES (${title}, ${description || ''}, 'requested', 1)
      RETURNING *
    `;

    return new Response(JSON.stringify({ success: true, feature: result[0] }), { status: 200 });
  } catch (error) {
    return new Response(JSON.stringify({ error: 'Failed to request feature' }), { status: 500 });
  }
};
