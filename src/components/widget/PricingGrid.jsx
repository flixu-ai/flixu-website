import React, { useState, useEffect } from 'react';
import { getCalApi } from "@calcom/embed-react";
import { motion } from "framer-motion";
import { Check, ArrowRight } from 'lucide-react';

const PRICE_MAP = {
  0: { monthly: "0", yearly: "0" },
  1: { monthly: "39", yearly: "33" },
  2: { monthly: "149", yearly: "125" },
  3: { monthly: "449", yearly: "375" },
};

export default function PricingGrid({ plans, enterprise }) {
    const [isYearly, setIsYearly] = useState(false);

    useEffect(() => {
        (async function () {
            const cal = await getCalApi({"namespace":"flixu-discovery-call-20-min"});
            cal("ui", {"hideEventTypeDetails":false,"layout":"month_view"});
        })();
    }, []);

    // Fallback if no data provided (prevents crash, though usage should always provide data)
    const effectivePlans = plans || [];

    return (
        <div className="w-full max-w-[1400px] mx-auto">

            {/* Toggle */}
            <div className="flex justify-center mb-16 items-center gap-4">
                <span className={`text-sm ${!isYearly ? 'text-stone-900 font-medium' : 'text-stone-400'}`}>Monthly</span>
                <button
                    onClick={() => setIsYearly(!isYearly)}
                    className="w-12 h-6 bg-stone-200 rounded-full relative p-1 transition-colors hover:bg-stone-300"
                >
                    <motion.div animate={{ x: isYearly ? 24 : 0 }} className="w-4 h-4 bg-white rounded-full shadow-sm" />
                </button>
                <span className={`text-sm ${isYearly ? 'text-stone-900 font-medium' : 'text-stone-400'}`}>
                    Yearly <span className="text-orange-700 text-xs font-mono ml-1">(Save ~17%)</span>
                </span>
            </div>

            {/* Main Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-4">
                {effectivePlans.map((plan, index) => {
                   let billingText = plan.billing;
                   if (typeof plan.billing === 'object') {
                       billingText = isYearly ? plan.billing.yearly : plan.billing.monthly; 
                   }
                   
                   const currentPrice = isYearly ? (PRICE_MAP[index]?.yearly || "0") : (PRICE_MAP[index]?.monthly || "0");
                   
                   const intervalParam = isYearly ? 'year' : 'month';
                   const PLAN_KEYS = ['free', 'individual', 'team', 'business'];
                   const planKey = PLAN_KEYS[index] || 'free';
                   const baseUrl = typeof window !== 'undefined' && window.location.hostname === 'localhost' 
                       ? 'http://localhost:3000/sign-up' 
                       : 'https://app.flixu.ai/sign-up';
                   const planHref = `${baseUrl}?plan=${planKey}&intent=${planKey}&interval=${intervalParam}`;
                   
                   return (
                    <div key={plan.name} className={`relative flex flex-col p-8 rounded-sm border transition-all duration-300 ${plan.variant === 'orange' || index === 1 ? 'border-orange-700 bg-[#FDFCF8] ring-1 ring-orange-700/20' :
                            'border-stone-200 bg-[#FDFCF8] hover:border-stone-300'
                        }`}>
                        {plan.badge && (
                            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-orange-700 text-white text-[10px] uppercase tracking-widest px-3 py-1 rounded-full">
                                {plan.badge}
                            </div>
                        )}

                        <h3 className="font-serif text-2xl text-stone-900 mb-2">{plan.name}</h3>
                        <p className="text-sm text-stone-500 mb-6 h-5">{plan.desc}</p>

                        <div className="mb-1 flex items-baseline gap-1">
                            <span className="text-3xl font-sans font-medium">${currentPrice}</span>
                        </div>
                        <div className="text-xs text-stone-400 mb-8 uppercase tracking-wide h-4">
                            {billingText || "\u00A0"}
                        </div>

                        {/* Pool Box */}
                        <div className="mb-8 p-3 rounded-sm border border-stone-100 bg-stone-50 text-center">
                            <div className="font-mono text-sm font-medium text-stone-900">{plan.pool}</div>
                            {plan.poolNote && <div className="text-[10px] text-stone-500 mt-1">{plan.poolNote}</div>}
                        </div>

                        <ul className="flex-1 space-y-3 mb-8">
                            {plan.features.map(f => (
                                <li key={f} className="flex items-center gap-3 text-sm text-stone-600">
                                    <Check size={14} className="text-orange-700 shrink-0" />
                                    <span>{f}</span>
                                </li>
                            ))}
                        </ul>

                        <a href={planHref} className={`w-full py-3 rounded-sm text-center text-sm font-medium transition-colors ${plan.variant === 'orange' || index === 1 ? 'bg-orange-700 text-white hover:bg-orange-800' :
                                'border border-stone-200 text-stone-900 hover:border-stone-900'
                            } hidden`}>
                            {plan.cta}
                        </a>
                    </div>
                )})}
            </div>

            {/* Enterprise Full Width Card */}
            {enterprise && (
            <div className="w-full bg-stone-50 border border-stone-200 text-stone-900 rounded-sm p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8 mt-4 shadow-sm">
                <div className="flex-1">
                    <div className="flex items-center gap-3 mb-4">
                        <h3 className="font-serif text-3xl font-normal text-stone-900">{enterprise.title}</h3>
                        <span className="px-2 py-1 border border-stone-200 bg-white rounded text-xs font-mono text-stone-500">{enterprise.badge}</span>
                    </div>
                    <p className="text-stone-600 max-w-xl mb-6 text-lg">
                        {enterprise.desc}
                    </p>
                    <div className="flex flex-wrap gap-x-8 gap-y-2 text-sm font-medium text-stone-700">
                         {enterprise.features.map(f => (
                            <span key={f} className="flex items-center gap-2"><Check size={14} className="text-orange-700" /> {f}</span>
                        ))}
                    </div>
                </div>

                <button 
                    data-cal-namespace="flixu-discovery-call-20-min"
                    data-cal-link="deniz-wozniak/flixu-discovery-call-20-min"
                    data-cal-config='{"layout":"month_view","useSlotsViewOnSmallScreen":"true"}'
                    className="shrink-0 px-8 py-4 bg-white border border-stone-200 text-stone-900 font-medium rounded-sm hover:-translate-y-0.5 hover:shadow-md transition-all flex items-center gap-2 hidden"
                >
                    {enterprise.cta} <ArrowRight size={16} className="text-stone-400 group-hover:text-orange-700" />
                </button>
            </div>
            )}

        </div>
    );
}
