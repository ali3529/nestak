/* eslint-disable @next/next/no-img-element */

import { Button } from "@/components/Button";

interface ContactSectionProps {
  email?: string;
  phone?: string;
  address?: string;
}

export default function ContactSection({ email, phone, address }: ContactSectionProps) {
  const defaultEmail = "nestak.info@gmail.com";
  const defaultPhone = "۱۸ ۱۲ ۶۴۹ ۰۹۱۲ - ۱۷ ۳۳ ۲۶۴۵ ۰۱۱";
  const defaultAddress = "تهران، خ انقلاب، کوچه بهشتی، پلاک۱۸";
  return (
    <section className="w-full py-16">
      <div className="mx-auto max-w-[1200px] px-4 sm:px-8 lg:px-24">
        <div className="flex flex-col-reverse lg:flex-row gap-8 lg:gap-16 items-start">
          {/* Right column: copy + contact info */}
          <div className="flex-1 w-full lg:max-w-xl">
            <h2 className="font-IRANYekanXVF font-semibold text-[20.5px] text-[#303030] mb-5 text-right">
              ارتباط با ما
            </h2>
            <p className="font-IRANYekanXVF text-[14px] leading-7 text-[#919191] text-right mb-2">
              نظراتتان برای ما ارزشمند است و دوست داریم تجربه شما از حیوانات
              خانگی‌تان را بشنویم. تیم ما آماده است که به سوالات، مشکلات و
              درخواست‌های شما پاسخ دهد.
            </p>
            <p className="font-IRANYekanXVF text-[14px] leading-7 text-[#919191] text-right mb-8">
              راه‌های ارتباطی مختلفی را در اختیار شما قرار داده‌ایم تا راحت‌تر
              با ما در تماس باشید.
            </p>

            <div className="flex flex-col items-end gap-6 text-[#303030] text-[14px]">
              <div className="flex items-center gap-3">
                <p className="font-IRANYekanXVF font-medium">
                  {email || defaultEmail}
                </p>
                <img
                  src="/Icons/solid/mail.svg"
                  alt="ایمیل"
                  className="size-6"
                />
              </div>

              <div className="flex items-center gap-3">
                <p className="font-IRANYekanXVF font-medium">
                  {phone || defaultPhone}
                </p>
                <img
                  src="/Icons/solid/call.svg"
                  alt="تلفن"
                  className="size-6"
                />
              </div>

              <div className="flex items-center gap-3">
                <p className="font-IRANYekanXVF font-medium">
                  {address || defaultAddress}
                </p>
                <img
                  src="/Icons/solid/location.svg"
                  alt="آدرس"
                  className="size-6"
                />
              </div>

              <div className="flex items-start gap-3">
                <div className="flex flex-col items-end gap-1">
                  <p className="font-IRANYekanXVF font-medium">
                    شنبه - چهارشنبه:
                  </p>
                  <div className="flex items-center gap-1 font-IRANYekanXVF font-medium">
                    <span>۰۸:۰۰</span>
                    <span>الی</span>
                    <span>۲۰:۰۰</span>
                  </div>
                </div>
                <img
                  src="/Icons/solid/clock-circle.svg"
                  alt="ساعت کاری"
                  className="size-6"
                />
              </div>
            </div>
          </div>

          {/* Left column: form card */}
          <div className="w-full lg:flex-1 lg:max-w-[560px]">
            <div className="bg-[#F4F5F7] rounded-[30px] p-6 sm:p-8 flex flex-col gap-6 sm:gap-8">
              <div className="flex flex-col gap-6">
                {/* Name */}
                <div className="flex flex-col items-end gap-3">
                  <label className="font-IRANYekanXVF font-medium text-[15.25px] text-[#303030]">
                    نام و نام خانوادگی
                  </label>
                  <input
                    type="text"
                    placeholder="نام خود را وارد کنید"
                    className="w-full bg-white rounded-2xl py-5 px-4 text-right font-IRANYekanXVF placeholder:text-[#919191] text-[14px] outline-none focus:outline-none"
                  />
                </div>

                {/* Phone */}
                <div className="flex flex-col items-end gap-3">
                  <label className="font-IRANYekanXVF font-medium text-[15.25px] text-[#303030]">
                    شماره تماس
                  </label>
                  <input
                    type="tel"
                    placeholder="شماره موبایل خود را وارد کنید"
                    className="w-full bg-white rounded-2xl py-5 px-4 text-right font-IRANYekanXVF placeholder:text-[#919191] text-[14px] outline-none focus:outline-none"
                  />
                </div>

                {/* Message */}
                <div className="flex flex-col items-end gap-3">
                  <label className="font-IRANYekanXVF font-medium text-[15.25px] text-[#303030]">
                    پیام شما
                  </label>
                  <textarea
                    rows={4}
                    placeholder="متن پیام خود را بنویسید..."
                    className="w-full bg-white rounded-2xl py-5 px-4 text-right font-IRANYekanXVF placeholder:text-[#919191] text-[14px] outline-none focus:outline-none resize-none"
                  />
                </div>
              </div>

              <div className="flex justify-center sm:justify-start">
                <Button
                  title="ارسال پیام"
                  endIcon={
                    <img
                      src="/Icons/solid/arrow-left-white.svg"
                      alt="ارسال"
                      className="size-6"
                    />
                  }
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

