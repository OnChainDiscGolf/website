"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Download } from "lucide-react";

export default function Hero() {
    const [isTooltipVisible, setIsTooltipVisible] = useState(false);

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
                    {/* Brand Name - Largest Element */}
                    <h1 className="text-6xl md:text-8xl lg:text-9xl font-heading font-bold mb-4 md:mb-6 tracking-tight relative z-20">
                        <span className="text-gradient">On-Chain</span>
                        <span
                            className="text-gradient cursor-help ml-1 relative align-top text-3xl md:text-5xl"
                            onMouseEnter={() => setIsTooltipVisible(true)}
                            onMouseLeave={() => setIsTooltipVisible(false)}
                            onClick={() => setIsTooltipVisible(!isTooltipVisible)}
                        >
                            *
                        </span> Disc Golf

                        <AnimatePresence>
                            {isTooltipVisible && (
                                <motion.div
                                    initial={{ opacity: 0, y: 10, scale: 0.95 }}
                                    animate={{ opacity: 1, y: 0, scale: 1 }}
                                    exit={{ opacity: 0, y: 10, scale: 0.95 }}
                                    transition={{ duration: 0.2 }}
                                    className="absolute left-1/2 -translate-x-1/2 top-full mt-2 w-[90vw] max-w-sm p-4 bg-brand-surface border border-brand-primary/20 rounded-xl shadow-2xl z-50 pointer-events-none"
                                >
                                    <p className="text-base font-medium text-gray-200 leading-relaxed font-sans normal-case tracking-normal">
                                        It&apos;s not actually on the Bitcoin chain. We use Lightning and Cashu ;)
                                    </p>
                                    {/* Arrow pointing up */}
                                    <div className="absolute left-1/2 -translate-x-1/2 -top-2 w-4 h-4 bg-brand-surface border-t border-l border-brand-primary/20 transform rotate-45" />
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </h1>

                    {/* Slogan */}
                    <p className="text-2xl md:text-4xl font-heading font-semibold mb-6 md:mb-8 text-gray-200">
                        The Future of Disc Golf is <span className="text-gradient">On-Chain</span>
                    </p>

                    {/* Value Proposition */}
                    <p className="text-lg md:text-xl text-gray-300 mb-8 md:mb-10 max-w-3xl mx-auto">
                        Compete with friends, track scores, and split the pot instantly—all through your phone.
                        Everyone antes up, winners take home Bitcoin. No accounts, no waiting, no hassle.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8 md:mb-12">
                        <a
                            href="https://app.onchaindiscgolf.com"
                            className="px-8 py-4 bg-brand-primary hover:bg-emerald-600 text-brand-dark font-bold rounded-full transition-all transform hover:scale-105 flex items-center justify-center gap-2"
                            aria-label="Launch On-Chain Disc Golf App"
                        >
                            Launch App <ArrowRight className="w-5 h-5" />
                        </a>
                        <button
                            onClick={() => {
                                const learnMore = document.getElementById('learn-more');
                                learnMore?.scrollIntoView({ behavior: 'smooth', block: 'start' });
                            }}
                            className="px-8 py-4 border border-brand-secondary text-brand-secondary hover:bg-brand-secondary/10 font-bold rounded-full transition-all flex items-center justify-center gap-2"
                            aria-label="Learn more about On-Chain Disc Golf"
                        >
                            Learn More <Download className="w-5 h-5" />
                        </button>
                    </div>

                    {/* QR Code for Desktop */}
                    <div className="hidden md:flex flex-col items-center animate-fade-in">
                        <div className="p-2 rounded-xl bg-gradient-to-r from-brand-primary to-brand-secondary shadow-lg shadow-brand-primary/20 mb-3">
                            <div className="bg-white p-2 rounded-lg">
                                <img
                                    src="https://api.qrserver.com/v1/create-qr-code/?size=120x120&data=https://app.onchaindiscgolf.com&bgcolor=ffffff"
                                    alt="Scan to Play"
                                    className="w-32 h-32"
                                />
                            </div>
                        </div>
                        <p className="text-sm text-gray-300 font-medium flex items-center gap-2">
                            <span className="w-2 h-2 rounded-full bg-brand-primary animate-pulse" />
                            Scan with mobile to install on phone
                        </p>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
