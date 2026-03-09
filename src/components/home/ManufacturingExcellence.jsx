import Image from "next/image";
import { IMAGES } from "@/constants";

const STEPS = [
  {
    num: "01",
    title: "Raw Material Selection",
    description: "Sourcing premium natural lime stones from certified quarries.",
  },
  {
    num: "02",
    title: "Purification & Hydration",
    description: "Controlled hydration process using filtered industrial water.",
  },
  {
    num: "03",
    title: "Micro-Refining",
    description: "Stainless steel filters ensure uniform, smooth texture.",
  },
  {
    num: "04",
    title: "Automated Packaging",
    description: "Sealed in moisture-proof containers without human contact.",
  },
  {
    num: "05",
    title: "Sealed Dispatch",
    description:
      "Final QC check and tracking integration for pan-India logistics.",
  },
];

export function ManufacturingExcellence() {
  return (
    <section id="manufacturing" className="py-20 px-6 lg:px-40 bg-primary/5">
      <div className="flex flex-col lg:flex-row gap-16 items-center">
        <div className="lg:w-1/3">
          <h2 className="text-4xl font-black text-slate-900 dark:text-white mb-6 leading-tight">
            Manufacturing Excellence
          </h2>
          <p className="text-slate-600 dark:text-slate-400 mb-8 pb-10">
            Our rigorous 5-step process ensures that every gram of Babu Lime
            meets international quality standards before it reaches the
            consumer.
          </p>
          <div className="relative rounded-2xl shadow-lg border-4 border-white dark:border-slate-800 overflow-hidden aspect-square max-w-md">
            <Image
              src={IMAGES.manufacturingProduct}
              alt="High quality white lime product sample packaging"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 33vw"
            />
          </div>
        </div>
        <div className="lg:w-2/3 grid gap-6">
          {STEPS.map(({ num, title, description }) => (
            <div
              key={num}
              className="flex items-center gap-6 p-6 bg-white dark:bg-slate-800 rounded-2xl shadow-sm border border-primary/5"
            >
              <div className="text-4xl font-black text-primary/20">{num}</div>
              <div>
                <h4 className="font-bold text-slate-900 dark:text-white">
                  {title}
                </h4>
                <p className="text-slate-500 text-sm">{description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
