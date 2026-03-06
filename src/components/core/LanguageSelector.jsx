import React, { useState, useRef, useEffect } from "react";
import { LOCALE_NAMES } from "../../config/languages";
import { Globe, Search, Check } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function LanguageSelector({ currentLang, dict }) {
    const [isOpen, setIsOpen] = useState(false);
    const [search, setSearch] = useState("");
    const containerRef = useRef(null);

    // Close on click outside
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (containerRef.current && !containerRef.current.contains(event.target)) {
                setIsOpen(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    const filteredLanguages = Object.entries(LOCALE_NAMES).filter(([code, name]) =>
        name.toLowerCase().includes(search.toLowerCase()) ||
        code.toLowerCase().includes(search.toLowerCase())
    );

    const handleLanguageChange = (code) => {
        // Build new URL
        const currentPath = window.location.pathname;
        const segments = currentPath.split("/").filter(Boolean);
        
        // Remove current lang prefix if present (ignoring if currentLang is "en" and not in URL, but logic handles it)
        // If current path starts with currentLang, remove it.
        // Wait, best approach:
        // 1. Strip potential lang prefix from current path.
        // 2. Prepend new lang prefix (unless it's 'en', then no prefix).

        let cleanPath = currentPath; 
        const knownLangs = Object.keys(LOCALE_NAMES);
        
        // Check if first segment is a lang code
        if (segments.length > 0 && knownLangs.includes(segments[0])) {
            cleanPath = "/" + segments.slice(1).join("/");
        }

        // Add new prefix if not English
        const newPath = code === "en" ? cleanPath : `/${code}${cleanPath}`;
        
        // Ensure root slash if empty
        window.location.href = newPath || "/";
    };

    return (
        <div className="relative font-sans" ref={containerRef}>
            {/* Trigger Button */}
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-stone-900 hover:text-orange-700 transition-colors px-3 py-2 rounded-md hover:bg-stone-50"
            >
                <Globe className="w-4 h-4" />
                <span>{LOCALE_NAMES[currentLang] || currentLang.toUpperCase()}</span>
            </button>

            {/* Drop-Up Panel */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: 10, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 10, scale: 0.95 }}
                        transition={{ duration: 0.15 }}
                        className="absolute bottom-full mb-2 right-0 w-64 bg-white rounded-lg shadow-xl border border-stone-100 overflow-hidden z-50 origin-bottom-right"
                    >
                        {/* Search Input */}
                        <div className="p-3 border-b border-stone-100 sticky top-0 bg-white">
                            <div className="relative">
                                <Search className="absolute left-2.5 top-1/2 -translate-y-1/2 w-4 h-4 text-stone-400" />
                                <input
                                    type="text"
                                    placeholder={dict?.searchPlaceholder || "Search language..."}
                                    value={search}
                                    onChange={(e) => setSearch(e.target.value)}
                                    className="w-full pl-9 pr-3 py-1.5 text-sm bg-stone-50 rounded-md border-none focus:ring-1 focus:ring-orange-200 text-stone-900 placeholder:text-stone-400"
                                    autoFocus
                                />
                            </div>
                        </div>

                        {/* List */}
                        <div className="max-h-64 overflow-y-auto p-1">
                            {filteredLanguages.length > 0 ? (
                                filteredLanguages.map(([code, name]) => (
                                    <button
                                        key={code}
                                        onClick={() => handleLanguageChange(code)}
                                        className={`w-full text-left px-3 py-2 rounded-md text-sm flex items-center justify-between transition-colors ${
                                            currentLang === code
                                                ? "bg-orange-50 text-orange-700 font-medium"
                                                : "text-stone-600 hover:bg-stone-50 hover:text-stone-900"
                                        }`}
                                    >
                                        <span>{name}</span>
                                        {currentLang === code && <Check className="w-4 h-4" />}
                                    </button>
                                ))
                            ) : (
                                <div className="px-3 py-4 text-center text-xs text-stone-400">
                                    {dict?.noResults || "No languages found."}
                                </div>
                            )}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}
