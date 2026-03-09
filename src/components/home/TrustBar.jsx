const STATS = [
  { value: "30+", label: "Years Experience" },
  { value: "80,000+", label: "Retail Outlets" },
  { value: "4000+", label: "Wholesale Outlets" },
  { value: "60+", label: "Cities Covered" },
];

export function TrustBar() {
  return (
    <section className="w-full bg-white dark:bg-slate-900 py-12 px-6 lg:px-40 border-b border-primary/5">
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
        {STATS.map(({ value, label }) => (
          <div key={label} className="flex flex-col items-center text-center">
            <span className="text-primary text-4xl font-black mb-1">{value}</span>
            <span className="text-slate-500 dark:text-slate-400 font-semibold text-sm uppercase tracking-wider">
              {label}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
