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
  title: "On-Chain Disc Golf — Disc Golf Scorekeeping with Automatic Payouts",
  description: "Keep score, place bets, and settle up automatically. The disc golf scorecard app with built-in entry fees and instant payouts. Download for Android or try the web app.",
  keywords: ["disc golf", "disc golf scorecard", "disc golf app", "disc golf scoring", "disc golf payouts", "disc golf betting", "disc golf tournaments", "instant payouts", "bitcoin lightning"],
  authors: [{ name: "On-Chain Disc Golf" }],
  creator: "On-Chain Disc Golf",
  publisher: "On-Chain Disc Golf",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  manifest: '/manifest.json',
  appleWebApp: {
    capable: true,
    statusBarStyle: 'black-translucent',
    title: 'On-Chain Disc Golf',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://onchaindiscgolf.com',
    title: 'On-Chain Disc Golf — Disc Golf Scorekeeping with Automatic Payouts',
    description: 'Keep score, place bets, and settle up automatically. The disc golf scorecard app that handles the money.',
    siteName: 'On-Chain Disc Golf',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'On-Chain Disc Golf — Keep Score. Place Bets. Settle Up.',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'On-Chain Disc Golf — Keep Score. Place Bets. Settle Up.',
    description: 'The disc golf scorecard app that handles the money. Download for Android or try the web app.',
    images: ['/og-image.png'],
    creator: '@OnChainDiscGolf',
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
