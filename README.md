# CAPTORANGE Digital Studio Portfolio

Welcome to the official portfolio and business website for **CAPTORANGE** - a premium digital product studio.

This repository contains the source code for the high-performance, mobile-first landing page designed to showcase services, previous client work, and personal capstone projects. The site is built with modern web technologies focusing on a stunning dark-mode-first aesthetic, smooth animations, and optimized performance.

## Tech Stack

- **Framework**: [Next.js](https://nextjs.org/) (React)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Theming**: `next-themes` (Dark/Light mode support)

## Key Features

- **Premium Glassmorphism UI**: Extensive use of translucent backgrounds and backdrop blurs to create a deep, layered interface that works beautifully in both dark and light modes.
- **Poker-Hand Image Gallery**: Custom interactive animations for displaying project screenshots in a stacked "poker hand" layout that fans out on hover.
- **Immersive Full-Screen Modals**: Custom `ImageModal` component utilizing Next.js `<Image />` optimization to view high-resolution screenshots without layout shifts.
- **Infinite Marquee**: Smooth auto-scrolling tech stack banner.
- **Fully Responsive**: Meticulously designed to look perfect on mobile devices, tablets, and ultra-wide desktop monitors.
- **Solo-Founder Optimized**: Copy and layout structured specifically for a solo full-stack developer running a digital studio.

## Local Development

To run the project locally on your machine:

1. **Clone the repository:**

   ```bash
   git clone https://github.com/ThisIsOJAS/captorange.git
   cd captorange
   ```

2. **Install dependencies:**

   ```bash
   npm install
   ```

3. **Start the development server:**

   ```bash
   npm run dev
   ```

4. **View the site:**
   Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

- `/src/app` - Next.js App Router layout, page entry points, and global styles.
- `/src/components/sections` - Major page blocks (Hero, Services, FeaturedProject, ProjectsGrid, CTA, DeveloperProfile, etc).
- `/src/components/ui` - Reusable interface components (Navbar, Footer, ImageModal, FloatingElements).
- `/public` - Static assets including the massive CAPTORANGE logo and all project screenshots.

## License

© 2026 CAPTORANGE. All rights reserved.
