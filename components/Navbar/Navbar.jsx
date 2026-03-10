"use client";

import { Menu, X } from 'lucide-react';
import styles from './Navbar.module.scss';
import { useState, useEffect } from 'react';
import { Logo } from '@/assets';

function scrollToSection(id) {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
}

const NAV_LINKS = [
    { label: 'About',    id: 'about'    },
    { label: 'Products', id: 'products' },
    { label: 'Quality',  id: 'quality'  },
    { label: 'Network',  id: 'network'  },
];

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        // On mount: scroll to top and clear any hash without page jump
        if (window.location.hash) {
            history.replaceState(null, '', window.location.pathname);
        }
        window.scrollTo({ top: 0, behavior: 'instant' });

        const handleScroll = () => setScrolled(window.scrollY > 24);
        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav
            className={`fixed top-0 left-0 right-0 z-50 backdrop-blur-md transition-all duration-300 ${styles.navbar} ${
                scrolled ? 'bg-white/95 shadow-lg shadow-purple-100/60' : 'bg-white/80'
            }`}
        >
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                <div className={`flex justify-between items-center transition-all duration-300 ${scrolled ? 'h-[88px]' : 'h-[100px]'}`}>
                    <div className="flex-shrink-0 flex items-center">
                        <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
                            <img src={Logo.src} alt="logo" width={100} height={100} className='object-contain' />
                        </button>
                    </div>

                    <div className="hidden md:flex space-x-8 items-center">
                        {NAV_LINKS.map(({ label, id }) => (
                            <button
                                key={id}
                                onClick={() => scrollToSection(id)}
                                className="text-gray-600 hover:text-purple-600 transition-colors font-medium"
                            >
                                {label}
                            </button>
                        ))}
                        <button className={`${styles.ctaButton} anim-pulse-glow`}>
                            Contact Us
                        </button>
                    </div>

                    <div className="md:hidden flex items-center">
                        <button onClick={() => setIsOpen(!isOpen)} className="text-gray-600">
                            {isOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>
                </div>
            </div>

            <div
                className={`md:hidden bg-white border-t overflow-hidden transition-all duration-300 ease-in-out ${
                    isOpen ? 'max-h-72 opacity-100' : 'max-h-0 opacity-0'
                }`}
            >
                <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                    {NAV_LINKS.map(({ label, id }) => (
                        <button
                            key={id}
                            onClick={() => { scrollToSection(id); setIsOpen(false); }}
                            className="block w-full text-left px-3 py-2 text-base font-medium text-gray-700 hover:text-purple-600 hover:bg-gray-50 rounded-lg transition-colors"
                        >
                            {label}
                        </button>
                    ))}
                    <button className="w-full text-left px-3 py-2 text-base font-medium text-purple-600 hover:bg-purple-50 rounded-lg transition-colors">
                        Contact Us
                    </button>
                </div>
            </div>
        </nav>
    );
}
