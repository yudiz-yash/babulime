import Link from "next/link";
import { IMAGES } from "@/constants";

const heroBgStyle = {
  backgroundImage: `linear-gradient(to right, rgba(25, 21, 30, 0.9) 0%, rgba(25, 21, 30, 0.4) 100%), url("${IMAGES.heroBg}")`,
};

export function HeroSection() {
  return (
    <section className="relative w-full">
      <div
        className="flex min-h-[600px] flex-col items-start justify-center px-6 lg:px-40 py-20 bg-cover bg-center relative overflow-hidden"
        style={heroBgStyle}
      >
        <div className="max-w-3xl z-10">
          <h1 className="text-white text-5xl lg:text-7xl font-black leading-[1.1] tracking-tight mb-6">
            India&apos;s Trusted Authority in{" "}
            <span className="text-primary">Food-Grade</span> Natural White Lime
          </h1>
          <p className="text-slate-200 text-lg lg:text-xl font-normal leading-relaxed mb-10 max-w-2xl pb-5">
            Delivering purity, precision and performance since 1985. Manufactured
            in Rajkot. Serving Gujarat. Expanding Pan-India.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link
              href="#about"
              className="bg-primary text-white px-8 py-4 rounded-xl text-lg font-bold hover:shadow-lg hover:shadow-primary/30 transition-all flex items-center gap-2"
            >
              Discover More{" "}
              <span className="material-symbols-outlined">arrow_forward</span>
            </Link>
            <Link
              href="#products"
              className="bg-white/10 backdrop-blur-sm border border-white/20 text-white px-8 py-4 rounded-xl text-lg font-bold hover:bg-white/20 transition-all"
            >
              View Products
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
