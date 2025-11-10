"use client";

import { WHY_CHOOSE_ITEMS } from "@/app/constant/StaticItemsConst";

/* eslint-disable @next/next/no-img-element */

export default function WhyChoose() {
  return (
    <section className="bg-[#f4f5f7]">
      <div className="mx-auto flex w-full max-w-[1100px] flex-col items-center px-4 pb-16 pt-14 text-center sm:px-8 lg:px-24">
        <div className="flex w-full max-w-[640px] flex-col gap-3">
          <p className="font-IRANYekanXVF text-[20px] font-semibold text-[#303030] sm:text-[22px]">
            <span>{`چرا `}</span>
            <span className="text-[#f42326]">نستک</span>
            <span>{` رو انتخاب کنم؟`}</span>
          </p>
          <p className="font-IRANYekanXVF text-[14px] font-normal leading-[30px] text-[#919191]">
            با یادآورهای دقیق، ارتباط سریع با دامپزشک‌ها و امکانات متنوع خرید و
            سرپرستی، دیگه هیچ دغدغه‌ای برای مراقبت از پتت نداری.
          </p>
        </div>

        <div className="mt-10 grid w-full gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {WHY_CHOOSE_ITEMS.map((item) => (
            <article
              key={item.title}
              className="flex h-full flex-col items-center rounded-[32px] border border-white bg-white px-6 py-8 text-center shadow-[0_20px_45px_rgba(26,31,64,0.05)] sm:px-8"
            >
              <div className="flex size-[62px] items-center justify-center rounded-[22px] bg-[#f4f5f7]">
                <img
                  alt=""
                  className="h-9 w-9 object-contain"
                  src={item.img}
                />
              </div>
              <div className="mt-6 flex flex-col gap-3">
                <p
                  className="font-IRANYekanXVF text-[15.25px] font-semibold text-[#303030]"
                  dir="auto"
                >
                  {item.title}
                </p>
                <p
                  className="font-IRANYekanXVF text-[14px] font-normal leading-[28px] text-[#919191]"
                  dir="auto"
                >
                  {item.desc}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
