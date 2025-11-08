"use client";
/* eslint-disable @next/next/no-img-element */

export default function FAQSection() {
  const imgHugeIconArrowsOutlineDirectionDown2 = "https://www.figma.com/api/mcp/asset/a14827de-ff10-4c22-9ca0-7b3d2b4804fe";
  const imgHugeIconArrowsOutlineDirectionUp2 = "https://www.figma.com/api/mcp/asset/5536e597-b3f0-46e3-9bcd-30b5bd388cb1";

  return (
    <div className="absolute h-[668px] left-0 overflow-clip top-[2645px] w-[1440px]">
      <p className="absolute font-IRANYekanXVF font-semibold leading-[normal] left-[calc(50%+0.5px)] not-italic text-[#303030] text-[20.5px] text-center top-[28px] translate-x-[-50%]" dir="auto">سوالات متداول</p>
      <div className="absolute content-stretch flex flex-col gap-[8px] items-start left-[725px] top-[113px] w-[560px]">
        <div className="bg-[#f4f5f7] box-border content-stretch flex gap-[8px] h-[87px] items-center justify-end px-[24px] py-[12px] relative rounded-[30px] shrink-0 w-full">
          <div className="relative shrink-0 size-[24px]"><img alt="" className="block max-w-none size-full" src={imgHugeIconArrowsOutlineDirectionDown2} /></div>
          <p className="flex-[1_0_0] font-IRANYekanXVF font-medium leading-[1.7] min-h-px min-w-px not-italic relative shrink-0 text-[#303030] text-[15.25px] text-right whitespace-pre-wrap" dir="auto">۱. اپلیکیشن چه امکاناتی دارد؟</p>
        </div>
        <div className="bg-[#f4f5f7] box-border content-stretch flex flex-col items-center px-[24px] py-0 relative rounded-[30px] shrink-0 w-full">
          <div className="box-border content-stretch flex items-center justify-between px-0 py-[31.5px] relative shrink-0 w-full">
            <div className="relative shrink-0 size-[24px]"><img alt="" className="block max-w-none size-full" src={imgHugeIconArrowsOutlineDirectionUp2} /></div>
            <p className="flex-[1_0_0] font-IRANYekanXVF font-medium leading-[1.7] min-h-px min-w-px not-italic relative shrink-0 text-[#f42326] text-[15.25px] text-right whitespace-pre-wrap" dir="auto">3. آیا می‌توانم یادآورهای مخصوص برای حیوان خانگی‌ام تنظیم کنم؟</p>
          </div>
          <div className="box-border content-stretch flex gap-[8px] items-center justify-center pb-[31.5px] pt-0 px-0 relative shrink-0 w-full">
            <p className="flex-[1_0_0] font-IRANYekanXVF font-normal leading-[1.7] min-h-px min-w-px not-italic relative shrink-0 text-[#919191] text-[14px] text-right whitespace-pre-wrap" dir="auto">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد.</p>
          </div>
        </div>
        <div className="bg-[#f4f5f7] box-border content-stretch flex gap-[8px] h-[87px] items-center justify-end px-[24px] py-[12px] relative rounded-[30px] shrink-0 w-full">
          <div className="relative shrink-0 size-[24px]"><img alt="" className="block max-w-none size-full" src={imgHugeIconArrowsOutlineDirectionDown2} /></div>
          <p className="flex-[1_0_0] font-IRANYekanXVF font-medium leading-[1.7] min-h-px min-w-px not-italic relative shrink-0 text-[#303030] text-[15.25px] text-right whitespace-pre-wrap" dir="auto">5. آیا می‌توانم از طریق اپلیکیشن خرید کنم؟</p>
        </div>
        <div className="bg-[#f4f5f7] box-border content-stretch flex gap-[8px] h-[87px] items-center justify-end px-[24px] py-[12px] relative rounded-[30px] shrink-0 w-full">
          <div className="relative shrink-0 size-[24px]"><img alt="" className="block max-w-none size-full" src={imgHugeIconArrowsOutlineDirectionDown2} /></div>
          <p className="flex-[1_0_0] font-IRANYekanXVF font-medium leading-[1.7] min-h-px min-w-px not-italic relative shrink-0 text-[#303030] text-[15.25px] text-right whitespace-pre-wrap" dir="auto">7. اپلیکیشن چه امکاناتی دارد؟</p>
        </div>
      </div>
      <div className="absolute content-stretch flex flex-col gap-[8px] items-start left-[155px] top-[113px] w-[560px]">
        {Array.from({ length: 4 }).map((_, i) => (
          <div key={i} className="bg-[#f4f5f7] box-border content-stretch flex gap-[8px] h-[87px] items-center justify-end px-[24px] py-[12px] relative rounded-[30px] shrink-0 w-full">
            <div className="relative shrink-0 size-[24px]"><img alt="" className="block max-w-none size-full" src={imgHugeIconArrowsOutlineDirectionDown2} /></div>
            <p className="flex-[1_0_0] font-IRANYekanXVF font-medium leading-[1.7] min-h-px min-w-px not-italic relative shrink-0 text-[#303030] text-[15.25px] text-right whitespace-pre-wrap" dir="auto">سوال متداول {i + 1}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

