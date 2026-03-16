import styles from './Features.module.scss';
import { Target, Zap, Shield, Leaf } from 'lucide-react';
import AnimateIn from '@/components/AnimateIn';

const FEATURE_DATA = [
    {
        icon: <Target size={32} />,
        title: 'Precision Processing',
        description: 'Advanced ultra-fine grinding technology ensures uniform granulation and smooth texture, delivering consistent product performance.'
    },
    {
        icon: <Shield size={32} />,
        title: '100% Food-Grade Integrity',
        description: 'No artificial coloring. No dilution. No adulteration. Every batch undergoes strict in-house quality testing before dispatch.'
    },
    {
        icon: <Zap size={32} />,
        title: 'Advanced Manufacturing',
        description: 'Fully automated plant with minimal manual handling, controlled environment and CCTV monitored processes for consistent quality.'
    },
    {
        icon: <Leaf size={32} />,
        title: 'Scale & Reliability',
        description: '45+ tons daily capacity. Strong Gujarat network. Expanding through national online marketplaces.'
    }
];

export default function Features() {
    return (
        <section className="py-10 md:py-20 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">

                <AnimateIn animation="fade-up" delay={0} className="text-center mb-8 md:mb-16">
                    <h2 className="text-3xl md:text-5xl font-extrabold text-gray-900 mb-4">Our Strengths</h2>
                    <p className="text-gray-600 max-w-2xl mx-auto text-lg">Why Industry Trusts Us</p>
                </AnimateIn>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8 items-stretch">
                    {FEATURE_DATA.map((feature, idx) => (
                        <AnimateIn key={idx} animation="fade-up" delay={idx * 120} className="h-full">
                            <div className={`${styles.featureCard} h-full`}>
                                <div className={styles.iconWrapper}>
                                    {feature.icon}
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                            </div>
                        </AnimateIn>
                    ))}
                </div>

            </div>
        </section>
    );
}
