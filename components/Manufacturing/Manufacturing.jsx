"use client";

import { useEffect, useState } from 'react';
import styles from './Manufacturing.module.scss';
import { Layers, Droplets, Settings, Activity, Thermometer, Cpu } from 'lucide-react';
import AnimateIn from '@/components/AnimateIn';

const ICON_MAP = {
    Layers:      <Layers size={28} />,
    Droplets:    <Droplets size={28} />,
    Settings:    <Settings size={28} />,
    Activity:    <Activity size={28} />,
    Thermometer: <Thermometer size={28} />,
    Cpu:         <Cpu size={28} />,
};

const STATIC = {
    badge: 'MANUFACTURING EXCELLENCE',
    heading: 'Manufacturing Excellence',
    description: 'Engineered for consistency and hygiene at every stage. All machinery fabricated using stainless steel for food safety compliance.',
    subDescription: 'All machinery fabricated using stainless steel for food safety compliance.',
    vision: {
        heading: 'Our Vision',
        desc1: 'To remain the most trusted name in food-grade lime processing by continuously enhancing manufacturing standards, operational systems and market reach.',
        desc2: 'Committed to sustainable growth, process excellence and long-term distributor relationships.',
    },
    steps: [
        { icon: 'Layers',      title: 'Raw Material Selection',   desc: 'Careful selection of materials to ensure baseline quality before processing begins.' },
        { icon: 'Droplets',    title: 'Cleaning & Pre-Processing', desc: 'Thorough removal of impurities and contaminants before main processing.' },
        { icon: 'Settings',    title: 'Ultra-Fine Grinding',       desc: 'Advanced ultra-fine grinding technology ensures uniform granulation and smooth texture throughout.' },
        { icon: 'Activity',    title: 'Laboratory Testing',        desc: 'In-house testing of every batch for full quality assurance before dispatch.' },
        { icon: 'Thermometer', title: 'Hygienic Packing',          desc: 'Maintaining purity through careful, contamination-free handling and packing.' },
        { icon: 'Cpu',         title: 'Sealed Dispatch',           desc: 'Secure, tamper-proof dispatch ensuring product integrity from plant to shelf.' },
    ],
    quality: {
        heading: 'Quality & Compliance',
        description: 'Quality is non-negotiable. Continuous internal audits ensure standardization across all batches. Every product is laboratory tested before market release.',
        items: ['FSSAI Standards', 'Good Manufacturing Practices (GMP)', 'Internal Quality Assurance Protocols'],
        infrastructureHeading: 'Infrastructure Highlights',
        infrastructureText: 'All processing machinery is fabricated using stainless steel for food safety compliance and durability. Our plant operates under controlled industrial protocols designed for consistency, hygiene and operational efficiency.',
    },
};

export default function Manufacturing() {
    const [data, setData] = useState(STATIC);

    useEffect(() => {
        fetch(`${process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000/api'}/settings/manufacturing`)
            .then(r => r.ok ? r.json() : null)
            .then(d => { if (d) setData(d); })
            .catch(() => {});
    }, []);

    const steps = data.steps || [];
    const quality = data.quality || {};

    return (
        <section id="quality" className="py-12 md:py-24 bg-white">
            <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">

                <AnimateIn animation="fade-up" delay={0} className="text-center mb-8 md:mb-16">
                    <span className="text-purple-600 font-bold tracking-wider uppercase text-sm mb-2 block">{data.badge}</span>
                    <h2 className="text-3xl md:text-5xl font-extrabold text-gray-900 mb-4">{data.heading}</h2>
                    {data.subDescription && <p className="text-gray-600 max-w-4xl mx-auto text-lg">{data.subDescription}</p>}
                    {data.vision?.heading && <h3 className="text-xl font-bold text-gray-900 mt-6 mb-2">{data.vision.heading}</h3>}
                    {data.vision?.desc1 && <p className="text-gray-600 max-w-4xl mx-auto text-base">{data.vision.desc1}</p>}
                    {data.vision?.desc2 && <p className="text-gray-600 max-w-4xl mx-auto text-base mt-2">{data.vision.desc2}</p>}
                </AnimateIn>

                <div className={styles.stepsGrid}>
                    {steps.map((step, idx) => (
                        <AnimateIn key={idx} animation="fade-up" delay={idx * 100}>
                            <div className={styles.stepCard}>
                                <div className={styles.stepBadge}>{String(idx + 1).padStart(2, '0')}</div>
                                <div className={styles.iconBox}>{ICON_MAP[step.icon] || <Layers size={28} />}</div>
                                <h3 className={styles.stepTitle}>{step.title}</h3>
                                {/* <p className={styles.stepDesc}>{step.desc}</p> */}
                                {idx !== steps.length - 1 && (
                                    <div className={`${styles.connector} ${(idx + 1) % 3 === 0 ? styles.connectorHidden : ''}`}>
                                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                            <path d="M5 12h14M13 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                    </div>
                                )}
                            </div>
                        </AnimateIn>
                    ))}
                </div>

                {/* <AnimateIn animation="fade-up" delay={200}>
                    <div className="bg-gray-50 rounded-2xl p-5 md:p-8 lg:p-12 border border-gray-100 mt-6">
                        <div className="grid md:grid-cols-2 gap-6 md:gap-12 items-center">
                            <div>
                                <h3 className="text-2xl font-bold text-gray-900 mb-4">{quality.heading}</h3>
                                <p className="text-gray-600 mb-6">{quality.description}</p>
                                <ul className="space-y-3 text-gray-700 font-medium">
                                    {(quality.items || []).map(item => (
                                        <li key={item} className="flex items-center gap-3">
                                            <div className="w-2 h-2 rounded-full bg-purple-600 flex-shrink-0"></div>
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div>
                                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                                    <h4 className="font-bold text-gray-900 mb-2">{quality.infrastructureHeading}</h4>
                                    <p className="text-sm text-gray-600 leading-relaxed">{quality.infrastructureText}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </AnimateIn> */}

            </div>
        </section>
    );
}
