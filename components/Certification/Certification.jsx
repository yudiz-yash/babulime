import styles from './Certification.module.scss';
import AnimateIn from '@/components/AnimateIn';
import { ShieldCheck } from 'lucide-react';
import fssai from '@/assets/images/FSSAI-Number.png';
import isoCert from '@/assets/images/iso-certificate-final.png';

const CERT_IMAGES = [
    { id: 1, src: fssai.src,   alt: 'FSSAI Certification',    label: 'FSSAI Certified' },
    { id: 2, src: isoCert.src, alt: 'ISO 9001:2015 Certificate', label: 'ISO 9001:2015 Certified' },
];

export default function Certification() {
    return (
        <section id="certification" className={styles.section}>
            <div className="max-w-7xl mx-auto px-6 lg:px-8">

                {/* Header */}
                <AnimateIn animation="fade-up" className="text-center mb-8 md:mb-14">
                    <div className={styles.badgeRow}>
                        <div className={styles.iconBadge}>
                            <ShieldCheck size={22} />
                        </div>
                        <span className={styles.eyebrow}>CERTIFICATION</span>
                    </div>
                    <h2 className="text-3xl md:text-5xl font-extrabold text-gray-900 mt-4 mb-5">
                        ISO Certified Excellence
                    </h2>
                    <p className="text-gray-600 max-w-2xl mx-auto text-lg leading-relaxed">
                        When it comes to Quality there is no compromise, following all standards and good manufacturing practices.
                    </p>
                </AnimateIn>

                {/* Certificate images */}
                <div className={styles.certsGrid}>
                    {CERT_IMAGES.map((cert, i) => (
                        <AnimateIn key={cert.id} animation="scale-in" delay={i * 150}>
                            <div className={styles.certCard}>
                                <div className={styles.imgWrapper}>
                                    <img src={cert.src} alt={cert.alt} className={styles.certImg} />
                                </div>
                                <div className={styles.certLabel}>
                                    <ShieldCheck size={15} />
                                    {cert.label}
                                </div>
                            </div>
                        </AnimateIn>
                    ))}
                </div>

            </div>
        </section>
    );
}
