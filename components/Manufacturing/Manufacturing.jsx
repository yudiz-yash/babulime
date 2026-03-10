import styles from './Manufacturing.module.scss';
import { Layers, Droplets, Settings, Activity, Thermometer, Cpu } from 'lucide-react';
import AnimateIn from '@/components/AnimateIn';

const MFG_STEPS = [
    { icon: <Layers size={28} />, title: 'Raw Material Selection', desc: 'Careful selection of materials to ensure baseline quality before processing begins.' },
    { icon: <Droplets size={28} />, title: 'Cleaning & Pre-Processing', desc: 'Thorough removal of impurities and contaminants before main processing.' },
    { icon: <Settings size={28} />, title: 'Ultra-Fine Processing & Filtering', desc: 'Advanced processing to achieve uniform and consistent particle size throughout.' },
    { icon: <Activity size={28} />, title: 'Laboratory Testing', desc: 'In-house testing of every batch for full quality assurance before dispatch.' },
    { icon: <Thermometer size={28} />, title: 'Hygienic Packing', desc: 'Maintaining purity through careful, contamination-free handling and packing.' },
    { icon: <Cpu size={28} />, title: 'Sealed Dispatch', desc: 'Secure, tamper-proof dispatch ensuring product integrity from plant to shelf.' },
];

export default function Manufacturing() {
    return (
        <section id="quality" className="py-12 md:py-24 bg-white">
            <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">

                <AnimateIn animation="fade-up" delay={0} className="text-center mb-8 md:mb-16">
                    <span className="text-purple-600 font-bold tracking-wider uppercase text-sm mb-2 block">MANUFACTURING EXCELLENCE</span>
                    <h2 className="text-3xl md:text-5xl font-extrabold text-gray-900 mb-4">Industrial Processing Excellence</h2>
                    <p className="text-gray-600 max-w-2xl mx-auto text-lg">Our facility in Rajkot operates under controlled industrial systems designed to ensure uniform processing, consistent quality, hygienic handling, and full process transparency.</p>
                </AnimateIn>

                {/* Steps grid */}
                <div className={styles.stepsGrid}>
                    {MFG_STEPS.map((step, idx) => (
                        <AnimateIn key={idx} animation="fade-up" delay={idx * 100}>
                            <div className={styles.stepCard}>
                                {/* Step number badge */}
                                <div className={styles.stepBadge}>
                                    {String(idx + 1).padStart(2, '0')}
                                </div>

                                {/* Icon */}
                                <div className={styles.iconBox}>
                                    {step.icon}
                                </div>

                                {/* Text */}
                                <h3 className={styles.stepTitle}>{step.title}</h3>
                                <p className={styles.stepDesc}>{step.desc}</p>

                                {/* Connector arrow — hidden on last of each row & overall last */}
                                {idx !== MFG_STEPS.length - 1 && (
                                    <div className={`${styles.connector} ${(idx + 1) % 3 === 0 ? styles.connectorHidden : ''}`}>
                                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                            <path d="M5 12h14M13 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                    </div>
                                )}
                            </div>
                        </AnimateIn>
                    ))}
                </div>

                {/* Quality & Compliance block */}
                <AnimateIn animation="fade-up" delay={200}>
                    <div className="bg-gray-50 rounded-2xl p-5 md:p-8 lg:p-12 border border-gray-100 mt-6">
                        <div className="grid md:grid-cols-2 gap-6 md:gap-12 items-center">
                            <div>
                                <h3 className="text-2xl font-bold text-gray-900 mb-4">Quality & Compliance</h3>
                                <p className="text-gray-600 mb-6">Quality is non-negotiable. Continuous internal audits ensure standardization across all batches. Every product is laboratory tested before market release.</p>
                                <ul className="space-y-3 text-gray-700 font-medium">
                                    {['FSSAI Regulations', 'Good Manufacturing Practices (GMP)', 'ISO-Certified Processes', 'Internal Quality Assurance Protocols'].map(item => (
                                        <li key={item} className="flex items-center gap-3">
                                            <div className="w-2 h-2 rounded-full bg-purple-600 flex-shrink-0"></div>
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div>
                                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                                    <h4 className="font-bold text-gray-900 mb-2">Infrastructure Highlights</h4>
                                    <p className="text-sm text-gray-600 leading-relaxed">
                                        All processing machinery is fabricated using stainless steel for food safety compliance and durability. Our plant operates under controlled industrial protocols designed for consistency, hygiene and operational efficiency.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </AnimateIn>

            </div>
        </section>
    );
}
