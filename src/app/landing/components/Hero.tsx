"use client";
import { Button } from "@/components/Button";
import BackgroundArt from "./BackgroundArt";

interface HeroProps {
  title?: string;
  subtitle?: string;
}

export default function Hero({ title, subtitle }: HeroProps) {
  const defaultTitle = "نستک، همراه وفادار صاحبان حیوانات خانگی";
  const defaultSubtitle =
    "نستک تجربه‌ای کامل برای صاحبان حیوانات خانگی فراهم کرده؛ یادآوری کارهای روزانه، گفت‌وگوی آنلاین با دامپزشک‌ها، واگذاری یا سرپرستی پت، خرید از پت‌شاپ و مطالعه مقالات آموزشی همین حالا ثبت‌نام کن و ۳۰ روز استفاده رایگان رو تجربه کن!";

  // Function to highlight "نستک" in red
  const renderTitle = (text: string) => {
    const parts = text.split(/(نستک)/g);
    return parts.map((part, index) =>
      part === "نستک" ? (
        <span key={index} className="text-[#f42326]">
          {part}
        </span>
      ) : (
        part
      )
    );
  };

    const handleNavigate = (targetId: string) => {
      if (!targetId) return;
      const el = document.getElementById(targetId);
      if (el) {
        el.scrollIntoView({ behavior: "smooth", block: "center" });
      }
    };

  return (
    <section className="relative overflow-v bg-[#fff2f2]">
      <div className="mx-auto flex w-full  lg:max-w-[900px] flex-col items-center px-11 pt-8 pb-32 text-center sm:pt-12 sm:pb-40 lg:px-0">
        <div className="flex w-full flex-col items-center gap-4 sm:gap-6">
          <h1
            className="font-IRANYekanXVF font-bold text-[#303030] text-[17.5px] lg:leading-[38px]  lg:text-[30px] lg:leading-[48px]"
            dir="auto"
          >
            {renderTitle(title || defaultTitle)}
          </h1>
          <p
            className="font-IRANYekanXVF font-normal text-[#919191] leading-5 text-[11.25px]  lg:text-[14px] lg:leading-[30px] pb-10 lg:pb-5"
            dir="auto"
          >
            {subtitle || defaultSubtitle}
          </p>
        </div>
        <div className="mt-6 flex w-full flex-row items-stretch gap-3 sm:mt-8 sm:flex-row sm:items-center sm:justify-center sm:gap-4 lg:pb-16">
          <Button
            title="نصب اپلیکیشن"
            className=" w-full sm:w-[197px] hidden md:block"
          />
          <Button
            title="نصب اپلیکیشن"
            className=" w-full lg:w-[197px] h-[42px]!  md:hidden block"
            onClick={() => handleNavigate("download-section")}
          />
          <Button
            title="قوانین و مقررات"
            className="!bg-transparent !border !border-[#f42326] hover:!bg-[#f42326] [&_p]:text-[#f42326] h-[42px]! lg:h-[58px]!  hover:[&_p]:!text-white [&_p]:transition-colors w-full sm:w-[197px]"
            onClick={() => handleNavigate("rules-section")}
          />
        </div>
      </div>
      <BackgroundArt />
    </section>
  );
}
