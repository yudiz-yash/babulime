import { cn } from "@/utils";

export function Card({ title, description, children, className }) {
  return (
    <article
      className={cn("shadow-card rounded-xl border border-slate-200 bg-white p-5", className)}
    >
      <header className="mb-3">
        <h3 className="text-base font-semibold text-slate-900">{title}</h3>
        {description ? <p className="mt-1 text-sm text-slate-600">{description}</p> : null}
      </header>
      {children}
    </article>
  );
}
