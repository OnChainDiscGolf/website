"use client";

import { motion } from "framer-motion";
import { ExternalLink, Bitcoin, Zap, Lock, Network } from "lucide-react";

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
    return (
        <section id="learn-more" className="py-24 bg-brand-dark relative">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-heading font-bold mb-6">
                        Built on Open Protocols
                    </h2>
                    <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                        We believe in open source, privacy, and freedom.
                        Learn more about the technologies that power OnChainDiscgolf.
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
