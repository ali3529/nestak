"use client";

import BackgroundArt from "./BackgroundArt";

/* eslint-disable @next/next/no-img-element */

export default function Hero() {
  return (

      <div className="relative bg-[#fff2f2] h-[518px] w-full flex items-start justify-center pt-20">
        <div className="  flex flex-col max-w-[794px] items-center justify-center w-full gap-16  ">
          <div className=" flex flex-col gap-[26px] items-center  text-center w-full">
            <p
              className="font-IRANYekanXVF font-bold relative shrink-0 text-[#303030] text-[23px]"
              dir="auto"
            >
              <span className="text-[#f42326] font-IRANYekanXVF ">نستک</span>،
              همراه وفادار صاحبان حیوانات خانگی
            </p>
            <p
              className="font-IRANYekanXVF font-normal min-w-full relative  text-[#919191] text-[14px] w-[min-content] whitespace-pre-wrap"
              dir="auto"
            >
              نستک تجربه‌ای کامل برای صاحبان حیوانات خانگی فراهم کرده؛ یادآوری
              کارهای روزانه، گفت‌وگوی آنلاین با دامپزشک‌ها، واگذاری یا سرپرستی
              پت، خرید از پت‌شاپ و مطالعه مقالات آموزشی همین حالا ثبت‌نام کن و
              ۳۰ روز استفاده رایگان رو تجربه کن!
            </p>
          </div>
          <div className=" flex gap-[12px] items-center relative ">
            <div className="bg-[#f42326] box-border  flex gap-[8px] h-[52px] items-center justify-center p-[8px] relative rounded-[50px]  w-[182px]">
              <p
                className="font-IRANYekanXVF font-semibold leading-[normal] not-italic relative  text-[14px] text-center text-white"
                dir="auto"
              >
                نصب اپلیکیشن
              </p>
            </div>
            <div className="border border-[#f42326] border-solid box-border  flex gap-[8px] h-[52px] items-center justify-center p-[8px] relative rounded-[50px]  w-[182px]">
              <p
                className="font-IRANYekanXVF font-semibold leading-[normal] not-italic relative  text-[#f42326] text-[14px] text-center"
                dir="auto"
              >
                قوانین و مقررات
              </p>
            </div>
          </div>
        </div>
      <BackgroundArt />
      </div>
   
  );
}

