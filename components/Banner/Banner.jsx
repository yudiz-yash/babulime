"use client";

import { useEffect, useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import styles from './Banner.module.scss';
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

const slickSettings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 900,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    pauseOnHover: true,
    fade: true,
    cssEase: 'ease-in-out',
    dotsClass: `slick-dots ${styles.dots}`,
};

export default function Banner() {
    const [slides, setSlides] = useState(STATIC_SLIDES);

    useEffect(() => {
        fetch(`${process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000/api'}/banner`)
            .then(r => r.ok ? r.json() : null)
            .then(d => { if (d && d.length > 0) setSlides(d); })
            .catch(() => {});
    }, []);

    return (
        <div className={styles.bannerWrapper}>
            <Slider {...slickSettings}>
                {slides.map((slide, i) => (
                    <div key={slide._id || slide.id || i}>
                        <div className={styles.slide}>
                            <img
                                src={slide.imageUrl}
                                alt={slide.alt || `Babu Lime slide ${i + 1}`}
                                className={styles.slideImg}
                            />
                            <div className={styles.bottomFade} />
                        </div>
                    </div>
                ))}
            </Slider>
        </div>
    );
}
