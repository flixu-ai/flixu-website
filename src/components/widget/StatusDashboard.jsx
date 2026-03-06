import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, Activity, Server, Database, Globe } from 'lucide-react';

export default function StatusDashboard() {
    // Simulierte Live-Daten
    const [latency, setLatency] = useState(124);
    const [uptime, setUptime] = useState(99.99);

    // "Live" Effekt: Ändere die Latenz alle 3 Sekunden leicht
    useEffect(() => {
        const interval = setInterval(() => {
            setLatency(prev => Math.floor(Math.random() * (140 - 110 + 1) + 110));
        }, 3000);
        return () => clearInterval(interval);
    }, []);

    const systems = [
        { name: "Translation API", status: "operational", icon: Server, region: "Global" },
        { name: "Web Workspace", status: "operational", icon: Globe, region: "Global" },
        { name: "Context Engine (AI)", status: "operational", icon: Activity, region: "EU-West" },
        { name: "Glossary Storage", status: "operational", icon: Database, region: "Multi-Region" },
    ];

    return (
        <div className="w-full max-w-4xl mx-auto">

            {/* Global Status Header */}
            <div className="bg-green-50 border border-green-100 p-8 rounded-sm mb-12 flex items-center gap-6">
                <div className="relative">
                    <div className="w-4 h-4 bg-green-500 rounded-full animate-pulse absolute inset-0 opacity-75"></div>
                    <div className="w-4 h-4 bg-green-500 rounded-full relative"></div>
                </div>
                <div>
                    <h2 className="font-serif text-3xl text-green-900">All Systems Operational</h2>
                    <p className="font-mono text-xs text-green-700 mt-1 uppercase tracking-widest">Last updated: Just now</p>
                </div>
            </div>

            {/* Metrics Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
                <div className="p-6 border border-stone-200 bg-[#FDFCF8]">
                    <div className="text-stone-400 text-xs font-mono uppercase tracking-widest mb-2">Avg. Latency</div>
                    <div className="text-3xl font-serif text-stone-900 flex items-baseline gap-2">
                        {latency} <span className="text-sm font-sans text-stone-400">ms</span>
                    </div>
                </div>
                <div className="p-6 border border-stone-200 bg-[#FDFCF8]">
                    <div className="text-stone-400 text-xs font-mono uppercase tracking-widest mb-2">Uptime (30d)</div>
                    <div className="text-3xl font-serif text-stone-900 flex items-baseline gap-2">
                        {uptime}%
                    </div>
                </div>
                <div className="p-6 border border-stone-200 bg-[#FDFCF8]">
                    <div className="text-stone-400 text-xs font-mono uppercase tracking-widest mb-2">Error Rate</div>
                    <div className="text-3xl font-serif text-stone-900 flex items-baseline gap-2">
                        0.01 <span className="text-sm font-sans text-stone-400">%</span>
                    </div>
                </div>
                <div className="p-6 border border-stone-200 bg-[#FDFCF8]">
                    <div className="text-stone-400 text-xs font-mono uppercase tracking-widest mb-2">Active Nodes</div>
                    <div className="text-3xl font-serif text-stone-900 flex items-baseline gap-2">
                        24 <span className="text-sm font-sans text-stone-400">/ 24</span>
                    </div>
                </div>
            </div>

            {/* System Detail List */}
            <div className="border border-stone-200 bg-[#FDFCF8] rounded-sm overflow-hidden">
                <div className="px-6 py-4 border-b border-stone-100 bg-stone-50/50 flex justify-between items-center">
                    <span className="font-mono text-xs text-stone-500 uppercase tracking-widest">Component Status</span>
                    <span className="font-mono text-xs text-stone-400">v2.1.0</span>
                </div>

                {systems.map((sys, i) => (
                    <div key={sys.name} className={`px-6 py-5 flex items-center justify-between group hover:bg-stone-50 transition-colors ${i !== systems.length - 1 ? 'border-b border-stone-100' : ''}`}>
                        <div className="flex items-center gap-4">
                            <sys.icon size={18} className="text-stone-400 group-hover:text-orange-700 transition-colors" />
                            <span className="font-serif text-xl text-stone-900">{sys.name}</span>
                        </div>
                        <div className="flex items-center gap-6">
                            <span className="text-xs font-mono text-stone-400 hidden sm:block">{sys.region}</span>
                            <div className="flex items-center gap-2 px-3 py-1 bg-green-50 border border-green-100 rounded-full">
                                <CheckCircle2 size={12} className="text-green-600" />
                                <span className="text-xs font-medium text-green-700 uppercase tracking-wide">Operational</span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Incident History Placeholder */}
            <div className="mt-16">
                <h3 className="font-serif text-2xl text-stone-900 mb-6">Past Incidents</h3>
                <div className="p-8 border border-stone-200 border-dashed rounded-sm text-center text-stone-400 text-sm">
                    No incidents reported in the last 90 days.
                </div>
            </div>

        </div>
    );
}
