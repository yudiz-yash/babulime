import Image from "next/image";
import Link from "next/link";
import { IMAGES } from "@/constants";

const PRODUCTS = [
  {
    id: "parcel",
    image: IMAGES.productParcel,
    imageAlt: "Bulk white industrial bags in a clean warehouse",
    title: "Parcel Range",
    description:
      "Bulk packets designed for industrial kitchens and high-volume consumers.",
  },
  {
    id: "chunna",
    image: IMAGES.productChunna,
    imageAlt: "Convenient paste tubes arranged neatly",
    title: "Chunna Paste Range",
    description:
      "Ready-to-use smooth lime paste in premium tube and pouch formats.",
  },
  {
    id: "bottle",
    image: IMAGES.productBottle,
    imageAlt: "Premium bottled products with minimalist branding",
    title: "Bottle & Pan Kit",
    description:
      "Specially curated kits for specialized culinary and traditional applications.",
  },
];

export function ProductPortfolio() {
  return (
    <section
      id="products"
      className="py-24 px-6 lg:px-40 bg-white dark:bg-slate-900"
    >
      <div className="text-left max-w-3xl mx-auto mb-16">
        <h2 className="text-4xl font-black text-slate-900 dark:text-white mb-6">
          Product Portfolio
        </h2>
        <p className="text-slate-500 dark:text-slate-400 pb-10">
          Versatile range tailored for retail and commercial applications.
        </p>
      </div>
      <div className="grid md:grid-cols-3 gap-8">
        {PRODUCTS.map(({ id, image, imageAlt, title, description }) => (
          <div
            key={id}
            className="group relative bg-background-light dark:bg-background-dark rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all border border-primary/5"
          >
            <div className="h-64 bg-slate-200 overflow-hidden relative">
              <Image
                src={image}
                alt={imageAlt}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
            </div>
            <div className="p-8">
              <h3 className="text-2xl font-bold mb-2">{title}</h3>
              <p className="text-slate-500 text-sm mb-6">{description}</p>
              <Link
                href={`/products#${id}`}
                className="text-primary font-bold flex items-center gap-2 group/btn pt-5"
              >
                Learn More{" "}
                <span className="material-symbols-outlined text-sm group-hover/btn:translate-x-1 transition-transform">
                  arrow_forward
                </span>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
