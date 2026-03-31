"use client";

import { motion } from "framer-motion";
import { Users, Zap, Trophy, QrCode, MapPin } from "lucide-react";
import PhoneMockup from "./PhoneMockup";

const features = [
  {
    icon: <Users size={48} />,
    iconColor: "text-brand-primary",
    title: "Score Together, Anywhere",
    description:
      "Real-time multiplayer scorekeeping. Everyone sees every throw as it happens. Works even with spotty cell service.",
    placeholder: "Scorecard View",
    screenshot: "/screenshots/scorecard.png",
  },
  {
    icon: <Zap size={48} />,
    iconColor: "text-bitcoin-orange",
    title: "Entry Fee In, Winnings Out",
    description:
      "Set a buy-in, collect fees automatically, and the winner gets paid the moment the round ends. No IOUs, no Venmo requests, no awkward conversations.",
    placeholder: "Settlement View",
    screenshot: "/screenshots/settlement.png",
  },
  {
    icon: <Trophy size={48} />,
    iconColor: "text-brand-accent",
    title: "Run Tournaments Like a Pro",
    description:
      "Multi-card coordination, live leaderboards, and automatic prize distribution. From casual weeklies to organized events.",
    placeholder: "Tournament Leaderboard",
    screenshot: "/screenshots/tournament.png",
  },
  {
    icon: <QrCode size={48} />,
    iconColor: "text-nostr-purple",
    title: "Scan. Join. Play.",
    description:
      "No sign-up forms. No email. No passwords. Scan a QR code and you're in the round. Your identity is a cryptographic key — private and portable.",
    placeholder: "QR Join Flow",
    screenshot: "/screenshots/qr-join.png",
  },
  {
    icon: <MapPin size={48} />,
    iconColor: "text-brand-secondary",
    title: "Find Games Near You",
    description:
      "Discover rounds happening at nearby courses, see what your friends are playing, and jump in. The disc golf community, connected.",
    placeholder: "Event Discovery",
    screenshot: "/screenshots/event-discovery.png",
  },
];

export default function AppShowcase() {
  return (
    <section id="features" className="py-20 sm:py-28 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 sm:mb-20"
        >
          <h2 className="text-3xl sm:text-4xl font-heading font-bold mb-4">
            Everything You Need on the Course
          </h2>
          <p className="text-white/50 max-w-xl mx-auto">
            Scorekeeping, payouts, tournaments, and event discovery — all in one
            app.
          </p>
        </motion.div>

        <div className="flex flex-col gap-24 sm:gap-32">
          {features.map((feature, i) => {
            const isEven = i % 2 === 0;
            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, x: isEven ? -40 : 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.7, delay: 0.1 }}
                className={`flex flex-col ${
                  isEven ? "md:flex-row" : "md:flex-row-reverse"
                } items-center gap-10 md:gap-16`}
              >
                {/* Phone mockup */}
                <div className="flex-shrink-0">
                  <PhoneMockup
                    src={feature.screenshot}
                    alt={feature.title}
                    placeholder={feature.placeholder}
                    placeholderIcon={
                      <div className={feature.iconColor}>{feature.icon}</div>
                    }
                  />
                </div>

                {/* Text */}
                <div className={`flex-1 ${isEven ? "md:text-left" : "md:text-left"} text-center md:text-left`}>
                  <div
                    className={`inline-flex items-center justify-center w-12 h-12 rounded-xl bg-white/5 mb-4 ${feature.iconColor}`}
                  >
                    {feature.icon}
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-heading font-bold mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-white/60 text-lg leading-relaxed max-w-md">
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
