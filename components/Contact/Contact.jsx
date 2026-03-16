"use client";

import { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle, AlertCircle, Loader } from 'lucide-react';
import AnimateIn from '@/components/AnimateIn';
import styles from './Contact.module.scss';

const INITIAL = { name: '', email: '', phone: '', company: '', subject: '', message: '' };

export default function Contact() {
    const [form, setForm] = useState(INITIAL);
    const [status, setStatus] = useState('idle'); // idle | loading | success | error
    const [errorMsg, setErrorMsg] = useState('');

    const handleChange = (e) => setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus('loading');
        setErrorMsg('');

        try {
            const res = await fetch('/api/contact', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(form),
            });
            const data = await res.json();

            if (!res.ok) throw new Error(data.error || 'Something went wrong.');
            setStatus('success');
            setForm(INITIAL);
        } catch (err) {
            setStatus('error');
            setErrorMsg(err.message);
        }
    };

    return (
        <section id="contact" className="py-12 md:py-24 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">

                <AnimateIn animation="fade-up" className="text-center mb-8 md:mb-16">
                    <span className="text-purple-600 font-bold tracking-wider uppercase text-sm mb-2 block">GET IN TOUCH</span>
                    <h2 className="text-3xl md:text-5xl font-extrabold text-gray-900 mb-4">Contact Us</h2>
                    <p className="text-gray-600 max-w-2xl mx-auto text-lg">Have a question or want to discuss a partnership? We'd love to hear from you.</p>
                </AnimateIn>

                <div className="grid lg:grid-cols-5 gap-4 md:gap-8 items-start">

                    {/* Left info panel */}
                    <AnimateIn animation="fade-left" className="lg:col-span-2">
                        <div className={styles.infoPanel}>
                            <h3 className="text-2xl font-bold text-white mb-2">Let's Talk</h3>
                            <p className="text-purple-200 text-sm leading-relaxed mb-10">
                                Reach out for business enquiries, distributor partnerships, or any general queries about our products.
                            </p>

                            <div className="space-y-7">
                                <div className="flex items-start gap-4">
                                    <div className={styles.infoIcon}><MapPin size={20} /></div>
                                    <div>
                                        <p className="text-white font-semibold mb-0.5">Manufacturing Unit</p>
                                        <p className="text-purple-200 text-sm leading-relaxed">Opp. Saurashtra Paper Mill<br />Navagam-Anandpar Road<br />Rajkot – 360003, Gujarat, India</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-4">
                                    <div className={styles.infoIcon}><Phone size={20} /></div>
                                    <div>
                                        <p className="text-white font-semibold mb-0.5">Call Us</p>
                                        <a href="tel:+919227706516" className="text-purple-200 text-sm hover:text-white transition-colors block">+91-9227706516</a>
                                        <a href="tel:02812701665" className="text-purple-200 text-sm hover:text-white transition-colors block">0281-2701665</a>
                                    </div>
                                </div>
                                <div className="flex items-start gap-4">
                                    <div className={styles.infoIcon}><Mail size={20} /></div>
                                    <div>
                                        <p className="text-white font-semibold mb-0.5">Email Us</p>
                                        <a href="mailto:babulimepvtltd87@gmail.com" className="text-purple-200 text-sm hover:text-white transition-colors">babulimepvtltd87@gmail.com</a>
                                    </div>
                                </div>
                            </div>

                            {/* decorative circles */}
                            <div className={styles.decorCircle1} />
                            <div className={styles.decorCircle2} />
                        </div>
                    </AnimateIn>

                    {/* Right form panel */}
                    <AnimateIn animation="fade-right" delay={100} className="lg:col-span-3">
                        <div className={styles.formCard}>

                            {status === 'success' ? (
                                <div className="flex flex-col items-center justify-center py-16 text-center gap-4">
                                    <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center">
                                        <CheckCircle className="text-green-600" size={32} />
                                    </div>
                                    <h3 className="text-2xl font-bold text-gray-900">Message Sent!</h3>
                                    <p className="text-gray-500 max-w-sm">Thank you for reaching out. We'll get back to you within 24 hours.</p>
                                    <button onClick={() => setStatus('idle')} className={styles.submitBtn}>
                                        Send Another Message
                                    </button>
                                </div>
                            ) : (
                                <form onSubmit={handleSubmit} className="space-y-5">
                                    <div className="grid sm:grid-cols-2 gap-5">
                                        <div className={styles.field}>
                                            <label>Full Name <span className={styles.req}>*</span></label>
                                            <input name="name" value={form.name} onChange={handleChange} placeholder="John Doe" required />
                                        </div>
                                        <div className={styles.field}>
                                            <label>Email Address <span className={styles.req}>*</span></label>
                                            <input name="email" type="email" value={form.email} onChange={handleChange} placeholder="john@company.com" required />
                                        </div>
                                    </div>
                                    <div className="grid sm:grid-cols-2 gap-5">
                                        <div className={styles.field}>
                                            <label>Phone Number</label>
                                            <input name="phone" value={form.phone} onChange={handleChange} placeholder="+91 98765 43210" />
                                        </div>
                                        <div className={styles.field}>
                                            <label>Company / Organization</label>
                                            <input name="company" value={form.company} onChange={handleChange} placeholder="Your Company" />
                                        </div>
                                    </div>
                                    <div className={styles.field}>
                                        <label>Subject</label>
                                        <input name="subject" value={form.subject} onChange={handleChange} placeholder="e.g. Distributor Enquiry" />
                                    </div>
                                    <div className={styles.field}>
                                        <label>Message <span className={styles.req}>*</span></label>
                                        <textarea name="message" value={form.message} onChange={handleChange} placeholder="Tell us how we can help you..." rows={5} required />
                                    </div>

                                    {status === 'error' && (
                                        <div className="flex items-center gap-2 text-red-600 bg-red-50 px-4 py-3 rounded-lg text-sm">
                                            <AlertCircle size={16} /> {errorMsg}
                                        </div>
                                    )}

                                    <button type="submit" disabled={status === 'loading'} className={styles.submitBtn}>
                                        {status === 'loading' ? (
                                            <><Loader size={18} className="animate-spin" /> Sending…</>
                                        ) : (
                                            <><Send size={18} /> Send Message</>
                                        )}
                                    </button>
                                </form>
                            )}
                        </div>
                    </AnimateIn>
                </div>
            </div>
        </section>
    );
}
