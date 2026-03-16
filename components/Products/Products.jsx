"use client";

import { useState, useEffect } from 'react';
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

// Static fallback — local images mapped by slug+index
const LOCAL_IMAGES = {
    medium: [cat11, cat12, cat13, cat14],
    ghatta: [cat21, cat22, cat23, cat24],
    achha: [cat31, cat32],
    sardar: [cat41, cat42, cat43],
    'babu-sample': [cat51, cat52],
    'sardar-sample': [cat61, cat62, cat63],
    'chunna-paste': [cat71, cat72, cat73, cat74, cat75, cat76, cat77],
};

const STATIC_CATEGORIES = [
    { slug: 'medium', label: 'Medium Parcel', shortLabel: 'Medium', accent: '#7c3aed', lightBg: '#f3eeff', products: [{ name: 'Medium Parcel Pouch', weight: '350 gms' }, { name: 'Medium Parcel Pouch Bag', pack: 'Pack of 20' }, { name: 'Medium Parcel Loose Bag', weight: '10 Kg' }, { name: 'Medium Parcel Dabba Bag', weight: 'Per Dabba 1.550 Kgs', pack: 'Pack of 4' }] },
    { slug: 'ghatta', label: 'Ghatta Parcel', shortLabel: 'Ghatta', accent: '#6d28d9', lightBg: '#ede9fe', products: [{ name: 'Ghatta Parcel Pouch', weight: '350 Gms' }, { name: 'Ghatta Parcel Pouch Bag', pack: 'Pack of 20' }, { name: 'Ghatta Parcel Loose Bag', weight: '10 Kg' }, { name: 'Ghatta Parcel Dabba Bag', weight: 'Per Dabba 1.600 Kgs', pack: 'Pack of 4' }] },
    { slug: 'achha', label: 'Achha Parcel', shortLabel: 'Achha', accent: '#9333ea', lightBg: '#faf5ff', products: [{ name: 'Achha Safed Parcel Pouch', weight: '350 gms' }, { name: 'Achha Safed Parcel Pouch Bag', pack: 'Pack of 20' }] },
    { slug: 'sardar', label: 'Sardar Parcel', shortLabel: 'Sardar', accent: '#5b21b6', lightBg: '#f5f3ff', products: [{ name: 'Sardar Parcel Pouch', weight: '350 gms' }, { name: 'Sardar Parcel Pouch Bag', pack: 'Pack of 20' }, { name: 'Sardar Parcel Loose Bag', weight: '10 Kgs' }] },
    { slug: 'babu-sample', label: 'Babu Sample', shortLabel: 'Babu Sample', accent: '#7e22ce', lightBg: '#f3e8ff', products: [{ name: 'Babu Sample Pouch', weight: '400 gms' }, { name: 'Babu Sample Pouch Bag', pack: 'Pack of 30' }] },
    { slug: 'sardar-sample', label: 'Jay Sardar Sample', shortLabel: 'Jay Sardar', accent: '#4c1d95', lightBg: '#ede9fe', products: [{ name: 'Jay Sardar Sample Pouch', weight: '350 gms' }, { name: 'Jay Sardar Sample Pouch Bag', pack: 'Pack of 20' }, { name: 'Jay Sardar Sample Loose Bag', weight: '10 Kgs' }] },
    { slug: 'chunna-paste', label: 'Chunna Paste', shortLabel: 'Chunna Paste', accent: '#a21caf', lightBg: '#fdf4ff', products: [{ name: '750 gms Chunna Paste (Pouch)', weight: '750 gms', pack: '15 Pouch / bag' }, { name: '1 Kg Chunna Paste (Pouch)', weight: '1 Kg', pack: '10 Pouch / bag · 20 Pcs / bag' }, { name: '5 Kg Chunna Paste (Pouch)', weight: '5 Kg', pack: '4 Pouch / bag' }, { name: '150 gms Chunna Paste (Dabbi)', weight: '150 gms', pack: '10 Pcs / box' }, { name: '1 Kg Chunna Paste (Dabba)', weight: '1 Kg', pack: '18 Pcs / box' }, { name: '18 Kgs Chunna Paste (Bucket)', weight: '18 Kgs' }, { name: '20 Kgs Chunna Paste (Kerbo)', weight: '20 Kgs' }] },
];

function getImageSrc(prod, slug, index) {
    if (prod.image) return prod.image;
    const imgs = LOCAL_IMAGES[slug];
    if (imgs && imgs[index]) return imgs[index].src;
    return null;
}

export default function Products() {
    const [categories, setCategories] = useState(STATIC_CATEGORIES);
    const [activeId, setActiveId] = useState(null);

    useEffect(() => {
        fetch(`${process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000/api'}/products`)
            .then(r => r.ok ? r.json() : null)
            .then(d => { if (d && d.length > 0) { setCategories(d); setActiveId(d[0].slug || d[0]._id); } })
            .catch(() => {});
        setActiveId(STATIC_CATEGORIES[0].slug);
    }, []);

    const getId = (c) => c.slug || c._id;
    const active = categories.find(c => getId(c) === activeId) || categories[0];

    return (
        <section id="products" className="py-12 md:py-24 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">

                <AnimateIn animation="fade-up" className="text-center mb-6 md:mb-12">
                    <span className="text-purple-600 font-bold tracking-wider uppercase text-sm mb-2 block">PRODUCT PORTFOLIO</span>
                    <h2 className="text-3xl md:text-5xl font-extrabold text-gray-900 mb-4">Our Products</h2>
                    <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                        Explore our complete range of lime products — available in retail, wholesale and institutional formats.
                    </p>
                </AnimateIn>

                <AnimateIn animation="fade-up" delay={100}>
                    <div className={styles.tabBar}>
                        {categories.map(cat => (
                            <button
                                key={getId(cat)}
                                onClick={() => setActiveId(getId(cat))}
                                className={`${styles.tab} ${activeId === getId(cat) ? styles.tabActive : ''}`}
                                style={activeId === getId(cat) ? { '--accent': cat.accent } : {}}
                            >
                                {cat.shortLabel}
                                <span className={styles.tabCount}>{cat.products.length}</span>
                            </button>
                        ))}
                    </div>
                </AnimateIn>

                {active && (
                    <>
                        <div className={styles.categoryHeading}>
                            <div className={styles.categoryDot} style={{ background: active.accent }} />
                            <span className="text-xl font-bold text-gray-900">{active.label} Range</span>
                            <span className={styles.totalChip}>{active.products.length} products</span>
                        </div>

                        <div className={styles.grid}>
                            {active.products.map((prod, i) => {
                                const imgSrc = getImageSrc(prod, active.slug, i);
                                return (
                                    <AnimateIn key={`${getId(active)}-${i}`} animation="scale-in" delay={i * 70}>
                                        <div
                                            className={styles.card}
                                            style={{ '--accent': active.accent, '--light': active.lightBg }}
                                        >
                                            <div className={styles.imgArea}>
                                                {imgSrc ? (
                                                    <img src={imgSrc} alt={prod.name} className={styles.productImg} />
                                                ) : (
                                                    <div className="w-full h-full flex items-center justify-center bg-gray-100 text-gray-300 text-xs">No Image</div>
                                                )}
                                            </div>
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
                                );
                            })}
                        </div>
                    </>
                )}
            </div>
        </section>
    );
}
