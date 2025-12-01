import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "../components/navbar";
import { AnimatedBackground } from "@/components/animated-background";
import {GoogleAnalytics} from "@next/third-parties/google";
import { StructuredData } from "@/components/structured-data";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.buildquick.io"),
  title: {
    default: "BuildQuick - Build Fast. Automate Smarter. | AI Automation & Web Development",
    template: "%s | BuildQuick",
  },
  description: "We fuse AI automation and modern web engineering to help businesses move faster, work smarter, and scale effortlessly. From intelligent workflows to lightning-fast websites, we combine AI-driven systems with next-gen web development. Services include AI automation, custom web development, analytics dashboards, CRM integration, and workflow automation.",
  keywords: [
    "AI automation",
    "web development",
    "Next.js",
    "business automation",
    "AI chatbots",
    "custom websites",
    "dashboard development",
    "workflow automation",
    "CRM integration",
    "API integrations",
    "Zapier",
    "Make.com",
    "AI agents",
    "ecommerce integration",
    "analytics dashboards",
    "automation services",
    "custom software development",
    "business intelligence",
    "data visualization",
    "API development",
    "Next.js development",
    "Tailwind CSS",
    "modern web design",
    "responsive websites",
    "SEO optimization",
  ],
  authors: [{ name: "BuildQuick", url: "https://www.buildquick.io" }],
  creator: "BuildQuick",
  publisher: "BuildQuick",
  applicationName: "BuildQuick",
  referrer: "origin-when-cross-origin",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: "https://www.buildquick.io",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://www.buildquick.io",
    siteName: "BuildQuick",
    title: "BuildQuick - Build Fast. Automate Smarter. | AI Automation & Web Development",
    description: "We fuse AI automation and modern web engineering to help businesses move faster, work smarter, and scale effortlessly. From intelligent workflows to lightning-fast websites, we combine AI-driven systems with next-gen web development.",
    images: [
      {
        url: "https://www.buildquick.io/buildquicklogo.png",
        width: 1200,
        height: 630,
        alt: "BuildQuick - AI Automation and Web Development Services",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "BuildQuick - Build Fast. Automate Smarter.",
    description: "We fuse AI automation and modern web engineering to help businesses move faster, work smarter, and scale effortlessly.",
    images: ["https://www.buildquick.io/buildquicklogo.png"],
    creator: "@buildquick",
    site: "@buildquick",
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: [
      { url: "/buildquicklogo.png", type: "image/png" },
      { url: "/favicon.ico", sizes: "any" },
    ],
    apple: [
      { url: "/buildquicklogo.png", type: "image/png" },
    ],
    shortcut: "/favicon.ico",
  },
  manifest: "/site.webmanifest",
  category: "technology",
  classification: "Business Services, Technology, AI Automation, Web Development",
  other: {
    "contact:email": "hello@buildquick.io",
    "contact:phone": "+1-555-123-4567",
    "geo.region": "US",
    "geo.placename": "United States",
    "language": "English",
    "revisit-after": "7 days",
    "distribution": "global",
    "rating": "general",
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#000000",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="bg-black">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased relative min-h-screen bg-transparent`}
      >
        <StructuredData />
        <AnimatedBackground />
        <GoogleAnalytics gaId="G-YTTR917GTG" />
        <div className="relative z-10 min-h-screen">
          <Navbar />
          {children}
        </div>
      </body>
    </html>
  );
}
