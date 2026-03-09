import styles from './Compliance.module.scss';
import { Award, ShieldCheck, CheckSquare, FileText } from 'lucide-react';

const CERTS = [
    { icon: <Award size={40} />, title: 'FSSAI Certified', desc: 'Food safety compliant for food-grade calcium uses.' },
    { icon: <ShieldCheck size={40} />, title: 'GMP Certified', desc: 'Good Manufacturing Practices stringently followed.' },
    { icon: <FileText size={40} />, title: 'ISO 9001:2015', desc: 'Internationally recognized quality management systems.' },
    { icon: <CheckSquare size={40} />, title: 'Internal QA', desc: 'Proprietary multi-tier testing surpassing benchmarks.' }
];

export default function Compliance() {
    return (
        <section id="quality" className="py-24 bg-white">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">

                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-extrabold text-gray-900 mb-4">Quality & Compliance</h2>
                    <p className="text-gray-600 max-w-2xl mx-auto text-lg">Independently verified excellence you can rely on.</p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {CERTS.map((cert, idx) => (
                        <div key={idx} className={`${styles.certCard} flex flex-col items-center text-center p-8 bg-gray-50 rounded-2xl border border-gray-100`}>
                            <div className={`${styles.badge} mb-6 text-purple-700 bg-purple-100 p-4 rounded-2xl`}>
                                {cert.icon}
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-3">{cert.title}</h3>
                            <p className="text-gray-600 leading-relaxed text-sm">{cert.desc}</p>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}
