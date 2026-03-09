export function SectionHeading({ eyebrow, title, description }) {
  return (
    <header className="max-w-2xl">
      <p className="text-brand-600 text-sm font-semibold tracking-wider uppercase">{eyebrow}</p>
      <h1 className="mt-2 text-3xl font-bold text-slate-900 sm:text-4xl">{title}</h1>
      {description ? <p className="mt-3 text-slate-600">{description}</p> : null}
    </header>
  );
}
