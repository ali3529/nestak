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


export default function Landing() {
  return (
    <div className="bg-white w-full h-full ">
      <div className=" max-w-[1440px] mx-auto relative">
        <HeaderBar />
        <Hero />
        <WhyChoose />
        <AppDownload />
        <ContactSection />
        <FAQSection />
        <RulesStrip />
        <FooterSection />
       
      </div>
    </div>
  );
}

