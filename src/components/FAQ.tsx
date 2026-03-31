"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "Do I need Bitcoin to use this?",
    answer:
      "Nope. You don't need to own any Bitcoin or know anything about it. The app handles everything behind the scenes. You see dollar amounts — the Bitcoin part is invisible unless you want to dig in.",
  },
  {
    question: "Is my money safe?",
    answer:
      "Your funds stay on your device in a self-custodial wallet. Nobody else can access them — not us, not a server, nobody. Just back up your recovery phrase and you're golden.",
  },
  {
    question: "What does it cost?",
    answer:
      "The app is free. Transactions have tiny network fees (a few cents). No subscriptions, no hidden charges, no ads.",
  },
  {
    question: "Does it work on iPhone?",
    answer:
      "Yes! Open app.onchaindiscgolf.com in Safari, tap the share button, and tap \"Add to Home Screen.\" It works just like a native app. Android users can also download the APK directly.",
  },
  {
    question: "Can I cash out to real dollars?",
    answer:
      "Absolutely. Send your balance to any Bitcoin exchange — CashApp, Strike, Coinbase — and withdraw to your bank. It takes minutes.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="py-20 sm:py-28 relative">
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <h2 className="text-3xl sm:text-4xl font-heading font-bold mb-4">
            Questions? We Got You.
          </h2>
        </motion.div>

        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <motion.div
              key={faq.question}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="rounded-xl border border-white/10 bg-brand-surface/30 overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full flex items-center justify-between px-5 py-4 text-left hover:bg-white/[0.02] transition-colors"
                aria-expanded={openIndex === i}
              >
                <span className="font-medium text-white/90 pr-4">
                  {faq.question}
                </span>
                <ChevronDown
                  size={18}
                  className={`flex-shrink-0 text-white/40 transition-transform duration-200 ${
                    openIndex === i ? "rotate-180" : ""
                  }`}
                />
              </button>
              <AnimatePresence>
                {openIndex === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                    className="overflow-hidden"
                  >
                    <p className="px-5 pb-4 text-white/50 leading-relaxed">
                      {faq.answer}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
