const CARDS = [
  {
    icon: "settings_suggest",
    title: "Precision Processing",
    description:
      "Exact mineral composition achieved through micron-level refinement.",
  },
  {
    icon: "verified",
    title: "100% Food-Additive Integrity",
    description:
      "Certified safety for consumption and high-grade industrial food applications.",
  },
  {
    icon: "factory",
    title: "Advanced Manufacturing",
    description:
      "Next-gen automation ensuring zero-human-touch processing pipelines.",
  },
  {
    icon: "hub",
    title: "Scale & Reliability",
    description:
      "High-volume production capacity to meet Pan-India supply demands.",
  },
];

export function WhyIndustryTrustsUs() {
  return (
    <section className="py-20 px-6 lg:px-40 bg-white dark:bg-slate-900">
      <div className="text-left max-w-3xl mx-auto mb-16">
        <h2 className="text-4xl font-black text-slate-900 dark:text-white mb-6">
          Why Industry Trusts Us
        </h2>
        <p className="text-slate-500 dark:text-slate-400 pb-10">
          Setting the gold standard in mineral processing through scientific
          rigor and operational excellence.
        </p>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {CARDS.map(({ icon, title, description }) => (
          <div
            key={title}
            className="p-8 rounded-2xl bg-background-light dark:bg-background-dark border border-primary/5 hover:border-primary/40 transition-all group"
          >
            <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary transition-colors">
              <span className="material-symbols-outlined text-primary group-hover:text-white">
                {icon}
              </span>
            </div>
            <h3 className="text-xl font-bold pt-5 mb-3">{title}</h3>
            <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed">
              {description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
