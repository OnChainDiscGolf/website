"use client";

import { motion } from "framer-motion";
import { Share, PlusSquare, MoreVertical, Download, Smartphone, Gift } from "lucide-react";

export default function InstallGuide() {
    return (
        <section className="py-24 bg-brand-dark relative overflow-hidden">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-heading font-bold mb-6">
                        Install the App
                    </h2>
                    <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                        For the best experience, add OnChainDiscGolf to your home screen.
                        It works just like a native app, but without the app store.
                    </p>
                </div>

                {/* Why Install Callout */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="max-w-3xl mx-auto mb-12 bg-brand-primary/10 border border-brand-primary/30 rounded-2xl p-6"
                >
                    <div className="flex items-start gap-4">
                        <Smartphone className="w-8 h-8 text-brand-primary flex-shrink-0 mt-1" />
                        <div>
                            <h3 className="text-xl font-bold mb-3">Why Add to Home Screen?</h3>
                            <ul className="space-y-2 text-gray-300">
                                <li className="flex items-center gap-2">
                                    <span className="text-brand-primary">✓</span> One-tap access from your home screen
                                </li>
                                <li className="flex items-center gap-2">
                                    <span className="text-brand-primary">✓</span> Works offline for scorekeeping
                                </li>
                                <li className="flex items-center gap-2">
                                    <span className="text-brand-primary">✓</span> Faster load times than opening in browser
                                </li>
                                <li className="flex items-center gap-2">
                                    <span className="text-brand-primary">✓</span> Feels like a native app, but no App Store needed
                                </li>
                            </ul>
                        </div>
                    </div>
                </motion.div>

                <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-12">
                    {/* iOS Instructions */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="bg-white/5 border border-white/10 rounded-2xl p-8"
                    >
                        <div className="flex items-center gap-4 mb-6">
                            <div className="w-12 h-12 rounded-full bg-gray-800 flex items-center justify-center">
                                <span className="text-2xl">🍎</span>
                            </div>
                            <h3 className="text-2xl font-bold">iOS (iPhone)</h3>
                        </div>
                        <ol className="space-y-4 text-gray-300">
                            <li className="flex items-start gap-3">
                                <span className="flex-shrink-0 w-6 h-6 rounded-full bg-brand-secondary/20 text-brand-secondary flex items-center justify-center text-sm font-bold">1</span>
                                <span>
                                    Tap the <Share className="w-4 h-4 inline mx-1" /> <strong>Share</strong> button in Safari.
                                </span>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="flex-shrink-0 w-6 h-6 rounded-full bg-brand-secondary/20 text-brand-secondary flex items-center justify-center text-sm font-bold">2</span>
                                <span>
                                    Scroll down and tap <PlusSquare className="w-4 h-4 inline mx-1" /> <strong>Add to Home Screen</strong>.
                                </span>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="flex-shrink-0 w-6 h-6 rounded-full bg-brand-blue/20 text-brand-blue flex items-center justify-center text-sm font-bold">3</span>
                                <span>
                                    Tap <strong>Add</strong> in the top right corner.
                                </span>
                            </li>
                        </ol>
                    </motion.div>

                    {/* Android Instructions */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="bg-white/5 border border-white/10 rounded-2xl p-8"
                    >
                        <div className="flex items-center gap-4 mb-6">
                            <div className="w-12 h-12 rounded-full bg-gray-800 flex items-center justify-center">
                                <span className="text-2xl">🤖</span>
                            </div>
                            <h3 className="text-2xl font-bold">Android</h3>
                        </div>
                        <ol className="space-y-4 text-gray-300">
                            <li className="flex items-start gap-3">
                                <span className="flex-shrink-0 w-6 h-6 rounded-full bg-brand-primary/20 text-brand-primary flex items-center justify-center text-sm font-bold">1</span>
                                <span>
                                    Tap the <MoreVertical className="w-4 h-4 inline mx-1" /> <strong>Menu</strong> (three dots) in Chrome.
                                </span>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="flex-shrink-0 w-6 h-6 rounded-full bg-brand-primary/20 text-brand-primary flex items-center justify-center text-sm font-bold">2</span>
                                <span>
                                    Tap <Download className="w-4 h-4 inline mx-1" /> <strong>Install App</strong> or <strong>Add to Home screen</strong>.
                                </span>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="flex-shrink-0 w-6 h-6 rounded-full bg-brand-primary/20 text-brand-primary flex items-center justify-center text-sm font-bold">3</span>
                                <span>
                                    Follow the on-screen prompts to install.
                                </span>
                            </li>
                        </ol>
                    </motion.div>
                </div>

                {/* What Happens Next */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="max-w-3xl mx-auto bg-brand-accent/10 border border-brand-accent/30 rounded-2xl p-6"
                >
                    <div className="flex items-start gap-4">
                        <Gift className="w-8 h-8 text-brand-accent flex-shrink-0 mt-1" />
                        <div>
                            <h3 className="text-xl font-bold mb-3 text-brand-accent">What Happens After Install?</h3>
                            <ol className="space-y-2 text-gray-300 list-decimal list-inside">
                                <li>App creates your player identity automatically (it's like a username, but private)</li>
                                <li>You'll see a tutorial showing you how to start your first round</li>
                                <li>Try it out with friends or solo to learn the ropes</li>
                                <li>Start playing for real stakes whenever you're ready!</li>
                            </ol>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
