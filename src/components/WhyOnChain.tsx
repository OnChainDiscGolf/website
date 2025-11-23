"use client";

import { motion } from "framer-motion";
import { X, Check, TrendingUp, Users } from "lucide-react";

export default function WhyOnChain() {
    return (
        <section className="py-24 bg-brand-dark/50 relative overflow-hidden">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-heading font-bold mb-6">
                        Why OnChain Disc Golf?
                    </h2>
                    <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                        A better way to play cash games—for everyone.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto mb-16">
                    {/* Left Column - For Disc Golfers */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="bg-brand-surface/50 border border-white/10 rounded-2xl p-8"
                    >
                        <h3 className="text-2xl font-heading font-bold mb-6 text-center">Traditional Cash Games</h3>

                        <div className="space-y-4">
                            <div className="flex items-start gap-3">
                                <X className="w-6 h-6 text-red-400 flex-shrink-0 mt-1" />
                                <div>
                                    <p className="text-gray-300 font-medium">Collect cash from everyone</p>
                                    <p className="text-sm text-gray-500">Someone always "forgot their wallet"</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-3">
                                <X className="w-6 h-6 text-red-400 flex-shrink-0 mt-1" />
                                <div>
                                    <p className="text-gray-300 font-medium">One person holds the pot</p>
                                    <p className="text-sm text-gray-500">Do you trust them? Do they trust you?</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-3">
                                <X className="w-6 h-6 text-red-400 flex-shrink-0 mt-1" />
                                <div>
                                    <p className="text-gray-300 font-medium">Manual payout after the round</p>
                                    <p className="text-sm text-gray-500">"I'll Venmo you later" = never</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-3">
                                <X className="w-6 h-6 text-red-400 flex-shrink-0 mt-1" />
                                <div>
                                    <p className="text-gray-300 font-medium">Can't play if you forgot cash</p>
                                    <p className="text-sm text-gray-500">Your phone doesn't help</p>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Right Column - OnChain Way */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="bg-gradient-to-br from-brand-primary/10 to-brand-secondary/10 border border-brand-primary/30 rounded-2xl p-8"
                    >
                        <h3 className="text-2xl font-heading font-bold mb-6 text-center">OnChain Way</h3>

                        <div className="space-y-4">
                            <div className="flex items-start gap-3">
                                <Check className="w-6 h-6 text-brand-primary flex-shrink-0 mt-1" />
                                <div>
                                    <p className="text-gray-300 font-medium">Everyone pays through the app</p>
                                    <p className="text-sm text-gray-400">Your phone is your wallet</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-3">
                                <Check className="w-6 h-6 text-brand-primary flex-shrink-0 mt-1" />
                                <div>
                                    <p className="text-gray-300 font-medium">Money held by math, not a person</p>
                                    <p className="text-sm text-gray-400">Zero trust required</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-3">
                                <Check className="w-6 h-6 text-brand-primary flex-shrink-0 mt-1" />
                                <div>
                                    <p className="text-gray-300 font-medium">Instant, automatic payouts</p>
                                    <p className="text-sm text-gray-400">Winner gets paid when round ends</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-3">
                                <Check className="w-6 h-6 text-brand-primary flex-shrink-0 mt-1" />
                                <div>
                                    <p className="text-gray-300 font-medium">Always ready to play</p>
                                    <p className="text-sm text-gray-400">If you have your phone, you're good</p>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>

                {/* Bottom Section - For Bitcoiners */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="max-w-4xl mx-auto bg-brand-secondary/10 border border-brand-secondary/30 rounded-2xl p-8"
                >
                    <h3 className="text-2xl font-heading font-bold mb-6 text-center flex items-center justify-center gap-3">
                        <Users className="w-8 h-8 text-brand-secondary" />
                        Why Disc Golf?
                    </h3>

                    <div className="grid md:grid-cols-2 gap-6">
                        <div className="flex items-start gap-3">
                            <TrendingUp className="w-6 h-6 text-brand-accent flex-shrink-0 mt-1" />
                            <div>
                                <p className="text-gray-300 font-medium mb-1">50M+ players worldwide</p>
                                <p className="text-sm text-gray-400">Fastest growing sport in the US</p>
                            </div>
                        </div>

                        <div className="flex items-start gap-3">
                            <Check className="w-6 h-6 text-brand-primary flex-shrink-0 mt-1" />
                            <div>
                                <p className="text-gray-300 font-medium mb-1">Cash games are standard culture</p>
                                <p className="text-sm text-gray-400">Perfect Bitcoin use case</p>
                            </div>
                        </div>

                        <div className="flex items-start gap-3">
                            <Check className="w-6 h-6 text-brand-primary flex-shrink-0 mt-1" />
                            <div>
                                <p className="text-gray-300 font-medium mb-1">Reputation matters in local scenes</p>
                                <p className="text-sm text-gray-400">Built on Nostr identity protocol</p>
                            </div>
                        </div>

                        <div className="flex items-start gap-3">
                            <Check className="w-6 h-6 text-brand-primary flex-shrink-0 mt-1" />
                            <div>
                                <p className="text-gray-300 font-medium mb-1">Instant settlement solves real problems</p>
                                <p className="text-sm text-gray-400">No more payment app hassles</p>
                            </div>
                        </div>
                    </div>
                </motion.div>

                {/* Educational Callout */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mt-8 max-w-3xl mx-auto bg-black/30 border border-brand-accent/30 rounded-xl p-6"
                >
                    <div className="flex items-start gap-4">
                        <div className="flex-shrink-0 text-2xl">💡</div>
                        <div>
                            <p className="text-brand-accent font-bold mb-2">What's "On-Chain" mean?</p>
                            <p className="text-gray-300 text-sm leading-relaxed">
                                Traditional money needs banks. Bitcoin money needs math. "On-chain" means your
                                winnings are secured by Bitcoin's network, not by trusting your buddy to Venmo
                                you later. It's like having a neutral referee that everyone can verify but nobody controls.
                            </p>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
