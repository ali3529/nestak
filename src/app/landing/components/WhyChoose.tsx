import { WHY_CHOOSE_ITEMS } from "@/app/constant/StaticItemsConst";
import type { Feature } from "@/types/landing";

/* eslint-disable @next/next/no-img-element */

interface WhyChooseProps {
  title?: string;
  subtitle?: string;
  features?: Feature[];
}

export default function WhyChoose({ title, subtitle, features }: WhyChooseProps) {
  const defaultTitle = "چرا نستک رو انتخاب کنم؟";
  const defaultSubtitle = "با یادآورهای دقیق، ارتباط سریع با دامپزشک‌ها و امکانات متنوع خرید و سرپرستی، دیگه هیچ دغدغه‌ای برای مراقبت از پتت نداری.";

  const imageBaseUrl = process.env.NEXT_PUBLIC_API_BASE_URL || "https://serv.nestak.ir/uploads/";

  // Function to highlight "نستک" in red
  const renderTitle = (text: string) => {
    const parts = text.split(/(نستک)/g);
    return parts.map((part, index) =>
      part === "نستک" ? (
        <span key={index} className="text-[#f42326]">
          {part}
        </span>
      ) : (
        part
      )
    );
  };

  // Transform API features to component format
  const items = features && features.length > 0
    ? features.map((f) => ({
        img: `${imageBaseUrl}${f.icon}`,
        title: f.title,
        desc: f.text,
      }))
    : WHY_CHOOSE_ITEMS;
  return (
    <section className="bg-[#f4f5f7] w-full">
      <div className="mx-auto flex w-full  flex-col items-center px-4 pb-16 pt-24 text-center sm:px-8 lg:px-40">
        <div className="flex w-full max-w-[640px] sm:max-w-full!  flex-col items-start gap-3">
          <p className="font-IRANYekanXVF text-[15.25px] md:text-[20px] font-bold text-[#303030] sm:text-[22px]" dir="auto">
            {renderTitle(title || defaultTitle)}
          </p>
          <p className="font-IRANYekanXVF text-[11.25px] md:text-[14px] font-normal text-right md:leading-[30px] text-[#919191]" dir="auto">
            {subtitle || defaultSubtitle}
          </p>
        </div>

        <div className="mt-10 grid w-full gap-4   grid-cols-2 lg:grid-cols-3">
          {items.map((item) => (
            <article
              key={item.title}
              className="flex h-full flex-col items-center rounded-[20px] lg:rounded-[32px] border border-white px-3 py-4 bg-white lg:px-6 lg:py-8 text-center shadow-[0_20px_45px_rgba(26,31,64,0.05)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_25px_50px_rgba(26,31,64,0.08)] sm:px-8"
            >
              <div className="flex size-[36px] lg:size-[62px] items-center justify-center rounded-[22px] bg-[#f4f5f7]">
                <img
                  alt=""
                  className="h-9 w-9 object-contain"
                  src={item.img}
                />
              </div>
              <div className="mt-6 flex flex-col gap-3">
                <p
                  className="font-IRANYekanXVF text-[12.75px] lg:text-[15.25px] font-semibold text-[#303030]"
                  dir="auto"
                >
                  {item.title}
                </p>
                <p
                  className="font-IRANYekanXVF  text-[11.25px] lg:text-[14px] font-medium leading-[18px] lg:leading-[28px] text-[#919191]"
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
