"use client";
/* eslint-disable @next/next/no-img-element */

export default function HeaderBar() {
  const img2431779403328 = "https://www.figma.com/api/mcp/asset/9e8a23d8-6c9a-4636-9d1e-d65897896d0e";
  const imgDownload = "https://www.figma.com/api/mcp/asset/b0e37718-1504-400f-b4dc-107b0a3e7253";

  function HugeIconArrowsSolidDownload({ className }: { className?: string }) {
    return (
      <div className={className}>
        <div className="absolute inset-[9.37%_9.37%_9.38%_9.38%]">
          <img alt="" className="block max-w-none size-full" src={imgDownload} />
        </div>
      </div>
    );
  }

  return (
    <div className="absolute bg-[#fff2f2] h-[139px] left-0 overflow-clip top-0 w-[1440px]">
      <div className="absolute bg-[#f42326] box-border content-stretch flex gap-[8px] h-[58px] items-center justify-center left-[155px] p-[8px] rounded-[50px] top-[42.5px] w-[197px]">
        <p className="font-IRANYekanXVF font-semibold leading-[normal] not-italic relative shrink-0 text-[15.25px] text-center text-white" dir="auto">
          نصب اپلیکیشن
        </p>
        <div className="flex items-center justify-center relative shrink-0 size-[24px]">
          <div className="flex-none rotate-[270deg]">
            <HugeIconArrowsSolidDownload className="overflow-clip relative size-[24px]" />
          </div>
        </div>
      </div>
      <div className="absolute box-border content-stretch flex gap-[58px] items-center justify-end left-[381px] px-[48px] py-0 top-[53.5px] w-[822px]">
        {['قوانین و مقررات','سوالات متداول','تماس با ما','معرفی'].map((t) => (
          <p key={t} className="font-IRANYekanXVF font-semibold leading-[normal] not-italic text-[#5d5d5d] text-[15.25px] text-right" dir="auto">
            {t}
          </p>
        ))}
      </div>
      <div className="absolute h-[59px] left-[1234px] overflow-clip top-[42px] w-[51px]">
        <img alt="Nestak" className="block max-w-none size-full" src={img2431779403328} />
      </div>
    </div>
  );
}

