"use client";
/* eslint-disable @next/next/no-img-element */
import { useEffect, useState } from "react";
import HeaderBar from "./components/HeaderBar";
import FooterSection from "./components/FooterSection";
import RulesStrip from "./components/RulesStrip";
import ContactSection from "./components/ContactSection";
import FAQSection from "./components/FAQSection";
import WhyChoose from "./components/WhyChoose";
import AppDownload from "./components/AppDownload";
import Hero from "./components/Hero";
import BackgroundArt from "./components/BackgroundArt";

function ScaledCanvas({ children, baseWidth, baseHeight }: { children: React.ReactNode; baseWidth: number; baseHeight: number }) {
  const [scale, setScale] = useState(1);
  useEffect(() => {
    const update = () => setScale(Math.min(window.innerWidth / baseWidth, 1));
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, [baseWidth]);
  return (
    <div className="w-full flex justify-center" style={{ minHeight: `${baseHeight * scale}px` }}>
      <div style={{ width: baseWidth, height: baseHeight, transform: `scale(${scale})`, transformOrigin: "top center" }}>{children}</div>
    </div>
  );
}

export default function Landing() {
  return (
    <div className="bg-white">
      <ScaledCanvas baseWidth={1440} baseHeight={3990}>
        <div className="relative size-[1440px_3990px]">
          <HeaderBar />
          <Hero />
          <WhyChoose />
          <AppDownload />
          <ContactSection />
          <FAQSection />
          <RulesStrip />
          <FooterSection />
          <BackgroundArt />
        </div>
      </ScaledCanvas>
    </div>
  );
}

