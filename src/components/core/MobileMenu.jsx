import React, { useState, useEffect } from "react";
import { Menu, X, ArrowRight } from "lucide-react";
import { navConfig } from "../../config/navigation";

export default function MobileMenu() {
    const [isOpen, setIsOpen] = useState(false);

    // Prevent scrolling when menu is open
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "unset";
        }
        return () => {
            document.body.style.overflow = "unset";
        };
    }, [isOpen]);

    return (
        <div className="block md:hidden">
            <button
                onClick={() => setIsOpen(true)}
                className="p-2 -mr-2 text-stone-900 hover:text-orange-700 transition-colors"
                aria-label="Open Menu"
            >
                <Menu size={24} />
            </button>

            {/* Overlay */}
            <div
                className={`fixed inset-0 z-[60] bg-[#FDFCF8] flex flex-col transition-all duration-300 ease-in-out ${isOpen
                        ? "opacity-100 pointer-events-auto"
                        : "opacity-0 pointer-events-none"
                    }`}
            >
                {/* Header inside Overlay */}
                <div className="px-6 h-20 flex items-center justify-between border-b border-stone-200">
                    <span className="font-serif text-2xl tracking-tight text-stone-900">
                        Flixu.
                    </span>
                    <button
                        onClick={() => setIsOpen(false)}
                        className="p-2 -mr-2 text-stone-900 hover:text-orange-700 transition-colors"
                        aria-label="Close Menu"
                    >
                        <X size={24} />
                    </button>
                </div>

                {/* Content */}
                <div className="flex-1 flex flex-col px-6 py-12 overflow-y-auto">
                    <nav className="flex flex-col gap-6">
                        {navConfig.main.map((item) => (
                            <a
                                key={item.name}
                                href={item.href}
                                onClick={() => setIsOpen(false)}
                                className="font-serif text-4xl text-stone-900 hover:text-orange-700 transition-colors"
                            >
                                {item.name}
                            </a>
                        ))}
                        <a
                            href={typeof window !== 'undefined' && window.location.hostname === 'localhost' ? 'http://localhost:3000/sign-in' : 'https://app.flixu.ai/sign-in'}
                            onClick={() => setIsOpen(false)}
                            className="font-serif text-4xl text-stone-400 hover:text-stone-900 transition-colors border-t border-stone-100 pt-6 mt-2 hidden"
                        >
                            Sign In
                        </a>
                    </nav>

                    {/* Bottom Action */}
                    <div className="mt-auto pt-12">
                        <a
                            href={typeof window !== 'undefined' && window.location.hostname === 'localhost' ? 'http://localhost:3000/sign-up?plan=individual&intent=individual&interval=month' : 'https://app.flixu.ai/sign-up?plan=individual&intent=individual&interval=month'}
                            className="flex flex-col items-center justify-center py-4 bg-orange-700 text-white hover:bg-orange-800 transition-colors hidden"
                        >
                            <span className="font-medium text-lg">
                                Enter Workspace
                            </span>
                            <ArrowRight size={20} className="mt-1" />
                        </a>
                        {/* Open Beta button hidden */}
                    </div>
                </div>
            </div>
        </div>
    );
}
