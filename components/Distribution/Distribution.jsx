"use client";

import { useEffect, useState } from 'react';
import styles from './Distribution.module.scss';
import { Store, Map, TrendingUp } from 'lucide-react';
import AnimateIn from '@/components/AnimateIn';

const STAT_ICONS = [
    <Store className="text-purple-600 flex-shrink-0" size={28} />,
    <Map className="text-purple-600 flex-shrink-0" size={28} />,
    <TrendingUp className="text-purple-600 flex-shrink-0" size={28} />,
];

const STATIC = {
    badge: 'DISTRIBUTION NETWORK',
    heading: 'Strong Gujarat Presence. Expanding Pan-India.',
    description: 'Ensuring dependable availability and consistent retailer support across India. We have built one of the strongest distribution networks in the lime category.',
    stats: [
        { value: '80,000+', label: 'Retail Outlets' },
        { value: '60+',     label: 'Cities' },
        { value: 'Growing', label: 'Pan-India Access — Dependable availability and consistent retailer support across India.' },
    ],
    mapLat: '22.319917062800005',
    mapLng: '70.84248014418061',
};

export default function Distribution() {
    const [data, setData] = useState(STATIC);

    useEffect(() => {
        fetch(`${process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000/api'}/settings/distribution`)
            .then(r => r.ok ? r.json() : null)
            .then(d => { if (d) setData(d); })
            .catch(() => {});
    }, []);

    const mapSrc = `https://www.google.com/maps?q=${data.mapLat},${data.mapLng}&z=15&output=embed`;

    return (
        <section id="network" className="py-12 md:py-24 bg-gray-50 overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">

                <AnimateIn animation="fade-left" delay={0} className="space-y-5 md:space-y-8">
                    <div>
                        <span className="text-purple-600 font-bold tracking-wider uppercase text-sm mb-2 block">{data.badge}</span>
                        <h2 className="text-3xl md:text-5xl font-extrabold text-gray-900 mb-6 leading-tight">
                            {data.heading}
                        </h2>
                        <p className="text-lg text-gray-600 leading-relaxed">{data.description}</p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-6">
                        {(data.stats || []).map((stat, i) => (
                            <AnimateIn key={i} animation="fade-up" delay={i * 100} className={i === 2 ? 'sm:col-span-2' : ''}>
                                <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex items-start gap-4 hover:border-purple-200 hover:shadow-md transition-all duration-300 h-full">
                                    {STAT_ICONS[i] || STAT_ICONS[0]}
                                    <div>
                                        <h4 className="font-bold text-gray-900 text-2xl mb-1">{stat.value}</h4>
                                        <p className="text-gray-500 text-sm font-medium">{stat.label}</p>
                                    </div>
                                </div>
                            </AnimateIn>
                        ))}
                    </div>
                </AnimateIn>

                <AnimateIn animation="fade-right" delay={150} className="relative">
                    <div className="rounded-3xl overflow-hidden shadow-xl border border-gray-100 w-full aspect-square">
                        <iframe
                            title="Babu Lime Location"
                            width="100%"
                            height="100%"
                            style={{ border: 0, display: 'block' }}
                            loading="lazy"
                            allowFullScreen
                            referrerPolicy="no-referrer-when-downgrade"
                            src={mapSrc}
                        />
                    </div>
                </AnimateIn>

            </div>
        </section>
    );
}
