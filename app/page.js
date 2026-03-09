import Navbar from "@/components/Navbar/Navbar";
import Hero from "@/components/Hero/Hero";
import About from "@/components/About/About";
import Features from "@/components/Features/Features";
import TraditionTimeline from "@/components/TraditionTimeline/TraditionTimeline";
import IndustryTrust from "@/components/IndustryTrust/IndustryTrust";
import Manufacturing from "@/components/Manufacturing/Manufacturing";
import Products from "@/components/Products/Products";
import Compliance from "@/components/Compliance/Compliance";
import Distribution from "@/components/Distribution/Distribution";
import Branding from "@/components/Branding/Branding";
import Careers from "@/components/Careers/Careers";
import CTA from "@/components/CTA/CTA";
import Footer from "@/components/Footer/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50 flex flex-col pt-16 scroll-smooth">
      <Navbar />
      <Hero />
      <About />
      <Features />
      <TraditionTimeline />
      <IndustryTrust />
      <Manufacturing />
      <Products />
      <Compliance />
      <Distribution />
      <Branding />
      <Careers />
      <CTA />
      <Footer />
    </main>
  );
}
