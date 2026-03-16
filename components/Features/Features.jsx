"use client";

import { useEffect, useState } from 'react';
import styles from './Features.module.scss';
import { Target, Zap, Shield, Leaf, Star, Award, CheckCircle, TrendingUp, Globe, Package } from 'lucide-react';
import AnimateIn from '@/components/AnimateIn';

const ICON_MAP = { Target, Zap, Shield, Leaf, Star, Award, CheckCircle, TrendingUp, Globe, Package };

const STATIC = [
    { icon: 'Target', title: 'Precision Processing', description: 'Advanced ultra-fine grinding technology ensures uniform granulation and smooth texture, delivering consistent product performance.' },
    { icon: 'Shield', title: '100% Food-Grade Integrity', description: 'No artificial coloring. No dilution. No adulteration. Every batch undergoes strict in-house quality testing before dispatch.' },
    { icon: 'Zap', title: 'Advanced Manufacturing', description: 'Fully automated plant with minimal manual handling, controlled environment and CCTV monitored processes for consistent quality.' },
    { icon: 'Leaf', title: 'Scale & Reliability', description: '45+ tons daily capacity. Strong Gujarat network. Expanding through national online marketplaces.' },
];

export default function Features() {
    const [features, setFeatures] = useState(STATIC);

    useEffect(() => {
        fetch(`${process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000/api'}/features`)
            .then(r => r.ok ? r.json() : null)
            .then(d => { if (d && d.length > 0) setFeatures(d); })
            .catch(() => {});
    }, []);

    return (
        <section className="py-10 md:py-20 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">

                <AnimateIn animation="fade-up" delay={0} className="text-center mb-8 md:mb-16">
                    <h2 className="text-3xl md:text-5xl font-extrabold text-gray-900 mb-4">Our Strengths</h2>
                    <p className="text-gray-600 max-w-2xl mx-auto text-lg">Why Industry Trusts Us</p>
                </AnimateIn>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8 items-stretch">
                    {features.map((feature, idx) => {
                        const Icon = ICON_MAP[feature.icon] || Target;
                        return (
                            <AnimateIn key={idx} animation="fade-up" delay={idx * 120} className="h-full">
                                <div className={`${styles.featureCard} h-full`}>
                                    <div className={styles.iconWrapper}>
                                        <Icon size={32} />
                                    </div>
                                    <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                                    <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                                </div>
                            </AnimateIn>
                        );
                    })}
                </div>

            </div>
        </section>
    );
}
