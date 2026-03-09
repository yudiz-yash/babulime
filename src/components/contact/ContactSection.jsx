"use client";

import { useState } from "react";

const ADDRESS =
  "Babu Lime Pvt. Ltd., Opp. Saurashtra Paper Mill, Navagam-Anandpar Road, Navagam District, Rajkot-360003 (Guj.) INDIA";

const CONTACT_INFO = [
  {
    icon: "location_on",
    label: "Visit Us",
    value: ADDRESS,
    sub: "Manufacturing & Head Office",
  },
  {
    icon: "call",
    label: "Call Us",
    value: "+91 9227706516",
    sub: "Mon–Sat, 9AM–6PM IST",
  },
  {
    icon: "mail",
    label: "Email Us",
    value: "babulimepvtltd87@gmail.com",
    sub: "We reply within 24 hours",
  },
];

export function ContactSection() {
  const [status, setStatus] = useState("idle");

  function handleSubmit(e) {
    e.preventDefault();
    setStatus("loading");
    setTimeout(() => setStatus("success"), 1200);
  }

  return (
    <section
      id="contact"
      className="py-20 px-6 lg:px-40 bg-white dark:bg-slate-900 border-b border-primary/5"
    >
      {/* Section header - same pattern as WhyIndustryTrustsUs */}
      <div className="text-left max-w-3xl mx-auto mb-16">
        <span className="inline-block px-4 py-1 rounded-full bg-primary/10 text-primary text-sm font-bold uppercase tracking-widest mb-4">
          Get in Touch
        </span>
        <h2 className="text-4xl font-black text-slate-900 dark:text-white mb-6">
          Contact Us
        </h2>
        <p className="text-slate-500 dark:text-slate-400 pb-10">
          Distributor inquiries, product information, or partnership
          opportunities—we&apos;d love to hear from you.
        </p>
      </div>

      {/* Content grid: full width, aligned with other sections */}
      <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center">
        {/* Contact info - 4 cols on lg */}
        <div className="lg:col-span-4 flex flex-col gap-6">
          {CONTACT_INFO.map(({ icon, label, value, sub }) => (
            <div
              key={label}
              className="flex gap-5 p-6 rounded-2xl bg-background-light dark:bg-background-dark border border-primary/5 hover:border-primary/40 transition-all group"
            >
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary transition-colors">
                <span className="material-symbols-outlined text-primary group-hover:text-white text-2xl">
                  {icon}
                </span>
              </div>
              <div className="min-w-0 flex-1">
                <p className="text-xs font-bold text-primary uppercase tracking-wider mb-1.5">
                  {label}
                </p>
                <p className="font-bold text-slate-900 dark:text-white text-base leading-snug">
                  {value}
                </p>
                <p className="text-slate-500 dark:text-slate-400 text-sm mt-1">
                  {sub}
                </p>
              </div>
            </div>
          ))}

          {/* Google Map - same column as contact info, compact size */}
          <div className="rounded-2xl overflow-hidden border border-primary/5 bg-background-light dark:bg-background-dark">
            <div className="relative w-full aspect-[4/3] min-h-[180px] max-h-[220px]">
              <iframe
                title="Babu Lime - Manufacturing & Head Office"
                src={`https://www.google.com/maps?q=${encodeURIComponent(ADDRESS)}&output=embed`}
                width="100%"
                height="100%"
                className="absolute inset-0 border-0"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>

        {/* Form - 8 cols on lg */}
        <div className="lg:col-span-8">
          <form
            onSubmit={handleSubmit}
            className="p-8 lg:p-10 rounded-2xl bg-background-light dark:bg-background-dark border border-primary/5 shadow-sm space-y-6 hover:border-primary/20 transition-colors"
          >
            <h3 className="text-xl font-bold text-slate-900 dark:text-white pb-5 mb-6">
              Send us a message
            </h3>

            <div className="flex flex-col gap-6">
              <div className="grid sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label
                    htmlFor="contact-name"
                    className="block text-sm font-semibold text-slate-700 dark:text-slate-300"
                  >
                    Full Name <span className="text-primary">*</span>
                  </label>
                  <input
                    id="contact-name"
                    name="name"
                    type="text"
                    required
                    placeholder="Your name"
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-600 bg-white dark:bg-slate-800 text-slate-900 dark:text-slate-100 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition"
                  />
                </div>
                <div className="space-y-2">
                  <label
                    htmlFor="contact-email"
                    className="block text-sm font-semibold text-slate-700 dark:text-slate-300"
                  >
                    Email <span className="text-primary">*</span>
                  </label>
                  <input
                    id="contact-email"
                    name="email"
                    type="email"
                    required
                    placeholder="you@example.com"
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-600 bg-white dark:bg-slate-800 text-slate-900 dark:text-slate-100 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition"
                  />
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label
                    htmlFor="contact-phone"
                    className="block text-sm font-semibold text-slate-700 dark:text-slate-300"
                  >
                    Phone
                  </label>
                  <input
                    id="contact-phone"
                    name="phone"
                    type="tel"
                    placeholder="+91 98765 43210"
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-600 bg-white dark:bg-slate-800 text-slate-900 dark:text-slate-100 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition"
                  />
                </div>
                <div className="space-y-2">
                  <label
                    htmlFor="contact-subject"
                    className="block text-sm font-semibold text-slate-700 dark:text-slate-300"
                  >
                    Subject <span className="text-primary">*</span>
                  </label>
                  <select
                    id="contact-subject"
                    name="subject"
                    required
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-600 bg-white dark:bg-slate-800 text-slate-900 dark:text-slate-100 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition"
                  >
                    <option value="">Select...</option>
                    <option value="distribution">Distribution Inquiry</option>
                    <option value="wholesale">Wholesale Partnership</option>
                    <option value="product">Product Information</option>
                    <option value="other">Other</option>
                  </select>
                </div>
              </div>

              <div className="space-y-2">
                <label
                  htmlFor="contact-message"
                  className="block text-sm font-semibold text-slate-700 dark:text-slate-300"
                >
                  Message <span className="text-primary">*</span>
                </label>
                <textarea
                  id="contact-message"
                  name="message"
                  required
                  rows={5}
                  placeholder="Tell us how we can help..."
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-600 bg-white dark:bg-slate-800 text-slate-900 dark:text-slate-100 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition resize-y min-h-[128px]"
                />
              </div>
            </div>

            {(status === "success" || status === "error") && (
              <div
                className={
                  status === "success"
                    ? "flex items-center gap-2 text-green-600 dark:text-green-400 text-sm font-medium"
                    : "text-red-600 dark:text-red-400 text-sm font-medium"
                }
              >
                {status === "success" && (
                  <>
                    <span className="material-symbols-outlined text-lg shrink-0">
                      check_circle
                    </span>
                    <span>Thank you! We&apos;ll get back to you soon.</span>
                  </>
                )}
                {status === "error" && (
                  <span>
                    Something went wrong. Please try again or email us directly.
                  </span>
                )}
              </div>
            )}

            <div className="pt-5">
              <button
                type="submit"
                disabled={status === "loading"}
                className="bg-primary text-white px-8 py-4 rounded-xl text-lg font-bold hover:bg-primary/90 hover:shadow-lg hover:shadow-primary/30 transition-all inline-flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed min-w-[200px]"
              >
                {status === "loading" ? (
                  <>
                    <span className="material-symbols-outlined animate-spin text-xl">
                      progress_activity
                    </span>
                    Sending...
                  </>
                ) : (
                  <>
                    <span className="material-symbols-outlined text-xl">
                      send
                    </span>
                    Send Message
                  </>
                )}
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
