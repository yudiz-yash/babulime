import styles from './TraditionTimeline.module.scss';
import { History, Compass, Globe } from 'lucide-react';

export default function TraditionTimeline() {
    return (
        <section className="py-24 bg-white relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">

                <div className="text-center mb-20">
                    <span className="text-purple-600 font-bold tracking-wider uppercase text-sm mb-2 block">Our Legacy</span>
                    <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">Rooted in Indian Tradition</h2>
                    <p className="text-gray-600 max-w-2xl mx-auto text-lg block">The use of natural lime has long been part of traditional Indian mouth freshener preparations across generations.</p>
                </div>

                <div className="relative">
                    {/* Horizontal Line Desktop */}
                    <div className="hidden md:block absolute top-[60px] left-0 w-full h-[2px] bg-gradient-to-r from-purple-100 via-purple-300 to-purple-100"></div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 text-center relative z-10">

                        {/* Milestone 1 */}
                        <div className={`flex flex-col items-center ${styles.milestone}`}>
                            <div className={`${styles.node} mb-6 flex items-center justify-center relative`}>
                                <div className="absolute inset-0 bg-purple-100 rounded-full animate-pulse opacity-50"></div>
                                <div className="bg-white rounded-full w-24 h-24 shadow-lg border-4 border-purple-50 flex flex-col items-center justify-center relative z-10 text-purple-700">
                                    <span className="text-2xl font-black">1985</span>
                                </div>
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-2">Rajkot, Gujarat</h3>
                            <p className="text-gray-600">Founded with a singular commitment to process and deliver natural white lime with taste and purity.</p>
                        </div>

                        {/* Milestone 2 */}
                        <div className={`flex flex-col items-center ${styles.milestone}`}>
                            <div className={`${styles.node} mb-6 flex items-center justify-center relative`}>
                                <div className="bg-white rounded-full w-24 h-24 shadow-lg border-4 border-purple-100 flex flex-col items-center justify-center relative z-10 text-purple-700">
                                    <span className="text-2xl font-black">Quality</span>
                                </div>
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-2">Precision Processing</h3>
                            <p className="text-gray-600">Integration of cutting-edge technology ensuring unmatched consistency and performance over the decades.</p>
                        </div>

                        {/* Milestone 3 */}
                        <div className={`flex flex-col items-center ${styles.milestone}`}>
                            <div className={`${styles.node} mb-6 flex items-center justify-center relative`}>
                                <div className="bg-purple-600 rounded-full w-24 h-24 shadow-xl border-4 border-purple-200 flex flex-col items-center justify-center relative z-10 text-white">
                                    <span className="text-2xl font-black">Today</span>
                                </div>
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-2">Pan-India Reach</h3>
                            <p className="text-gray-600">Serving 80,000+ retail outlets across Gujarat, with expanding presence nationwide.</p>
                        </div>

                    </div>
                </div>

            </div>
        </section>
    );
}
