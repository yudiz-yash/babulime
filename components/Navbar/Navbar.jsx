"use client";

import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import styles from './Navbar.module.scss';
import { useState } from 'react';
import { Logo } from '@/assets';

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className={`fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md ${styles.navbar}`}>
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                <div className="flex justify-between items-center h-20">
                    <div className="flex-shrink-0 flex items-center">
                        <Link href="/">
                            <img src={Logo.src} alt="logo" width={100} height={100} className='object-contain' />
                        </Link>
                    </div>

                    <div className="hidden md:flex space-x-8 items-center">
                        <Link href="#about" className="text-gray-600 hover:text-purple-600 transition-colors">About</Link>
                        <Link href="#products" className="text-gray-600 hover:text-purple-600 transition-colors">Products</Link>
                        <Link href="#quality" className="text-gray-600 hover:text-purple-600 transition-colors">Quality</Link>
                        <Link href="#network" className="text-gray-600 hover:text-purple-600 transition-colors">Network</Link>
                        <button className={styles.ctaButton}>
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

            {isOpen && (
                <div className="md:hidden bg-white border-t">
                    <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                        <Link href="#about" className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-purple-600 hover:bg-gray-50">About</Link>
                        <Link href="#products" className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-purple-600 hover:bg-gray-50">Products</Link>
                        <Link href="#quality" className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-purple-600 hover:bg-gray-50">Quality</Link>
                        <Link href="#network" className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-purple-600 hover:bg-gray-50">Network</Link>
                        <button className={`w-full text-left px-3 py-2 text-base font-medium text-purple-600 hover:bg-purple-50`}>
                            Contact Us
                        </button>
                    </div>
                </div>
            )}
        </nav>
    );
}
