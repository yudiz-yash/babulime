import Link from "next/link";
import Image from "next/image";
import { APP_NAME, IMAGES } from "@/constants";
import logo from '../../assets/images/logo.png'
const footerLinks = [
  { label: "Privacy Policy", href: "/privacy" },
  { label: "Quality Assurance", href: "/quality" },
  { label: "Logistics Support", href: "/logistics" },
];

export function AppFooter() {
  return (
    <footer className="bg-slate-900 text-white py-12 px-6 lg:px-40 border-t border-white/5">
      <div className="flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="flex items-center gap-4">
          <Image
            src={logo}
            alt="Babu Lime Logo"
            width={70}
            height={70}
            className="object-contain"
          />
        </div>
        <div className="flex gap-8 text-sm text-slate-400">
          {footerLinks.map(({ label, href }) => (
            <Link key={href} href={href} className="hover:text-white">
              {label}
            </Link>
          ))}
        </div>
        <p className="text-slate-500 text-sm">
          © 1985-2024 {APP_NAME}. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}
