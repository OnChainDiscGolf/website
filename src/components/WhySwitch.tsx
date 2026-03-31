"use client";

import { motion } from "framer-motion";
import { X, Check } from "lucide-react";

const oldWay = [
  "Pass around cash or forget to collect",
  "Argue about scores after the round",
  "Text everyone to Venmo you",
  "One person stuck managing the money",
  "Paper scorecards get lost or wet",
];

const onChainWay = [
  "Entry fees collected before the first throw",
  "Real-time scores everyone can see",
  "Winner gets paid instantly when the round ends",
  "Nobody holds the money — it's trustless",
  "Digital scores saved and shareable",
];

export default function WhySwitch() {
  return (
    <section className="py-20 sm:py-28 relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <h2 className="text-3xl sm:text-4xl font-heading font-bold mb-4">
            Why Make the Switch?
          </h2>
          <p className="text-white/50 max-w-xl mx-auto">
            If you&apos;ve ever chased someone down for $5 after a round, this
            is for you.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 sm:gap-8">
          {/* Old Way */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="rounded-2xl border border-white/10 bg-brand-surface/40 p-6 sm:p-8"
          >
            <h3 className="text-lg font-heading font-semibold text-white/40 mb-6">
              The Old Way
            </h3>
            <ul className="space-y-4">
              {oldWay.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="mt-0.5 flex-shrink-0 w-5 h-5 rounded-full bg-red-500/10 flex items-center justify-center">
                    <X size={12} className="text-red-400" />
                  </span>
                  <span className="text-white/50">{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* On-Chain Way */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="rounded-2xl border border-brand-primary/20 bg-brand-surface/40 p-6 sm:p-8"
          >
            <h3 className="text-lg font-heading font-semibold text-brand-primary mb-6">
              The On-Chain Way
            </h3>
            <ul className="space-y-4">
              {onChainWay.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="mt-0.5 flex-shrink-0 w-5 h-5 rounded-full bg-brand-primary/10 flex items-center justify-center">
                    <Check size={12} className="text-brand-primary" />
                  </span>
                  <span className="text-white/80">{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Subtle tech note */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center text-white/30 text-sm mt-10"
        >
          Bitcoin under the hood. You just see dollars and disc golf.
        </motion.p>
      </div>
    </section>
  );
}
