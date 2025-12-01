import HeroSection from "@/components/ui/quantam-mysh-hero";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "BuildQuick - Build Fast. Automate Smarter.",
  description: "We fuse AI automation and modern web engineering to help businesses move faster, work smarter, and scale effortlessly. From intelligent workflows to lightning-fast websites, we combine AI-driven systems with next-gen web development.",
  openGraph: {
    title: "BuildQuick - Build Fast. Automate Smarter.",
    description: "We fuse AI automation and modern web engineering to help businesses move faster, work smarter, and scale effortlessly.",
    url: "https://www.buildquick.io",
  },
};

export default function Home() {
  return (
    <main role="main">
      <HeroSection />
    </main>
  );
}
