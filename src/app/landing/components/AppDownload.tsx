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
    <section className="bg-[#f4f5f7]">
      <div className="mx-auto flex w-full max-w-[1100px] flex-col items-center gap-12 px-4 pb-16 pt-14 sm:px-8 lg:flex-row lg:items-center lg:gap-16 lg:px-24">
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
              اگه دنبال پت جدیدی هستی یا می‌خوای پتت رو واگذار کنی، نستک فضایی امن
              برای ارتباط بین افراد مهربون و مسئولیت‌پذیر فراهم کرده.
            </p>
          </div>
          <div className="mt-8 flex w-full flex-col gap-3">
            {items.map((item) => (
              <a
                key={item.title}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex w-full items-center justify-between rounded-[50px] border border-white bg-white px-6 py-4 text-right shadow-[0_20px_45px_rgba(26,31,64,0.08)] transition-all hover:-translate-y-0.5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#f42326]"
              >
                <div className="flex flex-col items-end gap-1">
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
                <div className="flex size-[50px] items-center justify-center rounded-[26px] bg-[#f4f5f7] transition-colors group-hover:bg-[#ffe5e5]">
                  <img
                    src={item.icon}
                    alt={item.title}
                    className="h-6 w-6 object-contain"
                  />
                </div>
              </a>
            ))}
          </div>
        </div>

        <div className="flex w-full flex-1 justify-center">
          <img
            alt="پیش‌نمایش اپلیکیشن نستک"
            className="w-full max-w-[420px] object-contain"
            src="/img/mobile.png"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
}
