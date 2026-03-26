"use client";

import { useState, useEffect } from 'react';
import AnimateIn from '@/components/AnimateIn';
import { Weight, Layers3 } from 'lucide-react';
import styles from './ProductsPage.module.scss';
import {
    cat11, cat12, cat13, cat14,
    cat21, cat22, cat23, cat24,
    cat31, cat32,
    cat41, cat42, cat43,
    cat51, cat52,
    cat61, cat62, cat63,
    cat71, cat72, cat73, cat74, cat75, cat76, cat77,
} from '@/assets';

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

export default function ProductsPage() {
    const [categories, setCategories] = useState(STATIC_CATEGORIES);

    useEffect(() => {
        fetch(`${process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000/api'}/products`)
            .then(r => r.ok ? r.json() : null)
            .then(d => { if (d && d.length > 0) setCategories(d); })
            .catch(() => {});
    }, []);

    const totalProducts = categories.reduce((sum, c) => sum + c.products.length, 0);

    return (
        <div className="min-h-screen bg-gray-50">
            {/* Page Header */}
            <div className={styles.pageHeader}>
                <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
                    <AnimateIn animation="fade-up">
                        <span className="text-purple-400 font-bold tracking-wider uppercase text-sm mb-3 block">PRODUCT PORTFOLIO</span>
                        <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-4">Our Products</h1>
                        <p className="text-purple-200 text-lg max-w-2xl">
                            Explore our complete range of lime products — available in retail, wholesale and institutional formats.
                        </p>
                        <div className={styles.statsRow}>
                            <div className={styles.statChip}>
                                <span className={styles.statNum}>{categories.length}</span>
                                <span className={styles.statLabel}>Categories</span>
                            </div>
                            <div className={styles.statChip}>
                                <span className={styles.statNum}>{totalProducts}</span>
                                <span className={styles.statLabel}>Products</span>
                            </div>
                        </div>
                    </AnimateIn>
                </div>
            </div>

            {/* Category Quick Nav */}
            <div className={styles.quickNav}>
                <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
                    <div className={styles.quickNavInner}>
                        {categories.map((cat) => (
                            <a
                                key={cat.slug || cat._id}
                                href={`#cat-${cat.slug || cat._id}`}
                                className={styles.quickNavPill}
                                style={{ '--accent': cat.accent }}
                            >
                                {cat.shortLabel}
                                <span className={styles.quickNavCount}>{cat.products.length}</span>
                            </a>
                        ))}
                    </div>
                </div>
            </div>

            {/* All Categories */}
            <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 py-12 md:py-16">
                {categories.map((cat, catIdx) => (
                    <section
                        key={cat.slug || cat._id}
                        id={`cat-${cat.slug || cat._id}`}
                        className={styles.categorySection}
                    >
                        <AnimateIn animation="fade-up" delay={50}>
                            <div className={styles.categoryHeader}>
                                <div className={styles.categoryAccentBar} style={{ background: cat.accent }} />
                                <div className={styles.categoryTitleGroup}>
                                    <h2 className={styles.categoryTitle}>{cat.label}</h2>
                                    <span className={styles.categoryCount} style={{ background: cat.lightBg, color: cat.accent }}>
                                        {cat.products.length} products
                                    </span>
                                </div>
                            </div>
                        </AnimateIn>

                        <div className={styles.grid}>
                            {cat.products.map((prod, i) => {
                                const imgSrc = getImageSrc(prod, cat.slug, i);
                                return (
                                    <AnimateIn key={`${cat.slug || cat._id}-${i}`} animation="scale-in" delay={i * 60}>
                                        <div
                                            className={styles.card}
                                            style={{ '--accent': cat.accent, '--light': cat.lightBg }}
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
                                                        <span className={styles.chip} style={{ background: cat.lightBg, color: cat.accent }}>
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

                        {catIdx < categories.length - 1 && <div className={styles.divider} />}
                    </section>
                ))}
            </div>
        </div>
    );
}
