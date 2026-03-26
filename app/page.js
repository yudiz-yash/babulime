import Navbar from "@/components/Navbar/Navbar";
import Banner from "@/components/Banner/Banner";
import About from "@/components/About/About";
import Features from "@/components/Features/Features";
import TraditionTimeline from "@/components/TraditionTimeline/TraditionTimeline";
import IndustryTrust from "@/components/IndustryTrust/IndustryTrust";
import Manufacturing from "@/components/Manufacturing/Manufacturing";
import Products from "@/components/Products/Products";
import Compliance from "@/components/Compliance/Compliance";
import Certification from "@/components/Certification/Certification";
import Distribution from "@/components/Distribution/Distribution";
import Branding from "@/components/Branding/Branding";
import Careers from "@/components/Careers/Careers";
import Contact from "@/components/Contact/Contact";
import CTA from "@/components/CTA/CTA";
import Footer from "@/components/Footer/Footer";
import { fetchNoCache } from "@/lib/api";

export const dynamic = 'force-dynamic';

// Map section keys to their components
const SECTION_COMPONENTS = {
  banner:        Banner,
  about:         About,
  features:      Features,
  timeline:      TraditionTimeline,
  industryTrust: IndustryTrust,
  manufacturing: Manufacturing,
  products:      Products,
  compliance:    Compliance,
  certification: Certification,
  distribution:  Distribution,
  branding:      Branding,
  careers:       Careers,
  contact:       Contact,
  cta:           CTA,
  footer:        Footer,
};

const DEFAULT_ORDER = [
  'banner', 'about', 'features', 'timeline', 'industryTrust',
  'manufacturing', 'products', 'compliance', 'certification',
  'distribution', 'branding', 'careers', 'contact', 'cta', 'footer',
];

export default async function Home() {
  const [visibility, orderData] = await Promise.all([
    fetchNoCache('/settings/section_visibility'),
    fetchNoCache('/settings/section_order'),
  ]);

  const vis = visibility || {};

  // Build order: use stored order, fall back to default, ensure all keys present
  const storedOrder = Array.isArray(orderData) ? orderData : DEFAULT_ORDER;
  const order = [
    ...storedOrder.filter(k => k in SECTION_COMPONENTS),
    ...DEFAULT_ORDER.filter(k => !storedOrder.includes(k)),
  ];

  return (
    <main className="min-h-screen bg-gray-50 flex flex-col overflow-x-hidden w-full">
      <Navbar />
      <div className="pt-[100px]">
        {/* Render sections in stored order, skip hidden ones */}
        {order.map((key) => {
          if (vis[key] === false) return null;
          const Component = SECTION_COMPONENTS[key];
          return <Component key={key} />;
        })}
      </div>
    </main>
  );
}
