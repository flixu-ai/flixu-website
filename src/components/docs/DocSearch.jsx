import React, { useEffect, useState } from 'react';
import { Search, Command } from 'lucide-react';

export default function DocSearch() {
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        const handleKeyDown = (e) => {
            if (e.key === 'k' && (e.metaKey || e.ctrlKey)) {
                e.preventDefault();
                setIsOpen((prev) => !prev);
            }
            if (e.key === 'Escape') {
                setIsOpen(false);
            }
        };

        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, []);

    return (
        <>
            <button
                onClick={() => setIsOpen(true)}
                className="flex items-center gap-2 px-3 py-1.5 border border-stone-200 rounded-sm bg-white text-stone-400 hover:border-orange-200 hover:text-orange-700 transition-colors w-full md:w-auto"
            >
                <Search size={14} />
                <span className="text-sm font-sans">Search docs...</span>
                <div className="ml-auto flex items-center gap-0.5 text-[10px] font-mono border border-stone-200 rounded px-1 text-stone-400">
                    <span>⌘</span>
                    <span>K</span>
                </div>
            </button>

            {isOpen && (
                <div className="fixed inset-0 z-50 flex items-start justify-center pt-[20vh] px-4">
                    <div
                        className="absolute inset-0 bg-stone-900/20 backdrop-blur-sm"
                        onClick={() => setIsOpen(false)}
                    />
                    <div className="relative w-full max-w-lg bg-[#FDFCF8] border border-stone-200 shadow-2xl rounded-sm overflow-hidden flex flex-col max-h-[60vh]">
                        <div className="flex items-center px-4 py-3 border-b border-stone-100">
                            <Search className="text-stone-400 mr-3" size={18} />
                            <input
                                type="text"
                                placeholder="Search documentation..."
                                className="flex-1 bg-transparent border-none outline-none text-stone-900 placeholder:text-stone-400 font-sans text-base"
                                autoFocus
                            />
                        </div>
                        <div className="p-8 text-center text-stone-400 font-sans text-sm">
                            No results found. (Pagefind integration pending)
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}
