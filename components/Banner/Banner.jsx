"use client";

import { useEffect, useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import styles from './Banner.module.scss';
import { ArrowRight, Award, ShieldCheck, BarChart2, Store, Map, TrendingUp } from 'lucide-react';
import CountUp from '@/components/CountUp/CountUp';
import {
    slide1, slide2, slide3, slide4, slide5, slide6, slide7,
    slide8, slide9, slide10, slide11, slide12, slide13,
} from '@/assets';

const STATIC_SLIDES = [
    { id: 1,  imageUrl: slide1.src,  alt: 'Babu Lime slide 1' },
    { id: 2,  imageUrl: slide2.src,  alt: 'Babu Lime slide 2' },
    { id: 3,  imageUrl: slide3.src,  alt: 'Babu Lime slide 3' },
    { id: 4,  imageUrl: slide4.src,  alt: 'Babu Lime slide 4' },
    { id: 5,  imageUrl: slide5.src,  alt: 'Babu Lime slide 5' },
    { id: 6,  imageUrl: slide6.src,  alt: 'Babu Lime slide 6' },
    { id: 7,  imageUrl: slide7.src,  alt: 'Babu Lime slide 7' },
    { id: 8,  imageUrl: slide8.src,  alt: 'Babu Lime slide 8' },
    { id: 9,  imageUrl: slide9.src,  alt: 'Babu Lime slide 9' },
    { id: 10, imageUrl: slide10.src, alt: 'Babu Lime slide 10' },
    { id: 11, imageUrl: slide11.src, alt: 'Babu Lime slide 11' },
    { id: 12, imageUrl: slide12.src, alt: 'Babu Lime slide 12' },
    { id: 13, imageUrl: slide13.src, alt: 'Babu Lime slide 13' },
];

const STATIC_HERO = {
    title: "India's Trusted Authority in",
    titleHighlight: 'Food-Grade',
    titleEnd: 'Natural White Lime Processing',
    subtitle: 'Delivering purity, precision and performance since 1987.',
    tagline: 'Manufactured in Rajkot. Serving Gujarat. Expanding Pan-India.',
    buttonText: 'Discover More',
    stats: [
        { end: 30, suffix: '+',  label: 'Years'          },
        { end: 80, suffix: 'k+', label: 'Retail Outlets' },
        { end: 45, suffix: '+',  label: 'Tons/Day'       },
        { end: 60, suffix: '+',  label: 'Cities'         },
    ],
};

const STATIC_DIST = {
    badge: 'DISTRIBUTION NETWORK',
    heading: 'Strong Gujarat Presence.\nExpanding Pan-India.',
    description: 'One of the strongest lime distribution networks in India — ensuring dependable availability and consistent retailer support.',
    stats: [
        { icon: Store,       value: '80,000+', label: 'Retail Outlets'  },
        { icon: Map,         value: '60+',     label: 'Cities Covered'  },
        { icon: TrendingUp,  value: 'Growing', label: 'Pan-India Reach' },
    ],
    buttonText: 'Our Network',
};

const HERO_STAT_ICONS = [<Award size={18} />, <ShieldCheck size={18} />, <BarChart2 size={18} />, <ArrowRight size={18} />];

const slickSettings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 900,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4500,
    pauseOnHover: true,
    fade: true,
    cssEase: 'ease-in-out',
    dotsClass: `slick-dots ${styles.dots}`,
};

export default function Banner() {
    const [slides, setSlides] = useState(STATIC_SLIDES);
    const [hero,   setHero]   = useState(STATIC_HERO);
    const [dist,   setDist]   = useState(STATIC_DIST);
    const API = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000/api';

    useEffect(() => {
        fetch(`${API}/banner`)
            .then(r => r.ok ? r.json() : null)
            .then(d => { if (d && d.length > 0) setSlides(d); })
            .catch(() => {});

        fetch(`${API}/hero`)
            .then(r => r.ok ? r.json() : null)
            .then(d => { if (d) setHero(d); })
            .catch(() => {});

        fetch(`${API}/settings/distribution`)
            .then(r => r.ok ? r.json() : null)
            .then(d => { if (d) setDist(prev => ({ ...prev, ...d })); })
            .catch(() => {});
    }, []);

    // Build the combined slide list:
    // slot 0 = hero content slide (no image)
    // slot 1 = distribution content slide (no image)
    // slot 2+ = image slides from DB
    const allSlides = [
        { type: 'hero' },
        { type: 'distribution' },
        ...slides.map(s => ({ type: 'image', ...s })),
    ];

    return (
        <div className={styles.bannerWrapper}>
            <Slider {...slickSettings}>
                {allSlides.map((slide, i) => (
                    <div key={slide._id || slide.id || i}>
                        <div className={styles.slide}>

                            {/* ── Image slides (no overlay) ── */}
                            {slide.type === 'image' && (
                                <img
                                    src={slide.imageUrl}
                                    alt={slide.alt || `Babu Lime slide ${i - 1}`}
                                    className={styles.slideImg}
                                />
                            )}

                            {/* ── Content slides: gradient background ── */}
                            {slide.type !== 'image' && (
                                <div className={slide.type === 'hero' ? styles.heroBg : styles.distBg} />
                            )}

                            {/* ── Slide 0: Hero content ── */}
                            {slide.type === 'hero' && (
                                <div className={styles.heroOverlay}>
                                    <div className={styles.heroContent}>
                                        <h1 className={styles.heroTitle}>
                                            {hero.title}{' '}
                                            <span className={styles.heroHighlight}>{hero.titleHighlight}</span>{' '}
                                            {hero.titleEnd}
                                        </h1>
                                        <p className={styles.heroSubtitle}>{hero.subtitle}</p>
                                        <p className={styles.heroTagline}>{hero.tagline}</p>

                                        <button
                                            onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
                                            className={styles.heroBtn}
                                            style={{ pointerEvents: 'auto' }}
                                        >
                                            {hero.buttonText} <ArrowRight size={17} />
                                        </button>

                                        <div className={styles.statsRow}>
                                            {(hero.stats || []).map((stat, si) => (
                                                <div key={si} className={styles.statCard}>
                                                    <span className={styles.statIcon}>{HERO_STAT_ICONS[si % HERO_STAT_ICONS.length]}</span>
                                                    <span className={styles.statValue}>
                                                        <CountUp end={stat.end} suffix={stat.suffix} />
                                                    </span>
                                                    <span className={styles.statLabel}>{stat.label}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            )}

                            {/* ── Slide 1: Distribution content ── */}
                            {slide.type === 'distribution' && (
                                <div className={styles.distOverlay}>
                                    <div className={styles.distContent}>
                                        <span className={styles.distBadge}>{dist.badge}</span>
                                        <h2 className={styles.distHeading}>
                                            {(dist.heading || '').split('\n').map((line, li) => (
                                                <span key={li}>{line}{li === 0 && <br />}</span>
                                            ))}
                                        </h2>
                                        <p className={styles.distDesc}>{dist.description}</p>

                                        <div className={styles.distStats}>
                                            {(dist.stats || STATIC_DIST.stats).map((stat, si) => {
                                                const Icon = stat.icon || Store;
                                                return (
                                                    <div key={si} className={styles.distStatCard}>
                                                        <div className={styles.distStatIcon}><Icon size={22} /></div>
                                                        <div>
                                                            <span className={styles.distStatValue}>{stat.value}</span>
                                                            <span className={styles.distStatLabel}>{stat.label}</span>
                                                        </div>
                                                    </div>
                                                );
                                            })}
                                        </div>

                                        <button
                                            onClick={() => document.getElementById('network')?.scrollIntoView({ behavior: 'smooth' })}
                                            className={styles.distBtn}
                                            style={{ pointerEvents: 'auto' }}
                                        >
                                            {dist.buttonText || 'Our Network'} <ArrowRight size={17} />
                                        </button>
                                    </div>

                                    {/* Right: decorative network visual */}
                                    <div className={styles.distVisual}>
                                        <div className={styles.distRing1} />
                                        <div className={styles.distRing2} />
                                        <div className={styles.distRing3} />
                                        <div className={styles.distCenter}>
                                            <Map size={40} className={styles.distMapIcon} />
                                            <span>India</span>
                                        </div>
                                        {[
                                            { top: '12%', left: '28%' },
                                            { top: '28%', left: '72%' },
                                            { top: '60%', left: '18%' },
                                            { top: '68%', left: '65%' },
                                            { top: '82%', left: '42%' },
                                        ].map((pos, pi) => (
                                            <div key={pi} className={styles.distDot} style={pos} />
                                        ))}
                                    </div>
                                </div>
                            )}

                            <div className={styles.bottomFade} />
                        </div>
                    </div>
                ))}
            </Slider>
        </div>
    );
}
