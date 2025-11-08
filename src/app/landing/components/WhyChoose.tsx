"use client";

import { WHY_CHOOSE_ITEMS } from "@/app/constant/StaticItemsConst";

/* eslint-disable @next/next/no-img-element */

export default function WhyChoose() {
  return (
    <div className=" bg-[#f4f5f7] w-full relative flex-row flex-col pt-24 px-40 pb-14">
      <p className=" font-IRANYekanXVF font-semibold not-italic text-[#303030] text-[20.5px] text-right pb-4 ">
        <span>{`چرا `}</span>
        <span className="text-[#f42326]">نستک</span>
        <span>{` رو انتخاب کنم؟`}</span>
      </p>
      <p className=" font-IRANYekanXVF font-normal  text-[#919191] text-[14px] text-right  whitespace-pre-wrap pb-8">
        با یادآورهای دقیق، ارتباط سریع با دامپزشک‌ها و امکانات متنوع خرید و
        سرپرستی، دیگه هیچ دغدغه‌ای برای مراقبت از پتت نداری.
      </p>

      <div className="grid grid-cols-3 gap-2.5 items-center relative w-full">
        {WHY_CHOOSE_ITEMS.map((c, idx) => (
          <div
            key={idx}
            className="bg-white border border-[#f5f4f2] border-solid relative rounded-[50px]  w-full h-full"
          >
            <div className="box-border content-stretch flex flex-col gap-[35px] ] items-center overflow-clip p-10 relative rounded-[inherit] ">
              <div className="overflow-clip relative  size-[62px]">
                <img alt="" className=" max-w-none size-full" src={c.img} />
              </div>
              <div className="content-stretch flex flex-col gap-[12px] items-center leading-[1.7] not-italic relative shrink-0 text-center w-full whitespace-pre-wrap">
                <p
                  className="font-IRANYekanXVF font-semibold relative shrink-0 text-[#303030] text-[15.25px] w-full"
                  dir="auto"
                >
                  {c.title}
                </p>
                <p
                  className="font-IRANYekanXVF font-normal relative shrink-0 text-[#919191] text-[14px] w-full"
                  dir="auto"
                >
                  {c.desc}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
