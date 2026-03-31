"use client";

import { motion } from "framer-motion";
import { Download, Globe } from "lucide-react";
import PhoneMockup from "./PhoneMockup";

const APK_URL =
  "https://github.com/OnChainDiscGolf/app/releases/latest/download/on-chain-disc-golf-v1.1.0.apk";
const PWA_URL = "https://app.onchaindiscgolf.com";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16 pb-12">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-brand-primary/8 via-brand-dark to-brand-dark z-0" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 z-10 w-full">
        <div className="flex flex-col md:flex-row items-center gap-10 md:gap-16">
          {/* Text content */}
          <div className="flex-1 text-center md:text-left">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-brand-primary/10 border border-brand-primary/20 mb-6"
            >
              <span className="w-2 h-2 rounded-full bg-brand-primary animate-pulse" />
              <span className="text-brand-primary text-xs font-medium">
                Now available for Android
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-heading font-bold tracking-tight mb-5 leading-[1.1]"
            >
              Keep Score.
              <br />
              Place Bets.
              <br />
              <span className="text-gradient">Settle Up.</span>
            </motion.h1>

            {/* Subheadline */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="text-lg sm:text-xl text-white/60 mb-3 max-w-lg mx-auto md:mx-0 leading-relaxed"
            >
              The disc golf scorecard that handles the money. Track your rounds,
              collect entry fees, and pay out winners automatically.
            </motion.p>

            {/* Tagline */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="text-brand-accent italic text-sm mb-8"
            >
              &ldquo;We&apos;ll settle up after the round!&rdquo;
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.35 }}
              className="flex flex-col sm:flex-row gap-3 justify-center md:justify-start mb-4"
            >
              <a
                href={APK_URL}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-brand-primary hover:bg-brand-primary/90 text-white font-semibold rounded-full transition-all hover:scale-105 text-sm"
                aria-label="Download On-Chain Disc Golf APK for Android"
              >
                <Download size={18} />
                Download for Android
              </a>
              <a
                href={PWA_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 border border-brand-secondary/40 hover:border-brand-secondary/60 text-brand-secondary hover:text-white font-semibold rounded-full transition-all text-sm"
                aria-label="Open On-Chain Disc Golf web app"
              >
                <Globe size={18} />
                Try the Web App
              </a>
            </motion.div>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="text-white/30 text-xs"
            >
              Also available as a Progressive Web App for iOS
            </motion.p>
          </div>

          {/* Phone mockup */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex-shrink-0 hidden sm:block"
          >
            <PhoneMockup
              src="/screenshots/scorecard.png"
              alt="On-Chain Disc Golf scorecard"
              placeholder="Scorecard"
              placeholderIcon={
                <svg
                  width="64"
                  height="64"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <circle cx="12" cy="12" r="10" />
                  <path d="M12 6v6l4 2" />
                </svg>
              }
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
