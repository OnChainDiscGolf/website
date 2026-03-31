"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Download, Menu, X } from "lucide-react";

const APK_URL =
  "https://github.com/OnChainDiscGolf/app/releases/latest/download/on-chain-disc-golf-v1.1.0.apk";

const navLinks = [
  { label: "Features", href: "#features" },
  { label: "How It Works", href: "#how-it-works" },
  { label: "FAQ", href: "#faq" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setMobileOpen(false);
    const el = document.querySelector(href);
    el?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-brand-dark/80 backdrop-blur-lg border-b border-white/5"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2 group">
          <div className="w-8 h-8 rounded-full bg-brand-primary/20 flex items-center justify-center border border-brand-primary/30">
            <span className="text-brand-primary font-heading font-bold text-sm">
              OC
            </span>
          </div>
          <span className="font-heading font-semibold text-white text-sm hidden sm:block">
            On-Chain Disc Golf
          </span>
        </a>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <button
              key={link.href}
              onClick={() => handleNavClick(link.href)}
              className="text-sm text-white/60 hover:text-white transition-colors"
            >
              {link.label}
            </button>
          ))}
          <a
            href={APK_URL}
            className="flex items-center gap-2 px-4 py-2 bg-brand-primary hover:bg-brand-primary/90 text-white text-sm font-semibold rounded-full transition-all hover:scale-105"
          >
            <Download size={16} />
            Download APK
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden p-2 text-white/70 hover:text-white"
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-brand-dark/95 backdrop-blur-lg border-b border-white/5 overflow-hidden"
          >
            <div className="px-4 py-4 flex flex-col gap-3">
              {navLinks.map((link) => (
                <button
                  key={link.href}
                  onClick={() => handleNavClick(link.href)}
                  className="text-left text-white/70 hover:text-white py-2 text-sm transition-colors"
                >
                  {link.label}
                </button>
              ))}
              <a
                href={APK_URL}
                className="flex items-center justify-center gap-2 px-4 py-3 bg-brand-primary hover:bg-brand-primary/90 text-white text-sm font-semibold rounded-full transition-all mt-2"
              >
                <Download size={16} />
                Download APK
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
