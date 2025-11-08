"use client";

import { HEADER_ITEMS } from "@/app/constant/StaticItemsConst";
import { Button } from "@/components/Button";

/* eslint-disable @next/next/no-img-element */

export default function HeaderBar() {
  return (
    <div className=" bg-[#fff2f2] h-[139px]  overflow-clip top-0 w-full flex flex-row justify-between items-center px-40">
      <div className="flex flex-row justify-start items-center gap-20">
        <div className=" h-[59px]  overflow-clip w-[51px]">
          <img
            alt="Nestak"
            className="block max-w-none size-full"
            src={"/icons/Colors/Nestap-Logo-Icon.svg"}
          />
        </div>
        <div className="  flex gap-[58px] items-center justify-end  w-fit">
          {HEADER_ITEMS.map((t) => (
            <p
              key={t}
              className="font-IRANYekanXVF font-bold text-[#5d5d5d] text-[15.25px] text-right"
              dir="auto"
            >
              {t}
            </p>
          ))}
        </div>
      </div>

      <Button
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
  );
}
