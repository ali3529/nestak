"use client";

import { downloads } from "@/app/constant/StaticItemsConst";

/* eslint-disable @next/next/no-img-element */

export default function AppDownload() {
  const imgIPhone16Light1 =
    "https://www.figma.com/api/mcp/asset/4efa8609-bc51-4664-b783-7749171bb25e";
  const imgIPhone16Light =
    "https://www.figma.com/api/mcp/asset/8cab422f-4140-4f85-b254-17c448888e58";
  const imgIPhone16PlusLight =
    "https://www.figma.com/api/mcp/asset/1776424c-67e4-42d7-91a5-be0dc9f6f30c";
  const imgGroup5 =
    "https://www.figma.com/api/mcp/asset/3a67e93b-5aff-4a14-b071-5292505d241c";
  const imgRectangle =
    "https://www.figma.com/api/mcp/asset/9234ae17-6e23-4d8b-86c7-fd910e7c6912";
  const imgRectangle1 =
    "https://www.figma.com/api/mcp/asset/1121e3ee-4a81-4beb-8648-f64043e77469";
  const imgRectangle2 =
    "https://www.figma.com/api/mcp/asset/7a25848b-f878-4293-9b57-3b9c8ad937f7";
  const imgSibappSeeklogo1 =
    "https://www.figma.com/api/mcp/asset/9ef81287-36f5-4623-8a9d-c0a12f41d2af";
  const imgDownload1 =
    "https://www.figma.com/api/mcp/asset/a5b9ffdc-9ba2-4d0a-9549-4a1da7563c8c";

  function HugeIconArrowsSolidDownload1({ className }: { className?: string }) {
    return (
      <div className={className}>
        <div className="absolute inset-[9.37%_9.37%_9.38%_9.38%]">
          <img
            alt=""
            className="block max-w-none size-full"
            src={imgDownload1}
          />
        </div>
      </div>
    );
  }

  return (
    <div className="relative bg-[#f4f5f7] w-full flex flex-row justify-between items-center px-40 pt-14">
      <div className="   flex flex-col gap-[46px] items-start  w-[475px] ">
        <div className="content-stretch flex flex-col gap-[12px] items-end not-italic relative shrink-0 text-right w-full whitespace-pre-wrap">
          <p
            className="font-IRANYekanXVF font-semibold leading-[normal] relative shrink-0 text-[#303030] text-[20.5px] w-full"
            dir="auto"
          >
            <span>{`دانلود اپلیکیشن `}</span>
            <span className="text-[#f42326]">نستک</span>
          </p>
          <p
            className="font-IRANYekanXVF font-normal leading-[1.7] relative shrink-0 text-[#919191] text-[14px] w-full"
            dir="auto"
          >
            اگه دنبال پت جدیدی هستی یا می‌خوای پتت رو واگذار کنی، نستک فضایی امن
            برای ارتباط بین افراد مهربون و مسئولیت‌پذیر فراهم کرده.
          </p>
        </div>
        <div className=" flex flex-col gap-[15px] items-start relative w-full">
          <div className="w-full grid grid-cols-2 gap-[15px]">
            {downloads.map((item) => (
              <>
                <div className="bg-white box-border content-stretch flex flex-[1_0_0] gap-[16px] h-[72px] items-center justify-end min-h-px min-w-px px-[24px] py-[10px] relative rounded-[50px] shrink-0">
                  <div className="overflow-clip relative shrink-0 size-[28px]">
                    <div className="absolute inset-[7.14%_9.83%]">
                      <img
                        alt=""
                        className="block max-w-none size-full"
                        src={item?.icon}
                      />
                    </div>
                  </div>
                  <div className="content-stretch flex flex-[1_0_0] flex-col gap-[6px] items-end justify-center min-h-px min-w-px not-italic relative shrink-0 text-right whitespace-pre-wrap">
                    <p
                      className="font-IRANYekanXVF font-medium leading-[1.7] relative shrink-0 text-[#919191] text-[12.75px] w-full"
                      dir="auto"
                    >
                      {item?.subtitle}
                    </p>
                    <p
                      className="font-IRANYekanXVF font-semibold leading-[normal] relative shrink-0 text-[#303030] text-[14px] w-full"
                      dir="auto"
                    >
                      {item?.title}
                    </p>
                  </div>
                </div>
              </>
            ))}
          </div>
        </div>
      </div>
      <div className="  contents relative ">
        <div className=" ">
          <img
            alt="iPhone 16 Light-1"
            className=" o object-cover pointer-events-none "
            src={"/img/mobile.png"}
          />
        </div>
      </div>
    </div>
  );
}
