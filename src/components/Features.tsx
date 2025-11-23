"use client";

import { motion } from "framer-motion";
import { Zap, Shield, Globe } from "lucide-react";

const features = [
    {
        icon: <Zap className="w-12 h-12 text-brand-accent" />,
        title: "Instant Payouts",
        description: "Get paid immediately after your round. No waiting for bank transfers.",
    },
    {
        icon: <Globe className="w-12 h-12 text-brand-secondary" />,
        title: "One Account, Anywhere",
        description: "Your reputation travels with you. Sign in once, play anywhere, no email needed.",
    },
    {
        icon: <Shield className="w-12 h-12 text-brand-primary" />,
        title: "Private & Instant",
        description: "Powered by digital cash. Transactions are private, instant, and final.",
    },
];

export default function Features() {
    return (
        <section className="py-24 bg-brand-dark/50">
            <div className="container mx-auto px-4">
                <div className="grid md:grid-cols-3 gap-8">
                    {features.map((feature, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.2 }}
                            viewport={{ once: true }}
                            className="p-8 rounded-2xl bg-brand-surface/50 border border-white/10 hover:border-brand-primary/50 transition-colors"
                        >
                            <div className="mb-6">{feature.icon}</div>
                            <h3 className="text-2xl font-heading font-bold mb-4">{feature.title}</h3>
                            <p className="text-gray-400">{feature.description}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
