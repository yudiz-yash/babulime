"use client";

import { useEffect, useState } from 'react';
import styles from './Certification.module.scss';
import AnimateIn from '@/components/AnimateIn';
import { ShieldCheck } from 'lucide-react';
import fssai from '@/assets/images/FSSAI-Number.png';
import isoCert from '@/assets/images/iso-certificate-final.png';

const STATIC_IMAGES = [fssai.src, isoCert.src];

const STATIC = {
    badge: 'CERTIFICATION',
    heading: 'ISO Certified Excellence',
    description: 'When it comes to Quality there is no compromise, following all standards and good manufacturing practices.',
    items: [
        { label: 'FSSAI Certified',         alt: 'FSSAI Certification',       image: fssai.src },
        { label: 'ISO 9001:2015 Certified', alt: 'ISO 9001:2015 Certificate', image: isoCert.src },
    ],
};

export default function Certification() {
    const [data, setData] = useState(STATIC);

    useEffect(() => {
        fetch(`${process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000/api'}/settings/certification`)
            .then(r => r.ok ? r.json() : null)
            .then(d => {
                if (d) {
                    // Fall back to local static images if DB image is null/missing
                    const items = (d.items || []).map((item, i) => ({
                        ...item,
                        image: item.image || STATIC_IMAGES[i] || null,
                    }));
                    setData({ ...d, items });
                }
            })
            .catch(() => {});
    }, []);

    return (
        <section id="certification" className={styles.section}>
            <div className="max-w-7xl mx-auto px-6 lg:px-8">

                <AnimateIn animation="fade-up" className="text-center mb-8 md:mb-14">
                    <div className={styles.badgeRow}>
                        <div className={styles.iconBadge}>
                            <ShieldCheck size={22} />
                        </div>
                        <span className={styles.eyebrow}>{data.badge}</span>
                    </div>
                    <h2 className="text-3xl md:text-5xl font-extrabold text-gray-900 mt-4 mb-5">
                        {data.heading}
                    </h2>
                    <p className="text-gray-600 max-w-2xl mx-auto text-lg leading-relaxed">
                        {data.description}
                    </p>
                </AnimateIn>

                <div className={styles.certsGrid}>
                    {(data.items || []).map((cert, i) => (
                        <AnimateIn key={i} animation="scale-in" delay={i * 150}>
                            <div className={styles.certCard}>
                                <div className={styles.imgWrapper}>
                                    {cert.image && <img src={cert.image} alt={cert.alt} className={styles.certImg} />}
                                </div>
                                <div className={styles.certLabel}>
                                    <ShieldCheck size={15} />
                                    {cert.label}
                                </div>
                            </div>
                        </AnimateIn>
                    ))}
                </div>

            </div>
        </section>
    );
}
