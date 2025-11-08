"use client";
/* eslint-disable @next/next/no-img-element */

export default function RulesStrip() {
  const imgEnamad1300X2311 = "https://www.figma.com/api/mcp/asset/e5a1712c-75dd-4c56-8cf2-d13d5da85809";
  const imgFrame53 = "https://www.figma.com/api/mcp/asset/4a3ac97a-6796-4bdd-a225-4669c2277c84";
  const imgHugeIconArrowsOutlineDirectionLeft2 = "https://www.figma.com/api/mcp/asset/000c6e41-24d8-4d44-826f-be99a53e1a24";

  return (
    <div className="absolute h-[243px] left-0 overflow-clip top-[3313px] w-[1440px]">
      <p className="absolute font-IRANYekanXVF font-normal leading-[1.7] left-[1285px] not-italic text-[#919191] text-[14px] text-right top-[113px] translate-x-[-100%] w-[940px] whitespace-pre-wrap" dir="auto">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی در شصت و سه درصد گذشت.</p>
      <p className="absolute font-IRANYekanXVF font-semibold leading-[normal] left-[1285px] not-italic text-[#303030] text-[20.5px] text-right top-[64px] translate-x-[-100%]" dir="auto">قوانین و مقررات</p>
      <div className="absolute border border-neutral-200 border-solid content-stretch flex flex-col gap-[8px] h-[112px] items-center justify-center left-[155px] rounded-[16px] top-[64px] w-[116px]">
        <div className="h-[69px] relative shrink-0 w-[89px]"><img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgEnamad1300X2311} /></div>
      </div>
      <div className="absolute h-[46px] left-[345px] top-[130px] w-[940px]"><img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgFrame53} /></div>
      <div className="absolute box-border content-stretch flex items-center justify-end p-[8px] right-[155px] top-[183px]">
        <div className="relative shrink-0 size-[20px]"><img alt="" className="block max-w-none size-full" src={imgHugeIconArrowsOutlineDirectionLeft2} /></div>
        <p className="font-IRANYekanXVF font-medium leading-[1.7] not-italic relative shrink-0 text-[#f42326] text-[12.75px] text-right" dir="auto">بیشتر</p>
      </div>
    </div>
  );
}

