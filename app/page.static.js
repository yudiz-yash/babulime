"use client";

import { useState, useEffect } from 'react';
import Navbar from "@/components/Navbar/Navbar";
import Banner from "@/components/Banner/Banner";
import About from "@/components/About/About";
import Features from "@/components/Features/Features";
import TraditionTimeline from "@/components/TraditionTimeline/TraditionTimeline";
import IndustryTrust from "@/components/IndustryTrust/IndustryTrust";
import Manufacturing from "@/components/Manufacturing/Manufacturing";
import Compliance from "@/components/Compliance/Compliance";
import Certification from "@/components/Certification/Certification";
import Branding from "@/components/Branding/Branding";
import Careers from "@/components/Careers/Careers";
import Contact from "@/components/Contact/Contact";
import CTA from "@/components/CTA/CTA";
import Footer from "@/components/Footer/Footer";
import HiringPopup from "@/components/HiringPopup/HiringPopup";

const API = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000/api';

const SECTION_COMPONENTS = {
  banner:        Banner,
  about:         About,
  features:      Features,
  timeline:      TraditionTimeline,
  industryTrust: IndustryTrust,
  manufacturing: Manufacturing,
  compliance:    Compliance,
  certification: Certification,
  branding:      Branding,
  careers:       Careers,
  contact:       Contact,
  cta:           CTA,
  footer:        Footer,
};

const DEFAULT_ORDER = [
  'banner', 'about', 'features', 'timeline', 'industryTrust',
  'manufacturing', 'compliance', 'certification',
  'branding', 'careers', 'contact', 'cta', 'footer',
];

export default function Home() {
  const [vis, setVis] = useState({});
  const [order, setOrder] = useState(DEFAULT_ORDER);

  useEffect(() => {
    fetch(`${API}/settings/section_visibility`)
      .then(r => r.ok ? r.json() : null)
      .then(d => { if (d) setVis(d); })
      .catch(() => {});

    fetch(`${API}/settings/section_order`)
      .then(r => r.ok ? r.json() : null)
      .then(d => { if (Array.isArray(d)) setOrder(d); })
      .catch(() => {});
  }, []);

  return (
    <main className="min-h-screen bg-gray-50 flex flex-col overflow-x-hidden w-full">
      <Navbar />
      <div className="pt-[100px]">
        {order.map((key) => {
          if (vis[key] === false) return null;
          const Component = SECTION_COMPONENTS[key];
          if (!Component) return null;
          return <Component key={key} />;
        })}
      </div>
      <HiringPopup />
    </main>
  );
}
