import Image from "next/image";
import aboutbanner from '../../assets/images/about-banner.png'

const FEATURES = [
  {
    icon: "precision_manufacturing",
    title: "Stainless Steel Processing",
  },
  {
    icon: "science",
    title: "Ultra-Modern Lab",
  },
  {
    icon: "inventory_2",
    title: "Automated Packaging",
  },
];

export function AboutSection() {
  return (
    <section
      id="about"
      className="py-24 px-6 lg:px-40 bg-background-light dark:bg-background-dark"
    >
      <div className="flex flex-col lg:flex-row items-center justify-between">
        <div className="space-y-8 w-1/2">
          <div className="inline-block px-4 py-1 rounded-full bg-primary/10 text-primary text-sm font-bold uppercase tracking-widest">
            Our Heritage
          </div>
          <h2 className="text-4xl lg:text-5xl font-black text-slate-900 dark:text-white leading-tight">
            Three Decades of Trust.
            <br />
            One Standard of Purity.
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-lg pt-5 pb-5 leading-relaxed">
            Since 1985, Babu Lime has been synonymous with quality in the lime
            processing industry. Our legacy is built on a foundation of
            uncompromising food-grade standards and technological innovation.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {FEATURES.map(({ icon, title }) => (
              <div
                key={title}
                className="p-4 rounded-xl bg-white dark:bg-slate-800 shadow-sm border border-primary/5"
              >
                <span className="material-symbols-outlined text-primary mb-3">
                  {icon}
                </span>
                <h4 className="font-bold text-slate-900 dark:text-white text-sm">
                  {title}
                </h4>
              </div>
            ))}
          </div>
        </div>
        <div className="relative rounded-xl overflow-hidden aspect-square max-w-xl mx-auto shadow-lg">
          <Image
            src={aboutbanner}
            alt="Laboratory quality control - Scientific laboratory setup with modern equipment"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-primary/20 mix-blend-multiply" />
        </div>
      </div>
    </section>
  );
}
