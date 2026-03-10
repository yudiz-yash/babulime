"use client";

import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import styles from './Banner.module.scss';
import {
    slide1, slide2, slide3, slide4, slide5, slide6, slide7,
    slide8, slide9, slide10, slide11, slide12, slide13,
} from '@/assets';

const SLIDES = [
    { id: 1,  src: slide1  },
    { id: 2,  src: slide2  },
    { id: 3,  src: slide3  },
    { id: 4,  src: slide4  },
    { id: 5,  src: slide5  },
    { id: 6,  src: slide6  },
    { id: 7,  src: slide7  },
    { id: 8,  src: slide8  },
    { id: 9,  src: slide9  },
    { id: 10, src: slide10 },
    { id: 11, src: slide11 },
    { id: 12, src: slide12 },
    { id: 13, src: slide13 },
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
    return (
        <div className={styles.bannerWrapper}>
            <Slider {...slickSettings}>
                {SLIDES.map((slide) => (
                    <div key={slide.id}>
                        <div className={styles.slide}>
                            <img
                                src={slide.src.src}
                                alt={`Babu Lime slide ${slide.id}`}
                                className={styles.slideImg}
                            />
                            {/* subtle bottom gradient for blending */}
                            <div className={styles.bottomFade} />
                        </div>
                    </div>
                ))}
            </Slider>
        </div>
    );
}
