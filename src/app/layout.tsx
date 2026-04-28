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
    default: "CAPTORANGE | You Dream. I Build. I Scale.",
    template: "%s | CAPTORANGE",
  },

  description:
    "CAPTORANGE builds high-performance websites, mobile apps, and scalable digital solutions for startups and businesses. From idea to deployment — we handle everything.",

  keywords: [
    "web development India",
    "startup website developer",
    "mobile app development India",
    "Next.js developer",
    "React developer",
    "SEO services for startups",
    "freelance developer India",
  ],

  authors: [{ name: "CAPTORANGE" }],
  creator: "CAPTORANGE",

  // Update this AFTER buying domain
  metadataBase: new URL("https://captorange.vercel.app"),

  // Google verification
  verification: {
    google: "6nVQXKNNS4HxFMI1ccDFJ7qs3I0Ma9JuE4DhLluaHBA",
  },

  openGraph: {
    title: "CAPTORANGE | You Dream. I Build. I Scale.",
    description:
      "End-to-end websites, mobile apps, and digital solutions for modern businesses.",
    url: "https://captorange.vercel.app",
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
}: {
  children: React.ReactNode;
}) {
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
