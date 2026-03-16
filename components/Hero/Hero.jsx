"use client";

import { useEffect, useState } from 'react';
import styles from './Hero.module.scss';
import { ArrowRight, BarChart2, ShieldCheck, Award } from 'lucide-react';
import { hero } from '@/assets';
import AnimateIn from '@/components/AnimateIn';
import CountUp from '@/components/CountUp/CountUp';

const STATIC = {
    title: "India's Trusted Authority in",
    titleHighlight: 'Food-Grade',
    titleEnd: 'Natural White Lime Processing',
    subtitle: 'Delivering purity, precision and performance since 1987.',
    tagline: 'Manufactured in Rajkot. Serving Gujarat. Expanding Pan-India.',
    buttonText: 'Discover More',
    stats: [
        { end: 30, suffix: '+', label: 'Years' },
        { end: 80, suffix: 'k+', label: 'Retail Outlets' },
        { end: 45, suffix: '+', label: 'Tons/Day' },
        { end: 60, suffix: '+', label: 'Cities' },
    ],
};

const ICONS = [<Award size={22} />, <ShieldCheck size={22} />, <BarChart2 size={22} />, <ArrowRight size={22} />];

export default function Hero() {
    const [data, setData] = useState(STATIC);

    useEffect(() => {
        fetch(`${process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000/api'}/hero`)
            .then(r => r.ok ? r.json() : null)
            .then(d => { if (d) setData(d); })
            .catch(() => {});
    }, []);

    return (
        <section className="relative overflow-hidden pt-10 pb-10 md:pt-20 md:pb-16 lg:pt-32 lg:pb-24">
            <div className="max-w-7xl mx-auto px-4 lg:px-8 grid lg:grid-cols-12 gap-8 lg:gap-10 items-center">

                {/* Left Side: Text and Stats — 8 columns */}
                <div className="flex flex-col space-y-6 z-10 lg:col-span-8">
                    <AnimateIn animation="fade-up" delay={0} className="space-y-3">
                        <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-extrabold tracking-tight text-gray-900 leading-tight">
                            {data.title}{' '}
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-purple-900 anim-shimmer-text">
                                {data.titleHighlight}
                            </span>{' '}
                            {data.titleEnd}
                        </h1>
                        <p className="text-lg text-gray-600 leading-relaxed font-medium">
                            {data.subtitle}
                        </p>
                        <p className="text-base text-gray-500">
                            {data.tagline}
                        </p>
                    </AnimateIn>

                    <AnimateIn animation="fade-up" delay={180} className="flex gap-4">
                        <button
                            onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
                            className="flex items-center gap-1 bg-gradient-to-r from-purple-600 to-purple-800 text-white px-6 py-3 rounded-full font-semibold hover:shadow-lg hover:shadow-purple-200 transition-all duration-300 hover:-translate-y-1 active:scale-95"
                        >
                            {data.buttonText} <ArrowRight size={18} />
                        </button>
                    </AnimateIn>

                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2">
                        {data.stats.map((stat, i) => (
                            <AnimateIn key={i} animation="scale-in" delay={300 + i * 100}>
                                <div className={styles.statCard}>
                                    <div className={styles.statIcon}>{ICONS[i % ICONS.length]}</div>
                                    <p className={styles.statValue}>
                                        <CountUp end={stat.end} suffix={stat.suffix} />
                                    </p>
                                    <p className={styles.statLabel}>{stat.label}</p>
                                </div>
                            </AnimateIn>
                        ))}
                    </div>
                </div>

                {/* Right Side: Hero Visual — 4 columns */}
                <AnimateIn animation="fade-right" delay={200} className="relative z-10 lg:col-span-4 flex items-center justify-center">
                    <div className="relative w-full anim-float">
                        <img
                            src={hero.src}
                            alt="Hero"
                            className="w-full h-auto object-contain drop-shadow-xl"
                            style={{ maxHeight: '480px' }}
                        />
                    </div>
                </AnimateIn>
            </div>
        </section>
    );
}
