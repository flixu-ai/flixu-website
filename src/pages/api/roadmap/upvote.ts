import type { APIRoute } from 'astro';
import { neon } from '@neondatabase/serverless';

export const POST: APIRoute = async ({ request }) => {
  try {
    const { id } = await request.json();
    if (!id) return new Response(JSON.stringify({ error: 'Missing id' }), { status: 400 });

    const sql = neon(import.meta.env.DATABASE_URL);
    await sql`UPDATE roadmap_features SET upvotes = upvotes + 1 WHERE id = ${id}`;

    return new Response(JSON.stringify({ success: true }), { status: 200 });
  } catch (error) {
    return new Response(JSON.stringify({ error: 'Failed to upvote' }), { status: 500 });
  }
};
