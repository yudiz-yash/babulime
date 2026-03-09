'use client';
import { useEffect, useState } from 'react';

export default function ScrollProgressBar() {
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            const { scrollTop, scrollHeight, clientHeight } = document.documentElement;
            const total = scrollHeight - clientHeight;
            setProgress(total > 0 ? (scrollTop / total) * 100 : 0);
        };
        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div
            style={{
                position: 'fixed',
                top: 0,
                left: 0,
                height: '3px',
                width: `${progress}%`,
                background: 'linear-gradient(to right, #7c3aed, #a855f7, #9333ea)',
                zIndex: 99999,
                borderRadius: '0 2px 2px 0',
                transition: 'width 80ms linear',
                boxShadow: '0 0 8px rgba(124, 58, 237, 0.6)',
            }}
        />
    );
}
