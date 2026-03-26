"use client";

import { useState, useEffect } from 'react';
import { X, Briefcase, ArrowRight, Sparkles } from 'lucide-react';
import styles from './HiringPopup.module.scss';

const STATIC_POSITIONS = [
    { _id: '1', title: 'Production Supervisor',          type: 'Full-time' },
    { _id: '2', title: 'Quality Analyst',                type: 'Full-time' },
    { _id: '3', title: 'Sales Executive — Gujarat Region', type: 'Full-time' },
    { _id: '4', title: 'Packaging Machine Operator',     type: 'Full-time' },
];

const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000/api';

export default function HiringPopup() {
    const [open, setOpen]           = useState(false);
    const [positions, setPositions] = useState(STATIC_POSITIONS);

    // Delay popup slightly so page finishes loading
    useEffect(() => {
        const t = setTimeout(() => setOpen(true), 1200);
        return () => clearTimeout(t);
    }, []);

    useEffect(() => {
        fetch(`${API_URL}/careers/positions`)
            .then(r => r.ok ? r.json() : null)
            .then(d => { if (d && d.length > 0) setPositions(d); })
            .catch(() => {});
    }, []);

    const handleApply = () => {
        document.getElementById('careers')?.scrollIntoView({ behavior: 'smooth' });
        setOpen(false);
    };

    if (!open) return null;

    return (
        <div className={styles.popup}>
            {/* Header */}
            <div className={styles.header}>
                <div className={styles.headerLeft}>
                    <Sparkles size={16} className={styles.sparkle} />
                    <span className={styles.heading}>We are Hiring!</span>
                </div>
                <button className={styles.closeBtn} onClick={() => setOpen(false)} aria-label="Close">
                    <X size={16} />
                </button>
            </div>

            {/* Positions list */}
            <ul className={styles.list}>
                {positions.map((p) => (
                    <li key={p._id} className={styles.item}>
                        <Briefcase size={13} className={styles.itemIcon} />
                        <span className={styles.itemTitle}>{p.title}</span>
                        {p.type && <span className={styles.badge}>{p.type}</span>}
                    </li>
                ))}
            </ul>

            {/* CTA */}
            <button className={styles.applyBtn} onClick={handleApply}>
                Apply Now <ArrowRight size={14} />
            </button>
        </div>
    );
}
