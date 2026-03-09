import styles from './Features.module.scss';
import { Target, Zap, Shield, Leaf } from 'lucide-react';
import AnimateIn from '@/components/AnimateIn';

const FEATURE_DATA = [
    {
        icon: <Target size={32} />,
        title: 'Precision Extraction',
        description: 'Advanced mining techniques yielding 99% pure grade calcium carbonate.'
    },
    {
        icon: <Shield size={32} />,
        title: 'Unmatched Quality',
        description: 'Rigorous multi-stage QA processes exceeding global industry standards.'
    },
    {
        icon: <Zap size={32} />,
        title: 'Rapid Distribution',
        description: 'Optimized logistics network ensuring on-time delivery worldwide.'
    },
    {
        icon: <Leaf size={32} />,
        title: 'Eco-Friendly',
        description: 'Commitment to sustainable practices and robust land reclamation.'
    }
];

export default function Features() {
    return (
        <section className="py-20 bg-gray-50">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">

                <AnimateIn animation="fade-up" delay={0} className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-extrabold text-gray-900 mb-4">Core Advantages</h2>
                    <p className="text-gray-600 max-w-2xl mx-auto text-lg">Why industry leaders choose Babu Lime for their most critical operations.</p>
                </AnimateIn>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {FEATURE_DATA.map((feature, idx) => (
                        <AnimateIn key={idx} animation="fade-up" delay={idx * 120}>
                            <div className={styles.featureCard}>
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
