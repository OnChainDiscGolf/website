"use client";

import { motion } from "framer-motion";
import { ArrowRight, Download } from "lucide-react";

export default function Hero() {
    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
            {/* Background Elements */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-brand-primary/10 via-brand-dark to-brand-dark z-0" />

            <div className="container mx-auto px-4 z-10 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <h1 className="text-5xl md:text-7xl font-heading font-bold mb-6">
                        Play Disc Golf. <span className="text-gradient">Win Bitcoin.</span>
                    </h1>
                    <p className="text-xl md:text-2xl text-gray-300 mb-10 max-w-3xl mx-auto">
                        The first disc golf app where you compete with friends, track scores,
                        and get paid instantly when you win—all through your phone. No accounts
                        to create, no waiting for payouts, no hassle.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
                        <a
                            href="https://app.onchaindiscgolf.com"
                            className="px-8 py-4 bg-brand-primary hover:bg-emerald-600 text-brand-dark font-bold rounded-full transition-all transform hover:scale-105 flex items-center justify-center gap-2"
                            aria-label="Launch OnChainDiscGolf App"
                        >
                            Launch App <ArrowRight className="w-5 h-5" />
                        </a>
                        <button
                            onClick={() => {
                                const learnMore = document.getElementById('learn-more');
                                learnMore?.scrollIntoView({ behavior: 'smooth', block: 'start' });
                            }}
                            className="px-8 py-4 border border-brand-secondary text-brand-secondary hover:bg-brand-secondary/10 font-bold rounded-full transition-all flex items-center justify-center gap-2"
                            aria-label="Learn more about OnChainDiscGolf"
                        >
                            Learn More <Download className="w-5 h-5" />
                        </button>
                    </div>

                    {/* QR Code for Desktop */}
                    <div className="hidden md:flex flex-col items-center animate-fade-in">
                        <div className="bg-white p-2 rounded-xl shadow-lg shadow-brand-primary/20 mb-3">
                            <img
                                src="https://api.qrserver.com/v1/create-qr-code/?size=120x120&data=https://app.onchaindiscgolf.com&bgcolor=ffffff"
                                alt="Scan to Play"
                                className="w-32 h-32"
                            />
                        </div>
                        <p className="text-sm text-gray-400 font-mono flex items-center gap-2">
                            <span className="w-2 h-2 rounded-full bg-brand-primary animate-pulse" />
                            Scan to Play on Mobile
                        </p>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
