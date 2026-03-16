"use client";

import { useEffect, useState } from 'react';
import styles from './IndustryTrust.module.scss';
import {
    ChevronDown, Crosshair, ShieldCheck, Factory, TrendingUp,
    Target, Shield, Zap, Leaf, Activity, Award, Star,
} from 'lucide-react';
import AnimateIn from '@/components/AnimateIn';

const ICON_MAP = {
    Target:     <Target size={24} />,
    Shield:     <Shield size={24} />,
    Zap:        <Zap size={24} />,
    Leaf:       <Leaf size={24} />,
    Crosshair:  <Crosshair size={24} />,
    ShieldCheck:<ShieldCheck size={24} />,
    Factory:    <Factory size={24} />,
    TrendingUp: <TrendingUp size={24} />,
    Activity:   <Activity size={24} />,
    Award:      <Award size={24} />,
    Star:       <Star size={24} />,
};

const STATIC = [
    { icon: 'Crosshair',  title: 'Precision Processing',      description: 'Advanced ultra-fine grinding technology ensures uniform granulation and smooth texture, delivering consistent product performance.' },
    { icon: 'ShieldCheck',title: '100% Food-Grade Integrity',  description: 'No artificial coloring. No dilution. No adulteration. Every batch undergoes strict in-house quality testing before dispatch.' },
    { icon: 'Factory',    title: 'Advanced Manufacturing',     description: 'Fully Automated Plant · Minimal Manual Handling · Controlled Environment · CCTV Monitored Process. All machinery fabricated using stainless steel for food safety compliance.' },
    { icon: 'TrendingUp', title: 'Scale & Reliability',        description: '45+ tons daily capacity. Strong Gujarat network. Expanding through national online marketplaces. Dependable availability and consistent retailer support across India.' },
];

export default function IndustryTrust() {
    const [items, setItems] = useState(STATIC);
    const [openId, setOpenId] = useState(0);

    useEffect(() => {
        fetch(`${process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000/api'}/features`)
            .then(r => r.ok ? r.json() : null)
            .then(d => { if (d && d.length > 0) setItems(d); })
            .catch(() => {});
    }, []);

    return (
        <section className="py-12 md:py-24 bg-white">
            <div className="max-w-4xl mx-auto px-4 md:px-6 lg:px-8">

                <AnimateIn animation="fade-up" delay={0} className="text-center mb-8 md:mb-16">
                    <h2 className="text-3xl md:text-5xl font-extrabold text-gray-900 mb-4">Why Industry Trusts Us</h2>
                    <p className="text-gray-600 text-lg">Consistent quality driven by technological superiority and scale.</p>
                </AnimateIn>

                <div className="space-y-4">
                    {items.map((item, i) => {
                        const isOpen = openId === i;
                        return (
                            <AnimateIn key={item._id || i} animation="fade-up" delay={i * 100}>
                                <div
                                    className={`${styles.accordionItem} ${isOpen ? styles.active : ''} bg-gray-50 rounded-2xl border border-gray-100 overflow-hidden shadow-sm hover:shadow-md transition-shadow cursor-pointer`}
                                    onClick={() => setOpenId(isOpen ? null : i)}
                                >
                                    <div className="flex items-center justify-between p-4 md:p-6">
                                        <div className="flex items-center gap-4">
                                            <div className={`${styles.iconBox} ${isOpen ? 'bg-purple-100 text-purple-700' : 'bg-white text-gray-500'} p-3 rounded-xl transition-colors border border-gray-100`}>
                                                {ICON_MAP[item.icon] || <Target size={24} />}
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

                                    <div className={`px-4 md:px-6 overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-60 pb-4 md:pb-6 opacity-100' : 'max-h-0 opacity-0'}`}>
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
