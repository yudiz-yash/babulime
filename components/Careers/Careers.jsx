"use client";

import { useState, useEffect } from 'react';
import styles from './Careers.module.scss';
import { CheckCircle2, Send, Loader, CheckCircle, AlertCircle, Paperclip, X } from 'lucide-react';
import AnimateIn from '@/components/AnimateIn';

const STATIC_POSITIONS = [
    { _id: '1', title: 'Production Supervisor', department: 'Manufacturing', location: 'Rajkot, Gujarat', type: 'Full-time', isNew: true },
    { _id: '2', title: 'Quality Analyst', department: 'Quality Assurance', location: 'Rajkot, Gujarat', type: 'Full-time', isNew: true },
    { _id: '3', title: 'Sales Executive — Gujarat Region', department: 'Sales & Distribution', location: 'Gujarat (Multi-City)', type: 'Full-time', isNew: false },
    { _id: '4', title: 'Packaging Machine Operator', department: 'Manufacturing', location: 'Rajkot, Gujarat', type: 'Full-time', isNew: false },
];

const VALUES = ['Integrity', 'Structured Growth', 'Continuous Learning', 'Performance Recognition'];

const EXPERIENCE_OPTIONS = [
    'Fresher (0 years)',
    '1 – 2 years',
    '3 – 5 years',
    '6 – 10 years',
    '10+ years',
];

const INITIAL = { name: '', email: '', phone: '', position: '', experience: '', coverLetter: '' };

const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000/api';

export default function Careers() {
    const [positions, setPositions] = useState(STATIC_POSITIONS);
    const [form, setForm]       = useState(INITIAL);
    const [resume, setResume]   = useState(null);
    const [status, setStatus]   = useState('idle'); // idle | loading | success | error
    const [errorMsg, setErrorMsg] = useState('');

    useEffect(() => {
        fetch(`${API_URL}/careers/positions`)
            .then(r => r.ok ? r.json() : null)
            .then(d => { if (d && d.length > 0) setPositions(d); })
            .catch(() => {});
    }, []);

    const handleChange = (e) => setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));

    const handlePosition = (title) => {
        setForm(prev => ({ ...prev, position: title }));
        document.getElementById('career-form')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    };

    const handleFile = (e) => {
        const file = e.target.files?.[0];
        if (file) setResume(file);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus('loading');
        setErrorMsg('');

        const fd = new FormData();
        Object.entries(form).forEach(([k, v]) => fd.append(k, v));
        if (resume) fd.append('resume', resume);

        try {
            const res = await fetch(`${API_URL}/careers/applications`, { method: 'POST', body: fd });
            const data = await res.json();
            if (!res.ok) throw new Error(data.error || 'Something went wrong.');
            setStatus('success');
            setForm(INITIAL);
            setResume(null);
        } catch (err) {
            setStatus('error');
            setErrorMsg(err.message);
        }
    };

    return (
        <section id="careers" className="py-12 md:py-24 bg-gray-50 overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">

                {/* Section header */}
                <AnimateIn animation="fade-up" className="mb-8 md:mb-16">
                    <span className="text-purple-600 font-bold tracking-wider uppercase text-sm mb-2 block">CAREERS</span>
                    <div className="grid lg:grid-cols-2 gap-6 items-end">
                        <h2 className="text-3xl md:text-5xl font-extrabold text-gray-900 leading-tight">Build Your Career With Us</h2>
                        <p className="text-lg text-gray-600 leading-relaxed">Join our experienced technical team and be part of India's trusted authority in lime processing.</p>
                    </div>
                </AnimateIn>

                {/* Values + Positions */}
                <div className="grid lg:grid-cols-2 gap-6 md:gap-12 mb-8 md:mb-16">

                    {/* Values */}
                    <AnimateIn animation="fade-up">
                        <h3 className="text-xl font-bold text-gray-900 mb-5">What We Value</h3>
                        <div className="grid grid-cols-2 gap-4 mb-8">
                            {VALUES.map((val) => (
                                <div key={val} className="flex items-center gap-2">
                                    <CheckCircle2 className="text-purple-600 flex-shrink-0" size={20} />
                                    <span className="text-gray-700 font-medium">{val}</span>
                                </div>
                            ))}
                        </div>

                    </AnimateIn>

                    {/* Open Positions */}
                    <AnimateIn animation="fade-up" delay={100}>
                        <h3 className="text-xl font-bold text-gray-900 mb-5">Open Positions</h3>
                        <div className="space-y-3">
                            {positions.map((pos) => (
                                <div
                                    key={pos._id}
                                    className={`w-full border rounded-2xl p-5 transition-all duration-300 flex items-center justify-between gap-4 ${
                                        form.position === pos.title
                                            ? 'border-purple-400 bg-purple-50 shadow-sm'
                                            : 'border-gray-100 bg-white'
                                    }`}
                                >
                                    <div>
                                        <div className="flex items-center gap-2 flex-wrap">
                                            <h4 className={`font-bold text-base ${form.position === pos.title ? 'text-purple-700' : 'text-gray-900'}`}>
                                                {pos.title}
                                            </h4>
                                            {pos.isNew && (
                                                <span className="bg-green-100 text-green-700 text-xs font-bold px-2 py-0.5 rounded-full">New</span>
                                            )}
                                        </div>
                                        <div className="flex items-center gap-2 mt-1.5 text-xs text-gray-500">
                                            <span className="bg-gray-100 px-2.5 py-0.5 rounded-full">{pos.department}</span>
                                            <span className="bg-gray-100 px-2.5 py-0.5 rounded-full">{pos.location}</span>
                                        </div>
                                    </div>
                                    <button
                                        onClick={() => handlePosition(pos.title)}
                                        className="flex-shrink-0 bg-purple-600 hover:bg-purple-700 text-white text-xs font-bold px-4 py-2 rounded-full transition-colors duration-200"
                                    >
                                        Apply Now
                                    </button>
                                </div>
                            ))}

                            {/* Not listed here box */}
                            <div className="w-full border-2 border-dashed border-purple-300 bg-purple-50/60 rounded-2xl p-5 flex items-center justify-between gap-4">
                                <div>
                                    <h4 className="font-bold text-base text-purple-800">Not listed here?</h4>
                                    <p className="text-sm text-purple-600 mt-0.5">Apply for other opportunities</p>
                                    <a href="mailto:babulimepvtltd87@gmail.com" className="text-xs text-purple-500 hover:text-purple-700 underline underline-offset-2 mt-1 inline-block">babulimepvtltd87@gmail.com</a>
                                </div>
                                <button
                                    onClick={() => handlePosition('Other')}
                                    className="flex-shrink-0 border-2 border-purple-500 text-purple-700 hover:bg-purple-600 hover:text-white text-xs font-bold px-4 py-2 rounded-full transition-colors duration-200"
                                >
                                    Apply Now
                                </button>
                            </div>
                        </div>
                    </AnimateIn>
                </div>

                {/* Application Form */}
                <AnimateIn animation="fade-up" delay={150}>
                    <div id="career-form" className={styles.formCard}>
                        <div className="mb-8">
                            <h3 className="text-2xl font-bold text-gray-900 mb-1">Apply Now</h3>
                            <p className="text-gray-500 text-sm">Fill in the details below and attach your resume. We'll get back to you soon.</p>
                        </div>

                        {status === 'success' ? (
                            <div className="flex flex-col items-center justify-center py-12 text-center gap-4">
                                <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center">
                                    <CheckCircle className="text-green-600" size={32} />
                                </div>
                                <h3 className="text-2xl font-bold text-gray-900">Application Submitted!</h3>
                                <p className="text-gray-500 max-w-sm">Thank you for applying. Our HR team will review your profile and reach out shortly.</p>
                                <button onClick={() => setStatus('idle')} className={styles.submitBtn} style={{ width: 'auto', padding: '10px 28px' }}>
                                    Apply for Another Position
                                </button>
                            </div>
                        ) : (
                            <form onSubmit={handleSubmit} className="space-y-5">
                                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
                                    <div className={styles.field}>
                                        <label>Full Name <span className={styles.req}>*</span></label>
                                        <input name="name" value={form.name} onChange={handleChange} placeholder="Your full name" required />
                                    </div>
                                    <div className={styles.field}>
                                        <label>Email Address <span className={styles.req}>*</span></label>
                                        <input name="email" type="email" value={form.email} onChange={handleChange} placeholder="you@email.com" required />
                                    </div>
                                    <div className={styles.field}>
                                        <label>Phone Number</label>
                                        <input name="phone" value={form.phone} onChange={handleChange} placeholder="+91 98765 43210" />
                                    </div>
                                </div>

                                <div className="grid sm:grid-cols-2 gap-5">
                                    <div className={styles.field}>
                                        <label>Position Applying For <span className={styles.req}>*</span></label>
                                        <select name="position" value={form.position} onChange={handleChange} required>
                                            <option value="">Select a position</option>
                                            {positions.map(p => (
                                                <option key={p._id} value={p.title}>{p.title}</option>
                                            ))}
                                        </select>
                                    </div>
                                    <div className={styles.field}>
                                        <label>Years of Experience</label>
                                        <select name="experience" value={form.experience} onChange={handleChange}>
                                            <option value="">Select experience</option>
                                            {EXPERIENCE_OPTIONS.map(opt => (
                                                <option key={opt} value={opt}>{opt}</option>
                                            ))}
                                        </select>
                                    </div>
                                </div>

                                <div className={styles.field}>
                                    <label>Cover Letter / Message</label>
                                    <textarea name="coverLetter" value={form.coverLetter} onChange={handleChange} placeholder="Tell us why you're a great fit for this role..." rows={4} />
                                </div>

                                <div className={styles.field}>
                                    <label>Resume / CV</label>
                                    {resume ? (
                                        <div className={styles.fileChip}>
                                            <Paperclip size={15} />
                                            <span>{resume.name}</span>
                                            <button type="button" onClick={() => setResume(null)}>
                                                <X size={14} />
                                            </button>
                                        </div>
                                    ) : (
                                        <label className={styles.fileUpload}>
                                            <Paperclip size={18} />
                                            <span>Attach Resume <span className="text-gray-400 font-normal">(PDF, DOC, DOCX — max 5 MB)</span></span>
                                            <input type="file" accept=".pdf,.doc,.docx" onChange={handleFile} className="sr-only" />
                                        </label>
                                    )}
                                </div>

                                {status === 'error' && (
                                    <div className="flex items-center gap-2 text-red-600 bg-red-50 px-4 py-3 rounded-lg text-sm">
                                        <AlertCircle size={16} /> {errorMsg}
                                    </div>
                                )}

                                <button type="submit" disabled={status === 'loading'} className={styles.submitBtn}>
                                    {status === 'loading'
                                        ? <><Loader size={18} className="animate-spin" /> Submitting…</>
                                        : <><Send size={18} /> Submit Application</>
                                    }
                                </button>
                            </form>
                        )}
                    </div>
                </AnimateIn>

            </div>
        </section>
    );
}
