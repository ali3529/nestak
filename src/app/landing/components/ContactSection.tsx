"use client";
/* eslint-disable @next/next/no-img-element */

import { Button } from "@/components/Button";
import { useForm } from "react-hook-form";
import { submitContactForm, type ContactFormData } from "@/services/landingApi";
import { useState } from "react";

interface ContactSectionProps {
  email?: string;
  phone?: string;
  address?: string;
}

export default function ContactSection({ email, phone, address }: ContactSectionProps) {
  const defaultEmail = "nestak.info@gmail.com";
  const defaultPhone = "۱۸ ۱۲ ۶۴۹ ۰۹۱۲ - ۱۷ ۳۳ ۲۶۴۵ ۰۱۱";
  const defaultAddress = "تهران، خ انقلاب، کوچه بهشتی، پلاک۱۸";

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState<{ type: 'success' | 'error', text: string } | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactFormData>();

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    setSubmitMessage(null);

    // Send data with empty email as required by API
    const formData = {
      ...data,
      email: "", // API requires email field but we don't collect it
    };

    const result = await submitContactForm(formData);

    if (result.success) {
      setSubmitMessage({ type: 'success', text: result.message || 'پیام شما با موفقیت ارسال شد.' });
      reset();
    } else {
      setSubmitMessage({ type: 'error', text: result.message || 'خطا در ارسال پیام. لطفاً دوباره تلاش کنید.' });
    }

    setIsSubmitting(false);
  };
  return (
    <section className="w-full py-16">
      <div className="px-6 md:px-12 lg:px-40">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-start">
          {/* Right column: copy + contact info */}
          <div className="flex-1 max-w-xl">
            <h2 className="font-IRANYekanXVF font-semibold text-[20.5px] text-[#303030] mb-5 text-right">
              ارتباط با ما
            </h2>
            <p className="font-IRANYekanXVF text-[11.25px] lg:text-[14px] leading-5 lg:leading-6   text-[#919191] text-right ">
              نظراتتان برای ما ارزشمند است و دوست داریم تجربه شما از حیوانات
              خانگی‌تان را بشنویم. تیم ما آماده است که به سوالات، مشکلات و
              درخواست‌های شما پاسخ دهد.
            </p>
            <p className="font-IRANYekanXVF text-[11.25px] lg:text-[14px] leading-5 lg:leading-6 text-[#919191] text-right mb-8">
              راه‌های ارتباطی مختلفی را در اختیار شما قرار داده‌ایم تا راحت‌تر
              با ما در تماس باشید.
            </p>

            <div className="flex flex-col items-start gap-6 text-[#303030] text-[14px]">
              <div className="flex items-center justify-end gap-3">
                <img
                  src="/Icons/solid/mail.svg"
                  alt="ایمیل"
                  className="size-6"
                />
                <p className="font-IRANYekanXVF font-medium">{email}</p>
              </div>

              <div className="flex items-center justify-end gap-3">
                <img
                  src="/Icons/solid/call.svg"
                  alt="تلفن"
                  className="size-6"
                />
                <p className="font-IRANYekanXVF font-medium">{phone}</p>
              </div>

              <div className="flex items-center justify-end gap-3">
                <img
                  src="/Icons/solid/location.svg"
                  alt="آدرس"
                  className="size-6"
                />
                <p className="font-IRANYekanXVF font-medium">{address}</p>
              </div>

              <div className="flex items-start justify-end gap-3">
                <img
                  src="/Icons/solid/clock-circle.svg"
                  alt="ساعت کاری"
                  className="size-6"
                />
                <div className="flex flex-col items-start gap-1 ">
                  <p className="font-IRANYekanXVF font-medium">
                    شنبه - چهارشنبه:
                  </p>
                  <div className="flex items-center gap-1 font-IRANYekanXVF font-medium">
                    <span>۰۸:۰۰</span>
                    <span>الی</span>
                    <span>۲۰:۰۰</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Left column: form card */}
          <div className="w-full lg:max-w-[560px]">
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="bg-[#F4F5F7] rounded-[30px] p-6 md:p-8 flex flex-col gap-8"
            >
              <div className="flex flex-col gap-6">
                {/* Name */}
                <div className="flex flex-col items-start gap-3">
                  <label className="font-IRANYekanXVF font-medium text-[15.25px] text-[#303030]">
                    نام و نام خانوادگی
                  </label>
                  <input
                    type="text"
                    placeholder="نام خود را وارد کنید"
                    {...register("name", {
                      required: "نام و نام خانوادگی الزامی است",
                      minLength: {
                        value: 2,
                        message: "نام باید حداقل ۲ کاراکتر باشد",
                      },
                    })}
                    className={`w-full bg-white rounded-2xl py-5 px-4 text-right font-IRANYekanXVF placeholder:text-[#919191] text-[14px] outline-none ${
                      errors.name ? "border-2 border-red-500" : ""
                    }`}
                  />
                  {errors.name && (
                    <p className="text-red-500 text-[12px] font-IRANYekanXVF">
                      {errors.name.message}
                    </p>
                  )}
                </div>

                {/* Phone */}
                <div className="flex flex-col items-start gap-3">
                  <label className="font-IRANYekanXVF font-medium text-[15.25px] text-[#303030]">
                    شماره تماس
                  </label>
                  <input
                    type="tel"
                    placeholder="شماره موبایل خود را وارد کنید"
                    {...register("phone", {
                      required: "شماره تماس الزامی است",
                      pattern: {
                        value: /^[0-9۰-۹]+$/,
                        message: "شماره تماس نامعتبر است",
                      },
                    })}
                    className={`w-full bg-white rounded-2xl py-5 px-4 text-right font-IRANYekanXVF placeholder:text-[#919191] text-[14px] outline-none ${
                      errors.phone ? "border-2 border-red-500" : ""
                    }`}
                  />
                  {errors.phone && (
                    <p className="text-red-500 text-[12px] font-IRANYekanXVF">
                      {errors.phone.message}
                    </p>
                  )}
                </div>

                {/* Message */}
                <div className="flex flex-col items-start gap-3">
                  <label className="font-IRANYekanXVF font-medium text-[15.25px] text-[#303030]">
                    پیام شما
                  </label>
                  <textarea
                    rows={4}
                    placeholder="متن پیام خود را بنویسید..."
                    {...register("message", {
                      required: "متن پیام الزامی است",
                      minLength: {
                        value: 2,
                        message: "پیام باید حداقل ۲ کاراکتر باشد",
                      },
                    })}
                    className={`w-full bg-white rounded-2xl py-5 px-4 text-right font-IRANYekanXVF placeholder:text-[#919191] text-[14px] outline-none ${
                      errors.message ? "border-2 border-red-500" : ""
                    }`}
                  />
                  {errors.message && (
                    <p className="text-red-500 text-[12px] font-IRANYekanXVF">
                      {errors.message.message}
                    </p>
                  )}
                </div>
              </div>

              {/* Success/Error Message */}
              {submitMessage && (
                <div
                  className={`p-4 rounded-2xl text-center font-IRANYekanXVF text-[14px] ${
                    submitMessage.type === "success"
                      ? "bg-green-100 text-green-700"
                      : "bg-red-100 text-red-700"
                  }`}
                >
                  {submitMessage.text}
                </div>
              )}

              <div className="flex justify-start">
                <Button
                  type="submit"
                  title={isSubmitting ? "در حال ارسال..." : "ارسال پیام"}
                  endIcon={
                    !isSubmitting && (
                      <img
                        src="/Icons/solid/arrow-left-white.svg"
                        alt="ارسال"
                        className="size-6"
                      />
                    )
                  }
                  disabled={isSubmitting}
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
