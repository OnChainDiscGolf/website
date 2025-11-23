export default function Footer() {
    // TODO: Update these URLs with actual social media links
    const socialLinks = {
        github: 'https://github.com/GarrettGlass/onchaindiscgolf-landing', // Update with org link
        twitter: 'https://twitter.com/onchaindiscgolf', // TODO: Replace with actual handle
        nostr: 'https://nostr.com', // TODO: Replace with actual Nostr profile
    };

    return (
        <footer className="py-12 border-t border-white/10 bg-black/20">
            <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row justify-between items-center gap-6">
                    <div className="text-center md:text-left">
                        <h4 className="text-xl font-heading font-bold text-white mb-1">OnChainDiscGolf</h4>
                        <p className="text-gray-500 text-sm">© 2025 All rights reserved.</p>
                    </div>

                    <div className="flex flex-col sm:flex-row items-center gap-6">
                        <a
                            href="https://app.onchaindiscgolf.com"
                            className="text-brand-primary hover:text-emerald-400 transition-colors font-medium"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Launch App →
                        </a>

                        <div className="flex gap-6">
                            <a
                                href={socialLinks.github}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-gray-400 hover:text-brand-primary transition-colors"
                                aria-label="GitHub repository"
                            >
                                GitHub
                            </a>
                            <a
                                href={socialLinks.twitter}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-gray-400 hover:text-brand-secondary transition-colors"
                                aria-label="Twitter profile"
                            >
                                Twitter
                            </a>
                            <a
                                href={socialLinks.nostr}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-gray-400 hover:text-brand-accent transition-colors"
                                aria-label="Nostr profile"
                            >
                                Nostr
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}
