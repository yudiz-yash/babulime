"use client";

import { useEffect, useState, Fragment } from 'react';
import styles from './Manufacturing.module.scss';
import { Layers, Droplets, Settings, Activity, Thermometer, Cpu } from 'lucide-react';
import AnimateIn from '@/components/AnimateIn';

const ICON_MAP = {
    Layers:      Layers,
    Droplets:    Droplets,
    Settings:    Settings,
    Activity:    Activity,
    Thermometer: Thermometer,
    Cpu:         Cpu,
};

const STATIC = {
    badge: 'MANUFACTURING EXCELLENCE',
    heading: 'Manufacturing Excellence',
    subDescription: 'All machinery fabricated using stainless steel for food safety compliance.',
    steps: [
        { icon: 'Layers',      title: 'Raw Material Selection',    desc: 'Careful selection of materials to ensure baseline quality before processing begins.' },
        { icon: 'Droplets',    title: 'Cleaning & Pre-Processing',  desc: 'Thorough removal of impurities and contaminants before main processing.' },
        { icon: 'Settings',    title: 'Ultra-Fine Grinding',        desc: 'Advanced ultra-fine grinding technology ensures uniform granulation and smooth texture.' },
        { icon: 'Activity',    title: 'Laboratory Testing',         desc: 'In-house testing of every batch for full quality assurance before dispatch.' },
        { icon: 'Thermometer', title: 'Hygienic Packing',           desc: 'Maintaining purity through careful, contamination-free handling and packing.' },
        { icon: 'Cpu',         title: 'Sealed Dispatch',            desc: 'Secure, tamper-proof dispatch ensuring product integrity from plant to shelf.' },
    ],
};

function StepCard({ step, num, delay }) {
    const Icon = ICON_MAP[step.icon] || Layers;
    return (
        <AnimateIn animation="fade-up" delay={delay}>
            <div className={styles.stepCard}>
                {/* Step number */}
                <div className={styles.stepNum}>{String(num).padStart(2, '0')}</div>

                {/* Icon */}
                <div className={styles.iconWrap}>
                    <Icon size={26} />
                </div>

                {/* Text */}
                <h3 className={styles.stepTitle}>{step.title}</h3>
                <p className={styles.stepDesc}>{step.desc}</p>

                {/* Bottom accent line */}
                <div className={styles.stepAccent} />
            </div>
        </AnimateIn>
    );
}

export default function Manufacturing() {
    const [data, setData] = useState(STATIC);

    useEffect(() => {
        fetch(`${process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000/api'}/settings/manufacturing`)
            .then(r => r.ok ? r.json() : null)
            .then(d => { if (d) setData(d); })
            .catch(() => {});
    }, []);

    const steps = data.steps || [];
    const row1 = steps.slice(0, 3);
    const row2 = steps.slice(3, 6);

    return (
        <section id="quality" className={styles.section}>
            <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">

                {/* Header */}
                <AnimateIn animation="fade-up" className={styles.header}>
                    <span className={styles.badge}>{data.badge}</span>
                    <h2 className={styles.heading}>{data.heading}</h2>
                    <p className={styles.subDesc}>{data.subDescription}</p>
                </AnimateIn>

                {/* ── Desktop snake pipeline ── */}
                <div className={styles.pipeline}>

                    {/* Row 1: steps 1 → 2 → 3 */}
                    <div className={styles.pipeRow}>
                        {row1.map((step, i) => (
                            <Fragment key={i}>
                                <div className={styles.pipeNode}>
                                    {/* node dot on the pipe */}
                                    <div className={styles.nodeDot}>
                                        <span>{i + 1}</span>
                                    </div>
                                    <StepCard step={step} num={i + 1} delay={i * 120} />
                                </div>
                                {i < 2 && (
                                    <div className={styles.hConnector}>
                                        <div className={styles.hLine} />
                                        <svg className={styles.hArrow} viewBox="0 0 24 24" fill="none">
                                            <path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                    </div>
                                )}
                            </Fragment>
                        ))}
                        {/* Right turn connector */}
                        <div className={styles.turnRight} />
                    </div>

                    {/* Row 2: steps 4 → 5 → 6, displayed right-to-left */}
                    <div className={`${styles.pipeRow} ${styles.pipeRowReverse}`}>
                        {/* Left turn connector */}
                        <div className={styles.turnLeft} />
                        {[...row2].reverse().map((step, i) => {
                            const realIdx = 2 - i; // 2,1,0 → num 6,5,4
                            return (
                                <Fragment key={i}>
                                    {i > 0 && (
                                        <div className={styles.hConnector}>
                                            <svg className={styles.hArrowLeft} viewBox="0 0 24 24" fill="none">
                                                <path d="M19 12H5M11 6l-6 6 6 6" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                                            </svg>
                                            <div className={styles.hLine} />
                                        </div>
                                    )}
                                    <div className={styles.pipeNode}>
                                        <div className={styles.nodeDot}>
                                            <span>{realIdx + 4}</span>
                                        </div>
                                        <StepCard step={step} num={realIdx + 4} delay={300 + realIdx * 120} />
                                    </div>
                                </Fragment>
                            );
                        })}
                    </div>
                </div>

                {/* ── Mobile vertical timeline ── */}
                <div className={styles.mobileTimeline}>
                    {steps.map((step, i) => {
                        const Icon = ICON_MAP[step.icon] || Layers;
                        return (
                            <AnimateIn key={i} animation="fade-up" delay={i * 80} className={styles.mobileStep}>
                                {/* Left: number + line */}
                                <div className={styles.mobileLeft}>
                                    <div className={styles.mobileNum}>{String(i + 1).padStart(2, '0')}</div>
                                    {i < steps.length - 1 && <div className={styles.mobileLine} />}
                                </div>
                                {/* Right: content */}
                                <div className={styles.mobileCard}>
                                    <div className={styles.mobileIcon}><Icon size={20} /></div>
                                    <div>
                                        <h3 className={styles.mobileTitle}>{step.title}</h3>
                                        <p className={styles.mobileDesc}>{step.desc}</p>
                                    </div>
                                </div>
                            </AnimateIn>
                        );
                    })}
                </div>

            </div>
        </section>
    );
}
