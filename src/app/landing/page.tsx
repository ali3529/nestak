"use client";
/* eslint-disable @next/next/no-img-element */
import { useEffect, useState } from "react";

function ScaledCanvas({ children, baseWidth, baseHeight }: { children: React.ReactNode; baseWidth: number; baseHeight: number }) {
  const [scale, setScale] = useState(1);
  useEffect(() => {
    const update = () => setScale(Math.min(window.innerWidth / baseWidth, 1));
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, [baseWidth]);
  return (
    <div className="w-full flex justify-center" style={{ minHeight: `${baseHeight * scale}px` }}>
      <div style={{ width: baseWidth, height: baseHeight, transform: `scale(${scale})`, transformOrigin: "top center" }}>{children}</div>
    </div>
  );
}

export default function Landing() {
  // Image asset mappings (Figma export URLs; expire ~7 days)
  const imgIPhone16Light1 = "https://www.figma.com/api/mcp/asset/4efa8609-bc51-4664-b783-7749171bb25e";
  const imgIPhone16Light = "https://www.figma.com/api/mcp/asset/8cab422f-4140-4f85-b254-17c448888e58";
  const imgIPhone16PlusLight = "https://www.figma.com/api/mcp/asset/1776424c-67e4-42d7-91a5-be0dc9f6f30c";
  const imgPngtreeDogsAndCatsDogs1195531 = "https://www.figma.com/api/mcp/asset/3a483c25-be9c-4672-981c-97a54baee702";
  const imgCHJpvm = "https://www.figma.com/api/mcp/asset/525adf12-55e0-44be-bdba-7da6f3ffc2c3";
  const imgEnamad1300X2311 = "https://www.figma.com/api/mcp/asset/e5a1712c-75dd-4c56-8cf2-d13d5da85809";

  const imgDownload = "https://www.figma.com/api/mcp/asset/b0e37718-1504-400f-b4dc-107b0a3e7253";
  const imgDownload1 = "https://www.figma.com/api/mcp/asset/a5b9ffdc-9ba2-4d0a-9549-4a1da7563c8c";
  const imgGroup = "https://www.figma.com/api/mcp/asset/620ba1e4-6152-4bde-89e3-3c4cffc65da9";
  const imgGroup1 = "https://www.figma.com/api/mcp/asset/8beb9e2c-5bac-46bd-a08d-2656323fa7ec";
  const imgPetShop = "https://www.figma.com/api/mcp/asset/6ad6e6ec-14cc-4e66-80df-d9bab5c0e81b";
  const imgGroup2 = "https://www.figma.com/api/mcp/asset/de6e4134-0d46-4f4c-8faf-498553428245";
  const imgGroup3 = "https://www.figma.com/api/mcp/asset/aba1cc4b-0c14-4c2f-8c67-940bd61cc78f";
  const imgGroup4 = "https://www.figma.com/api/mcp/asset/31c32d97-798a-4a28-bf0c-fc595de5c1dd";
  const imgGroup5 = "https://www.figma.com/api/mcp/asset/3a67e93b-5aff-4a14-b071-5292505d241c";
  const imgRectangle = "https://www.figma.com/api/mcp/asset/9234ae17-6e23-4d8b-86c7-fd910e7c6912";
  const imgRectangle1 = "https://www.figma.com/api/mcp/asset/1121e3ee-4a81-4beb-8648-f64043e77469";
  const imgRectangle2 = "https://www.figma.com/api/mcp/asset/7a25848b-f878-4293-9b57-3b9c8ad937f7";
  const imgFrame53 = "https://www.figma.com/api/mcp/asset/4a3ac97a-6796-4bdd-a225-4669c2277c84";
  const imgSibappSeeklogo1 = "https://www.figma.com/api/mcp/asset/9ef81287-36f5-4623-8a9d-c0a12f41d2af";
  const img2431779403328 = "https://www.figma.com/api/mcp/asset/9e8a23d8-6c9a-4636-9d1e-d65897896d0e";
  const imgHugeIconArrowsOutlineArrowLeft = "https://www.figma.com/api/mcp/asset/8e2c2970-b5ff-410d-b30b-b52f56e7d61c";
  const img = "https://www.figma.com/api/mcp/asset/722f1364-7741-445f-9a3d-0742003acb3f";
  const img1 = "https://www.figma.com/api/mcp/asset/7b13f7f3-9906-4a19-92d2-69ac685f5828";
  const img2 = "https://www.figma.com/api/mcp/asset/19afc2da-9eca-4453-ba1e-c966c1ed372d";
  const img3 = "https://www.figma.com/api/mcp/asset/dbd576ed-5658-41c9-be52-20d587094c49";
  const imgHugeIconArrowsOutlineDirectionDown2 = "https://www.figma.com/api/mcp/asset/a14827de-ff10-4c22-9ca0-7b3d2b4804fe";
  const imgHugeIconArrowsOutlineDirectionUp2 = "https://www.figma.com/api/mcp/asset/5536e597-b3f0-46e3-9bcd-30b5bd388cb1";
  const img4 = "https://www.figma.com/api/mcp/asset/528c4f94-13a7-461a-80b9-ae63e0bc3590";
  const img5 = "https://www.figma.com/api/mcp/asset/1755446a-491e-4cf4-b348-84aa64eb7ea1";
  const img6 = "https://www.figma.com/api/mcp/asset/318062b7-a21f-4549-917c-c7d03e5d16d8";
  const img7 = "https://www.figma.com/api/mcp/asset/96baaa9a-8a9f-495b-bd2d-e660fc0a6fe7";
  const imgLine1 = "https://www.figma.com/api/mcp/asset/546ccfdb-9dde-4bbb-bbcd-a4c722bc7ba5";
  const imgGroup6 = "https://www.figma.com/api/mcp/asset/a8faef5d-c0e3-4a31-87a8-1e7a6205821b";
  const imgHugeIconArrowsOutlineDirectionLeft2 = "https://www.figma.com/api/mcp/asset/000c6e41-24d8-4d44-826f-be99a53e1a24";

  function HugeIconArrowsSolidDownload({ className }: { className?: string }) {
    return (
      <div className={className}>
        <div className="absolute inset-[9.37%_9.37%_9.38%_9.38%]">
          <img alt="" className="block max-w-none size-full" src={imgDownload} />
        </div>
      </div>
    );
  }

  function HugeIconArrowsSolidDownload1({ className }: { className?: string }) {
    return (
      <div className={className}>
        <div className="absolute inset-[9.37%_9.37%_9.38%_9.38%]">
          <img alt="" className="block max-w-none size-full" src={imgDownload1} />
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white">
      <ScaledCanvas baseWidth={1440} baseHeight={3990}>
      <div className="relative size-[1440px_3990px]">
        {/* Header */}
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
        {/* Footer */}
        <div className="absolute h-[434px] left-0 top-[3556px] w-[1440px]">
          <div className="absolute content-stretch flex flex-col gap-[30px] h-[230px] items-end justify-center left-[155px] top-[70px] w-[234px]">
            <p className="font-IRANYekanXVF font-semibold leading-[normal] not-italic relative shrink-0 text-[#f42326] text-[15.25px] text-right w-full whitespace-pre-wrap" dir="auto">دسترسی سریع</p>
            <div className="content-stretch flex flex-col gap-[25px] items-end relative shrink-0 w-full">
              {['معرفی','تماس با ما','سوالات متداول','قوانین و مقررات'].map((t) => (
                <p key={t} className="font-IRANYekanXVF font-medium leading-[normal] not-italic relative shrink-0 text-[#5d5d5d] text-[14px] text-right" dir="auto">{t}</p>
              ))}
            </div>
          </div>
          <div className="absolute content-stretch flex flex-col gap-[30px] items-end justify-center left-[533px] top-[70px] w-[275px]">
            <p className="font-IRANYekanXVF font-semibold leading-[normal] not-italic relative shrink-0 text-[#f42326] text-[15.25px] text-right w-full whitespace-pre-wrap" dir="auto">ارتباط با ما</p>
            <div className="content-stretch flex flex-col gap-[25px] items-end relative shrink-0 w-full text-[#5d5d5d] text-[14px]">
              <div className="content-stretch flex gap-[12px] items-center justify-end relative shrink-0">
                <p className="font-IRANYekanXVF font-medium leading-[normal] not-italic relative shrink-0 text-right" dir="auto">nestak.info@gmail.com</p>
                <div className="overflow-clip relative shrink-0 size-[20px]"><div className="absolute inset-[12.5%_8.33%]"><img alt="" className="block max-w-none size-full" src={img4} /></div></div>
              </div>
              <div className="content-stretch flex gap-[12px] items-center justify-end relative shrink-0">
                <p className="font-IRANYekanXVF font-medium leading-[normal] not-italic relative shrink-0 text-right" dir="auto">011 2645 33 17 - 0912 649 12 18</p>
                <div className="overflow-clip relative shrink-0 size-[20px]"><div className="absolute inset-[12.5%]"><img alt="" className="block max-w-none size-full" src={img5} /></div></div>
              </div>
              <div className="content-stretch flex gap-[12px] items-center justify-end relative shrink-0 w-full">
                <p className="font-IRANYekanXVF font-medium leading-[normal] not-italic relative shrink-0 text-right" dir="auto">تهران، خ انقلاب، کوچه بنفشه، پلاک18</p>
                <div className="overflow-clip relative shrink-0 size-[20px]"><div className="absolute inset-[8.33%_12.5%]"><img alt="" className="block max-w-none size-full" src={img6} /></div></div>
              </div>
              <div className="content-stretch flex gap-[12px] items-start justify-end relative shrink-0">
                <div className="content-stretch flex flex-col gap-[9px] items-end relative shrink-0 w-[116px]">
                  <p className="font-IRANYekanXVF font-medium leading-[normal] min-w-full not-italic relative shrink-0 text-right w-[min-content] whitespace-pre-wrap" dir="auto">شنبه - چهارشنبه:</p>
                  <div className="content-stretch flex font-IRANYekanXVF font-medium gap-[4px] items-center leading-[normal] not-italic relative shrink-0 text-right"><p className="relative shrink-0" dir="auto">20:00</p><p className="relative shrink-0" dir="auto">الی</p><p className="relative shrink-0" dir="auto">08:00</p></div>
                </div>
                <div className="overflow-clip relative shrink-0 size-[20px]"><div className="absolute inset-[8.33%]"><div className="absolute inset-0" style={{ ["--fill-0" as any]: "rgba(244, 35, 38, 1)" }}><img alt="" className="block max-w-none size-full" src={img7} /></div></div></div>
              </div>
            </div>
          </div>
          <div className="absolute content-stretch flex flex-col gap-[29px] h-[230px] items-end left-[981px] top-[70px] w-[304px]">
            <div className="h-[59px] overflow-clip relative shrink-0 w-[51px]"><img alt="Nestak" className="block max-w-none size-full" src={img2431779403328} /></div>
            <div className="flex-[1_0_0] font-IRANYekanXVF font-normal leading-[1.7] min-h-px min-w-px not-italic relative shrink-0 text-[#919191] text-[14px] text-right w-full whitespace-pre-wrap" dir="auto">
              <p className="mb-0" dir="auto">همه چیز برای زندگی شاد با حیوان خانگی‌تان! یادآوری‌های هوشمند، چت با دامپزشک، خرید آسان لوازم و پیدا کردن خانه جدید برای حیوان‌ها و دستیار شما در مراقبت بهتر؛ همگی در نستک.</p>
              <p dir="auto">{`اولین ماه، هدیه ما به شماست! `}</p>
            </div>
          </div>
          <div className="absolute h-0 left-[155px] top-0 w-[1130px]"><div className="absolute bottom-0 left-0 right-0 top-[-1px]"><img alt="" className="block max-w-none size-full" src={imgLine1} /></div></div>
          <div className="absolute h-0 left-[155px] top-[369px] w-[1130px]"><div className="absolute bottom-0 left-0 right-0 top-[-1px]"><img alt="" className="block max-w-none size-full" src={imgLine1} /></div></div>
          <div className="absolute content-stretch flex gap-[4px] items-center justify-end left-[1066px] top-[393px]">
            <p className="font-IRANYekanXVF font-normal leading-[normal] not-italic relative shrink-0 text-[#5d5d5d] text-[12.75px] text-right" dir="auto"><span>{`تمامی حقوق متعلق به `}</span><span className="font-IRANYekanXVF font-semibold text-[#f42326]">نستک</span><span>{` می‌باشد.`}</span></p>
            <div className="overflow-clip relative shrink-0 size-[18px]"><div className="absolute inset-[8.33%]"><img alt="" className="block max-w-none size-full" src={imgGroup6} /></div></div>
          </div>
          <div className="absolute content-stretch flex gap-[7px] items-start left-[155px] top-[393px]">
            <p className="font-IRANYekanXVF font-normal leading-[normal] not-italic relative shrink-0 text-[#5d5d5d] text-[12.75px] text-right" dir="auto"><span>{`طراحی و توسعه: `}</span><span className="font-IRANYekanXVF font-semibold text-[#f42326]">فـنـورا</span></p>
          </div>
        </div>

        {/* Rules strip */}
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
        {/* Contact */}
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

        {/* FAQ */}
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
        {/* Why choose Nestak */}
        <div className="absolute bg-[#f4f5f7] h-[828px] left-0 overflow-clip top-[657px] w-[1440px]">
          <p className="absolute font-IRANYekanXVF font-normal leading-[1.7] left-[1285px] not-italic text-[#919191] text-[14px] text-right top-[136px] translate-x-[-100%] w-[1130px] whitespace-pre-wrap" dir="auto">
            با یادآورهای دقیق، ارتباط سریع با دامپزشک‌ها و امکانات متنوع خرید و سرپرستی، دیگه هیچ دغدغه‌ای برای مراقبت از پتت نداری.
          </p>
          <p className="absolute font-IRANYekanXVF font-semibold leading-[normal] left-[1285px] not-italic text-[#303030] text-[20.5px] text-right top-[91px] translate-x-[-100%]" dir="auto">
            <span>{`چرا `}</span>
            <span className="text-[#f42326]">نستک</span>
            <span>{` رو انتخاب کنم؟`}</span>
          </p>
          <div className="absolute content-stretch flex flex-col gap-[10px] items-start left-[155px] top-[190px] w-[1130px]">
            {/* Row 1 */}
            <div className="content-stretch flex gap-[10px] items-center relative shrink-0 w-full">
              {[{img:imgGroup,title:'مدیریت و یادآوری هوشمند',desc:'زمان واکسن، دارو یا غذای پتت رو بسپار به نستک؛ همه چیز رو خودش بهت یادآوری می‌کنه.'},{img:imgGroup1,title:'مشاوره و گفت‌وگوی آنلاین با دامپزشک',desc:'هر وقت نگران سلامتی پتت شدی، از بین دامپزشک‌های معتبر انتخاب کن و آنلاین باهاشون صحبت کن.'},{img:imgPetShop,title:'پت‌شاپ و خدمات پت',desc:'غذا، لوازم بازی، وسایل مراقبتی و هر چیزی که برای پتت بخوای، با چند کلیک سفارش بده.'}].map((c,idx)=> (
                <div key={idx} className="bg-white border border-[#f5f4f2] border-solid relative rounded-[50px] shrink-0 w-[370px] h-[287px]">
                  <div className="box-border content-stretch flex flex-col gap-[35px] h-[287px] items-center overflow-clip p-[40px] relative rounded-[inherit] w-[370px]">
                    <div className="overflow-clip relative shrink-0 size-[62px]">
                      <img alt="" className="block max-w-none size-full" src={c.img} />
                    </div>
                    <div className="content-stretch flex flex-col gap-[12px] items-center leading-[1.7] not-italic relative shrink-0 text-center w-full whitespace-pre-wrap">
                      <p className="font-IRANYekanXVF font-semibold relative shrink-0 text-[#303030] text-[15.25px] w-full" dir="auto">{c.title}</p>
                      <p className="font-IRANYekanXVF font-normal relative shrink-0 text-[#919191] text-[14px] w-full" dir="auto">{c.desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            {/* Row 2 */}
            <div className="content-stretch flex gap-[10px] items-center relative shrink-0 w-full">
              {[{img:imgGroup2,title:'تجربه راحت و عضویت رایگان',desc:'با ۳۰ روز حساب رایگان، بدون محدودیت امکانات رو امتحان کن و لذت داشتن یه همراه واقعی برای پتت رو تجربه کن.'},{img:imgGroup3,title:'مقالات و آموزش‌های مفید',desc:'مجموعه‌ای از مطالب کاربردی درباره‌ی تغذیه، رفتارشناسی و سلامت پت‌ها همیشه در دسترس توئه.'},{img:imgGroup4,title:'واگذاری و سرپرستی حیوانات',desc:'اگه دنبال پت جدیدی هستی یا می‌خوای پتت رو واگذار کنی، نستک فضایی امن برای ارتباط بین افراد مهربون و مسئولیت‌پذیر فراهم کرده.'}].map((c,idx)=> (
                <div key={idx} className="bg-white border border-[#f5f4f2] border-solid relative rounded-[50px] shrink-0 w-[370px] h-[287px]">
                  <div className="box-border content-stretch flex flex-col gap-[35px] h-[287px] items-center overflow-clip p-[40px] relative rounded-[inherit] w-[370px]">
                    <div className="overflow-clip relative shrink-0 size-[62px]">
                      <img alt="" className="block max-w-none size-full" src={c.img} />
                    </div>
                    <div className="content-stretch flex flex-col gap-[12px] items-center leading-[1.7] not-italic relative shrink-0 text-center w-full whitespace-pre-wrap">
                      <p className="font-IRANYekanXVF font-semibold relative shrink-0 text-[#303030] text-[15.25px] w-full" dir="auto">{c.title}</p>
                      <p className="font-IRANYekanXVF font-normal relative shrink-0 text-[#919191] text-[14px] w-full" dir="auto">{c.desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* App download phones and buttons */}
        <div className="absolute bg-[#f4f5f7] h-[474px] left-1/2 overflow-clip top-[1485px] translate-x-[-50%] w-[1440px]">
          <div className="absolute bottom-[-76px] contents left-[153px]">
            <div className="absolute bottom-[-14px] h-[386px] left-[532px] w-[188px]">
              <img alt="iPhone 16 Light-1" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgIPhone16Light1} />
            </div>
            <div className="absolute bottom-[-14px] h-[385px] left-[153px] w-[188px]">
              <img alt="iPhone 16 Light" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgIPhone16Light} />
            </div>
            <div className="absolute bottom-[-76px] h-[491px] left-[calc(50%+-285.5px)] translate-x-[-50%] w-[241.751px]">
              <img alt="iPhone 16 Plus Light" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgIPhone16PlusLight} />
            </div>
          </div>
          <div className="absolute bottom-[85px] content-stretch flex flex-col gap-[46px] items-end right-[155px]">
            <div className="content-stretch flex flex-col gap-[12px] items-end not-italic relative shrink-0 text-right w-full whitespace-pre-wrap">
              <p className="font-IRANYekanXVF font-semibold leading-[normal] relative shrink-0 text-[#303030] text-[20.5px] w-full" dir="auto">
                <span>{`دانلود اپلیکیشن `}</span>
                <span className="text-[#f42326]">نستک</span>
              </p>
              <p className="font-IRANYekanXVF font-normal leading-[1.7] relative shrink-0 text-[#919191] text-[14px] w-full" dir="auto">
                اگه دنبال پت جدیدی هستی یا می‌خوای پتت رو واگذار کنی، نستک فضایی امن برای ارتباط بین افراد مهربون و مسئولیت‌پذیر فراهم کرده.
              </p>
            </div>
            <div className="content-stretch flex flex-col gap-[15px] items-start relative shrink-0 w-[475px]">
              <div className="content-stretch flex gap-[15px] items-center relative shrink-0 w-full">
                <div className="bg-white box-border content-stretch flex flex-[1_0_0] gap-[16px] h-[72px] items-center justify-end min-h-px min-w-px px-[24px] py-[10px] relative rounded-[50px] shrink-0">
                  <div className="content-stretch flex flex-[1_0_0] flex-col gap-[6px] items-end justify-center min-h-px min-w-px not-italic relative shrink-0 text-right whitespace-pre-wrap">
                    <p className="font-IRANYekanXVF font-medium leading-[1.7] relative shrink-0 text-[#919191] text-[12.75px] w-full" dir="auto">
                      دانلود از
                    </p>
                    <p className="font-IRANYekanXVF font-semibold leading-[normal] relative shrink-0 text-[#303030] text-[14px] w-full" dir="auto">
                      Google play
                    </p>
                  </div>
                  <div className="overflow-clip relative shrink-0 size-[28px]">
                    <div className="absolute inset-[7.14%_9.83%]">
                      <img alt="" className="block max-w-none size-full" src={imgGroup5} />
                    </div>
                  </div>
                </div>
                <div className="bg-white box-border content-stretch flex flex-[1_0_0] gap-[16px] h-[72px] items-center justify-end min-h-px min-w-px px-[24px] py-[10px] relative rounded-[50px] shrink-0">
                  <div className="content-stretch flex flex-[1_0_0] flex-col gap-[6px] items-end min-h-px min-w-px not-italic relative shrink-0 text-right whitespace-pre-wrap">
                    <p className="font-IRANYekanXVF font-medium leading-[1.7] relative shrink-0 text-[#919191] text-[12.75px] w-full" dir="auto">
                      دانلود از
                    </p>
                    <p className="font-IRANYekanXVF font-semibold leading-[normal] relative shrink-0 text-[#303030] text-[14px] w-full" dir="auto">
                      لینک مستقیم اندروید
                    </p>
                  </div>
                  <div className="flex items-center justify-center relative shrink-0 size-[28px]">
                    <div className="flex-none rotate-[270deg]">
                      <HugeIconArrowsSolidDownload1 className="overflow-clip relative size-[28px]" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="content-stretch flex gap-[15px] items-center relative shrink-0 w-full">
                <div className="bg-white box-border content-stretch flex flex-[1_0_0] gap-[16px] h-[72px] items-center justify-end min-h-px min-w-px px-[24px] py-[10px] relative rounded-[50px] shrink-0">
                  <div className="content-stretch flex flex-[1_0_0] flex-col gap-[6px] items-end min-h-px min-w-px not-italic relative shrink-0 text-right whitespace-pre-wrap">
                    <p className="font-IRANYekanXVF font-medium leading-[1.7] relative shrink-0 text-[#919191] text-[12.75px] w-full" dir="auto">
                      دانلود از
                    </p>
                    <p className="font-IRANYekanXVF font-semibold leading-[normal] relative shrink-0 text-[#303030] text-[14px] w/full" dir="auto">
                      سیب اپ
                    </p>
                  </div>
                  <div className="relative shrink-0 size-[28px]">
                    <img alt="" className="block max-w-none size-full" src={imgSibappSeeklogo1} />
                  </div>
                </div>
                <div className="bg-white box-border content-stretch flex flex-[1_0_0] gap-[16px] h-[72px] items-center justify-end min-h-px min-w-px px-[24px] py-[10px] relative rounded-[50px] shrink-0">
                  <div className="content-stretch flex flex-[1_0_0] flex-col gap-[6px] items-end justify-center min-h-px min-w-px not-italic relative shrink-0 text-right whitespace-pre-wrap">
                    <p className="font-IRANYekanXVF font-medium leading-[1.7] relative shrink-0 text-[#919191] text-[12.75px] w-full" dir="auto">
                      دانلود از
                    </p>
                    <p className="font-IRANYekanXVF font-semibold leading-[normal] relative shrink-0 text-[#303030] text-[14px] w/full" dir="auto">
                      بازار
                    </p>
                  </div>
                  <div className="overflow-clip relative shrink-0 size-[28px]">
                    <div className="absolute contents inset-[14.58%_13.95%_10.42%_13.89%]">
                      <div className="absolute contents inset-[14.58%_13.95%_10.42%_13.89%]">
                        <div className="absolute contents inset-[12.95%_12.32%_8.79%_12.27%]">
                          <div className="absolute contents inset-[12.8%_12.23%_8.75%_12.13%]">
                            <div className="[mask-clip:no-clip,_no-clip] [mask-composite:intersect,_intersect] [mask-mode:alpha,_alpha] [mask-repeat:no-repeat,_no-repeat] absolute inset-[12.8%_12.23%_8.75%_12.13%]" style={{ maskImage: `url('${imgRectangle}'), url('${imgRectangle1}')` }}>
                              <div className="absolute inset-0 overflow-hidden pointer-events-none">
                                <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgRectangle2} />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Hero */}
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
          <div className="absolute h-[252px] left-[901px] top-[332px] w-[384px]">
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              <img alt="" className="absolute h-[202.4%] left-[-16.41%] max-w-none top-[-55.95%] w-[132.81%]" src={imgPngtreeDogsAndCatsDogs1195531} />
            </div>
          </div>
          <div className="absolute h-[132px] left-[167px] top-[404px] w-[240px]">
            <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgCHJpvm} />
          </div>
        </div>
      </div>
      </ScaledCanvas>
    </div>
  );
}
