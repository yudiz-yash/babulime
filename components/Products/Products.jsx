"use client";

import { useState } from 'react';
import styles from './Products.module.scss';
import AnimateIn from '@/components/AnimateIn';
import { Weight, Layers3 } from 'lucide-react';
import {
    cat11, cat12, cat13, cat14,
    cat21, cat22, cat23, cat24,
    cat31, cat32,
    cat41, cat42, cat43,
    cat51, cat52,
    cat61, cat62, cat63,
    cat71, cat72, cat73, cat74, cat75, cat76, cat77,
} from '@/assets';

const CATEGORIES = [
    {
        id: 'medium',
        label: 'Medium Parcel',
        shortLabel: 'Medium',
        accent: '#7c3aed',
        lightBg: '#f3eeff',
        products: [
            { name: 'Medium Parcel Pouch',     weight: '350 gms',             pack: null,           img: cat11 },
            { name: 'Medium Parcel Pouch Bag', weight: null,                  pack: 'Pack of 20',   img: cat12 },
            { name: 'Medium Parcel Loose Bag', weight: '10 Kg',               pack: null,           img: cat13 },
            { name: 'Medium Parcel Dabba Bag', weight: 'Per Dabba 1.550 Kgs', pack: 'Pack of 4',   img: cat14 },
        ],
    },
    {
        id: 'ghatta',
        label: 'Ghatta Parcel',
        shortLabel: 'Ghatta',
        accent: '#6d28d9',
        lightBg: '#ede9fe',
        products: [
            { name: 'Ghatta Parcel Pouch',     weight: '350 Gms',             pack: null,           img: cat21 },
            { name: 'Ghatta Parcel Pouch Bag', weight: null,                  pack: 'Pack of 20',   img: cat22 },
            { name: 'Ghatta Parcel Loose Bag', weight: '10 Kg',               pack: null,           img: cat23 },
            { name: 'Ghatta Parcel Dabba Bag', weight: 'Per Dabba 1.600 Kgs', pack: 'Pack of 4',   img: cat24 },
        ],
    },
    {
        id: 'achha',
        label: 'Achha Parcel',
        shortLabel: 'Achha',
        accent: '#9333ea',
        lightBg: '#faf5ff',
        products: [
            { name: 'Achha Safed Parcel Pouch',     weight: '350 gms', pack: null,          img: cat31 },
            { name: 'Achha Safed Parcel Pouch Bag', weight: null,      pack: 'Pack of 20',  img: cat32 },
        ],
    },
    {
        id: 'sardar',
        label: 'Sardar Parcel',
        shortLabel: 'Sardar',
        accent: '#5b21b6',
        lightBg: '#f5f3ff',
        products: [
            { name: 'Sardar Parcel Pouch',     weight: '350 gms', pack: null,          img: cat41 },
            { name: 'Sardar Parcel Pouch Bag', weight: null,      pack: 'Pack of 20',  img: cat42 },
            { name: 'Sardar Parcel Loose Bag', weight: '10 Kgs',  pack: null,          img: cat43 },
        ],
    },
    {
        id: 'babu-sample',
        label: 'Babu Sample',
        shortLabel: 'Babu Sample',
        accent: '#7e22ce',
        lightBg: '#f3e8ff',
        products: [
            { name: 'Babu Sample Pouch',     weight: '400 gms', pack: null,          img: cat51 },
            { name: 'Babu Sample Pouch Bag', weight: null,      pack: 'Pack of 30',  img: cat52 },
        ],
    },
    {
        id: 'sardar-sample',
        label: 'Jay Sardar Sample',
        shortLabel: 'Jay Sardar',
        accent: '#4c1d95',
        lightBg: '#ede9fe',
        products: [
            { name: 'Jay Sardar Sample Pouch',     weight: '350 gms', pack: null,          img: cat61 },
            { name: 'Jay Sardar Sample Pouch Bag', weight: null,      pack: 'Pack of 20',  img: cat62 },
            { name: 'Jay Sardar Sample Loose Bag', weight: '10 Kgs',  pack: null,          img: cat63 },
        ],
    },
    {
        id: 'chunna-paste',
        label: 'Chunna Paste',
        shortLabel: 'Chunna Paste',
        accent: '#a21caf',
        lightBg: '#fdf4ff',
        products: [
            { name: '750 gms Chunna Paste (Pouch)',  weight: '750 gms',  pack: '15 Pouch / bag',              img: cat71 },
            { name: '1 Kg Chunna Paste (Pouch)',     weight: '1 Kg',     pack: '10 Pouch / bag · 20 Pcs / bag', img: cat72 },
            { name: '5 Kg Chunna Paste (Pouch)',     weight: '5 Kg',     pack: '4 Pouch / bag',               img: cat73 },
            { name: '150 gms Chunna Paste (Dabbi)',  weight: '150 gms',  pack: '10 Pcs / box',                img: cat74 },
            { name: '1 Kg Chunna Paste (Dabba)',     weight: '1 Kg',     pack: '18 Pcs / box',                img: cat75 },
            { name: '18 Kgs Chunna Paste (Bucket)',  weight: '18 Kgs',   pack: null,                          img: cat76 },
            { name: '20 Kgs Chunna Paste (Kerbo)',   weight: '20 Kgs',   pack: null,                          img: cat77 },
        ],
    },
];

export default function Products() {
    const [activeId, setActiveId] = useState(CATEGORIES[0].id);

    const active = CATEGORIES.find(c => c.id === activeId);

    return (
        <section id="products" className="py-12 md:py-24 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">

                {/* Header */}
                <AnimateIn animation="fade-up" className="text-center mb-6 md:mb-12">
                    <span className="text-purple-600 font-bold tracking-wider uppercase text-sm mb-2 block">PRODUCT PORTFOLIO</span>
                    <h2 className="text-3xl md:text-5xl font-extrabold text-gray-900 mb-4">Our Products</h2>
                    <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                        Explore our complete range of lime products — available in retail, wholesale and institutional formats.
                    </p>
                </AnimateIn>

                {/* Category tab bar */}
                <AnimateIn animation="fade-up" delay={100}>
                    <div className={styles.tabBar}>
                        {CATEGORIES.map(cat => (
                            <button
                                key={cat.id}
                                onClick={() => setActiveId(cat.id)}
                                className={`${styles.tab} ${activeId === cat.id ? styles.tabActive : ''}`}
                                style={activeId === cat.id ? { '--accent': cat.accent } : {}}
                            >
                                {cat.shortLabel}
                                <span className={styles.tabCount}>{cat.products.length}</span>
                            </button>
                        ))}
                    </div>
                </AnimateIn>

                {/* Active category label */}
                <div className={styles.categoryHeading}>
                    <div className={styles.categoryDot} style={{ background: active.accent }} />
                    <span className="text-xl font-bold text-gray-900">{active.label} Range</span>
                    <span className={styles.totalChip}>{active.products.length} products</span>
                </div>

                {/* Products grid */}
                <div className={styles.grid}>
                    {active.products.map((prod, i) => (
                        <AnimateIn key={`${activeId}-${i}`} animation="scale-in" delay={i * 70}>
                            <div
                                className={styles.card}
                                style={{ '--accent': active.accent, '--light': active.lightBg }}
                            >
                                {/* Image area */}
                                <div className={styles.imgArea}>
                                    <img
                                        src={prod.img.src}
                                        alt={prod.name}
                                        className={styles.productImg}
                                    />
                                </div>

                                {/* Content */}
                                <div className={styles.cardBody}>
                                    <p className={styles.cardName}>{prod.name}</p>

                                    <div className={styles.chips}>
                                        {prod.weight && (
                                            <span className={styles.chip} style={{ background: active.lightBg, color: active.accent }}>
                                                <Weight size={11} /> {prod.weight}
                                            </span>
                                        )}
                                        {prod.pack && (
                                            <span className={styles.chip} style={{ background: '#f1f5f9', color: '#475569' }}>
                                                <Layers3 size={11} /> {prod.pack}
                                            </span>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </AnimateIn>
                    ))}
                </div>


            </div>
        </section>
    );
}
