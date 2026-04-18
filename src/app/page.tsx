"use client";

import dynamic from "next/dynamic";
import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Publications from "@/components/Publications";
import MediaPress from "@/components/MediaPress";
import Collaborate from "@/components/Collaborate";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

// Load smooth scroll only on client, skip on touch devices
const SmoothScroll = dynamic(() => import("@/components/SmoothScroll"), { ssr: false });

export default function Home() {
  return (
    <>
      <SmoothScroll />
      <Nav />
      <main className="font-[family-name:var(--font-geist-sans)]">
        <Hero />
        <About />
        <Publications />
        <MediaPress />
        <Collaborate />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
