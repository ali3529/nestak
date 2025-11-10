"use client";
import HeaderBar from "./components/HeaderBar";
import FooterSection from "./components/FooterSection";
import RulesStrip from "./components/RulesStrip";
import ContactSection from "./components/ContactSection";
import FAQSection from "./components/FAQSection";
import WhyChoose from "./components/WhyChoose";
import AppDownload from "./components/AppDownload";
import Hero from "./components/Hero";

export default function Landing() {
  return (
    <div className="bg-white w-full h-full ">
      <div className=" max-w-[1440px] mx-auto relative">
        <HeaderBar />
        <div id="intro-section">
          <Hero />
        </div>
        <WhyChoose />
        <AppDownload />
        <div id="contact-section">
          <ContactSection />
        </div>
        <div id="faq-section">
          <FAQSection />
        </div>
        <div id="rules-section">
          <RulesStrip />
        </div>
        <FooterSection />
      </div>
    </div>
  );
}
