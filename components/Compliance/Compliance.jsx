"use client";

import { useEffect, useState } from 'react';
import styles from './Compliance.module.scss';
import { Award, ShieldCheck, CheckSquare, FileText } from 'lucide-react';
import AnimateIn from '@/components/AnimateIn';

const ICON_MAP = {
    Award:       <Award size={40} />,
    ShieldCheck: <ShieldCheck size={40} />,
    CheckSquare: <CheckSquare size={40} />,
    FileText:    <FileText size={40} />,
};

const STATIC = {
    heading: 'Quality & Compliance',
    description: 'Quality is non-negotiable. Every batch is laboratory tested before market release.',
    items: [
        { icon: 'Award',       title: 'FSSAI Standards',              desc: 'Fully compliant with Food Safety and Standards Authority of India regulations.' },
        { icon: 'ShieldCheck', title: 'Good Manufacturing Practices', desc: 'GMP protocols rigorously followed across all stages of production.' },
        { icon: 'CheckSquare', title: 'Internal Quality Assurance',   desc: 'Every batch is laboratory tested before market release.' },
        { icon: 'FileText',    title: 'Batch Traceability',           desc: 'Complete traceability from raw material selection to sealed dispatch.' },
    ],
};

export default function Compliance() {
    const [data, setData] = useState(STATIC);

    useEffect(() => {
        fetch(`${process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000/api'}/settings/compliance`)
            .then(r => r.ok ? r.json() : null)
            .then(d => { if (d) setData(d); })
            .catch(() => {});
    }, []);

    return (
        <section id="quality" className="py-12 md:py-24 bg-white">
            <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">

                <AnimateIn animation="fade-up" delay={0} className="text-center mb-8 md:mb-16">
                    <h2 className="text-3xl md:text-5xl font-extrabold text-gray-900 mb-4">{data.heading}</h2>
                    <p className="text-gray-600 max-w-2xl mx-auto text-lg">{data.description}</p>
                </AnimateIn>

                <div className={`grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-8 ${{ 1: 'lg:grid-cols-1', 2: 'lg:grid-cols-2', 3: 'lg:grid-cols-3', 4: 'lg:grid-cols-4' }[(data.items || []).length] || 'lg:grid-cols-4'}`}>
                    {(data.items || []).map((cert, idx) => (
                        <AnimateIn key={idx} animation="scale-in" delay={idx * 110}>
                            <div className={`${styles.certCard} flex flex-col items-center text-center p-5 md:p-8 bg-gray-50 rounded-2xl border border-gray-100 h-full`}>
                                <div className={`${styles.badge} mb-6 text-purple-700 bg-purple-100 p-4 rounded-2xl`}>
                                    {ICON_MAP[cert.icon] || <Award size={40} />}
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-3">{cert.title}</h3>
                                <p className="text-gray-600 leading-relaxed text-sm">{cert.desc}</p>
                            </div>
                        </AnimateIn>
                    ))}
                </div>

            </div>
        </section>
    );
}
