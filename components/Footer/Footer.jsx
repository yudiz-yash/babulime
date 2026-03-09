import styles from './Footer.module.scss';
import Link from 'next/link';
import { Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';

export default function Footer() {
    return (
        <footer className="bg-gray-900 text-white pt-24 pb-8 border-t border-gray-800">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">

                    {/* Company Info */}
                    <div className="space-y-6">
                        <Link href="/" className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-purple-600 block">
                            BabuLime
                        </Link>
                        <p className="text-gray-400 leading-relaxed text-sm pr-4">
                            Premium grade limestone and calcium carbonate derivatives tailored for superior industrial performance globally.
                        </p>
                    </div>

                    {/* Solutions Column */}
                    <div>
                        <h4 className="text-lg font-bold mb-6 text-white">Solutions</h4>
                        <ul className="space-y-4">
                            <li><Link href="#products" className="text-gray-400 hover:text-purple-400 transition-colors text-sm">Industrial Grade Quicklime</Link></li>
                            <li><Link href="#products" className="text-gray-400 hover:text-purple-400 transition-colors text-sm">Chemical Hydrated Lime</Link></li>
                            <li><Link href="#products" className="text-gray-400 hover:text-purple-400 transition-colors text-sm">Construction Powders</Link></li>
                            <li><Link href="#products" className="text-gray-400 hover:text-purple-400 transition-colors text-sm">Agricultural Soil Conditioners</Link></li>
                        </ul>
                    </div>

                    {/* Legal Column */}
                    <div>
                        <h4 className="text-lg font-bold mb-6 text-white">Company</h4>
                        <ul className="space-y-4">
                            <li><Link href="#about" className="text-gray-400 hover:text-purple-400 transition-colors text-sm">About Us</Link></li>
                            <li><Link href="#quality" className="text-gray-400 hover:text-purple-400 transition-colors text-sm">Quality Certifications</Link></li>
                            <li><Link href="#" className="text-gray-400 hover:text-purple-400 transition-colors text-sm">Privacy Policy</Link></li>
                            <li><Link href="#" className="text-gray-400 hover:text-purple-400 transition-colors text-sm">Terms of Service</Link></li>
                        </ul>
                    </div>

                    {/* Contact Column */}
                    <div>
                        <h4 className="text-lg font-bold mb-6 text-white">Contact</h4>
                        <ul className="space-y-4 text-sm text-gray-400">
                            <li>123 Mining Estate, Industrial Area</li>
                            <li>Rajasthan, India 302022</li>
                            <li className="pt-2">
                                <a href="mailto:info@babulime.com" className="hover:text-purple-400 transition-colors">info@babulime.com</a>
                            </li>
                            <li>
                                <a href="tel:+919876543210" className="hover:text-purple-400 transition-colors">+91 98765 43210</a>
                            </li>
                        </ul>
                    </div>

                </div>

                {/* Bottom Row */}
                <div className="pt-8 border-t border-gray-800 flex flex-col md:flex-row items-center justify-between gap-6">
                    <p className="text-gray-500 text-sm md:flex-1">
                        &copy; {new Date().getFullYear()} Babu Lime & Minerals. All rights reserved.
                    </p>

                    <div className="flex items-center gap-6">
                        <a href="#" className="text-gray-500 hover:text-white transition-colors" aria-label="Facebook">
                            <Facebook size={20} />
                        </a>
                        <a href="#" className="text-gray-500 hover:text-white transition-colors" aria-label="Twitter">
                            <Twitter size={20} />
                        </a>
                        <a href="#" className="text-gray-500 hover:text-white transition-colors" aria-label="LinkedIn">
                            <Linkedin size={20} />
                        </a>
                        <a href="#" className="text-gray-500 hover:text-white transition-colors" aria-label="Instagram">
                            <Instagram size={20} />
                        </a>
                    </div>
                </div>

            </div>
        </footer>
    );
}
