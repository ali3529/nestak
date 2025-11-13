import HeaderBar from "./landing/components/HeaderBar";
import FooterSection from "./landing/components/FooterSection";
import RulesStrip from "./landing/components/RulesStrip";
import ContactSection from "./landing/components/ContactSection";
import FAQSection from "./landing/components/FAQSection";
import WhyChoose from "./landing/components/WhyChoose";
import AppDownload from "./landing/components/AppDownload";
import Hero from "./landing/components/Hero";
import { fetchLandingData } from "@/services/landingApi";

export default async function Landing() {
  const landingData = await fetchLandingData();

  return (
    <div className="bg-white w-full h-full ">
      <div className=" max-w-[1440px] mx-auto relative">
        <HeaderBar />
        <div id="intro-section">
          <Hero
            title={landingData?.mainTitle}
            subtitle={landingData?.mainSubTitle}
          />
        </div>
        <WhyChoose
          title={landingData?.featureTitle}
          subtitle={landingData?.featureSubTitle}
          features={landingData?.feature}
        />
        <div id="download-section">
          <AppDownload
            bazzar={landingData?.bazzar}
            sibapp={landingData?.sibapp}
            googlePlay={landingData?.googlePlay}
            directApkLink={landingData?.directApkLink}
          />
        </div>
        <div id="contact-section">
          <ContactSection
            email={landingData?.email}
            phone={landingData?.phone}
            address={landingData?.address}
          />
        </div>
        <div id="faq-section">
          <FAQSection faqList={landingData?.faq} />
        </div>
        <div id="rules-section">
          <RulesStrip
            content={landingData?.privacyPolicy}
            enamadLink={landingData?.enamad}
          />
        </div>
        <FooterSection
          email={landingData?.email}
          phone={landingData?.phone}
          address={landingData?.address}
        />
      </div>
    </div>
  );
}
