'use client';
import { useEffect, useRef, useState } from 'react';

/**
 * CountUp - animates a number from 0 to `end` when it enters the viewport.
 * suffix: string appended after the number (e.g. "+", "k+")
 * duration: animation duration in ms
 */
export default function CountUp({ end, suffix = '', duration = 1800 }) {
    const ref = useRef(null);
    const [count, setCount] = useState(0);
    const [started, setStarted] = useState(false);

    useEffect(() => {
        const el = ref.current;
        if (!el) return;
        const obs = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setStarted(true);
                    obs.disconnect();
                }
            },
            { threshold: 0.4 }
        );
        obs.observe(el);
        return () => obs.disconnect();
    }, []);

    useEffect(() => {
        if (!started) return;
        let startTime = null;
        const animate = (timestamp) => {
            if (!startTime) startTime = timestamp;
            const elapsed = timestamp - startTime;
            const progress = Math.min(elapsed / duration, 1);
            // Ease-out cubic
            const eased = 1 - Math.pow(1 - progress, 3);
            setCount(Math.round(eased * end));
            if (progress < 1) requestAnimationFrame(animate);
        };
        requestAnimationFrame(animate);
    }, [started, end, duration]);

    return <span ref={ref}>{count}{suffix}</span>;
}