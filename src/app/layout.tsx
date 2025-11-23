import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://onchaindiscgolf.com'),
  title: "OnChainDiscGolf - The Future of Disc Golf",
  description: "Compete, Earn, and Connect with the first Nostr-powered Disc Golf wallet. Experience instant payouts and seamless play with Bitcoin Lightning.",
  keywords: ["disc golf", "bitcoin", "lightning network", "nostr", "cashu", "crypto", "disc golf wallet", "instant payouts", "web3 sports"],
  authors: [{ name: "OnChainDiscGolf" }],
  creator: "OnChainDiscGolf",
  publisher: "OnChainDiscGolf",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  manifest: '/manifest.json',
  appleWebApp: {
    capable: true,
    statusBarStyle: 'black-translucent',
    title: 'OnChainDiscGolf',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://onchaindiscgolf.com',
    title: 'OnChainDiscGolf - The Future of Disc Golf',
    description: 'Compete, Earn, and Connect with the first Nostr-powered Disc Golf wallet. Experience instant payouts and seamless play.',
    siteName: 'OnChainDiscGolf',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'OnChainDiscGolf - The Future of Disc Golf',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'OnChainDiscGolf - The Future of Disc Golf',
    description: 'Compete, Earn, and Connect with Bitcoin-powered disc golf. Instant payouts, no hassle.',
    images: ['/og-image.png'],
    creator: '@onchaindiscgolf', // TODO: Update with actual Twitter handle
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: [
      { url: '/icon-192.png', sizes: '192x192', type: 'image/png' },
      { url: '/icon-512.png', sizes: '512x512', type: 'image/png' },
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta name="theme-color" content="#10b981" />
      </head>
      <body
        className={`${inter.variable} ${outfit.variable} antialiased bg-brand-dark text-white`}
      >
        {children}
      </body>
    </html>
  );
}
