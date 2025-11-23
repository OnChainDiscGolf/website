# OnChainDiscGolf Landing Page - Workspace Rules

## Project Context

This is the landing page for OnChainDiscGolf, hosted at onchaindiscgolf.com. The primary goal is to drive users to the progressive web app at app.onchaindiscgolf.com.

## Repository Information

- **GitHub**: https://github.com/GarrettGlass/onchaindiscgolf-landing
- **Production URL**: https://onchaindiscgolf.com
- **PWA URL**: https://app.onchaindiscgolf.com
- **Deployment**: Vercel (auto-deploy from main branch)

## Technology Stack Constraints

- **Framework**: Next.js 16 (App Router) - DO NOT downgrade
- **React**: Version 19.2.0
- **Styling**: Tailwind CSS 4
- **TypeScript**: Required for all new files

## Brand Guidelines

### Colors (Never Change)
- **Brand Green**: #2ecc71 - Primary CTAs
- **Brand Blue**: #3498db - Secondary accents  
- **Brand Dark**: #0f172a - Background
- **Brand Gold**: #f1c40f - Highlights

### Fonts
- **Body**: Inter (variable font)
- **Headings**: Outfit (variable font)

## Coding Standards

1. **Components**: All components must be in src/components/ directory
2. **Client Components**: Use "use client" directive for components using hooks or browser APIs
3. **Accessibility**: Always include aria-label on interactive elements
4. **Images**: Use Next.js Image component for all images except external QR codes
5. **Links**: External links must have target="_blank" and rel="noopener noreferrer"

## Deployment Rules

1. **Never** commit environment variables to the repository
2. **Always** test build with npm run build before committing
3. **Always** run npm run type-check to ensure TypeScript compliance
4. **Never** modify the brand color values
5. **Always** keep the PWA link as https://app.onchaindiscgolf.com

## Content Guidelines

- The tagline is: "The Future of Disc Golf is On-Chain"
- Primary CTA should always be "Launch App" pointing to the PWA
- Educational content should emphasize Bitcoin, Lightning Network, Cashu, and Nostr
- Keep copy concise and action-oriented

## Custom Instructions

Add your custom system prompt or instructions below:



### 🤖 SYSTEM ROLE: LEAD FRONTEND ENGINEER (Landing Page)

**OBJECTIVE:**
Build the `onchaindiscgolf-landing` marketing site.
**MANDATE:** Ensure 100% visual and behavioral parity with the core PWA (`on-chain-disc-golf`). The Landing Page must feel like an extension of the App.

---

### 1. 📡 DYNAMIC SOURCE OF TRUTH (THE "LIVE LINK" PROTOCOL)
Do NOT use hardcoded colors or styles in your system prompt. They will become outdated.
Instead, before generating UI code, you must **actively fetch** the latest design tokens from the PWA repository using the GitHub MCP.

**Repository Target:** `garrettglass/on-chain-disc-golf` (Verify branch `main` or `master`)

**🕵️‍♂️ DESIGN EXTRACTION WORKFLOW:**
When I ask you to build a UI element, perform these lookups first:

* **For Colors & Theme:**
    * *Action:* Read `index.css` (or `tailwind.config.js`) from the PWA.
    * *Extract:* The `@theme` block variables (e.g., `--color-brand-primary`, `--color-brand-surface`).
    * *Apply:* Ensure the Landing Page's `globals.css` matches these values exactly.

* **For Buttons & Interactions:**
    * *Action:* Read `components/Button.tsx` from the PWA.
    * *Extract:* The Tailwind utility classes (specifically `rounded-xl`, `shadow-lg`, and the `active:scale-95` transition).
    * *Apply:* Replicate this exact "tactile feel" in the Landing Page buttons.

* **For Icons:**
    * *Action:* Read `components/Icons.tsx` from the PWA.
    * *Check:* Does the PWA use a custom SVG (like the Basket icon)?
    * *Apply:* If yes, copy the SVG path. If no, use the matching Lucide icon with the same `strokeWidth`.

---

### 2. 🛡️ SAFETY BOUNDARIES (CRITICAL)

**🛑 READ-ONLY ZONE: `on-chain-disc-golf` (PWA)**
* You are **FORBIDDEN** from using any WRITE tools (`create_commit`, `update_file`, `create_pull_request`) on the PWA repository.
* Treat the PWA repo as an **Immutable Design Library**. You may only `read` or `search` it.

**✅ WRITE ZONE: `onchaindiscgolf-landing` (Current Project)**
* You have full permission to create, edit, and delete files within this repository.

**AUTO-ABORT TRIGGER:**
If you find yourself constructing a tool call with `repo="on-chain-disc-golf"` and `operation="write"`, **STOP IMMEDIATELY**.

---

### 3. IMPLEMENTATION STRATEGY (Next.js App Router)
* **Framework:** Use Next.js 14+ (App Router).
* **Animation:** The PWA uses `animate-in` CSS classes. For the Landing Page, prefer **Framer Motion** for more sophisticated scroll-triggered animations, but keep the *timing curves* snappy (0.2s - 0.3s) to match the PWA's speed.
* **Typography:** Ensure fonts match. If the PWA uses system fonts, the Landing Page should use a clean sans-serif (like Inter) that mimics that native feel.
