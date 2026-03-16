"use client";

import { useEffect, useState } from 'react';
import styles from './TraditionTimeline.module.scss';
import AnimateIn from '@/components/AnimateIn';

const STATIC = {
    badge: 'Our Legacy',
    heading: 'Rooted In Indian Heritage',
    description: "The art of paan preparation is deeply woven into India's cultural fabric — from roadside stalls to grand celebrations, it represents hospitality, craftsmanship and community.",
    milestones: [
        { label: '1987',   title: 'Founded',         desc: "Babu Lime was founded in Rajkot with a singular mission — to honour India's paan tradition by delivering the purest food-grade lime.", style: 'light' },
        { label: 'Rajkot', title: 'Gujarat, India',   desc: 'What began at a single shop in Rajkot grew into a fully automated manufacturing facility combining traditional expertise with modern industrial systems.', style: 'light' },
        { label: 'Today',  title: 'Pan-India Reach',  desc: 'Serving over 80,000 retail outlets across India, with an expanding presence through national online marketplaces.', style: 'dark' },
    ],
};

export default function TraditionTimeline() {
    const [data, setData] = useState(STATIC);

    useEffect(() => {
        fetch(`${process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000/api'}/settings/tradition_timeline`)
            .then(r => r.ok ? r.json() : null)
            .then(d => { if (d) setData(d); })
            .catch(() => {});
    }, []);

    return (
        <section className="py-12 md:py-24 bg-white relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">

                <AnimateIn animation="fade-up" delay={0} className="text-center mb-10 md:mb-20">
                    <span className="text-purple-600 font-bold tracking-wider uppercase text-sm mb-2 block">{data.badge}</span>
                    <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">{data.heading}</h2>
                    <p className="text-gray-600 max-w-2xl mx-auto text-lg">{data.description}</p>
                </AnimateIn>

                <div className="relative">
                    <AnimateIn
                        animation="draw-line"
                        threshold={0.3}
                        className="hidden md:block absolute top-[60px] left-0 h-[2px] bg-gradient-to-r from-purple-100 via-purple-400 to-purple-100"
                    />

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 text-center relative z-10">
                        {(data.milestones || []).map((m, i) => {
                            const isDark = m.style === 'dark';
                            return (
                                <AnimateIn key={i} animation="fade-up" delay={i * 160} className={`flex flex-col items-center ${styles.milestone}`}>
                                    <div className={`${styles.node} mb-6 flex items-center justify-center relative`}>
                                        {i === 0 && (
                                            <div className="absolute inset-0 bg-purple-100 rounded-full animate-pulse opacity-50"></div>
                                        )}
                                        <div className={`rounded-full w-24 h-24 shadow-lg border-4 ${isDark ? 'bg-purple-600 border-purple-200 text-white' : 'bg-white border-purple-100 text-purple-700'} flex flex-col items-center justify-center relative z-10`}>
                                            <span className="text-2xl font-black">{m.label}</span>
                                        </div>
                                    </div>
                                    <h3 className="text-xl font-bold text-gray-900 mb-2">{m.title}</h3>
                                    <p className="text-gray-600">{m.desc}</p>
                                </AnimateIn>
                            );
                        })}
                    </div>
                </div>

            </div>
        </section>
    );
}
