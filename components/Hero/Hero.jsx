import styles from './Hero.module.scss';
import { ArrowRight, BarChart2, ShieldCheck, Award } from 'lucide-react';
import { hero } from '@/assets';
import Image from 'next/image';

export default function Hero() {
    return (
        <section className="relative overflow-hidden pt-20 pb-16 lg:pt-32 lg:pb-24">
            <div className="max-w-7xl mx-auto px-6 lg:px-8 grid lg:grid-cols-2 gap-12 items-center">

                {/* Left Side: Text and Stats */}
                <div className="flex flex-col space-y-8 z-10">
                    <div className="space-y-4">
                        <h1 className="text-4xl lg:text-5xl xl:text-6xl font-extrabold tracking-tight text-gray-900 leading-tight">
                            India’s Trusted Authority in <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-purple-900">Food-Grade</span> Natural White Lime Processing
                        </h1>
                        <p className="text-xl text-gray-600 max-w-lg leading-relaxed font-medium">
                            Delivering purity, precision and performance since 1985.
                        </p>
                        <p className="text-lg text-gray-500 max-w-lg">
                            Manufactured in Rajkot. Serving Gujarat. Expanding Pan-India.
                        </p>
                    </div>

                    <div className="flex gap-4">
                        <button className="flex items-center gap-1 bg-gradient-to-r from-purple-600 to-purple-800 text-white px-8 py-4 rounded-full font-semibold hover:shadow-lg transition-transform hover:-translate-y-1">
                            Discover More <ArrowRight size={20} />
                        </button>
                    </div>

                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 pt-8">
                        <div className={styles.statCard}>
                            <div className={styles.statIcon}><Award size={24} /></div>
                            <p className={styles.statValue}>30+</p>
                            <p className={styles.statLabel}>Years</p>
                        </div>
                        <div className={styles.statCard}>
                            <div className={styles.statIcon}><ShieldCheck size={24} /></div>
                            <p className={styles.statValue}>80k+</p>
                            <p className={styles.statLabel}>Retail Outlets</p>
                        </div>
                        <div className={styles.statCard}>
                            <div className={styles.statIcon}><BarChart2 size={24} /></div>
                            <p className={styles.statValue}>4000+</p>
                            <p className={styles.statLabel}>Wholesale Outlets</p>
                        </div>
                        <div className={styles.statCard}>
                            <div className={styles.statIcon}><ArrowRight size={24} /></div>
                            <p className={styles.statValue}>60+</p>
                            <p className={styles.statLabel}>Cities</p>
                        </div>
                    </div>
                </div>

                {/* Right Side: Hero Visual */}
                <div className="relative z-10 lg:ml-auto">
                    <div className={`mx-auto relative`}>
                        <img src={hero.src} alt="Hero" width={'100%'} height={'100%'} className='scale-150' />
                    </div>
                </div>
            </div>
        </section>
    );
}
