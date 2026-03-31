"use client";

import { Github, Twitter, Instagram } from "lucide-react";

const socialLinks = [
  {
    label: "GitHub",
    href: "https://github.com/OnChainDiscGolf",
    icon: <Github size={18} />,
  },
  {
    label: "Twitter / X",
    href: "https://x.com/OnChainDiscGolf",
    icon: <Twitter size={18} />,
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/onchaindiscgolf/",
    icon: <Instagram size={18} />,
  },
];

export default function Footer() {
  return (
    <footer className="border-t border-white/5 bg-black/20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-10">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          {/* Brand */}
          <div className="text-center md:text-left">
            <h4 className="font-heading font-semibold text-white mb-1">
              On-Chain Disc Golf
            </h4>
            <p className="text-white/30 text-sm italic">
              &ldquo;We&apos;ll settle up after the round!&rdquo;
            </p>
          </div>

          {/* Links */}
          <div className="flex items-center gap-6 text-sm">
            <a
              href="https://app.onchaindiscgolf.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/50 hover:text-white transition-colors"
            >
              Web App
            </a>
            <a
              href="https://help.onchaindiscgolf.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/50 hover:text-white transition-colors"
            >
              Help Center
            </a>
          </div>

          {/* Socials */}
          <div className="flex gap-2">
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/40 hover:text-white transition-colors p-2 hover:bg-white/5 rounded-lg"
                aria-label={link.label}
              >
                {link.icon}
              </a>
            ))}
          </div>
        </div>

        {/* Beta disclaimer + copyright */}
        <div className="mt-8 pt-6 border-t border-white/5 text-center">
          <p className="text-white/20 text-xs mb-2">
            This app is experimental. Don&apos;t risk more than you can afford
            to lose.
          </p>
          <p className="text-white/20 text-xs">
            &copy; 2026 On-Chain Disc Golf. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
