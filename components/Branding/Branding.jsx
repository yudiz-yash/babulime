"use client";

import { useEffect, useState } from 'react';
import styles from './Branding.module.scss';
import { Newspaper, Trophy, Store, Megaphone, Users, Award } from 'lucide-react';
import AnimateIn from '@/components/AnimateIn';

const ICON_MAP = {
    Newspaper: Newspaper,
    Trophy:    Trophy,
    Store:     Store,
    Award:     Award,
    Megaphone: Megaphone,
    Users:     Users,
};

const STATIC = {
    badge: 'Brand Showcase',
    heading: 'Media & Branding',
    description: 'From newspaper features to national cricket sponsorships — our brand story at a glance.',
    items: [
        {
            icon: 'Newspaper',
            tag: 'Newspaper',
            category: 'Press',
            title: 'Featured in Gujarat Samachar',
            desc: 'Babu Lime recognized for 30 years of excellence in food-grade processing.',
        },
        {
            icon: 'Trophy',
            tag: 'Cricket Branding',
            category: 'Sports',
            title: 'National Cricket Tournament Sponsor',
            desc: 'Official branding partner at national-level cricket events across Gujarat.',
        },
        {
            icon: 'Store',
            tag: 'Shop Branding',
            category: 'Retail',
            title: '80,000+ Branded Retail Points',
            desc: 'Consistent brand presence across retail shops with signage, displays and packaging.',
        },
        {
            icon: 'Award',
            tag: 'Awards',
            category: 'Awards',
            title: 'Industry Recognition & Awards',
            desc: 'Honored for quality standards, manufacturing excellence and business growth.',
        },
        {
            icon: 'Megaphone',
            tag: 'Print Media',
            category: 'Press',
            title: 'Newspaper & Magazine Campaigns',
            desc: 'Regional and national print advertising reinforcing category leadership.',
        },
        {
            icon: 'Users',
            tag: 'Events',
            category: 'Events',
            title: 'Community & Trade Events',
            desc: 'Active presence at food industry trade shows, community fairs and cultural events.',
        },
    ],
};

// Accent colour per category
const CATEGORY_COLOR = {
    Press:  { accent: '#7c3aed', light: '#f3eeff' },
    Sports: { accent: '#0369a1', light: '#e0f2fe' },
    Retail: { accent: '#15803d', light: '#dcfce7' },
    Awards: { accent: '#b45309', light: '#fef3c7' },
    Events: { accent: '#be185d', light: '#fce7f3' },
};

export default function Branding() {
    const [data, setData] = useState(STATIC);

    useEffect(() => {
        fetch(`${process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000/api'}/settings/branding`)
            .then(r => r.ok ? r.json() : null)
            .then(d => { if (d) setData(d); })
            .catch(() => {});
    }, []);

    const items = data.items || [];

    return (
        <section className="py-12 md:py-24 bg-white border-y border-gray-100">
            <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">

                {/* Header */}
                <AnimateIn animation="fade-up" delay={0} className="text-center mb-8 md:mb-12 max-w-3xl mx-auto">
                    <span className="text-purple-600 font-bold tracking-wider uppercase text-sm mb-2 block">{data.badge}</span>
                    <h2 className="text-3xl md:text-5xl font-extrabold text-gray-900 mb-4">{data.heading}</h2>
                    <p className="text-lg text-gray-500">{data.description}</p>
                </AnimateIn>

                {/* Cards grid */}
                <div className={styles.grid}>
                    {items.map((item, i) => {
                        const Icon   = ICON_MAP[item.icon] || Award;
                        const colors = CATEGORY_COLOR[item.category] || CATEGORY_COLOR.Press;
                        return (
                            <AnimateIn key={i} animation="scale-in" delay={i * 80}>
                                <div className={styles.card}>
                                    {/* Category tag */}
                                    <span
                                        className={styles.tag}
                                        style={{ background: colors.light, color: colors.accent }}
                                    >
                                        {item.tag}
                                    </span>

                                    {/* Icon */}
                                    <div
                                        className={styles.iconBox}
                                        style={{ background: colors.light, color: colors.accent }}
                                    >
                                        <Icon size={26} />
                                    </div>

                                    {/* Text */}
                                    <h3 className={styles.cardTitle}>{item.title}</h3>
                                    <p className={styles.cardDesc}>{item.desc}</p>

                                    {/* Bottom accent */}
                                    <div className={styles.cardAccent} style={{ background: colors.accent }} />
                                </div>
                            </AnimateIn>
                        );
                    })}
                </div>

            </div>
        </section>
    );
}
