# OnChainDiscGolf Landing Page

The official landing page for [OnChainDiscGolf](https://onchaindiscgolf.com) - the future of disc golf powered by Bitcoin, Lightning Network, Cashu, and Nostr.

## 🎯 Overview

This is a Next.js-based landing page that serves as the primary entry point for OnChainDiscGolf, educating users about the platform and driving them to the progressive web app at [app.onchaindiscgolf.com](https://app.onchaindiscgolf.com).

## 🚀 Features

- **SEO Optimized**: Comprehensive meta tags, Open Graph, Twitter Cards, and structured data
- **PWA Ready**: Web app manifest and icons for easy installation
- **Performance Focused**: Image optimization, compression, and caching strategies
- **Responsive Design**: Mobile-first design that works on all devices
- **Modern Stack**: Built with Next.js 16, React 19, and Tailwind CSS 4

## 🛠 Tech Stack

- **Framework**: [Next.js 16](https://nextjs.org/) (App Router)
- **UI Library**: [React 19](https://react.dev/)
- **Styling**: [Tailwind CSS 4](https://tailwindcss.com/)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Language**: TypeScript
- **Deployment**: [Vercel](https://vercel.com/)

## 📦 Getting Started

### Prerequisites

- Node.js 20+ installed
- npm or yarn package manager

### Installation

1. Clone the repository:
```bash
git clone https://github.com/GarrettGlass/onchaindiscgolf-landing.git
cd onchaindiscgolf-landing
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint
- `npm run lint:fix` - Fix ESLint errors automatically
- `npm run type-check` - Check TypeScript types

## 🏗 Project Structure

```
├── public/              # Static assets
│   ├── manifest.json    # PWA manifest
│   ├── robots.txt       # Search engine crawler rules
│   ├── icon-192.png     # PWA icon (192x192)
│   ├── icon-512.png     # PWA icon (512x512)
│   └── og-image.png     # Open Graph social sharing image
├── src/
│   ├── app/            # Next.js App Router
│   │   ├── layout.tsx  # Root layout with metadata
│   │   ├── page.tsx    # Home page
│   │   ├── globals.css # Global styles
│   │   └── sitemap.ts  # Dynamic sitemap
│   └── components/     # React components
│       ├── Hero.tsx
│       ├── Features.tsx
│       ├── InstallGuide.tsx
│       ├── LearnMore.tsx
│       ├── Nip05Teaser.tsx
│       └── Footer.tsx
└── ...config files
```

## 🎨 Design System

The landing page uses a custom design system with brand colors matched to the PWA:

- **Brand Primary (Emerald)**: `#10b981` - Primary CTAs and accents
- **Brand Secondary (Blue)**: `#3b82f6` - Secondary accents
- **Brand Accent (Amber)**: `#f59e0b` - Highlights
- **Brand Dark**: `#0f172a` - Background
- **Brand Surface**: `#1e293b` - Card backgrounds

Fonts:
- **Sans-serif**: Inter (body text)
- **Heading**: Outfit (headings)

## 🔗 Integration with PWA

This landing page is designed to drive users to the main PWA:

- **Primary CTA**: "Launch App" button → `app.onchaindiscgolf.com`
- **QR Code**: Desktop users can scan to open PWA on mobile
- **Install Guide**: Instructions for adding PWA to home screen
- **URL Redirect**: `/app` redirects to the PWA

## 🌐 Deployment

### Vercel (Recommended)

This project is configured for seamless deployment on Vercel:

1. Push your changes to GitHub
2. Import the repository in Vercel
3. Vercel will automatically detect Next.js and deploy

### Environment Variables

Currently, no environment variables are required for the landing page. If you add analytics or other integrations, document them here.

## 📝 SEO & Social Sharing

- **Sitemap**: Auto-generated at `/sitemap.xml`
- **Robots.txt**: Located at `/robots.txt`
- **Open Graph**: Configured for rich social media previews
- **Twitter Cards**: Optimized for Twitter sharing
- **Structured Data**: JSON-LD for search engines

## ♿ Accessibility

- ARIA labels on interactive elements
- Semantic HTML structure
- Keyboard navigation support
- Color contrast meets WCAG standards
- Alt text on all images

## 🔒 Security

Security headers configured in `vercel.json`:
- X-Content-Type-Options: nosniff
- X-Frame-Options: DENY
- X-XSS-Protection: 1; mode=block
- Referrer-Policy: origin-when-cross-origin
- Permissions-Policy (camera, microphone, geolocation blocked)

## 📄 License

© 2025 OnChainDiscGolf. All rights reserved.

## 🤝 Contributing

This is a public-facing landing page. For contribution guidelines, please contact the maintainers.

## 🔗 Related Projects

- **Main PWA**: [app.onchaindiscgolf.com](https://app.onchaindiscgolf.com)
- **Documentation**: Coming soon

## 📞 Contact

- **Website**: [onchaindiscgolf.com](https://onchaindiscgolf.com)
- **GitHub**: [GarrettGlass/onchaindiscgolf-landing](https://github.com/GarrettGlass/onchaindiscgolf-landing)
- **Twitter**: [@onchaindiscgolf](https://twitter.com/onchaindiscgolf) *(TODO: Update with actual handle)*

---

Built with ⚡ by the OnChainDiscGolf team
