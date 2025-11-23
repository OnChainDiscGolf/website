"use client";

import { motion } from "framer-motion";
import { ExternalLink, Bitcoin, Zap, Lock, Network, HelpCircle } from "lucide-react";
import { useState } from "react";

const faqs = [
    {
        question: "Do I need to know about Bitcoin to use this?",
        answer: "Nope! We handle all the technical stuff. You just see dollars and play disc golf. The app automatically converts between Bitcoin and familiar dollar amounts. If you want to learn more about the technology, we've got resources below."
    },
    {
        question: "Is this safe? Where's my money?",
        answer: "Your money is in your phone, protected by a secret key (like a password, but better). Think of it like cash—if you have your phone, you have your money. No company can freeze or seize it. The app gives you your secret key when you first install it. Keep it safe!"
    },
    {
        question: "What if I want to cash out to regular dollars?",
        answer: "Easy! You can send your Bitcoin balance to any Bitcoin exchange (like Coinbase, CashApp, or Strike) and sell it for USD. Most exchanges let you withdraw to your bank account in 1-2 days. Or just use your balance for your next disc golf round!"
    },
    {
        question: "What's the catch?",
        answer: "There isn't one. Bitcoin transactions have small network fees (usually a few cents), but there are no subscriptions, no account minimums, no hidden charges. What you win is what you get, minus tiny network fees."
    },
];

const resources = [
    {
        icon: <Bitcoin className="w-10 h-10 text-[#F7931A]" />,
        title: "Bitcoin",
        description: "The foundation of digital value. Decentralized, secure, and scarce money for the internet.",
        link: "https://bitcoin.org",
    },
    {
        icon: <Zap className="w-10 h-10 text-[#7B1AF7]" />,
        title: "Lightning Network",
        description: "A layer-2 protocol for instant, low-cost global payments built on top of Bitcoin.",
        link: "https://strike.me/en/learn/what-is-the-lightning-network/",
    },
    {
        icon: <Lock className="w-10 h-10 text-brand-primary" />,
        title: "Cashu",
        description: "A free and open-source Chaumian Ecash protocol for privacy and scalability.",
        link: "https://cashu.space",
    },
    {
        icon: <Network className="w-10 h-10 text-[#8e44ad]" />,
        title: "Nostr",
        description: "A simple, open protocol that enables global, decentralized, and censorship-resistant social media.",
        link: "https://nostr.how",
    },
];

export default function LearnMore() {
    const [expandedFaq, setExpandedFaq] = useState<number | null>(null);

    return (
        <section id="learn-more" className="py-24 bg-brand-dark relative">
            <div className="container mx-auto px-4">
                {/* FAQ Section */}
                <div className="max-w-3xl mx-auto mb-20">
                    <div className="text-center mb-12">
                        <div className="inline-flex items-center justify-center gap-3 mb-4">
                            <HelpCircle className="w-10 h-10 text-brand-accent" />
                        </div>
                        <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
                            Common Questions
                        </h2>
                        <p className="text-lg text-gray-400">
                            New to Bitcoin? No problem. Here's what you need to know.
                        </p>
                    </div>

                    <div className="space-y-4">
                        {faqs.map((faq, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 10 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1 }}
                                viewport={{ once: true }}
                                className="bg-brand-surface/50 border border-white/10 rounded-xl overflow-hidden hover:border-brand-primary/30 transition-colors"
                            >
                                <button
                                    onClick={() => setExpandedFaq(expandedFaq === index ? null : index)}
                                    className="w-full text-left p-6 flex items-start justify-between gap-4"
                                >
                                    <span className="text-lg font-medium text-white pr-4">{faq.question}</span>
                                    <span className="text-brand-primary text-2xl flex-shrink-0 transition-transform" style={{
                                        transform: expandedFaq === index ? 'rotate(45deg)' : 'rotate(0deg)'
                                    }}>
                                        +
                                    </span>
                                </button>
                                {expandedFaq === index && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: "auto", opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        className="px-6 pb-6"
                                    >
                                        <p className="text-gray-300 leading-relaxed">{faq.answer}</p>
                                    </motion.div>
                                )}
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* Deep Dive Resources */}
                <div className="text-center mb-12">
                    <h3 className="text-2xl md:text-3xl font-heading font-bold mb-4">
                        Want to Learn More?
                    </h3>
                    <p className="text-lg text-gray-400 max-w-2xl mx-auto">
                        Dive deeper into the open protocols and technologies that power OnChainDiscGolf.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {resources.map((resource, index) => (
                        <motion.a
                            key={index}
                            href={resource.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="group p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-brand-primary/50 hover:bg-white/10 transition-all flex flex-col items-center text-center"
                        >
                            <div className="mb-4 p-3 rounded-full bg-white/5 group-hover:scale-110 transition-transform">
                                {resource.icon}
                            </div>
                            <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
                                {resource.title}
                                <ExternalLink className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                            </h3>
                            <p className="text-sm text-gray-400">
                                {resource.description}
                            </p>
                        </motion.a>
                    ))}
                </div>
            </div>
        </section>
    );
}
