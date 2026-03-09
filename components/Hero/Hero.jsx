import styles from './Hero.module.scss';
import { ArrowRight, BarChart2, ShieldCheck, Award } from 'lucide-react';
import { hero } from '@/assets';
import AnimateIn from '@/components/AnimateIn';
import CountUp from '@/components/CountUp/CountUp';

export default function Hero() {
    return (
        <section className="relative overflow-hidden pt-20 pb-16 lg:pt-32 lg:pb-24">
            <div className="max-w-7xl mx-auto px-6 lg:px-8 grid lg:grid-cols-2 gap-12 items-center">

                {/* Left Side: Text and Stats */}
                <div className="flex flex-col space-y-8 z-10">
                    <AnimateIn animation="fade-up" delay={0} className="space-y-4">
                        <h1 className="text-4xl lg:text-5xl xl:text-6xl font-extrabold tracking-tight text-gray-900 leading-tight">
                            India's Trusted Authority in{' '}
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-purple-900 anim-shimmer-text">
                                Food-Grade
                            </span>{' '}
                            Natural White Lime Processing
                        </h1>
                        <p className="text-xl text-gray-600 max-w-lg leading-relaxed font-medium">
                            Delivering purity, precision and performance since 1985.
                        </p>
                        <p className="text-lg text-gray-500 max-w-lg">
                            Manufactured in Rajkot. Serving Gujarat. Expanding Pan-India.
                        </p>
                    </AnimateIn>

                    <AnimateIn animation="fade-up" delay={180} className="flex gap-4">
                        <button className="flex items-center gap-1 bg-gradient-to-r from-purple-600 to-purple-800 text-white px-8 py-4 rounded-full font-semibold hover:shadow-lg hover:shadow-purple-200 transition-all duration-300 hover:-translate-y-1 active:scale-95">
                            Discover More <ArrowRight size={20} />
                        </button>
                    </AnimateIn>

                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 pt-8">
                        {[
                            { icon: <Award size={24} />, end: 30, suffix: '+', label: 'Years' },
                            { icon: <ShieldCheck size={24} />, end: 80, suffix: 'k+', label: 'Retail Outlets' },
                            { icon: <BarChart2 size={24} />, end: 4000, suffix: '+', label: 'Wholesale Outlets' },
                            { icon: <ArrowRight size={24} />, end: 60, suffix: '+', label: 'Cities' },
                        ].map((stat, i) => (
                            <AnimateIn key={i} animation="scale-in" delay={300 + i * 100}>
                                <div className={styles.statCard}>
                                    <div className={styles.statIcon}>{stat.icon}</div>
                                    <p className={styles.statValue}>
                                        <CountUp end={stat.end} suffix={stat.suffix} />
                                    </p>
                                    <p className={styles.statLabel}>{stat.label}</p>
                                </div>
                            </AnimateIn>
                        ))}
                    </div>
                </div>

                {/* Right Side: Hero Visual — floats up/down */}
                <AnimateIn animation="fade-right" delay={200} className="relative z-10 lg:ml-auto">
                    <div className="mx-auto relative anim-float">
                        <img src={hero.src} alt="Hero" width={'100%'} height={'100%'} className='scale-150' />
                    </div>
                </AnimateIn>
            </div>
        </section>
    );
}
