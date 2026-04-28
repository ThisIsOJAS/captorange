// import type { Metadata } from "next";
// import { Inter } from "next/font/google";
// import "./globals.css";
// import { ThemeProvider } from "@/components/theme-provider";
// import { BackgroundLines } from "@/components/ui/BackgroundLines";

// const inter = Inter({
//   variable: "--font-inter",
//   subsets: ["latin"],
// });

// export const metadata: Metadata = {
//   title: "CAPTORANGE | You Dream. I Build. I Scale.",
//   description: "End-to-end websites, mobile apps, and digital solutions for modern businesses. Build and scale your ideas with CAPTORANGE.",
//   icons: {
//     icon: "/captorange_logo.png",
//   },
// };

// export default function RootLayout({
//   children,
// }: Readonly<{
//   children: React.ReactNode;
// }>) {
//   return (
//     <html lang="en" suppressHydrationWarning className={`${inter.variable} antialiased h-full`}>
//       <body className="min-h-full flex flex-col scroll-smooth">
//         <ThemeProvider
//           attribute="class"
//           defaultTheme="dark"
//           enableSystem
//           disableTransitionOnChange
//         >
//           <BackgroundLines />
//           {children}
//         </ThemeProvider>
//       </body>
//     </html>
//   );
// }

import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { BackgroundLines } from "@/components/ui/BackgroundLines";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "CAPTORANGE | Web & App Development Studio",
    template: "%s | CAPTORANGE",
  },
  description:
    "CAPTORANGE builds high-performance websites, mobile apps, and scalable digital solutions for startups and businesses. From idea to deployment — we handle everything.",
  keywords: [
    "web development",
    "mobile app development",
    "React developer India",
    "Next.js developer",
    "startup website development",
    "SEO services",
    "freelance developer India",
  ],
  authors: [{ name: "CAPTORANGE" }],
  creator: "CAPTORANGE",
  metadataBase: new URL("https://captorange.com"), // update after buying domain

  openGraph: {
    title: "CAPTORANGE | You Dream. I Build. I Scale.",
    description:
      "End-to-end websites, mobile apps, and digital solutions for modern businesses.",
    url: "https://captorange.com",
    siteName: "CAPTORANGE",
    images: [
      {
        url: "/captorange_logo.png",
        width: 1200,
        height: 630,
        alt: "CAPTORANGE",
      },
    ],
    locale: "en_IN",
    type: "website",
  },

  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/captorange_logo.png", type: "image/png" },
    ],
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${inter.variable} antialiased h-full`}
    >
      <body className="min-h-full flex flex-col scroll-smooth bg-background text-foreground">
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <div className="relative">
            {/* Background Layer */}
            <BackgroundLines />

            {/* Content Layer */}
            <div className="relative z-10">{children}</div>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
