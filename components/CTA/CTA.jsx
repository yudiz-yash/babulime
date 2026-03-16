"use client";

import { useEffect, useState } from 'react';
import styles from './CTA.module.scss';
import { ArrowRight, Phone } from 'lucide-react';
import AnimateIn from '@/components/AnimateIn';

const STATIC = {
    heading: 'Distributor & Business Inquiries Welcome',
    description: 'We welcome partnerships from distributors, retailers and institutional buyers across India. Committed to sustainable growth, process excellence and long-term distributor relationships.',
    primaryBtnText: 'Write to Us',
    phone: '+91-9227706516',
};

export default function CTA() {
    const [data, setData] = useState(STATIC);

    useEffect(() => {
        fetch(`${process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000/api'}/settings/cta`)
            .then(r => r.ok ? r.json() : null)
            .then(d => { if (d) setData(d); })
            .catch(() => {});
    }, []);

    return (
        <section className={`py-12 md:py-24 ${styles.ctaSection}`}>
            <AnimateIn
                animation="scale-in"
                delay={0}
                threshold={0.2}
                className="max-w-4xl mx-auto px-4 md:px-6 text-center text-white space-y-5 md:space-y-8 relative z-10"
            >
                <h2 className="text-4xl md:text-6xl font-extrabold tracking-tight">
                    {data.heading}
                </h2>

                <p className="text-xl md:text-2xl text-purple-100 max-w-2xl mx-auto leading-relaxed">
                    {data.description}
                </p>

                <AnimateIn animation="fade-up" delay={200} className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-8">
                    <button className={`${styles.primaryBtn} w-full sm:w-auto flex items-center justify-center gap-2 bg-white text-purple-700 font-bold px-8 py-4 rounded-full text-lg hover:-translate-y-1 hover:shadow-xl transition-all duration-300 active:scale-95`}>
                        {data.primaryBtnText} <ArrowRight size={20} />
                    </button>

                    <button className={`${styles.secondaryBtn} w-full sm:w-auto flex items-center justify-center gap-2 text-white font-bold px-8 py-4 rounded-full text-lg border-2 border-white/30 hover:bg-white/10 hover:-translate-y-1 transition-all duration-300`}>
                        <Phone size={20} /> {data.phone}
                    </button>
                </AnimateIn>
            </AnimateIn>

            <div className={styles.circleGraphicLeft}></div>
            <div className={styles.circleGraphicRight}></div>
        </section>
    );
}
