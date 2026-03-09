import Link from "next/link";

export function VisionCTA() {
  return (
    <section className="py-20 px-6 lg:px-40 bg-background-dark text-white">
      <div className="flex flex-col lg:flex-row gap-16 items-center">
        <div className="lg:w-1/2 space-y-6">
          <h2 className="text-4xl font-black mb-6">Our Vision for 2030</h2>
          <p className="text-slate-400 text-lg leading-relaxed">
            &quot;To redefine purity in the lime industry by merging traditional
            trust with futuristic manufacturing tech, ensuring Babu Lime becomes
            a household name in every Indian state.&quot;
          </p>
          <div className="pt-4">
            <p className="text-sm font-bold text-primary uppercase tracking-widest">
              — Babu Lime
            </p>
          </div>
        </div>
        <div className="lg:w-1/2 bg-white/5 p-12 rounded-3xl border border-white/10 backdrop-blur-sm w-full">
          <h3 className="text-3xl font-bold mb-4">Partner With Us</h3>
          <p className="text-slate-400 mb-8 pb-10">
            Distributor & Business Inquiries Welcome. Join our network of
            80,000+ partners across India.
          </p>
          <Link
            href="#contact"
            className="w-full bg-primary text-white py-4 rounded-xl text-lg font-bold hover:bg-primary/90 transition-all flex items-center justify-center gap-2"
          >
            <span className="material-symbols-outlined">mail</span> Write to Us
          </Link>
        </div>
      </div>
    </section>
  );
}
