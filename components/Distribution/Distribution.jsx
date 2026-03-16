import styles from './Distribution.module.scss';
import { Store, Map, TrendingUp } from 'lucide-react';
import AnimateIn from '@/components/AnimateIn';

export default function Distribution() {
    return (
        <section id="network" className="py-12 md:py-24 bg-gray-50 overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">

                {/* Left Side */}
                <AnimateIn animation="fade-left" delay={0} className="space-y-5 md:space-y-8">
                    <div>
                        <span className="text-purple-600 font-bold tracking-wider uppercase text-sm mb-2 block">DISTRIBUTION NETWORK</span>
                        <h2 className="text-3xl md:text-5xl font-extrabold text-gray-900 mb-6 leading-tight">
                            Strong Gujarat Presence. Expanding Pan-India.
                        </h2>
                        <p className="text-lg text-gray-600 leading-relaxed">
                            Ensuring dependable availability and consistent retailer support across India. We have built one of the strongest distribution networks in the lime category.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-6">
                        {[
                            { icon: <Store className="text-purple-600 flex-shrink-0" size={28} />, value: '80,000+', label: 'Retail Outlets', span: false },
                            { icon: <Map className="text-purple-600 flex-shrink-0" size={28} />, value: '60+', label: 'Cities', span: false },
                            { icon: <TrendingUp className="text-purple-600 flex-shrink-0" size={28} />, value: 'Growing', label: 'Pan-India Access — Dependable availability and consistent retailer support across India.', span: true },
                        ].map((stat, i) => (
                            <AnimateIn key={i} animation="fade-up" delay={i * 100} className={stat.span ? 'sm:col-span-2' : ''}>
                                <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex items-start gap-4 hover:border-purple-200 hover:shadow-md transition-all duration-300 h-full">
                                    {stat.icon}
                                    <div>
                                        <h4 className="font-bold text-gray-900 text-2xl mb-1">{stat.value}</h4>
                                        <p className="text-gray-500 text-sm font-medium">{stat.label}</p>
                                    </div>
                                </div>
                            </AnimateIn>
                        ))}
                    </div>
                </AnimateIn>

                {/* Right Side: Google Map */}
                <AnimateIn animation="fade-right" delay={150} className="relative">
                    <div className="rounded-3xl overflow-hidden shadow-xl border border-gray-100 w-full aspect-square">
                        <iframe
                            title="Babu Lime Location"
                            width="100%"
                            height="100%"
                            style={{ border: 0, display: 'block' }}
                            loading="lazy"
                            allowFullScreen
                            referrerPolicy="no-referrer-when-downgrade"
                            src="https://www.google.com/maps?q=22.319917062800005,70.84248014418061&z=15&output=embed"
                        />
                    </div>
                </AnimateIn>

            </div>
        </section>
    );
}
