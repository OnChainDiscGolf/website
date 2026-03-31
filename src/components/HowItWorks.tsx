"use client";

import { motion } from "framer-motion";
import { Download, QrCode, Trophy, WifiOff } from "lucide-react";

const steps = [
  {
    icon: <Download size={28} />,
    number: "1",
    title: "Download the App",
    description:
      "Grab the Android APK or open the web app on iOS. No app store approval needed — no sign-up either.",
    color: "text-brand-primary",
    bg: "bg-brand-primary/10",
  },
  {
    icon: <QrCode size={28} />,
    number: "2",
    title: "Start or Join a Round",
    description:
      "Create a round and share the QR code, or scan a friend's to join. Set an optional entry fee.",
    color: "text-brand-secondary",
    bg: "bg-brand-secondary/10",
  },
  {
    icon: <Trophy size={28} />,
    number: "3",
    title: "Play and Get Paid",
    description:
      "Throw your disc, log your scores. When the round ends, the winner's prize hits their wallet automatically.",
    color: "text-brand-accent",
    bg: "bg-brand-accent/10",
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-20 sm:py-28 relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <h2 className="text-3xl sm:text-4xl font-heading font-bold mb-4">
            Up and Running in 60 Seconds
          </h2>
          <p className="text-white/50 max-w-md mx-auto">
            Three steps. No sign-up required.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {steps.map((step, i) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="relative"
            >
              {/* Connector (desktop) */}
              {i < steps.length - 1 && (
                <div className="hidden md:block absolute top-10 left-full w-full h-px bg-gradient-to-r from-white/10 to-transparent -z-10" />
              )}

              <div className="bg-brand-surface/40 border border-white/10 rounded-2xl p-6 h-full hover:border-white/20 transition-colors">
                <div className="flex items-center gap-3 mb-4">
                  <div
                    className={`flex-shrink-0 w-10 h-10 rounded-full ${step.bg} ${step.color} flex items-center justify-center text-lg font-bold font-heading`}
                  >
                    {step.number}
                  </div>
                  <div className={step.color}>{step.icon}</div>
                </div>
                <h3 className="text-lg font-heading font-semibold mb-2">
                  {step.title}
                </h3>
                <p className="text-white/50 text-sm leading-relaxed">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Offline callout */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex items-center justify-center gap-2 mt-10 text-white/30 text-sm"
        >
          <WifiOff size={14} />
          <span>Works offline too. Scores sync when you&apos;re back in range.</span>
        </motion.div>
      </div>
    </section>
  );
}
