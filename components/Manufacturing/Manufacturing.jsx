import styles from './Manufacturing.module.scss';
import { Layers, Droplets, Thermometer, Settings, Activity, Cpu } from 'lucide-react';
import AnimateIn from '@/components/AnimateIn';

const MFG_STEPS = [
    { icon: <Layers size={32} />, title: 'Raw Material Selection', desc: 'Careful selection of materials to ensure baseline quality.' },
    { icon: <Droplets size={32} />, title: 'Cleaning & Pre-Processing', desc: 'Removal of impurities before main processing.' },
    { icon: <Settings size={32} />, title: 'Ultra-Fine Processing and Filtering', desc: 'Advanced processing to achieve uniforms particle size.' },
    { icon: <Activity size={32} />, title: 'Laboratory Testing', desc: 'In-house testing of all batches for quality assurance.' },
    { icon: <Thermometer size={32} />, title: 'Hygienic Packing', desc: 'Maintaining purity through careful handling and packing.' },
    { icon: <Cpu size={32} />, title: 'Sealed Dispatch', desc: 'Secure dispatch to ensure product integrity intact.' }
];

export default function Manufacturing() {
    return (
        <section id="quality" className="py-24 bg-white">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">

                <AnimateIn animation="fade-up" delay={0} className="text-center mb-16">
                    <span className="text-purple-600 font-bold tracking-wider uppercase text-sm mb-2 block">MANUFACTURING EXCELLENCE</span>
                    <h2 className="text-3xl md:text-5xl font-extrabold text-gray-900 mb-4">Industrial Processing Excellence</h2>
                    <p className="text-gray-600 max-w-2xl mx-auto text-lg">Our facility in Rajkot operates under controlled industrial systems designed to ensure uniform processing and filtering, consistent quality, hygienic handling, and process transparency.</p>
                </AnimateIn>

                <div className="grid grid-cols-2 md:grid-cols-3 gap-8 lg:gap-12 mb-16">
                    {MFG_STEPS.map((step, idx) => (
                        <AnimateIn key={idx} animation="scale-in" delay={idx * 90}>
                            <div className={`${styles.mfgCard} text-center flex flex-col items-center`}>
                                <div className={`${styles.iconCircle} mb-6`}>
                                    <span className="font-bold text-xl text-purple-700">{String(idx + 1).padStart(2, '0')}</span>
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-3">{step.title}</h3>
                            </div>
                        </AnimateIn>
                    ))}
                </div>

                <AnimateIn animation="fade-up" delay={200}>
                    <div className="bg-gray-50 rounded-2xl p-8 lg:p-12 border border-gray-100">
                        <div className="grid md:grid-cols-2 gap-12 items-center">
                            <div>
                                <h3 className="text-2xl font-bold text-gray-900 mb-4">Quality & Compliance</h3>
                                <p className="text-gray-600 mb-6">Quality is non-negotiable. Continuous internal audits ensure standardization across all batches. Every product is laboratory tested before market release.</p>
                                <ul className="space-y-3 text-gray-700 font-medium">
                                    <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-purple-600"></div> FSSAI Regulations</li>
                                    <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-purple-600"></div> Good Manufacturing Practices (GMP)</li>
                                    <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-purple-600"></div> ISO-Certified Processes</li>
                                    <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-purple-600"></div> Internal Quality Assurance Protocols</li>
                                </ul>
                            </div>
                            <div className="space-y-6">
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
