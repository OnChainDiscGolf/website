"use client";

import { motion } from "framer-motion";
import { Download as DownloadIcon, Globe, Smartphone, Monitor } from "lucide-react";
import Image from "next/image";

const APK_URL =
  "https://github.com/OnChainDiscGolf/app/releases/latest/download/on-chain-disc-golf-v1.1.0.apk";
const PWA_URL = "https://app.onchaindiscgolf.com";
const GITHUB_URL = "https://github.com/OnChainDiscGolf";

export default function Download() {
  return (
    <section id="download" className="py-20 sm:py-28 relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <h2 className="text-3xl sm:text-4xl font-heading font-bold mb-4">
            Get the App
          </h2>
          <p className="text-white/50 max-w-lg mx-auto">
            Available for Android and as a web app for any device.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 sm:gap-8 mb-12">
          {/* Android */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="rounded-2xl border border-brand-primary/20 bg-brand-surface/40 p-6 sm:p-8 text-center"
          >
            <Smartphone
              size={40}
              className="text-brand-primary mx-auto mb-4"
            />
            <h3 className="text-xl font-heading font-semibold mb-2">
              Android
            </h3>
            <p className="text-white/50 text-sm mb-6">
              Download the APK directly. No Play Store needed.
            </p>
            <a
              href={APK_URL}
              className="inline-flex items-center gap-2 px-6 py-3 bg-brand-primary hover:bg-brand-primary/90 text-white font-semibold rounded-full transition-all hover:scale-105 text-sm"
            >
              <DownloadIcon size={18} />
              Download APK
            </a>
            <p className="text-white/30 text-xs mt-4">
              v1.1.0 &middot; Android 7.0+
            </p>
          </motion.div>

          {/* iOS / Web */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="rounded-2xl border border-white/10 bg-brand-surface/40 p-6 sm:p-8 text-center"
          >
            <Globe size={40} className="text-brand-secondary mx-auto mb-4" />
            <h3 className="text-xl font-heading font-semibold mb-2">
              iOS & Web
            </h3>
            <p className="text-white/50 text-sm mb-6">
              Open in Safari, tap Share, then &ldquo;Add to Home Screen.&rdquo;
            </p>
            <a
              href={PWA_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 border border-brand-secondary/40 hover:border-brand-secondary/60 text-brand-secondary hover:text-white font-semibold rounded-full transition-all hover:scale-105 text-sm"
            >
              <Globe size={18} />
              Open Web App
            </a>
            <p className="text-white/30 text-xs mt-4">
              Works on any device with a browser
            </p>
          </motion.div>
        </div>

        {/* QR Code for desktop visitors */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="hidden md:flex flex-col items-center gap-4"
        >
          <div className="flex items-center gap-2 text-white/30 text-sm">
            <Monitor size={16} />
            <span>On a computer? Scan to open on your phone.</span>
          </div>
          <div className="p-3 bg-white rounded-xl">
            <Image
              src={`https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${encodeURIComponent(PWA_URL)}&bgcolor=FFFFFF&color=0f172a`}
              alt="QR code to open On-Chain Disc Golf"
              width={150}
              height={150}
              unoptimized
            />
          </div>
        </motion.div>

        {/* Open source note */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center text-white/30 text-sm mt-10"
        >
          Open source.{" "}
          <a
            href={GITHUB_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="text-brand-primary/60 hover:text-brand-primary transition-colors underline underline-offset-2"
          >
            Check the code on GitHub.
          </a>
        </motion.p>
      </div>
    </section>
  );
}
