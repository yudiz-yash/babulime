'use client';
import { useEffect, useRef, useState } from 'react';

/**
 * AnimateIn - scroll-triggered animation wrapper.
 * animation: 'fade-up' | 'fade-down' | 'fade-left' | 'fade-right' | 'scale-in' | 'fade-in'
 * delay: milliseconds before animation starts (for staggering)
 */
export default function AnimateIn({
    children,
    className = '',
    animation = 'fade-up',
    delay = 0,
    threshold = 0.12,
    as: Tag = 'div',
    style = {},
    ...props
}) {
    const ref = useRef(null);
    const [inView, setInView] = useState(false);

    useEffect(() => {
        const el = ref.current;
        if (!el) return;
        const obs = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setInView(true);
                    obs.disconnect();
                }
            },
            { threshold }
        );
        obs.observe(el);
        return () => obs.disconnect();
    }, [threshold]);

    return (
        <Tag
            ref={ref}
            className={`anim-${animation} ${inView ? 'in-view' : ''} ${className}`}
            style={{ animationDelay: `${delay}ms`, ...style }}
            {...props}
        >
            {children}
        </Tag>
    );
}