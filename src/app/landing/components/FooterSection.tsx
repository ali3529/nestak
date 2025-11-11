/* eslint-disable @next/next/no-img-element */

interface FooterSectionProps {
  email?: string;
  phone?: string;
  address?: string;
}

export default function FooterSection({ email, phone, address }: FooterSectionProps) {
  const imgMail = "/Icons/solid/mail.svg";
  const imgCall = "/Icons/solid/call.svg";
  const imgLocation = "/Icons/solid/location.svg";
  const imgClock = "/Icons/solid/clock-circle.svg";
  const imgLogo = "/Icons/Colors/Nestap-Logo-Icon.svg";
  const imgCopyright = "/Icons/solid/Copyright.svg";

  const defaultEmail = "nestak.info@gmail.com";
  const defaultPhone = "011 2645 33 17 - 0912 649 12 18";
  const defaultAddress = "تهران، خ انقلاب، کوچه بنفشه، پلاک18";

  return (
    <footer
      dir="ltr"
      className="relative w-full lg:border-t lg:border-gray-200"
    >
      <div className="mx-auto  px-4 py-12 md:px-8 lg:px-[155px] lg:py-[70px]">
        {/* Main three-column layout */}
        <div className="flex flex-col gap-10 lg:flex-row-reverse lg:justify-between lg:gap-8">
          {/* Logo and Description (right on desktop, top on mobile) */}
          <div className="flex flex-col items-end gap-7 lg:max-w-[304px]">
            <img alt="Nestak" className="h-[59px] w-[51px]" src={imgLogo} />
            <div
              className="font-IRANYekanXVF font-normal leading-[24px] text-[#919191] text-[14px] text-right w-full whitespace-pre-wrap"
              dir="auto"
            >
              <p className="mb-0" dir="auto">
                همه چیز برای زندگی شاد با حیوان خانگی‌تان! یادآوری‌های هوشمند،
                چت با دامپزشک، خرید آسان لوازم و پیدا کردن خانه جدید برای
                حیوان‌ها و دستیار شما در مراقبت بهتر؛ همگی در نستک.
              </p>
              <p dir="auto">اولین ماه، هدیه ما به شماست!</p>
            </div>
          </div>

          {/* Contact Info (middle) */}
          <div className="flex flex-col gap-5 lg:gap-8 items-end lg:max-w-[275px]">
            <p
              className="font-IRANYekanXVF font-semibold leading-normal text-[#f42326] text-[15.25px] text-right w-full whitespace-pre-wrap"
              dir="auto"
            >
              ارتباط با ما
            </p>
            <div className="flex flex-col gap-4 lg:gap-6 items-end w-full text-[#5d5d5d] text-[14px]">
              <div className="flex gap-3 items-center justify-end">
                <p
                  className="font-IRANYekanXVF font-medium leading-normal text-right"
                  dir="auto"
                >
                  {email || defaultEmail}
                </p>
                <img alt="Email" className="shrink-0 size-6" src={imgMail} />
              </div>
              <div className="flex gap-3 items-center justify-end">
                <p
                  className="font-IRANYekanXVF font-medium leading-normal text-right"
                  dir="auto"
                >
                  {phone || defaultPhone}
                </p>
                <img alt="Phone" className="shrink-0 size-6" src={imgCall} />
              </div>
              <div className="flex gap-3 items-center justify-end w-full">
                <p
                  className="font-IRANYekanXVF font-medium leading-normal text-right"
                  dir="auto"
                >
                  {address || defaultAddress}
                </p>
                <img
                  alt="Location"
                  className="shrink-0 size-6"
                  src={imgLocation}
                />
              </div>
              <div className="flex items-start justify-end gap-3">
                <div className="flex flex-col gap-2 items-end w-[116px]">
                  <p
                    className="font-IRANYekanXVF font-medium leading-normal min-w-full text-right w-min whitespace-pre-wrap"
                    dir="auto"
                  >
                    شنبه - چهارشنبه:
                  </p>
                  <div className="flex font-IRANYekanXVF font-medium gap-1 items-center leading-normal text-right">
                    <p dir="auto">20:00</p>
                    <p dir="auto">الی</p>
                    <p dir="auto">08:00</p>
                  </div>
                </div>
                <img alt="Clock" className="shrink-0 size-6" src={imgClock} />
              </div>
            </div>
          </div>

          {/* Quick Access Menu (left on desktop, last on mobile) */}
          <div className="flex flex-col gap-5 lg:gap-8  items-end lg:max-w-[234px]">
            <p
              className="font-IRANYekanXVF font-semibold leading-normal text-[#f42326] text-[15.25px] text-right w-full whitespace-pre-wrap"
              dir="auto"
            >
              دسترسی سریع
            </p>
            <div className="flex flex-col gap-4 lg:gap-6 items-end w-full">
              {["معرفی", "تماس با ما", "سوالات متداول", "قوانین و مقررات"].map(
                (t) => (
                  <p
                    key={t}
                    className={`font-IRANYekanXVF font-medium leading-normal text-[#5d5d5d] text-[14px] text-right ${
                      t == "سوالات متداول" ? "text-[#f42326]" : "text-[#5d5d5d]"
                    }`}
                    dir="auto"
                  >
                    {t}
                  </p>
                )
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Copyright and Credits */}
      <div className="mx-auto  border-t border-gray-200 px-4 py-6 md:px-8 lg:px-[155px]">
        <div className="flex flex-row gap-4 items-center lg:flex-row justify-between lg:items-center">
          <div className="flex gap-2 items-start order-1">
            <p
              className="font-IRANYekanXVF font-normal leading-normal text-[#5d5d5d] text-[11.25px] lg:text-[12.75px] text-right"
              dir="auto"
            >
              <span>طراحی و توسعه: </span>
              <span className="font-IRANYekanXVF font-semibold text-[#f42326]">
                فـنـورا
              </span>
            </p>
          </div>
          <div className="flex gap-1 items-center justify-end order-2">
            <p
              className="font-IRANYekanXVF font-normal leading-normal text-[#5d5d5d] text-[11.25px] lg:text-[12.75px] text-right"
              dir="auto"
            >
              <span>تمامی حقوق متعلق به </span>
              <span className="font-IRANYekanXVF font-bold text-[#f42326]">
                نستک
              </span>
              <span> می‌باشد.</span>
            </p>
            <img
              alt="Copyright"
              className="shrink-0 size-[16px] lgsize-[18px]"
              src={imgCopyright}
            />
          </div>
        </div>
      </div>
    </footer>
  );
}

