"use client";

import { useState } from "react";

import { HEADER_ITEMS } from "@/app/constant/StaticItemsConst";
import { Button } from "@/components/Button";

/* eslint-disable @next/next/no-img-element */

export default function HeaderBar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const NAV_TARGETS: Record<string, string> = {
    "معرفی": "intro-section",
    "تماس با ما": "contact-section",
    "سوالات متداول": "faq-section",
    "قوانین و مقررات": "rules-section",
  };

  const handleNavigate = (label: string) => {
    const targetId = NAV_TARGETS[label];
    if (!targetId) return;
    const el = document.getElementById(targetId);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
      setMenuOpen(false);
    }
  };

  return (
    <header className="bg-[#fff2f2] w-full">
      <div className="mx-auto flex w-full max-w-[1200px] flex-wrap items-center justify-between gap-4 px-4 py-5 sm:px-8 lg:flex-nowrap lg:px-24">
        <div className="flex items-center gap-3 sm:gap-6">
          <div className="h-12 w-12 overflow-hidden rounded-full bg-white/60 p-2 sm:h-[59px] sm:w-[59px] sm:rounded-none sm:bg-transparent sm:p-0">
            <img
              alt="Nestak"
              className="block size-full object-contain"
              src="/Icons/Colors/Nestap-Logo-Icon.svg"
            />
          </div>
        </div>

        <nav className="hidden w-full flex-1 items-center justify-center gap-[40px] lg:flex lg:w-auto">
          {HEADER_ITEMS.map((t) => (
            <button
              key={t}
              type="button"
              onClick={() => handleNavigate(t)}
              className="font-IRANYekanXVF font-bold text-[#5d5d5d] text-[15.25px] text-right transition hover:text-[#f42326]"
              dir="auto"
            >
              {t}
            </button>
          ))}
        </nav>

        <div className="flex flex-1 items-center gap-3 justify-between sm:justify-end lg:flex-none">
          <Button
            className="h-12 w-full max-w-[240px] text-[14px] sm:h-[58px] sm:max-w-none sm:w-[197px]"
            title=" نصب اپلیکیشن"
            icon={
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M2.25 13C2.25 10.3766 4.37665 8.25 7 8.25L7.5 8.25C7.91421 8.25 8.25 8.58579 8.25 9C8.25 9.41421 7.91421 9.75 7.5 9.75L7 9.75C5.20508 9.75 3.75 11.2051 3.75 13L3.75 17C3.75 18.7949 5.20508 20.25 7 20.25L17 20.25C18.7949 20.25 20.25 18.7949 20.25 17L20.25 13C20.25 11.2051 18.7949 9.75 17 9.75L16.5 9.75C16.0858 9.75 15.75 9.41421 15.75 9C15.75 8.58579 16.0858 8.25 16.5 8.25L17 8.25C19.6234 8.25 21.75 10.3766 21.75 13L21.75 17C21.75 19.6234 19.6234 21.75 17 21.75L7 21.75C4.37665 21.75 2.25 19.6234 2.25 17L2.25 13ZM8.46973 12.5303C8.17683 12.2374 8.17683 11.7626 8.46973 11.4697C8.76262 11.1768 9.23738 11.1768 9.53027 11.4697L11.25 13.1895L11.25 3C11.25 2.58579 11.5858 2.25 12 2.25C12.4142 2.25 12.75 2.58579 12.75 3L12.75 13.1895L14.4697 11.4697C14.7626 11.1768 15.2374 11.1768 15.5303 11.4697C15.8232 11.7626 15.8232 12.2374 15.5303 12.5303L12.5303 15.5303C12.2374 15.8232 11.7626 15.8232 11.4697 15.5303L8.46973 12.5303Z"
                  fill="white"
                />
              </svg>
            }
          />

          <button
            type="button"
            onClick={() => setMenuOpen(true)}
            className="inline-flex size-11 items-center justify-center rounded-2xl border border-[#f42326] bg-white text-[#303030] shadow-sm lg:hidden"
            aria-label="باز کردن منو"
            aria-expanded={menuOpen}
          >
            <span className="sr-only">باز کردن منو</span>
            <div className="flex flex-col gap-1.5">
              <span className="block h-0.5 w-5 rounded-full bg-[#303030]" />
              <span className="block h-0.5 w-5 rounded-full bg-[#303030]" />
              <span className="block h-0.5 w-4 rounded-full bg-[#303030] self-end" />
            </div>
          </button>
        </div>
      </div>
      {menuOpen ? (
        <div className="fixed inset-0 z-50 bg-white px-6 py-8 sm:px-10">
          <div className="flex items-center justify-between">
            <button
              type="button"
              onClick={() => setMenuOpen(false)}
              className="text-3xl font-light text-[#b0b0b0]"
              aria-label="بستن منو"
            >
              ×
            </button>
            <img
              src="/Icons/Colors/Nestap-Logo-Icon.svg"
              alt="Nestak"
              className="h-16 w-16 object-contain"
            />
          </div>
          <div className="mt-16 flex flex-col items-center gap-10 text-[#5d5d5d]">
            {HEADER_ITEMS.map((item) => (
              <button
                key={item}
                type="button"
                className="font-IRANYekanXVF text-[18px] font-semibold"
                onClick={() => handleNavigate(item)}
              >
                {item}
              </button>
            ))}
          </div>
        </div>
      ) : null}
    </header>
  );
}
