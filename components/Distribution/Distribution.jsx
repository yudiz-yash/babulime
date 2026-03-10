import styles from './Distribution.module.scss';
import { MapPin, Store, Building2, Map } from 'lucide-react';
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
                            { icon: <Building2 className="text-purple-600 flex-shrink-0" size={28} />, value: '4000+', label: 'Wholesale Outlets', span: false },
                            { icon: <Map className="text-purple-600 flex-shrink-0" size={28} />, value: '60+ Cities', label: 'From regional recognition to large-scale retail branding, Babu Lime maintains strong market visibility nationwide.', span: true },
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

                {/* Right Side Map Visual */}
                <AnimateIn animation="fade-right" delay={150} className="relative">
                    <div className={`${styles.mapCard} bg-white rounded-3xl p-8 shadow-xl border border-gray-100 w-full aspect-square relative overflow-hidden flex items-center justify-center`}>
                        <div className="absolute inset-0 bg-gradient-to-br from-purple-50/50 to-white"></div>

                        <div className="relative z-10 text-center">
                            <div className="w-24 h-24 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-6 text-purple-600 shadow-inner anim-pulse-glow">
                                <MapPin size={40} />
                            </div>
                            <h3 className="text-2xl font-bold text-gray-800 mb-2">Pan-India Reach</h3>
                            <p className="text-gray-500 max-w-xs mx-auto">Strategically expanding through national platforms like Amazon and Flipkart.</p>
                        </div>

                        {/* Pulsing Nodes */}
                        <div className="absolute top-1/4 left-1/4 w-3 h-3 bg-purple-500 rounded-full animate-ping"></div>
                        <div className="absolute top-1/2 right-1/4 w-3 h-3 bg-purple-600 rounded-full animate-ping" style={{ animationDelay: '0.5s' }}></div>
                        <div className="absolute bottom-1/3 left-1/3 w-3 h-3 bg-purple-400 rounded-full animate-ping" style={{ animationDelay: '1s' }}></div>
                    </div>
                </AnimateIn>

            </div>
        </section>
    );
}
