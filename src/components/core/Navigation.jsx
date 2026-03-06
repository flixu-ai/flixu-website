import React, { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import { motion, AnimatePresence } from "framer-motion";
import {
    FileText,
    Layers,
    Cpu,
    BookOpen,
    Library,
    Code,
    BarChart2,
    ChevronRight,
    ChevronLeft,
    Menu,
    X,
    User,
    Users,
    Settings,
    PenTool,
    ShoppingCart,
    Megaphone,
    Briefcase,
    CheckSquare,
    Database,
    Mic,
    Zap
} from "lucide-react";
// Icon mapping
const Icons = {
    FileText,
    Layers,
    Cpu,
    BookOpen,
    Library,
    Code,
    BarChart2,
    User,
    Users,
    Settings,
    PenTool,
    ShoppingCart,
    Megaphone,
    Briefcase,
    CheckSquare,
    Database,
    Mic,
    Zap
};

import Logo from "./Logo";

export default function Navigation({ data }) {
    const [hoveredItem, setHoveredItem] = useState(null);
    const [activeSubItem, setActiveSubItem] = useState(null);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    useEffect(() => {
        if (mobileMenuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
        return () => {
            document.body.style.overflow = '';
        };
    }, [mobileMenuOpen]);

    return (
        <>
            {/* Desktop Navigation */}
            <nav
                className="hidden md:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 items-center gap-8 h-full"
                onMouseLeave={() => {
                    setHoveredItem(null);
                    setActiveSubItem(null);
                }}
            >
                {data.main.map((item) => (
                    <div
                        key={item.title}
                        className="h-full flex items-center cursor-pointer"
                        onMouseEnter={() => setHoveredItem(item.type === 'dropdown' ? item.title : null)}
                    >
                        {item.type === 'link' ? (
                            <a
                                href={item.href}
                                className="text-sm font-sans text-stone-600 hover:text-orange-700 transition-colors"
                            >
                                {item.title}
                            </a>
                        ) : (
                            <button
                                className={`text-sm font-sans transition-colors ${hoveredItem === item.title ? 'text-orange-700' : 'text-stone-600'}`}
                            >
                                {item.title}
                            </button>
                        )}

                        {/* Mega Menu Panel */}
                        <AnimatePresence>
                            {hoveredItem === item.title && item.type === 'dropdown' && (
                                <motion.div
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: 5 }}
                                    transition={{ duration: 0.2 }}
                                    className="absolute top-full left-1/2 -translate-x-1/2 pt-4 z-50 w-[800px]"
                                    onMouseEnter={() => setHoveredItem(item.title)}
                                >
                                    <div
                                        className="bg-[#FDFCF8]/95 backdrop-blur-md border border-stone-100 shadow-2xl rounded-sm p-8 grid grid-cols-[2fr_1fr] gap-12 relative overflow-hidden"
                                        onMouseLeave={() => setActiveSubItem(null)}
                                    >
                                        {/* Links Column */}
                                        {item.groups ? (
                                            <div className="flex gap-8 relative z-10">
                                                {item.groups.map(group => (
                                                    <div key={group.title} className="flex-1 flex flex-col gap-2">
                                                        <h3 className="font-mono text-[10px] uppercase tracking-widest text-stone-400 mb-4">{group.title}</h3>
                                                        {group.items.map((subItem) => {
                                                            const Icon = Icons[subItem.icon];
                                                            return (
                                                                <a
                                                                    key={subItem.title}
                                                                    href={subItem.href}
                                                                    className="group flex items-start gap-4 p-3 -mx-3 rounded-sm hover:bg-orange-50/50 transition-all duration-300"
                                                                    onMouseEnter={() => setActiveSubItem(subItem)}
                                                                >
                                                                    <div className="mt-1 text-stone-400 group-hover:text-orange-700 transition-colors w-5 h-5 flex-shrink-0 flex items-center justify-center">
                                                                        {Icon ? <Icon size={20} strokeWidth={1.5} /> : <div className="w-5 h-5" />}
                                                                    </div>
                                                                    <div>
                                                                        <div className="text-sm font-medium text-stone-900 group-hover:text-orange-700 transition-colors mb-0.5">
                                                                            {subItem.title}
                                                                        </div>
                                                                        <div className="text-xs text-stone-500 font-sans leading-relaxed">
                                                                            {subItem.desc}
                                                                        </div>
                                                                    </div>
                                                                </a>
                                                            );
                                                        })}
                                                    </div>
                                                ))}
                                            </div>
                                        ) : (
                                            <div className="flex flex-col gap-2 relative z-10">
                                                <h3 className="font-mono text-[10px] uppercase tracking-widest text-stone-400 mb-4">{item.title}</h3>
                                                {item.items.map((subItem) => {
                                                    const Icon = Icons[subItem.icon];
                                                    return (
                                                        <a
                                                            key={subItem.title}
                                                            href={subItem.href}
                                                            className="group flex items-start gap-4 p-3 -mx-3 rounded-sm hover:bg-orange-50/50 transition-all duration-300"
                                                            onMouseEnter={() => setActiveSubItem(subItem)}
                                                        >
                                                            <div className="mt-1 text-stone-400 group-hover:text-orange-700 transition-colors w-5 h-5 flex-shrink-0 flex items-center justify-center">
                                                                {Icon ? <Icon size={20} strokeWidth={1.5} /> : <div className="w-5 h-5" />}
                                                            </div>
                                                            <div>
                                                                <div className="text-sm font-medium text-stone-900 group-hover:text-orange-700 transition-colors mb-0.5">
                                                                    {subItem.title}
                                                                </div>
                                                                <div className="text-xs text-stone-500 font-sans leading-relaxed">
                                                                    {subItem.desc}
                                                                </div>
                                                            </div>
                                                        </a>
                                                    );
                                                })}
                                            </div>
                                        )}

                                        {/* Dynamic Visual Column */}
                                        <div className="bg-stone-50/50 rounded-sm flex items-center justify-center p-8 overflow-hidden relative border border-stone-100">
                                            <AnimatePresence mode="wait">
                                                {activeSubItem ? (
                                                    <motion.div
                                                        key={activeSubItem.title}
                                                        initial={{ opacity: 0, scale: 0.9, y: 10 }}
                                                        animate={{ opacity: 1, scale: 1, y: 0 }}
                                                        exit={{ opacity: 0, scale: 1.1, y: -10 }}
                                                        transition={{ duration: 0.3, ease: [0.23, 1, 0.32, 1] }}
                                                        className="text-center relative z-10"
                                                    >
                                                        <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-sm mb-6 mx-auto">
                                                            {Icons[activeSubItem.icon] && React.createElement(Icons[activeSubItem.icon], {
                                                                size: 32,
                                                                strokeWidth: 1.5,
                                                                className: "text-orange-700"
                                                            })}
                                                        </div>
                                                        <div className="space-y-2">
                                                            <p className="text-sm font-serif text-stone-900">{activeSubItem.title}</p>
                                                            <p className="text-[10px] text-stone-400 font-mono uppercase tracking-widest px-4">
                                                                {data.common?.precision || "Architectural Precision"}
                                                            </p>
                                                        </div>
                                                    </motion.div>
                                                ) : (
                                                    <motion.div
                                                        key="grid"
                                                        initial={{ opacity: 0 }}
                                                        animate={{ opacity: 1 }}
                                                        exit={{ opacity: 0 }}
                                                        className="absolute inset-0"
                                                    >
                                                        {/* Flixu Grid Visual */}
                                                        <div className="absolute inset-0 opacity-[0.05]" style={{
                                                            backgroundImage: 'linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)',
                                                            backgroundSize: '32px 32px'
                                                        }} />
                                                        <div className="absolute inset-0 flex items-center justify-center">
                                                            <div className="text-center">
                                                                <div className="w-12 h-12 border border-stone-200 rotate-45 mx-auto mb-4 opacity-20" />
                                                                <p className="text-[10px] text-stone-400 font-mono uppercase tracking-widest">
                                                                    {data.common?.select || "Select a Solution"}
                                                                </p>
                                                            </div>
                                                        </div>
                                                    </motion.div>
                                                )}
                                            </AnimatePresence>
                                        </div>
                                    </div>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>
                ))}
            </nav>

            {/* Mobile Navigation Trigger */}
            <button
                className="md:hidden text-stone-900"
                onClick={() => setMobileMenuOpen(true)}
            >
                <Menu size={24} />
            </button>

            {/* Mobile Fullscreen Overlay */}
            {mounted && createPortal(
                <AnimatePresence>
                    {mobileMenuOpen && (
                        <MobileOverlay data={data} onClose={() => setMobileMenuOpen(false)} />
                    )}
                </AnimatePresence>,
                document.body
            )}
        </>
    );
}

function MobileOverlay({ data, onClose }) {
    const [activeSubmenu, setActiveSubmenu] = useState(null);

    // View 1 variants (Main menu)
    const mainVariants = {
        initial: { x: 0 },
        exit: { x: "-100%", transition: { duration: 0.3, ease: "easeInOut" } },
        enter: { x: 0, transition: { duration: 0.3, ease: "easeInOut" } }
    };

    // View 2 variants (Submenu)
    const subVariants = {
        initial: { x: "100%" },
        enter: { x: 0, transition: { duration: 0.3, ease: "easeInOut" } },
        exit: { x: "100%", transition: { duration: 0.3, ease: "easeInOut" } }
    };

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-[#FDFCF8] flex flex-col"
        >
            {/* Mobile Header */}
            <div className="h-20 flex items-center justify-between px-6 border-b border-stone-200">
                <Logo />
                <button onClick={onClose} className="text-stone-900">
                    <X size={24} />
                </button>
            </div>

            <div className="flex-1 overflow-hidden relative w-full">
                <AnimatePresence initial={false} mode="popLayout">
                    {activeSubmenu ? (
                        <motion.div
                            key="submenu"
                            variants={subVariants}
                            initial="initial"
                            animate="enter"
                            exit="exit"
                            className="absolute inset-0 p-6 flex flex-col gap-6 w-full h-full bg-[#FDFCF8]"
                        >
                            <button
                                onClick={() => setActiveSubmenu(null)}
                                className="flex items-center gap-2 text-stone-500 font-sans text-sm mb-4"
                            >
                                <ChevronLeft size={16} />
                                Back
                            </button>

                            <h2 className="font-serif text-3xl text-stone-900 mb-2">{activeSubmenu.title}</h2>

                            <div className="flex flex-col gap-4">
                                {activeSubmenu.groups ? (
                                    activeSubmenu.groups.map(group => (
                                        <div key={group.title} className="mb-6">
                                            <h3 className="font-mono text-[10px] uppercase tracking-widest text-stone-400 mb-4">{group.title}</h3>
                                            <div className="flex flex-col gap-4">
                                                {group.items.map((item) => (
                                                    <a key={item.title} href={item.href} className="flex flex-col border-b border-stone-100 pb-4">
                                                        <span className="text-lg font-medium text-stone-900">{item.title}</span>
                                                        <span className="text-sm text-stone-500">{item.desc}</span>
                                                    </a>
                                                ))}
                                            </div>
                                        </div>
                                    ))
                                ) : (
                                    activeSubmenu.items.map((item) => (
                                        <a
                                            key={item.title}
                                            href={item.href}
                                            className="flex flex-col border-b border-stone-100 pb-4"
                                        >
                                            <span className="text-lg font-medium text-stone-900">{item.title}</span>
                                            <span className="text-sm text-stone-500">{item.desc}</span>
                                        </a>
                                    ))
                                )}
                            </div>
                        </motion.div>
                    ) : (
                        <motion.div
                            key="main"
                            variants={mainVariants}
                            initial="exit"
                            animate="enter"
                            exit="exit"
                            className="absolute inset-0 p-6 flex flex-col gap-6 w-full h-full bg-[#FDFCF8]"
                        >
                            {data.main.map((item) => (
                                <div key={item.title} className="border-b border-stone-100 pb-4 last:border-0">
                                    {item.type === 'dropdown' ? (
                                        <button
                                            onClick={() => setActiveSubmenu(item)}
                                            className="w-full flex items-center justify-between text-2xl font-serif text-stone-900"
                                        >
                                            {item.title}
                                            <ChevronRight size={20} className="text-stone-400" />
                                        </button>
                                    ) : (
                                        <a
                                            href={item.href}
                                            className="block text-2xl font-serif text-stone-900"
                                        >
                                            {item.title}
                                        </a>
                                    )}
                                </div>
                            ))}

                            <div className="mt-auto flex flex-col gap-4">
                                <a href={typeof window !== 'undefined' && window.location.hostname === 'localhost' ? 'http://localhost:3000/sign-in' : 'https://app.flixu.ai/sign-in'} className="w-full py-3 text-center border border-stone-200 rounded-sm font-sans text-stone-900 hidden">
                                    Sign In
                                </a>
                                <a href={typeof window !== 'undefined' && window.location.hostname === 'localhost' ? 'http://localhost:3000/sign-up?plan=individual&intent=individual&interval=month' : 'https://app.flixu.ai/sign-up?plan=individual&intent=individual&interval=month'} className="w-full py-3 text-center bg-orange-700 text-white rounded-sm font-sans hidden">
                                    Start Free Trial
                                </a>
                                {/* Open Beta button hidden */}
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </motion.div>
    );
}
