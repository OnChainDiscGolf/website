"use client";

import { motion } from "framer-motion";
import { AtSign } from "lucide-react";

export default function Nip05Teaser() {
    return (
        <section className="py-24 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-b from-brand-dark to-brand-blue/10 pointer-events-none" />

            <div className="container mx-auto px-4 relative z-10">
                <div className="max-w-4xl mx-auto text-center bg-white/5 backdrop-blur-lg rounded-3xl p-12 border border-white/10">
                    <motion.div
                        initial={{ scale: 0.9, opacity: 0 }}
                        whileInView={{ scale: 1, opacity: 1 }}
                        viewport={{ once: true }}
                    >
                        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-brand-blue/20 text-brand-blue mb-6">
                            <AtSign className="w-8 h-8" />
                        </div>
                        <h2 className="text-3xl md:text-5xl font-heading font-bold mb-6">
                            Claim Your Identity
                        </h2>
                        <p className="text-xl text-gray-300 mb-8">
                            Stand out on the course and the network.
                            Get your verified NIP-05 identifier soon.
                        </p>

                        <div className="bg-black/30 p-4 rounded-xl inline-block mb-8 border border-brand-gold/30">
                            <span className="text-2xl md:text-4xl font-mono text-brand-gold">
                                yourname<span className="text-gray-500">@onchaindiscgolf.com</span>
                            </span>
                        </div>

                        <div>
                            <span className="inline-block px-4 py-2 rounded-full bg-brand-gold/20 text-brand-gold text-sm font-bold tracking-wide uppercase">
                                Coming Soon
                            </span>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
