"use client";

import BackgroundArt from "./BackgroundArt";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-[#fff2f2]">
      <div className="mx-auto flex w-full max-w-[900px] flex-col items-center px-4 pt-12 pb-40 text-center sm:px-8 lg:px-0">
        <div className="flex w-full flex-col items-center gap-6">
          <p
            className="font-IRANYekanXVF font-bold text-[#303030] text-[20px] leading-[34px] sm:text-[23px] lg:text-[28px]"
            dir="auto"
          >
            <span className="text-[#f42326] font-IRANYekanXVF">نستک</span>، همراه
            وفادار صاحبان حیوانات خانگی
          </p>
          <p
            className="font-IRANYekanXVF font-normal text-[#919191] text-[14px] leading-[30px] max-w-[640px]"
            dir="auto"
          >
            نستک تجربه‌ای کامل برای صاحبان حیوانات خانگی فراهم کرده؛ یادآوری کارهای
            روزانه، گفت‌وگوی آنلاین با دامپزشک‌ها، واگذاری یا سرپرستی پت، خرید از
            پت‌شاپ و مطالعه مقالات آموزشی همین حالا ثبت‌نام کن و ۳۰ روز استفاده
            رایگان رو تجربه کن!
          </p>
        </div>
        <div className="mt-8 flex w-full flex-col items-stretch gap-3 sm:flex-row sm:items-center sm:justify-center sm:gap-4">
          <button
            type="button"
            className="bg-[#f42326] text-white shadow-[0_10px_25px_rgba(244,35,38,0.2)] flex h-12 w-full items-center justify-center rounded-[50px] text-[14px] font-IRANYekanXVF font-semibold sm:h-[52px] sm:w-[182px]"
          >
            نصب اپلیکیشن
          </button>
          <button
            type="button"
            className="border border-[#f42326] text-[#f42326] flex h-12 w-full items-center justify-center rounded-[50px] text-[14px] font-IRANYekanXVF font-semibold sm:h-[52px] sm:w-[182px]"
          >
            قوانین و مقررات
          </button>
        </div>
      </div>
      <BackgroundArt />
    </section>
  );
}
