import styles from './TraditionTimeline.module.scss';
import AnimateIn from '@/components/AnimateIn';

const MILESTONES = [
    {
        label: '1985',
        nodeBg: 'bg-white border-purple-50',
        nodeText: 'text-purple-700',
        pulse: true,
        title: 'Rajkot, Gujarat',
        desc: 'Founded with a singular commitment to process and deliver natural white lime with taste and purity.',
    },
    {
        label: 'Quality',
        nodeBg: 'bg-white border-purple-100',
        nodeText: 'text-purple-700',
        pulse: false,
        title: 'Precision Processing',
        desc: 'Integration of cutting-edge technology ensuring unmatched consistency and performance over the decades.',
    },
    {
        label: 'Today',
        nodeBg: 'bg-purple-600 border-purple-200',
        nodeText: 'text-white',
        pulse: false,
        title: 'Pan-India Reach',
        desc: 'Serving 80,000+ retail outlets across Gujarat, with expanding presence nationwide.',
    },
];

export default function TraditionTimeline() {
    return (
        <section className="py-24 bg-white relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">

                <AnimateIn animation="fade-up" delay={0} className="text-center mb-20">
                    <span className="text-purple-600 font-bold tracking-wider uppercase text-sm mb-2 block">Our Legacy</span>
                    <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">Rooted in Indian Tradition</h2>
                    <p className="text-gray-600 max-w-2xl mx-auto text-lg">The use of natural lime has long been part of traditional Indian mouth freshener preparations across generations.</p>
                </AnimateIn>

                <div className="relative">
                    {/* Animated horizontal line — desktop only */}
                    <AnimateIn
                        animation="draw-line"
                        threshold={0.3}
                        className="hidden md:block absolute top-[60px] left-0 h-[2px] bg-gradient-to-r from-purple-100 via-purple-400 to-purple-100"
                    />

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 text-center relative z-10">
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
