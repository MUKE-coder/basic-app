"use client";
import { useState } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
export default function Home() {
  return (
    <main>
      {/* Nav Bar */}
      <Navbar />
      {/* Hero section */}
      <Hero />
      {/* Project section */}
      <Projects />
      {/* Contact section */}
      <Contact />
    </main>
  );
}
