"use client";

import { useState } from "react";

import { HEADER_ITEMS } from "@/app/constant/StaticItemsConst";
import { Button } from "@/components/Button";

/* eslint-disable @next/next/no-img-element */

export default function HeaderBar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const NAV_TARGETS: Record<string, string> = {
    معرفی: "intro-section",
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
 const handleNavigateStatic = (targetId: string) => {
   if (!targetId) return;
   const el = document.getElementById(targetId);
   if (el) {
     el.scrollIntoView({ behavior: "smooth", block: "center" });
   }
 };
  return (
    <header className="bg-[#fff2f2] w-full">
      <div
        className="mx-auto flex w-full max-w-[1200px] flex-wrap items-center justify-between gap-4 px-4 py-5
       sm:px-4 lg:flex-nowrap lg:px-12"
      >
        <div className="lg:flex items-center gap-3 sm:gap-6 hidden">
          <div className="h-12 w-12 overflow-hidden rounded-full bg-white/60 p-2 sm:h-[59px] sm:w-[59px] sm:rounded-none sm:bg-transparent sm:p-0 hidden lg:block">
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
              className="font-IRANYekanXVF font-bold text-[#5d5d5d] text-[15.25px] text-right cursor-pointer transition hover:text-[#f42326]"
              dir="auto"
            >
              {t}
            </button>
          ))}
        </nav>
        <button
          type="button"
          onClick={() => setMenuOpen(true)}
          className="inline-flex size-11 items-center justify-center rounded-2xl  text-[#303030] lg:hidden cursor-pointer"
          aria-label="باز کردن منو"
          aria-expanded={menuOpen}
        >
          <span className="sr-only">باز کردن منو</span>
          <div className="flex flex-col gap-1.5">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M4.17391 17.4737C3.52558 17.4737 3 18.0392 3 18.7368C3 19.4345 3.52558 20 4.17391 20H12C12.6483 20 13.1739 19.4345 13.1739 18.7368C13.1739 18.0392 12.6483 17.4737 12 17.4737H4.17391ZM4.17391 10.7368C3.52558 10.7368 3 11.3024 3 12C3 12.6976 3.52558 13.2632 4.17391 13.2632H19.8261C20.4744 13.2632 21 12.6976 21 12C21 11.3024 20.4744 10.7368 19.8261 10.7368H4.17391ZM12 4C11.3517 4 10.8261 4.56554 10.8261 5.26316C10.8261 5.96078 11.3517 6.52632 12 6.52632H19.8261C20.4744 6.52632 21 5.96078 21 5.26316C21 4.56554 20.4744 4 19.8261 4H12Z"
                fill="#5D5D5D"
              />
            </svg>
          </div>
        </button>

        <div className="items-center gap-3 justify-between sm:justify-end lg:flex-none">
          <Button
            onClick={() => handleNavigateStatic("download-section")}
            className="h-12 w-[161px]! max-w-[240px] text-[14px] lg:h-[58px lg:w-[197px]!"
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
        </div>
      </div>
      {menuOpen ? (
        <div className="fixed inset-0 z-50 bg-white px-6 py-8 sm:px-10">
          <div className="flex items-center justify-between">
            <div></div>

            <img
              src="/Icons/Colors/Nestap-Logo-Icon.svg"
              alt="Nestak"
              className="h-16 w-16 object-contain"
            />

            <button
              type="button"
              onClick={() => setMenuOpen(false)}
              className="text-3xl font-light text-[#b0b0b0] cursor-pointer"
              aria-label="بستن منو"
            >
              ×
            </button>
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
