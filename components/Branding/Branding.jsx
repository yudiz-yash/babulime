import styles from './Branding.module.scss';
import { Newspaper, Trophy, Store, Megaphone, Users } from 'lucide-react';

const SHOWCASE_ITEMS = [
    { id: 1, icon: <Newspaper size={28} />, title: 'Media Coverage', desc: 'Featured in regional publications including Gujarat Samachar.' },
    { id: 2, icon: <Trophy size={28} />, title: 'Sports Sponsorships', desc: 'Brand presence in regional and national-level cricket tournaments across Gujarat.' },
    { id: 3, icon: <Store size={28} />, title: 'Retail Branding', desc: '80,000+ branded retail points with signage, packaging and point-of-sale displays.' },
    { id: 4, icon: <Megaphone size={28} />, title: 'Print Campaigns', desc: 'Regional and national print advertising reinforcing category leadership.' },
    { id: 5, icon: <Users size={28} />, title: 'Community Events', desc: 'Active participation in food industry exhibitions and community events.' }
];

export default function Branding() {
    return (
        <section className="py-24 bg-white border-y border-gray-100">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">

                <div className="text-center mb-16 max-w-3xl mx-auto">
                    <span className="text-purple-600 font-bold tracking-wider uppercase text-sm mb-2 block">Brand Showcase</span>
                    <h2 className="text-3xl md:text-5xl font-extrabold text-gray-900 mb-6">Market Visibility</h2>
                    <p className="text-lg text-gray-600">From regional recognition to large-scale retail branding, Babu Lime maintains strong market visibility through varied channels.</p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {SHOWCASE_ITEMS.map((item) => (
                        <div key={item.id} className="bg-gray-50 border border-gray-100 p-8 rounded-2xl hover:shadow-lg transition-transform hover:-translate-y-1 group">
                            <div className="w-14 h-14 bg-purple-100 text-purple-700 flex items-center justify-center rounded-xl mb-6 group-hover:scale-110 transition-transform">
                                {item.icon}
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
                            <p className="text-gray-600 leading-relaxed">{item.desc}</p>
                        </div>
                    ))}
                </div>

                <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4">
                    {/* Image placeholders for gallery */}
                    {[1, 2, 3, 4].map(i => (
                        <div key={i} className="aspect-square bg-gray-100 rounded-xl flex items-center justify-center border border-gray-200 text-gray-400">
                            Gallery Image {i}
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}
