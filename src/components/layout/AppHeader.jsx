"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import logo from '../../assets/images/logo.png'

const navItems = [
  { label: "About Us", href: "#about" },
  { label: "Products", href: "#products" },
  { label: "Manufacturing", href: "#manufacturing" },
  { label: "Distribution", href: "#distribution" },
];

export function AppHeader() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="relative flex items-center justify-between whitespace-nowrap border-b border-solid border-primary/10 px-6 py-4 lg:px-20 bg-white/80 dark:bg-background-dark/80 backdrop-blur-md sticky top-0 z-50">
      <Link href="/" className="flex items-center gap-4 text-primary">
        <Image
          src={logo}
          alt="Babu Lime Logo"
          width={70}
          height={70}
          className="object-contain"
        />
      </Link>
      <nav className="hidden md:flex flex-1 justify-end gap-8 items-center">
        <div className="flex items-center gap-8">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-slate-700 dark:text-slate-300 text-sm font-semibold hover:text-primary transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              {item.label}
            </Link>
          ))}
        </div>
        <Link
          href="#contact"
          className="bg-primary text-white px-6 py-2 rounded-lg text-sm font-bold hover:bg-primary/90 transition-all"
          onClick={() => setMobileMenuOpen(false)}
        >
          Contact Us
        </Link>
      </nav>
      <button
        type="button"
        className="md:hidden text-primary p-2"
        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        aria-label="Toggle menu"
      >
        <span className="material-symbols-outlined">menu</span>
      </button>
      {mobileMenuOpen && (
        <div className="absolute top-full left-0 right-0 bg-white dark:bg-background-dark border-b border-primary/10 p-6 md:hidden flex flex-col gap-4">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-slate-700 dark:text-slate-300 text-sm font-semibold hover:text-primary"
              onClick={() => setMobileMenuOpen(false)}
            >
              {item.label}
            </Link>
          ))}
          <Link
            href="#contact"
            className="bg-primary text-white px-6 py-2 rounded-lg text-sm font-bold text-center"
            onClick={() => setMobileMenuOpen(false)}
          >
            Contact Us
          </Link>
        </div>
      )}
    </header>
  );
}
