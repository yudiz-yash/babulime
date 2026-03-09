import styles from './About.module.scss';
import { CheckCircle2 } from 'lucide-react';
import { about } from '@/assets';
import AnimateIn from '@/components/AnimateIn';

const CHECK_ITEMS = [
    'Stainless Steel Processing Infrastructure',
    'In-House Ultra-Modern Laboratory',
    'Automated Packaging and Processing Systems',
    'Batch Control & Traceability Protocols',
];

export default function About() {
    return (
        <section id="about" className="py-24 bg-white">
            <div className="max-w-7xl mx-auto px-6 lg:px-8 grid lg:grid-cols-2 gap-16 items-center">

                {/* Left Side: Content */}
                <AnimateIn animation="fade-left" delay={0} className="order-2 lg:order-1 space-y-8">
                    <div>
                        <span className="text-purple-600 font-bold tracking-wider uppercase text-sm mb-2 block">ABOUT BABU LIME</span>
                        <h2 className="text-3xl lg:text-4xl font-extrabold text-gray-900 leading-tight">
                            Three Decades of Trust. One Standard of Purity.
                        </h2>
                    </div>

                    <div className="space-y-4 text-gray-600 leading-relaxed">
                        <p>Established in 1985, Babu Lime Pvt Ltd is recognized as a leading processor of food additive natural white lime in India.</p>
                        <p>The company has built one of Gujarat's strongest distribution networks in the lime category, supported by structured supply systems and consistent product performance.</p>
                        <p>From our fully automated manufacturing facility in Rajkot, Gujarat, we combine traditional expertise with modern industrial systems to ensure purity, taste and reliable supply at scale.</p>
                    </div>

                    <div className="flex flex-col gap-4">
                        {CHECK_ITEMS.map((item, i) => (
                            <AnimateIn key={i} animation="fade-up" delay={i * 90} className="flex items-start gap-3">
                                <CheckCircle2 className="text-purple-500 mt-1 flex-shrink-0" size={20} />
                                <h4 className="font-bold text-gray-900">{item}</h4>
                            </AnimateIn>
                        ))}
                    </div>

                    <AnimateIn animation="scale-in" delay={450}>
                        <div className={`mt-8 ${styles.statsBadge} inline-flex items-center gap-4 px-6 py-4`}>
                            <div className="text-3xl font-extrabold text-purple-700">80K+</div>
                            <div className="text-gray-700 font-medium text-sm leading-tight">
                                Retail Outlets<br />Across Gujarat
                            </div>
                        </div>
                    </AnimateIn>
                </AnimateIn>

                {/* Right Side: Image */}
                <AnimateIn animation="fade-right" delay={120} className="order-1 lg:order-2">
                    <div className={`${styles.imageWrapper}`}>
                        <img src={about.src} alt="about" className="w-full h-full object-cover" width={500} height={500} />
                        <div className={styles.decorationSquare}></div>
                    </div>
                </AnimateIn>
            </div>
        </section>
    );
}
