"use client";
/* eslint-disable @next/next/no-img-element */

export default function ContactSection() {
  const img = "https://www.figma.com/api/mcp/asset/722f1364-7741-445f-9a3d-0742003acb3f";
  const img1 = "https://www.figma.com/api/mcp/asset/7b13f7f3-9906-4a19-92d2-69ac685f5828";
  const img2 = "https://www.figma.com/api/mcp/asset/19afc2da-9eca-4453-ba1e-c966c1ed372d";
  const img3 = "https://www.figma.com/api/mcp/asset/dbd576ed-5658-41c9-be52-20d587094c49";
  const imgHugeIconArrowsOutlineArrowLeft = "https://www.figma.com/api/mcp/asset/8e2c2970-b5ff-410d-b30b-b52f56e7d61c";

  function HugeIconArrowsOutlineArrowLeftIcon({ className }: { className?: string }) {
    return (
      <div className={className}>
        <img alt="" className="block max-w-none size-full" src={imgHugeIconArrowsOutlineArrowLeft} />
      </div>
    );
  }

  return (
    <div className="absolute h-[684px] left-0 overflow-clip top-[1961px] w-[1440px]">
      <div className="absolute content-stretch flex flex-col gap-[20px] h-[125px] items-end left-[792px] not-italic text-right top-[79px] w-[493px]">
        <p className="font-IRANYekanXVF font-semibold leading-[normal] relative shrink-0 text-[#303030] text-[20.5px] w-full whitespace-pre-wrap" dir="auto">ارتباط با ما</p>
        <div className="flex-[1_0_0] font-IRANYekanXVF font-normal leading-[1.7] min-h-px min-w-px relative shrink-0 text-[#919191] text-[14px] w-full whitespace-pre-wrap">
          <p className="mb-0" dir="auto">نظرتان برای ما ارزشمند است و دوست داریم تجربه شما و حیوان خانگی‌تان را بشنویم. تیم ما آماده است که پاسخگوی سوالات و مشکلات شما باشد.</p>
          <p dir="auto">راه‌های ارتباطی مختلف را در اختیار شما قرار داده‌ایم تا راحت‌تر با ما در تماس باشید.</p>
        </div>
      </div>
      <div className="absolute bg-[#f4f5f7] box-border content-stretch flex flex-col gap-[32px] items-end left-[155px] overflow-clip p-[32px] rounded-[30px] top-[79px] w-[560px]">
        <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-full">
          {[{label:'نام و نام خانودگی',ph:'نام خود را وارد کنید'},{label:'شماره تماس',ph:'شماره موبایل خود را وارد کنید'}].map((f)=> (
            <div key={f.label} className="content-stretch flex flex-col gap-[12px] items-end relative shrink-0 w-full">
              <p className="font-IRANYekanXVF font-medium leading-[normal] not-italic relative shrink-0 text-[#303030] text-[15.25px] text-right w-full whitespace-pre-wrap" dir="auto">{f.label}</p>
              <div className="bg-white box-border content-stretch flex gap-[8px] items-center justify-end overflow-clip pb-[24px] pt-[20px] px-[16px] relative rounded-[16px] shrink-0 w-full">
                <p className="flex-[1_0_0] font-IRANYekanXVF font-medium leading-[normal] min-h-px min-w-px not-italic relative shrink-0 text-[#919191] text-[14px] text-right whitespace-pre-wrap" dir="auto">{f.ph}</p>
              </div>
            </div>
          ))}
          <div className="content-stretch flex flex-col gap-[12px] items-end relative shrink-0 w-full">
            <p className="font-IRANYekanXVF font-medium leading-[normal] not-italic relative shrink-0 text-[#303030] text-[15.25px] text-right w-full whitespace-pre-wrap" dir="auto">پیام شما</p>
            <div className="bg-white box-border content-stretch flex gap-[8px] h-[116px] items-start justify-center overflow-clip px-[16px] py-[24px] relative rounded-[16px] shrink-0 w-full">
              <p className="flex-[1_0_0] font-IRANYekanXVF font-medium leading-[normal] min-h-px min-w-px not-italic relative shrink-0 text-[#919191] text-[14px] text-right whitespace-pre-wrap" dir="auto">متن پیام خود را بنویسید...</p>
            </div>
          </div>
        </div>
        <div className="bg-[#f42326] box-border content-stretch flex gap-[6px] h-[52px] items-center justify-center p-[8px] relative rounded-[50px] shrink-0 w-[182px]">
          <div className="flex items-center justify-center relative shrink-0 size-[24px]">
            <div className="flex-none rotate-[90deg] scale-y-[-100%]">
              <div className="relative size-[24px]"><img alt="" className="block max-w-none size-full" src={imgHugeIconArrowsOutlineArrowLeft} /></div>
            </div>
          </div>
          <p className="font-IRANYekanXVF font-semibold leading-[normal] not-italic relative shrink-0 text-[14px] text-center text-white" dir="auto">ارسال پیام</p>
        </div>
      </div>
      <div className="absolute box-border content-stretch flex flex-col gap-[25px] items-end left-[915px] px-0 py-[24px] top-[243px] w-[370px]">
        <div className="content-stretch flex gap-[12px] items-center justify-end relative shrink-0">
          <p className="font-IRANYekanXVF font-medium leading-[1.7] not-italic relative shrink-0 text-[#303030] text-[14px] text-right" dir="auto">nestak.info@gmail.com</p>
          <div className="overflow-clip relative shrink-0 size-[24px]"><div className="absolute inset-[12.5%_8.33%]"><img alt="" className="block max-w-none size-full" src={img} /></div></div>
        </div>
        <div className="content-stretch flex gap-[12px] items-center justify-end relative shrink-0">
          <p className="font-IRANYekanXVF font-medium leading-[1.7] not-italic relative shrink-0 text-[#303030] text-[14px] text-right" dir="auto">011 2645 33 17 - 0912 649 12 18</p>
          <div className="overflow-clip relative shrink-0 size-[24px]"><div className="absolute inset-[12.5%]"><img alt="" className="block max-w-none size-full" src={img1} /></div></div>
        </div>
        <div className="content-stretch flex gap-[12px] items-center justify-end relative shrink-0 w-full">
          <p className="font-IRANYekanXVF font-medium leading-[1.7] not-italic relative shrink-0 text-[#303030] text-[14px] text-right" dir="auto">تهران، خ انقلاب، کوچه بنفشه، پلاک18</p>
          <div className="overflow-clip relative shrink-0 size-[24px]"><div className="absolute inset-[8.33%_12.5%]"><img alt="" className="block max-w-none size-full" src={img2} /></div></div>
        </div>
        <div className="content-stretch flex gap-[12px] items-start justify-end relative shrink-0">
          <div className="content-stretch flex flex-col gap-[9px] items-end relative shrink-0 w-[116px]">
            <p className="font-IRANYekanXVF font-medium leading-[1.7] min-w-full not-italic relative shrink-0 text-[#303030] text-[14px] text-right w-[min-content] whitespace-pre-wrap" dir="auto">شنبه - چهارشنبه:</p>
            <div className="content-stretch flex font-IRANYekanXVF font-medium gap-[4px] items-center leading-[1.7] not-italic relative shrink-0 text-[#303030] text-[14px] text-right"><p className="relative shrink-0" dir="auto">20:00</p><p className="relative shrink-0" dir="auto">الی</p><p className="relative shrink-0" dir="auto">08:00</p></div>
          </div>
          <div className="overflow-clip relative shrink-0 size-[24px]"><div className="absolute inset-[8.33%]"><div className="absolute inset-0" style={{ ["--fill-0" as any]: "rgba(244, 35, 38, 1)" }}><img alt="" className="block max-w-none size-full" src={img3} /></div></div></div>
        </div>
      </div>
    </div>
  );
}

