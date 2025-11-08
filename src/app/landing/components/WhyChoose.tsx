"use client";
/* eslint-disable @next/next/no-img-element */

export default function WhyChoose() {
  const imgGroup = "https://www.figma.com/api/mcp/asset/620ba1e4-6152-4bde-89e3-3c4cffc65da9";
  const imgGroup1 = "https://www.figma.com/api/mcp/asset/8beb9e2c-5bac-46bd-a08d-2656323fa7ec";
  const imgPetShop = "https://www.figma.com/api/mcp/asset/6ad6e6ec-14cc-4e66-80df-d9bab5c0e81b";
  const imgGroup2 = "https://www.figma.com/api/mcp/asset/de6e4134-0d46-4f4c-8faf-498553428245";
  const imgGroup3 = "https://www.figma.com/api/mcp/asset/aba1cc4b-0c14-4c2f-8c67-940bd61cc78f";
  const imgGroup4 = "https://www.figma.com/api/mcp/asset/31c32d97-798a-4a28-bf0c-fc595de5c1dd";

  return (
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
          {[
            {img:imgGroup,title:'مدیریت و یادآوری هوشمند',desc:'زمان واکسن، دارو یا غذای پتت رو بسپار به نستک؛ همه چیز رو خودش بهت یادآوری می‌کنه.'},
            {img:imgGroup1,title:'مشاوره و گفت‌وگوی آنلاین با دامپزشک',desc:'هر وقت نگران سلامتی پتت شدی، از بین دامپزشک‌های معتبر انتخاب کن و آنلاین باهاشون صحبت کن.'},
            {img:imgPetShop,title:'پت‌شاپ و خدمات پت',desc:'غذا، لوازم بازی، وسایل مراقبتی و هر چیزی که برای پتت بخوای، با چند کلیک سفارش بده.'}
          ].map((c,idx)=> (
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
          {[
            {img:imgGroup2,title:'تجربه راحت و عضویت رایگان',desc:'با ۳۰ روز حساب رایگان، بدون محدودیت امکانات رو امتحان کن و لذت داشتن یه همراه واقعی برای پتت رو تجربه کن.'},
            {img:imgGroup3,title:'مقالات و آموزش‌های مفید',desc:'مجموعه‌ای از مطالب کاربردی درباره‌ی تغذیه، رفتارشناسی و سلامت پت‌ها همیشه در دسترس توئه.'},
            {img:imgGroup4,title:'واگذاری و سرپرستی حیوانات',desc:'اگه دنبال پت جدیدی هستی یا می‌خوای پتت رو واگذار کنی، نستک فضایی امن برای ارتباط بین افراد مهربون و مسئولیت‌پذیر فراهم کرده.'}
          ].map((c,idx)=> (
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
  );
}
