"use client";

import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import styles from './Banner.module.scss';

// Placeholder slides — replace src values with your actual images later
const SLIDES = [
    {
        id: 1,
        src: null, // replace with your image path, e.g. '/images/banner1.jpg'
        alt: 'Babu Lime — Banner 1',
        heading: "India's Finest Food-Grade White Lime",
        sub: 'Purity. Precision. Performance.',
    },
    {
        id: 2,
        src: null,
        alt: 'Babu Lime — Banner 2',
        heading: 'Trusted Since 1985',
        sub: '80,000+ Retail Outlets Across Gujarat',
    },
    {
        id: 3,
        src: null,
        alt: 'Babu Lime — Banner 3',
        heading: 'Expanding Pan-India',
        sub: 'From Rajkot to the Nation',
    },
];

const slickSettings = {
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4500,
    pauseOnHover: true,
    arrows: true,
    fade: true,
    cssEase: 'ease-in-out',
};

export default function Banner() {
    return (
        <div className={styles.bannerWrapper}>
            <Slider {...slickSettings}>
                {SLIDES.map((slide) => (
                    <div key={slide.id} className={styles.slide}>
                        {/* Background — swap the gradient for an <img> once you have images */}
                        {slide.src ? (
                            <img
                                src={slide.src}
                                alt={slide.alt}
                                className={styles.slideImg}
                            />
                        ) : (
                            <div className={styles.slidePlaceholder} />
                        )}

                        {/* Overlay text */}
                        <div className={styles.overlay}>
                            <div className={styles.textBox}>
                                <h2 className={styles.heading}>{slide.heading}</h2>
                                <p className={styles.sub}>{slide.sub}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </Slider>
        </div>
    );
}
