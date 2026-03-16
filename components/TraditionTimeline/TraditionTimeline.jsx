import styles from './TraditionTimeline.module.scss';
import AnimateIn from '@/components/AnimateIn';

const MILESTONES = [
    {
        label: '1987',
        nodeBg: 'bg-white border-purple-50',
        nodeText: 'text-purple-700',
        pulse: true,
        title: 'Founded',
        desc: 'Babu Lime was founded in Rajkot with a singular mission — to honour India\'s paan tradition by delivering the purest food-grade lime.',
    },
    {
        label: 'Rajkot',
        nodeBg: 'bg-white border-purple-100',
        nodeText: 'text-purple-700',
        pulse: false,
        title: 'Gujarat, India',
        desc: 'What began at a single shop in Rajkot grew into a fully automated manufacturing facility combining traditional expertise with modern industrial systems.',
    },
    {
        label: 'Today',
        nodeBg: 'bg-purple-600 border-purple-200',
        nodeText: 'text-white',
        pulse: false,
        title: 'Pan-India Reach',
        desc: 'Serving over 80,000 retail outlets across India, with an expanding presence through national online marketplaces.',
    },
];

export default function TraditionTimeline() {
    return (
        <section className="py-12 md:py-24 bg-white relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">

                <AnimateIn animation="fade-up" delay={0} className="text-center mb-10 md:mb-20">
                    <span className="text-purple-600 font-bold tracking-wider uppercase text-sm mb-2 block">Our Legacy</span>
                    <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">Rooted In Indian Heritage</h2>
                    <p className="text-gray-600 max-w-2xl mx-auto text-lg">The art of paan preparation is deeply woven into India's cultural fabric — from roadside stalls to grand celebrations, it represents hospitality, craftsmanship and community.</p>
                </AnimateIn>

                <div className="relative">
                    {/* Animated horizontal line — desktop only */}
                    <AnimateIn
                        animation="draw-line"
                        threshold={0.3}
                        className="hidden md:block absolute top-[60px] left-0 h-[2px] bg-gradient-to-r from-purple-100 via-purple-400 to-purple-100"
                    />

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 text-center relative z-10">
                        {MILESTONES.map((m, i) => (
                            <AnimateIn key={i} animation="fade-up" delay={i * 160} className={`flex flex-col items-center ${styles.milestone}`}>
                                <div className={`${styles.node} mb-6 flex items-center justify-center relative`}>
                                    {m.pulse && (
                                        <div className="absolute inset-0 bg-purple-100 rounded-full animate-pulse opacity-50"></div>
                                    )}
                                    <div className={`rounded-full w-24 h-24 shadow-lg border-4 ${m.nodeBg} flex flex-col items-center justify-center relative z-10 ${m.nodeText}`}>
                                        <span className="text-2xl font-black">{m.label}</span>
                                    </div>
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-2">{m.title}</h3>
                                <p className="text-gray-600">{m.desc}</p>
                            </AnimateIn>
                        ))}
                    </div>
                </div>

            </div>
        </section>
    );
}
