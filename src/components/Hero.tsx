"use client";

import { motion } from "framer-motion";
import { ArrowRight, Download } from "lucide-react";

export default function Hero() {
    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
            {/* Background Elements */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-brand-green/10 via-brand-dark to-brand-dark z-0" />

            <div className="container mx-auto px-4 z-10 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <h1 className="text-5xl md:text-7xl font-heading font-bold mb-6">
                        The Future of Disc Golf is <span className="text-gradient">On-Chain</span>
                    </h1>
                    <p className="text-xl md:text-2xl text-gray-300 mb-10 max-w-3xl mx-auto">
                        Compete, Earn, and Connect with the first Nostr-powered Disc Golf wallet.
                        Experience instant payouts and true ownership.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <button className="px-8 py-4 bg-brand-green hover:bg-green-500 text-brand-dark font-bold rounded-full transition-all transform hover:scale-105 flex items-center justify-center gap-2">
                            Launch App <ArrowRight className="w-5 h-5" />
                        </button>
                        <button className="px-8 py-4 border border-brand-blue text-brand-blue hover:bg-brand-blue/10 font-bold rounded-full transition-all flex items-center justify-center gap-2">
                            Learn More <Download className="w-5 h-5" />
                        </button>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
