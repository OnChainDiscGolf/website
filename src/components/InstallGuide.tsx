"use client";

import { motion } from "framer-motion";
import { Share, PlusSquare, MoreVertical, Download } from "lucide-react";

export default function InstallGuide() {
    return (
        <section className="py-24 bg-brand-dark relative overflow-hidden">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-heading font-bold mb-6">
                        Install the App
                    </h2>
                    <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                        For the best experience, add OnChainDiscgolf to your home screen.
                        It works just like a native app, but without the app store.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
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
                                <span className="flex-shrink-0 w-6 h-6 rounded-full bg-brand-blue/20 text-brand-blue flex items-center justify-center text-sm font-bold">1</span>
                                <span>
                                    Tap the <Share className="w-4 h-4 inline mx-1" /> <strong>Share</strong> button in Safari.
                                </span>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="flex-shrink-0 w-6 h-6 rounded-full bg-brand-blue/20 text-brand-blue flex items-center justify-center text-sm font-bold">2</span>
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
                                <span className="flex-shrink-0 w-6 h-6 rounded-full bg-brand-green/20 text-brand-green flex items-center justify-center text-sm font-bold">1</span>
                                <span>
                                    Tap the <MoreVertical className="w-4 h-4 inline mx-1" /> <strong>Menu</strong> (three dots) in Chrome.
                                </span>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="flex-shrink-0 w-6 h-6 rounded-full bg-brand-green/20 text-brand-green flex items-center justify-center text-sm font-bold">2</span>
                                <span>
                                    Tap <Download className="w-4 h-4 inline mx-1" /> <strong>Install App</strong> or <strong>Add to Home screen</strong>.
                                </span>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="flex-shrink-0 w-6 h-6 rounded-full bg-brand-green/20 text-brand-green flex items-center justify-center text-sm font-bold">3</span>
                                <span>
                                    Follow the on-screen prompts to install.
                                </span>
                            </li>
                        </ol>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
