"use client";

import { motion } from "framer-motion";
import { Play, DollarSign, Smartphone } from "lucide-react";

const steps = [
    {
        icon: <Smartphone className="w-12 h-12 text-brand-primary" />,
        number: "1",
        title: "Get Started (30 seconds)",
        description: "Scan the QR code or visit the link on your phone. Add to your home screen. The app creates your player identity automatically—no email, no signup form.",
    },
    {
        icon: <Play className="w-12 h-12 text-brand-secondary" />,
        number: "2",
        title: "Join a Round",
        description: "Start a new game or join friends. Each player adds an entry fee (as little as $1 in Bitcoin). Play disc golf like you normally would—the app tracks your scores.",
    },
    {
        icon: <DollarSign className="w-12 h-12 text-brand-accent" />,
        number: "3",
        title: "Win & Get Paid",
        description: "Lowest score wins the pot. Winner gets paid automatically and instantly when the round ends. Cash out anytime to regular dollars, or use it for your next round.",
    },
];

export default function HowItWorks() {
    return (
        <section id="how-it-works" className="py-24 bg-brand-dark relative">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-heading font-bold mb-6">
                        How It Works
                    </h2>
                    <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                        From zero to playing in under a minute. Here's the complete process.
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                    {steps.map((step, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.2 }}
                            viewport={{ once: true }}
                            className="relative"
                        >
                            {/* Connector Line (desktop only) */}
                            {index < steps.length - 1 && (
                                <div className="hidden md:block absolute top-12 left-full w-full h-0.5 bg-gradient-to-r from-brand-primary/50 to-transparent -z-10" />
                            )}

                            <div className="bg-brand-surface/50 border border-white/10 rounded-2xl p-8 h-full hover:border-brand-primary/50 transition-colors">
                                {/* Step Number Badge */}
                                <div className="flex items-center gap-4 mb-6">
                                    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-brand-primary/20 text-brand-primary flex items-center justify-center text-2xl font-bold">
                                        {step.number}
                                    </div>
                                    <div className="flex-shrink-0">
                                        {step.icon}
                                    </div>
                                </div>

                                <h3 className="text-2xl font-heading font-bold mb-4">{step.title}</h3>
                                <p className="text-gray-400 leading-relaxed">{step.description}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Bottom Callout */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mt-12 max-w-3xl mx-auto bg-brand-secondary/10 border border-brand-secondary/30 rounded-2xl p-8 text-center"
                >
                    <p className="text-lg text-gray-300">
                        <span className="text-brand-secondary font-bold">No middleman.</span> Your entry fees go into a digital pot that math controls, not a person. When the round ends, the winner gets paid automatically. No trust required.
                    </p>
                </motion.div>
            </div>
        </section>
    );
}
