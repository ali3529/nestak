import { Button } from "@/components/Button";
import BackgroundArt from "./BackgroundArt";

interface HeroProps {
  title?: string;
  subtitle?: string;
}

export default function Hero({ title, subtitle }: HeroProps) {
  const defaultTitle = "نستک، همراه وفادار صاحبان حیوانات خانگی";
  const defaultSubtitle =
    "نستک تجربه‌ای کامل برای صاحبان حیوانات خانگی فراهم کرده؛ یادآوری کارهای روزانه، گفت‌وگوی آنلاین با دامپزشک‌ها، واگذاری یا سرپرستی پت، خرید از پت‌شاپ و مطالعه مقالات آموزشی همین حالا ثبت‌نام کن و ۳۰ روز استفاده رایگان رو تجربه کن!";

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

  return (
    <section className="relative overflow-v bg-[#fff2f2]">
      <div className="mx-auto flex w-full  lg:max-w-[900px] flex-col items-center px-11 pt-8 pb-32 text-center sm:px-8 sm:pt-12 sm:pb-40 lg:px-0">
        <div className="flex w-full flex-col items-center gap-4 sm:gap-6">
          <h1
            className="font-IRANYekanXVF font-bold text-[#303030] text-[17.5px] lg:leading-[38px]  lg:text-[30px] lg:leading-[48px]"
            dir="auto"
          >
            {renderTitle(title || defaultTitle)}
          </h1>
          <p
            className="font-IRANYekanXVF font-normal text-[#919191] text-[11.25px]  max-w-[580px] lg:text-[14px] lg:leading-[30px]"
            dir="auto"
          >
            {subtitle || defaultSubtitle}
          </p>
        </div>
        <div className="mt-6 flex w-full flex-row items-stretch gap-3 sm:mt-8 sm:flex-row sm:items-center sm:justify-center sm:gap-4">
          <Button
            title="نصب اپلیکیشن"
            icon={
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 17L7 12H10V8H14V12H17L12 17Z"
                  fill="white"
                />
              </svg>
            }
            className="shadow-[0_10px_25px_rgba(244,35,38,0.2)] w-full sm:w-[197px] hidden md:block"
          />
          <Button
            title="نصب اپلیکیشن"
            className="shadow-[0_10px_25px_rgba(244,35,38,0.2)] w-full lg:w-[197px] h-[42px]!"
          />
          <Button
            title="قوانین و مقررات"
            className="!bg-transparent !border !border-[#f42326] hover:!bg-[#f42326] [&_p]:text-[#f42326] h-[42px]!  hover:[&_p]:!text-white [&_p]:transition-colors w-full sm:w-[197px]"
          />
        </div>
      </div>
      <BackgroundArt />
    </section>
  );
}
