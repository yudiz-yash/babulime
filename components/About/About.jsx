"use client";

import { useEffect, useState } from 'react';
import styles from './About.module.scss';
import { CheckCircle2 } from 'lucide-react';
import { about } from '@/assets';
import AnimateIn from '@/components/AnimateIn';

const STATIC = {
    badge: 'ABOUT BABU LIME',
    heading: 'Three Decades of Trust. One Standard of Purity.',
    paragraphs: [
        'Established over 30 years ago, Babu Lime Pvt Ltd is recognized as a leading processor of food-grade natural white lime in India.',
        'From our fully automated manufacturing facility in Rajkot, Gujarat, we combine traditional expertise with modern industrial systems.',
        'Today, our products are trusted by over <strong class="text-gray-800">80,000 retail outlets</strong> — reinforcing our position as a category authority in food-grade lime processing.',
    ],
    checkItems: [
        'Stainless Steel Processing',
        'Ultra-Modern Laboratory',
        'Hygienic Packaging',
        'Batch Traceability',
    ],
    statBadgeValue: '80K+',
    statBadgeLabel: 'Retail Outlets\nAcross India',
    distributionNetwork: {
        subHeading: 'Our Rich',
        title: 'Distribution Network',
        bullets: ['80,000+ Retail Outlets', '60+ Cities', 'Strong Gujarat Network', 'Growing Pan-India Access'],
        description: 'Dependable availability and consistent retailer support across India.',
    },
};

export default function About() {
    const [data, setData] = useState(STATIC);

    useEffect(() => {
        fetch(`${process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000/api'}/about`)
            .then(r => r.ok ? r.json() : null)
            .then(d => { if (d) setData(d); })
            .catch(() => {});
    }, []);

    return (
        <section id="about" className="py-12 md:py-24 bg-white">
            <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">

                {/* Left Side: Content */}
                <AnimateIn animation="fade-left" delay={0} className="order-2 lg:order-1 space-y-5 md:space-y-8">
                    <div>
                        <span className="text-purple-600 font-bold tracking-wider uppercase text-sm mb-2 block">{data.badge}</span>
                        <h2 className="text-3xl lg:text-4xl font-extrabold text-gray-900 leading-tight">
                            {data.heading}
                        </h2>
                    </div>

                    <div className="space-y-4 text-gray-600 leading-relaxed">
                        {data.paragraphs.map((p, i) => (
                            <p key={i} dangerouslySetInnerHTML={{ __html: p }} />
                        ))}
                    </div>

                    <div className="flex flex-col gap-4">
                        {data.checkItems.map((item, i) => (
                            <AnimateIn key={i} animation="fade-up" delay={i * 90} className="flex items-start gap-3">
                                <CheckCircle2 className="text-purple-500 mt-1 flex-shrink-0" size={20} />
                                <h4 className="font-bold text-gray-900">{item}</h4>
                            </AnimateIn>
                        ))}
                    </div>

                    {data.distributionNetwork && (
                        <AnimateIn animation="fade-up" delay={400}>
                            <div className="mt-2">
                                <p className="text-sm font-semibold text-purple-600 uppercase tracking-wider mb-1">{data.distributionNetwork.subHeading}</p>
                                <h3 className="text-xl font-extrabold text-gray-900 mb-3">{data.distributionNetwork.title}</h3>
                                <ul className="space-y-2 mb-3">
                                    {(data.distributionNetwork.bullets || []).map((b, i) => (
                                        <li key={i} className="flex items-center gap-2 text-gray-700 font-medium">
                                            <span className="w-2 h-2 rounded-full bg-purple-500 flex-shrink-0"></span>
                                            {b}
                                        </li>
                                    ))}
                                </ul>
                                <p className="text-gray-600 text-sm leading-relaxed">{data.distributionNetwork.description}</p>
                            </div>
                        </AnimateIn>
                    )}

                    <AnimateIn animation="scale-in" delay={450}>
                        <div className={`mt-8 ${styles.statsBadge} inline-flex items-center gap-4 px-6 py-4`}>
                            <div className="text-3xl font-extrabold text-purple-700">{data.statBadgeValue}</div>
                            <div className="text-gray-700 font-medium text-sm leading-tight">
                                {(data.statBadgeLabel || '').split('\n').map((line, i) => (
                                    <span key={i}>{line}{i === 0 ? <br /> : ''}</span>
                                ))}
                            </div>
                        </div>
                    </AnimateIn>
                </AnimateIn>

                {/* Right Side: Image */}
                <AnimateIn animation="fade-right" delay={120} className="order-1 lg:order-2">
                    <div className={`${styles.imageWrapper}`}>
                        <img src={about.src} alt="about" className="w-full h-full object-cover" width={500} height={500} />
                        <div className={styles.decorationSquare}></div>
                    </div>
                </AnimateIn>
            </div>
        </section>
    );
}
