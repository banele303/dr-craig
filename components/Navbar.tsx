"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ThemeToggle } from "./ThemeToggle";
import { 
  Menu, 
  X, 
  Calendar, 
  Phone, 
  Sparkles,
  ArrowRight
} from "lucide-react";

// Decluttered, streamlined navigation items
const navLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Consultations", href: "/consultations" },
  { name: "Insights", href: "/insights" },
  { name: "AI Tracker", href: "/dashboard", isSpecial: true },
];

export function Navbar() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 15);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/95 dark:bg-[#0b1319]/95 backdrop-blur-md shadow-sm border-b border-sage-100 dark:border-slate-800"
          : "bg-white/80 dark:bg-[#0b1319]/80 backdrop-blur-sm border-b border-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          
          {/* Brand Logo: Clean stylized SVG emblem + Title (Zero messy image names) */}
          <Link 
            href="/" 
            className="flex items-center space-x-3 group focus:outline-none focus:ring-2 focus:ring-sage-500 rounded-xl py-1 px-1.5 transition-transform active:scale-95 shrink-0"
            aria-label="Dr. Craig Wright Home"
          >
            {/* Custom Botanical Medical SVG Emblem */}
            <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-gradient-to-tr from-sage-800 via-sage-700 to-emerald-600 text-white flex items-center justify-center shadow-sm group-hover:shadow-md transition-all">
              <svg 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                className="w-5 h-5 text-emerald-200"
                aria-hidden="true"
              >
                <path d="M12 2L12 22" />
                <path d="M17 5C17 5 12 7 12 12C12 17 17 19 17 19" />
                <path d="M7 19C7 19 12 17 12 12C12 7 7 5 7 5" />
              </svg>
            </div>
            
            <div className="flex flex-col">
              <span className="font-serif text-base sm:text-lg font-bold tracking-tight text-slate-900 dark:text-white group-hover:text-sage-700 dark:group-hover:text-emerald-400 transition-colors leading-tight">
                Dr. Craig Wright
              </span>
              <span className="text-[10px] sm:text-[11px] font-medium tracking-wider text-sage-700 dark:text-emerald-400 uppercase">
                Homeopath &bull; Phytotherapist
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links: Spacious, Clean, Decluttered */}
          <nav className="hidden lg:flex items-center space-x-1 xl:space-x-2" aria-label="Main Navigation">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`px-3.5 py-2 rounded-xl text-xs xl:text-sm font-medium transition-all ${
                    isActive
                      ? "text-sage-900 dark:text-white font-semibold bg-sage-100/80 dark:bg-slate-800 shadow-xs"
                      : link.isSpecial
                      ? "text-emerald-800 dark:text-emerald-300 font-semibold bg-emerald-50/80 dark:bg-emerald-950/40 hover:bg-emerald-100/80 dark:hover:bg-emerald-950/80"
                      : "text-slate-600 dark:text-slate-300 hover:text-slate-950 dark:hover:text-white hover:bg-sage-50/80 dark:hover:bg-slate-800/60"
                  }`}
                  aria-current={isActive ? "page" : undefined}
                >
                  <span className="flex items-center space-x-1.5">
                    {link.isSpecial && (
                      <Sparkles className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400 shrink-0" />
                    )}
                    <span>{link.name}</span>
                  </span>
                </Link>
              );
            })}
          </nav>

          {/* Desktop Right Actions: Theme Toggle & Book CTA */}
          <div className="hidden sm:flex items-center space-x-3 shrink-0">
            <ThemeToggle />
            <Link
              href="/contact"
              className="inline-flex items-center space-x-2 px-4 py-2 sm:px-5 sm:py-2.5 rounded-full text-xs font-semibold tracking-wide uppercase bg-sage-800 hover:bg-sage-700 dark:bg-emerald-600 dark:hover:bg-emerald-500 text-white shadow-sm hover:shadow transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-sage-500 focus:ring-offset-2 dark:focus:ring-offset-slate-900"
            >
              <Calendar className="w-3.5 h-3.5 text-emerald-300" />
              <span>Book Appointment</span>
            </Link>
          </div>

          {/* Mobile Actions: Theme Toggle & Hamburger */}
          <div className="flex items-center space-x-2 lg:hidden">
            <ThemeToggle />
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-sage-500"
              aria-expanded={mobileMenuOpen}
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white/98 dark:bg-[#0b1319]/98 backdrop-blur-xl border-b border-sage-100 dark:border-slate-800 px-4 pt-3 pb-6 shadow-2xl animate-in slide-in-from-top duration-200">
          <div className="flex flex-col space-y-1">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`px-4 py-3 rounded-xl text-sm font-medium transition-colors flex items-center justify-between ${
                    isActive
                      ? "text-sage-900 dark:text-white font-semibold bg-sage-100/90 dark:bg-slate-800"
                      : "text-slate-700 dark:text-slate-300 hover:bg-sage-50 dark:hover:bg-slate-800/60"
                  }`}
                  aria-current={isActive ? "page" : undefined}
                >
                  <span className="flex items-center space-x-2">
                    {link.isSpecial && (
                      <Sparkles className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                    )}
                    <span>{link.name}</span>
                  </span>
                  {isActive && <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />}
                </Link>
              );
            })}
          </div>

          <div className="mt-5 pt-4 border-t border-slate-200 dark:border-slate-800 flex flex-col space-y-3">
            <div className="flex items-center text-xs text-slate-500 dark:text-slate-400 px-2 space-x-2">
              <Phone className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
              <span>Kenilworth Practice: 021 020 1043</span>
            </div>
            <Link
              href="/contact"
              className="w-full flex items-center justify-center space-x-2 px-5 py-3 rounded-xl text-xs font-semibold tracking-wide uppercase bg-sage-800 hover:bg-sage-700 dark:bg-emerald-600 dark:hover:bg-emerald-500 text-white shadow"
            >
              <Calendar className="w-4 h-4" />
              <span>Book Consultation</span>
              <ArrowRight className="w-4 h-4 ml-1" />
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
