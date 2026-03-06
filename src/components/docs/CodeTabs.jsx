import React, { useState } from 'react';
import { motion } from 'framer-motion';

export default function CodeTabs({ tabs, children }) {
    const [activeTab, setActiveTab] = useState(tabs[0]);

    // Convert children to an array to handle single or multiple children
    const childrenArray = React.Children.toArray(children);

    return (
        <div className="border border-stone-200 rounded-sm bg-[#FDFCF8] my-8 overflow-hidden">
            {/* Tab Header */}
            <div className="flex border-b border-stone-200 bg-stone-50 px-2">
                {tabs.map((tab) => (
                    <button
                        key={tab}
                        onClick={() => setActiveTab(tab)}
                        className={`
              relative px-4 py-2 text-xs font-mono uppercase tracking-widest transition-colors
              ${activeTab === tab ? 'text-orange-700' : 'text-stone-500 hover:text-stone-700'}
            `}
                    >
                        {tab}
                        {activeTab === tab && (
                            <motion.div
                                layoutId="activeTabIndicator"
                                className="absolute bottom-0 left-0 right-0 h-[2px] bg-orange-700"
                            />
                        )}
                    </button>
                ))}
            </div>

            {/* Content Area */}
            <div className="p-4 bg-[#FDFCF8] overflow-x-auto text-sm font-mono">
                {childrenArray.map((child) => {
                    // Check if the child has a prop 'slot' that matches the active tab
                    if (child.props.slot === activeTab) {
                        return <div key={activeTab}>{child}</div>;
                    }
                    return null;
                })}
            </div>
        </div>
    );
}
