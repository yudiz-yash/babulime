"use client";

import { useState } from 'react';
import styles from './IndustryTrust.module.scss';
import { ChevronDown, Crosshair, ShieldCheck, Factory, TrendingUp } from 'lucide-react';
import AnimateIn from '@/components/AnimateIn';

const TRUST_DATA = [
    {
        id: 1,
        icon: <Crosshair size={24} />,
        title: 'Precision Processing',
        description: 'Advanced ultra-fine processing and filtering ensures uniform and consistent performance across all batches.'
    },
    {
        id: 2,
        icon: <ShieldCheck size={24} />,
        title: '100% Food-Additive Integrity',
        description: 'No artificial coloring. Every batch undergoes strict laboratory testing before dispatch to guarantee safety.'
    },
    {
        id: 3,
        icon: <Factory size={24} />,
        title: 'Advanced Manufacturing',
        description: 'Fully Automated Plant with an experienced technical team operating in a Controlled Environment with CCTV-Monitored Operations.'
    },
    {
        id: 4,
        icon: <TrendingUp size={24} />,
        title: 'Scale & Reliability',
        description: 'High-volume daily production capacity supported by industrial-scale infrastructure. 80,000+ retail outlets across Gujarat and Expanding Pan-India. Our structured distribution model ensures dependable supply cycles and consistent retailer support.'
    }
];

export default function IndustryTrust() {
    const [openId, setOpenId] = useState(1);

    return (
        <section className="py-12 md:py-24 bg-white">
            <div className="max-w-4xl mx-auto px-4 md:px-6 lg:px-8">

                <AnimateIn animation="fade-up" delay={0} className="text-center mb-8 md:mb-16">
                    <h2 className="text-3xl md:text-5xl font-extrabold text-gray-900 mb-4">Why Industry Trusts Us</h2>
                    <p className="text-gray-600 text-lg">Consistent quality driven by technological superiority and scale.</p>
                </AnimateIn>

                <div className="space-y-4">
                    {TRUST_DATA.map((item, i) => {
                        const isOpen = openId === item.id;
                        return (
                            <AnimateIn key={item.id} animation="fade-up" delay={i * 100}>
                                <div
                                    className={`${styles.accordionItem} ${isOpen ? styles.active : ''} bg-gray-50 rounded-2xl border border-gray-100 overflow-hidden shadow-sm hover:shadow-md transition-shadow cursor-pointer`}
                                    onClick={() => setOpenId(isOpen ? null : item.id)}
                                >
                                    <div className="flex items-center justify-between p-4 md:p-6">
                                        <div className="flex items-center gap-4">
                                            <div className={`${styles.iconBox} ${isOpen ? 'bg-purple-100 text-purple-700' : 'bg-white text-gray-500'} p-3 rounded-xl transition-colors border border-gray-100`}>
                                                {item.icon}
                                            </div>
                                            <h3 className={`font-bold text-lg md:text-xl ${isOpen ? 'text-purple-700' : 'text-gray-800'}`}>
                                                {item.title}
                                            </h3>
                                        </div>
                                        <ChevronDown
                                            className={`text-gray-400 transition-transform duration-300 ${isOpen ? 'rotate-180 text-purple-600' : ''}`}
                                            size={24}
                                        />
                                    </div>

                                    <div
                                        className={`px-4 md:px-6 overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-60 pb-4 md:pb-6 opacity-100' : 'max-h-0 opacity-0'}`}
                                    >
                                        <p className="text-gray-600 leading-relaxed ml-[68px]">
                                            {item.description}
                                        </p>
                                    </div>
                                </div>
                            </AnimateIn>
                        );
                    })}
                </div>

            </div>
        </section>
    );
}
