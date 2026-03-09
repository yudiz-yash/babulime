import { cn } from "@/utils";

const variants = {
  primary: "bg-brand-600 text-white hover:bg-brand-700",
  secondary: "border border-slate-300 bg-white text-slate-900 hover:bg-slate-50",
  ghost: "bg-transparent text-slate-700 hover:bg-slate-100",
};

export function Button({ children, className, variant = "primary", type = "button", ...props }) {
  return (
    <button
      type={type}
      className={cn(
        "focus-visible:ring-brand-500 inline-flex items-center justify-center rounded-xl px-4 py-2 text-sm font-semibold transition-colors focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none",
        variants[variant],
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
}
