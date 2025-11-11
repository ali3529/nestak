import { downloads } from "@/app/constant/StaticItemsConst";

/* eslint-disable @next/next/no-img-element */

interface AppDownloadProps {
  bazzar?: string;
  sibapp?: string;
  googlePlay?: string;
  directApkLink?: string;
}

export default function AppDownload({
  bazzar,
  sibapp,
  googlePlay,
  directApkLink
}: AppDownloadProps) {
  // Build dynamic downloads array with API links
  const downloadLinks = [
    directApkLink && {
      title: "لینک مستقیم اندروید",
      subtitle: "دانلود از",
      icon: "/Icons/solid/download-black.svg",
      href: directApkLink,
    },
    bazzar && {
      title: "بازار",
      subtitle: "دانلود از",
      icon: "/Icons/Colors/cafe-bazar.svg",
      href: bazzar,
    },
    googlePlay && {
      title: "Google play",
      subtitle: "دانلود از",
      icon: "/Icons/Colors/google-play.svg",
      href: googlePlay,
    },
    sibapp && {
      title: "سیب اپ",
      subtitle: "دانلود از",
      icon: "/Icons/Colors/sibapp-seeklogo.svg",
      href: sibapp,
    },
  ].filter(Boolean) as Array<{ title: string; subtitle: string; icon: string; href: string }>;

  // Use API links if available, otherwise fallback to static data
  const items = downloadLinks.length > 0 ? downloadLinks : downloads.map(d => ({ ...d, href: "#" }));
  return (
    <section className="bg-[#f4f5f7] w-full">
      <div className="mx-auto flex w-full lg:px-40 flex-col items-center gap-12 px-4  pt-14 sm:px-8 lg:flex-row lg:items-center lg:gap-16 ">
        <div className="flex w-full flex-1 flex-col items-center text-center lg:items-end lg:text-right">
          <div className="flex flex-col gap-3">
            <p
              className="font-IRANYekanXVF text-[20px] font-semibold text-[#303030] sm:text-[22px]"
              dir="auto"
            >
              <span>{`دانلود اپلیکیشن `}</span>
              <span className="text-[#f42326]">نستک</span>
            </p>
            <p
              className="font-IRANYekanXVF text-[14px] font-normal leading-[30px] text-[#919191]"
              dir="auto"
            >
              اگه دنبال پت جدیدی هستی یا می‌خوای پتت رو واگذار کنی، نستک فضایی
              امن برای ارتباط بین افراد مهربون و مسئولیت‌پذیر فراهم کرده.
            </p>
          </div>
          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 w-full flex-col gap-4 lg:pb-16 px-8 md:px-0 ">
            {items.map((item) => (
              <a
                key={item.title}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex w-full items-center justify-start gap-4 rounded-[50px] border border-white bg-white px-6 py-2 lg:py-3 text-right hover:border
                 hover:border-[#F44336]  transition-all duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#f42326]"
              >
                <div className="flex size-[50px] items-center justify-center rounded-[26px]  transition-colors duration-300 ">
                  <img
                    src={item.icon}
                    alt={item.title}
                    className="h-6 w-6 object-contain"
                  />
                </div>   
                <div className="flex flex-col items-start gap-1">
                  <p
                    className="font-IRANYekanXVF text-[12.5px] font-medium text-[#919191]"
                    dir="auto"
                  >
                    {item.subtitle}
                  </p>
                  <p
                    className="font-IRANYekanXVF text-[14.5px] font-semibold text-[#303030]"
                    dir="auto"
                  >
                    {item.title}
                  </p>
                </div>
              </a>
            ))}
          </div>
        </div>

        <div className="flex w-full flex-1 justify-center">
          <img
            alt="پیش‌نمایش اپلیکیشن نستک"
            className="w-full max-w-[567px]  object-contain"
            src="/img/mobile.png"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
}
