import React, { useState } from 'react';
import { Copy, Check } from 'lucide-react';

export default function CopyMarkdownButton({ content }) {
    const [copied, setCopied] = useState(false);

    const handleCopy = async () => {
        try {
            await navigator.clipboard.writeText(content);
            setCopied(true);
            setTimeout(() => setCopied(false), 2000);
        } catch (err) {
            console.error('Failed to copy!', err);
        }
    };

    return (
        <button
            onClick={handleCopy}
            className={`
        flex items-center gap-2 px-3 py-1.5 border rounded-sm text-xs font-mono uppercase tracking-widest transition-all
        ${copied
                    ? 'border-green-200 bg-green-50 text-green-700'
                    : 'border-stone-200 bg-white text-stone-500 hover:border-orange-200 hover:text-orange-700'}
      `}
        >
            {copied ? <Check size={14} /> : <Copy size={14} />}
            {copied ? 'Copied!' : 'Copy as Markdown'}
        </button>
    );
}
