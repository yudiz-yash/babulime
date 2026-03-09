import { AppFooter, AppHeader } from "@/components/layout";
import {
  HeroSection,
  TrustBar,
  AboutSection,
  WhyIndustryTrustsUs,
  ManufacturingExcellence,
  ProductPortfolio,
  VisionCTA,
} from "@/components/home";
import { ContactSection } from "@/components/contact";

export default function Home() {
  return (
    <div className="relative flex min-h-screen w-full flex-col overflow-x-hidden">
      <AppHeader />
      <main>
        <HeroSection />
        <TrustBar />
        <AboutSection />
        <WhyIndustryTrustsUs />
        <ManufacturingExcellence />
        <ProductPortfolio />
        <VisionCTA />
        <ContactSection />
      </main>
      <AppFooter />
    </div>
  );
}
