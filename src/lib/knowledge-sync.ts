import fs from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT_DIR = path.resolve(__dirname, '../../');
const CONTENT_DIR = path.join(ROOT_DIR, 'src/content');
const KNOWLEDGE_DIR = path.join(ROOT_DIR, 'knowledge');

async function getFiles(dir: string): Promise<string[]> {
    const dirents = await fs.readdir(dir, { withFileTypes: true });
    const files = await Promise.all(dirents.map((dirent) => {
        const res = path.resolve(dir, dirent.name);
        return dirent.isDirectory() ? getFiles(res) : res;
    }));
    return Array.prototype.concat(...files);
}

export async function syncContentToKnowledge() {
    try {
        // Ensure knowledge dir exists
        await fs.mkdir(KNOWLEDGE_DIR, { recursive: true });

        // Get all files from content
        const allFiles = await getFiles(CONTENT_DIR);

        // Filter for English Markdown files
        const enFiles = allFiles.filter(f =>
            (f.includes('/en/') || f.endsWith('.en.md')) &&
            (f.endsWith('.md') || f.endsWith('.mdx'))
        );

        console.log(`[Knowledge Sync] Found ${enFiles.length} English content files.`);

        for (const file of enFiles) {
            const filename = path.basename(file);
            // Create a unique name to avoid collisions if multiple folders have same filename
            // e.g., topics/en/intro.md -> auto-topics-intro.md
            const relPath = path.relative(CONTENT_DIR, file);
            const safeName = 'auto-' + relPath.replace(/\//g, '-').replace(/\\/g, '-');

            const targetPath = path.join(KNOWLEDGE_DIR, safeName);

            await fs.copyFile(file, targetPath);
        }

        console.log(`[Knowledge Sync] Synced ${enFiles.length} files to ${KNOWLEDGE_DIR}`);
        return true;

    } catch (error) {
        console.error("[Knowledge Sync] Error:", error);
        return false;
    }
}
