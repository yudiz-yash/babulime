"use client";

import { useEffect, useState } from 'react';
import styles from './Footer.module.scss';
import Link from 'next/link';
import { Facebook, Instagram } from 'lucide-react';
import AnimateIn from '@/components/AnimateIn';

const STATIC = {
    description: "India's leading processor of food-grade natural white lime. Manufactured in Rajkot. Serving Gujarat. Expanding Pan-India. Since 1987.",
    address: 'Opp. Saurashtra Paper Mill,\nNavagam-Anandpar Road,\nRajkot – 360003, Gujarat, India',
    email: 'babulimepvtltd87@gmail.com',
    phones: ['+91-9227706516', '0281-2701665'],
    instagramUrl: 'https://instagram.com/babulimeindia?igshid=MzRlODBiNWFlZA==',
    facebookUrl: 'https://www.facebook.com/BABULIMEINDIA',
};

export default function Footer() {
    const [data, setData] = useState(STATIC);

    useEffect(() => {
        fetch(`${process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000/api'}/settings/footer`)
            .then(r => r.ok ? r.json() : null)
            .then(d => { if (d) setData(d); })
            .catch(() => {});
    }, []);

    const SOCIAL = [
        { Icon: Instagram, label: 'Instagram', href: data.instagramUrl, btnClass: styles.btnInstagram, iconClass: styles.iconInstagram },
        { Icon: Facebook,  label: 'Facebook',  href: data.facebookUrl,  btnClass: styles.btnFacebook,  iconClass: styles.iconFacebook  },
    ];

    const addressLines = (data.address || '').split('\n');

    return (
        <footer className="bg-gray-900 text-white pt-12 pb-6 md:pt-24 md:pb-8 border-t border-gray-800">
            <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 mb-8 md:mb-16">

                    <AnimateIn animation="fade-up" delay={0} className="space-y-4 md:space-y-6">
                        <Link href="/" className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-purple-600 block">
                            BabuLime
                        </Link>
                        <p className="text-gray-400 leading-relaxed text-sm pr-4">{data.description}</p>

                        <div className="flex flex-col gap-3 pt-2">
                            {SOCIAL.map(({ Icon, label, href, btnClass, iconClass }) => (
                                <a
                                    key={label}
                                    href={href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className={`${styles.socialBtn} ${btnClass}`}
                                >
                                    <span className={`${styles.socialIconWrap} ${iconClass}`}>
                                        <Icon size={16} />
                                    </span>
                                    <span>Follow us on {label}</span>
                                </a>
                            ))}
                        </div>
                    </AnimateIn>

                    <AnimateIn animation="fade-up" delay={100}>
                        <h4 className="text-lg font-bold mb-6 text-white">Products</h4>
                        <ul className="space-y-2 md:space-y-4">
                            <li><Link href="#products" className="text-gray-400 hover:text-purple-400 transition-colors text-sm">Parcel Range (Medium, Ghatta, Achha Safed)</Link></li>
                            <li><Link href="#products" className="text-gray-400 hover:text-purple-400 transition-colors text-sm">Chunna Paste</Link></li>
                            <li><Link href="#products" className="text-gray-400 hover:text-purple-400 transition-colors text-sm">Institutional Packs</Link></li>
                            <li><Link href="#products" className="text-gray-400 hover:text-purple-400 transition-colors text-sm">Bottle & Pan Kit</Link></li>
                        </ul>
                    </AnimateIn>

                    <AnimateIn animation="fade-up" delay={200}>
                        <h4 className="text-lg font-bold mb-6 text-white">Company</h4>
                        <ul className="space-y-2 md:space-y-4">
                            <li><Link href="#about" className="text-gray-400 hover:text-purple-400 transition-colors text-sm">About Us</Link></li>
                            <li><Link href="#quality" className="text-gray-400 hover:text-purple-400 transition-colors text-sm">Quality Certifications</Link></li>
                            <li><Link href="#" className="text-gray-400 hover:text-purple-400 transition-colors text-sm">Privacy Policy</Link></li>
                            <li><Link href="#" className="text-gray-400 hover:text-purple-400 transition-colors text-sm">Terms of Service</Link></li>
                        </ul>
                    </AnimateIn>

                    <AnimateIn animation="fade-up" delay={300}>
                        <h4 className="text-lg font-bold mb-6 text-white">Contact</h4>
                        <ul className="space-y-4 text-sm text-gray-400">
                            <li>
                                {addressLines.map((line, i) => (
                                    <span key={i}>{line}{i < addressLines.length - 1 && <br />}</span>
                                ))}
                            </li>
                            <li className="pt-2">
                                <a href={`mailto:${data.email}`} className="hover:text-purple-400 transition-colors">{data.email}</a>
                            </li>
                            <li>
                                {(data.phones || []).map((phone, i) => (
                                    <a key={i} href={`tel:${phone.replace(/[^+\d]/g, '')}`} className="hover:text-purple-400 transition-colors block">{phone}</a>
                                ))}
                            </li>
                        </ul>
                    </AnimateIn>

                </div>

                <AnimateIn animation="fade-up" delay={0} className="pt-6 md:pt-8 border-t border-gray-800 flex flex-col md:flex-row items-center justify-between gap-4 md:gap-6">
                    <p className="text-gray-500 text-sm md:flex-1">
                        &copy; {new Date().getFullYear()} Babu Lime & Minerals. All rights reserved.
                        <span className="mx-2 text-gray-700">·</span>
                        <span className="text-gray-600">FSSAI Lic. No.: 10017021002693</span>
                    </p>

                    <div className="flex items-center gap-4">
                        {SOCIAL.map(({ Icon, label, href, iconClass }) => (
                            <a
                                key={label}
                                href={href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className={`${styles.iconLink} ${iconClass}`}
                                aria-label={label}
                            >
                                <Icon size={19} />
                            </a>
                        ))}
                    </div>
                </AnimateIn>

            </div>
        </footer>
    );
}
