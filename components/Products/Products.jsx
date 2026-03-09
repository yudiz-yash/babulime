import styles from './Products.module.scss';
import { ArrowRight } from 'lucide-react';
import AnimateIn from '@/components/AnimateIn';

const PRODUCT_DATA = [
    { id: 1, title: 'Medium | Ghatta | Achha Safed', category: 'Parcel Range', desc: 'Retail pouches, bulk bags & institutional formats.' },
    { id: 2, title: '150g | 750g | 1kg | 5kg | 18kg | 20kg', category: 'Chunna Paste Range', desc: 'From small retail packs to bulk buckets. Retail and institutional configurations.' },
    { id: 3, title: 'Sample & Institutional Packs', category: 'Institutional Packs', desc: 'Structured solutions explicitly designed for supply chain efficiency.' },
    { id: 4, title: 'Bottle & Pan Kit', category: 'Retail Kits', desc: 'Retail-focused packaging designed for convenience and optimal shelf visibility.' }
];

export default function Products() {
    return (
        <section id="products" className="py-24 bg-gray-50 border-y border-gray-100">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">

                <AnimateIn animation="fade-up" delay={0} className="flex flex-col md:flex-row md:items-end justify-between mb-16">
                    <div className="max-w-xl">
                        <span className="text-purple-600 font-bold tracking-wider uppercase text-sm mb-2 block">PRODUCT PORTFOLIO</span>
                        <h2 className="text-3xl md:text-5xl font-extrabold text-gray-900 mb-4">Product Categories</h2>
                        <p className="text-gray-600 text-lg">Specialized formats catering to distinct retail and institutional needs.</p>
                    </div>
                </AnimateIn>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
                    {PRODUCT_DATA.map((prod, i) => (
                        <AnimateIn key={prod.id} animation="fade-up" delay={i * 130}>
                            <div className={`${styles.productCard} group relative overflow-hidden bg-white rounded-2xl shadow-sm border border-gray-100 h-full`}>
                                <div className="aspect-[16/9] w-full bg-gray-100 relative overflow-hidden">
                                    <div className="absolute inset-0 bg-gradient-to-tr from-purple-100/50 to-gray-50 flex items-center justify-center text-gray-400 font-medium">
                                        Product Image Placeholder
                                    </div>
                                    <div className="absolute inset-0 bg-purple-900/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                </div>
                                <div className="p-8 relative bg-white">
                                    <span className="bg-purple-50 text-purple-700 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide mb-4 inline-block">
                                        {prod.category}
                                    </span>
                                    <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-purple-700 transition-colors">
                                        {prod.category}
                                    </h3>
                                    <p className="text-gray-700 font-medium mb-2">{prod.title}</p>
                                    <p className="text-gray-500 text-sm leading-relaxed mb-6">{prod.desc}</p>
                                    <button className="flex items-center gap-2 text-purple-600 font-medium hover:text-purple-800 transition-colors">
                                        Learn more <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                                    </button>
                                </div>
                            </div>
                        </AnimateIn>
                    ))}
                </div>

            </div>
        </section>
    );
}
