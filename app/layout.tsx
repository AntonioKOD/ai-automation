import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "../components/navbar";
import { AnimatedBackground } from "@/components/animated-background";

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
    default: "BuildQuick - Build Fast. Automate Smarter.",
    template: "%s | BuildQuick",
  },
  description: "We fuse AI automation and modern web engineering to help businesses move faster, work smarter, and scale effortlessly. From intelligent workflows to lightning-fast websites, we combine AI-driven systems with next-gen web development.",
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
  ],
  authors: [{ name: "BuildQuick" }],
  creator: "BuildQuick",
  publisher: "BuildQuick",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://www.buildquick.io",
    siteName: "BuildQuick",
    title: "BuildQuick - Build Fast. Automate Smarter.",
    description: "We fuse AI automation and modern web engineering to help businesses move faster, work smarter, and scale effortlessly.",
    images: [
      {
        url: "/buildquicklogo.png",
        width: 1200,
        height: 630,
        alt: "BuildQuick Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "BuildQuick - Build Fast. Automate Smarter.",
    description: "We fuse AI automation and modern web engineering to help businesses move faster, work smarter, and scale effortlessly.",
    images: ["/buildquicklogo.png"],
    creator: "@buildquick",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
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
        <AnimatedBackground />
        <div className="relative z-10 min-h-screen">
          <Navbar />
          {children}
        </div>
      </body>
    </html>
  );
}
