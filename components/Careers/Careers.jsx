import styles from './Careers.module.scss';
import { Briefcase, ArrowRight, CheckCircle2 } from 'lucide-react';
import AnimateIn from '@/components/AnimateIn';

const POSITIONS = [
    { id: 1, title: 'Production Supervisor', location: 'Rajkot', type: 'Full-time' },
    { id: 2, title: 'Quality Analyst', location: 'Rajkot', type: 'Full-time' },
    { id: 3, title: 'Sales Executive', location: 'Gujarat Region', type: 'Full-time' },
    { id: 4, title: 'Packaging Machine Operator', location: 'Rajkot', type: 'Full-time' },
];

const VALUES = [
    'Integrity', 'Continuous Learning', 'Performance Recognition', 'Team Collaboration'
];

export default function Careers() {
    return (
        <section className="py-24 bg-gray-50">
            <div className="max-w-7xl mx-auto px-6 lg:px-8 grid lg:grid-cols-2 gap-16 items-start">

                {/* Left Side: Info */}
                <AnimateIn animation="fade-left" delay={0}>
                    <span className="text-purple-600 font-bold tracking-wider uppercase text-sm mb-2 block">CAREERS</span>
                    <h2 className="text-3xl md:text-5xl font-extrabold text-gray-900 mb-6 leading-tight">
                        Build Your Career With Us
                    </h2>
                    <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                        We believe in structured growth, disciplined operations and long-term team development. Join our experienced technical team and be part of India&apos;s trusted authority in lime processing.
                    </p>

                    <h3 className="text-xl font-bold text-gray-900 mb-4">What We Value</h3>
                    <div className="grid grid-cols-2 gap-4 mb-12">
                        {VALUES.map((val, i) => (
                            <AnimateIn key={val} animation="fade-up" delay={i * 70} className="flex items-center gap-2">
                                <CheckCircle2 className="text-purple-600 flex-shrink-0" size={20} />
                                <span className="text-gray-700 font-medium">{val}</span>
                            </AnimateIn>
                        ))}
                    </div>

                    <AnimateIn animation="scale-in" delay={300}>
                        <div className="bg-white p-8 rounded-2xl shadow-sm border border-purple-100">
                            <h3 className="text-xl font-bold text-gray-900 mb-2">Send Your Resume</h3>
                            <p className="text-gray-600 mb-6">Drop us an email with your updated CV to apply for any open position.</p>
                            <a href="mailto:babulimepvtltd87@gmail.com" className="inline-flex items-center gap-2 bg-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-purple-700 hover:-translate-y-0.5 transition-all duration-200 active:scale-95">
                                <Briefcase size={20} /> babulimepvtltd87@gmail.com
                            </a>
                        </div>
                    </AnimateIn>
                </AnimateIn>

                {/* Right Side: Open Positions */}
                <AnimateIn animation="fade-right" delay={150}>
                    <div className="bg-white rounded-3xl p-8 border border-gray-100 shadow-xl">
                        <h3 className="text-2xl font-bold text-gray-900 mb-6">Open Positions</h3>
                        <div className="space-y-4">
                            {POSITIONS.map((pos, i) => (
                                <AnimateIn key={pos.id} animation="fade-up" delay={i * 80}>
                                    <div className="group border border-gray-100 p-6 rounded-2xl hover:border-purple-200 hover:bg-purple-50 transition-all duration-300 flex flex-col sm:flex-row sm:items-center justify-between gap-4 cursor-pointer hover:shadow-sm">
                                        <div>
                                            <h4 className="font-bold text-lg text-gray-900 group-hover:text-purple-700 transition-colors">{pos.title}</h4>
                                            <div className="flex items-center gap-3 mt-2 text-sm text-gray-500">
                                                <span className="bg-gray-100 px-3 py-1 rounded-full">{pos.location}</span>
                                                <span className="bg-gray-100 px-3 py-1 rounded-full">{pos.type}</span>
                                            </div>
                                        </div>
                                        <div className="text-purple-600 opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:translate-x-1">
                                            <ArrowRight size={24} />
                                        </div>
                                    </div>
                                </AnimateIn>
                            ))}
                        </div>
                    </div>
                </AnimateIn>

            </div>
        </section>
    );
}
