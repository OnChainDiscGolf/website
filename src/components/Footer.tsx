export default function Footer() {
    return (
        <footer className="py-12 border-t border-white/10 bg-black/20">
            <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
                <div className="mb-4 md:mb-0">
                    <h4 className="text-xl font-heading font-bold text-white">OnChainDiscgolf</h4>
                    <p className="text-gray-500 text-sm">© 2025 All rights reserved.</p>
                </div>

                <div className="flex gap-6">
                    <a href="#" className="text-gray-400 hover:text-brand-green transition-colors">GitHub</a>
                    <a href="#" className="text-gray-400 hover:text-brand-blue transition-colors">Twitter</a>
                    <a href="#" className="text-gray-400 hover:text-brand-gold transition-colors">Nostr</a>
                </div>
            </div>
        </footer>
    );
}
