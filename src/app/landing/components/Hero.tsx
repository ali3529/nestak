"use client";
/* eslint-disable @next/next/no-img-element */

export default function Hero() {
  return (
    <div className="absolute bg-[#fff2f2] h-[518px] left-0 top-[139px] w-[1440px]">
      <div className="absolute content-stretch flex flex-col gap-[66px] items-center left-[323px] top-[82px] w-[794px]">
        <div className="content-stretch flex flex-col gap-[26px] items-center not-italic relative shrink-0 text-center w-full">
          <p className="font-IRANYekanXVF font-semibold leading-[normal] relative shrink-0 text-[#303030] text-[23px]" dir="auto">
            <span className="text-[#f42326]">نستک</span>، همراه وفادار صاحبان حیوانات خانگی
          </p>
          <p className="font-IRANYekanXVF font-normal leading-[1.7] min-w-full relative shrink-0 text-[#919191] text-[14px] w-[min-content] whitespace-pre-wrap" dir="auto">
            نستک تجربه‌ای کامل برای صاحبان حیوانات خانگی فراهم کرده؛ یادآوری کارهای روزانه، گفت‌وگوی آنلاین با دامپزشک‌ها، واگذاری یا سرپرستی پت، خرید از پت‌شاپ و مطالعه مقالات آموزشی همین حالا ثبت‌نام کن و ۳۰ روز استفاده رایگان رو تجربه کن!
          </p>
        </div>
        <div className="content-stretch flex gap-[12px] items-center relative shrink-0">
          <div className="border border-[#f42326] border-solid box-border content-stretch flex gap-[8px] h-[52px] items-center justify-center p-[8px] relative rounded-[50px] shrink-0 w-[182px]">
            <p className="font-IRANYekanXVF font-semibold leading-[normal] not-italic relative shrink-0 text-[#f42326] text-[14px] text-center" dir="auto">
              قوانین و مقررات
            </p>
          </div>
          <div className="bg-[#f42326] box-border content-stretch flex gap-[8px] h-[52px] items-center justify-center p-[8px] relative rounded-[50px] shrink-0 w-[182px]">
            <p className="font-IRANYekanXVF font-semibold leading-[normal] not-italic relative shrink-0 text-[14px] text-center text-white" dir="auto">
              نصب اپلیکیشن
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

