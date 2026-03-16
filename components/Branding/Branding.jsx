import styles from './Branding.module.scss';
import { Newspaper, Trophy, Store, Megaphone, Users, Award } from 'lucide-react';
import AnimateIn from '@/components/AnimateIn';
import { cat11, cat75, cat76, cat73 } from '@/assets';

const SHOWCASE_ITEMS = [
    { id: 1, icon: <Newspaper size={28} />, title: 'Press', desc: 'Featured in Gujarat Samachar — recognized for 30 years of excellence in food-grade processing.' },
    { id: 2, icon: <Trophy size={28} />, title: 'Sports', desc: 'Official branding partner at national-level cricket events across Gujarat.' },
    { id: 3, icon: <Store size={28} />, title: 'Retail', desc: '80,000+ branded retail points with consistent signage, displays and packaging.' },
    { id: 4, icon: <Award size={28} />, title: 'Awards', desc: 'Honored for quality standards, manufacturing excellence and business growth.' },
    { id: 5, icon: <Megaphone size={28} />, title: 'Print Media', desc: 'Regional and national print advertising reinforcing category leadership.' },
    { id: 6, icon: <Users size={28} />, title: 'Events', desc: 'Active presence at food industry trade shows, community fairs and cultural events.' }
];

export default function Branding() {
    return (
        <section className="py-12 md:py-24 bg-white border-y border-gray-100">
            <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">

                <AnimateIn animation="fade-up" delay={0} className="text-center mb-8 md:mb-16 max-w-3xl mx-auto">
                    <span className="text-purple-600 font-bold tracking-wider uppercase text-sm mb-2 block">Brand Showcase</span>
                    <h2 className="text-3xl md:text-5xl font-extrabold text-gray-900 mb-6">Media & Branding</h2>
                    <p className="text-lg text-gray-600">From newspaper features to national cricket sponsorships — our brand story at a glance.</p>
                </AnimateIn>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8">
                    {SHOWCASE_ITEMS.map((item, i) => (
                        <AnimateIn key={item.id} animation="scale-in" delay={i * 100}>
                            <div className="bg-gray-50 border border-gray-100 p-5 md:p-8 rounded-2xl hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group h-full">
                                <div className="w-14 h-14 bg-purple-100 text-purple-700 flex items-center justify-center rounded-xl mb-6 group-hover:scale-110 group-hover:bg-purple-600 group-hover:text-white transition-all duration-300">
                                    {item.icon}
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
                                <p className="text-gray-600 leading-relaxed">{item.desc}</p>
                            </div>
                        </AnimateIn>
                    ))}
                </div>

                <div className="mt-8 md:mt-16 grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
                    {[cat11, cat75, cat76, cat73].map((img, i) => (
                        <AnimateIn key={i} animation="fade-up" delay={i * 80}>
                            <div className="aspect-square rounded-xl overflow-hidden border border-gray-200 hover:border-purple-300 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 group">
                                <img
                                    src={img.src}
                                    alt={`Gallery ${i + 1}`}
                                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-400"
                                />
                            </div>
                        </AnimateIn>
                    ))}
                </div>

            </div>
        </section>
    );
}
