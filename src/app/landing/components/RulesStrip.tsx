"use client";
/* eslint-disable @next/next/no-img-element */
import { useState } from "react";

interface RulesStripProps {
  content?: string;
  enamadLink?: string;
}

export default function RulesStrip({ content, enamadLink }: RulesStripProps) {
  const imgEnamad = "/img/enamad-1-300x231-1.png";

  const [isExpanded, setIsExpanded] = useState(false);

  const defaultText = "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی در شصت و سه درصد گذشت.";
  const fullText = content || defaultText;

  return (
    <section className="relative w-full px-4 py-8 md:px-8 lg:px-[155px] lg:py-16">
      <div className="mx-auto max-w-[1440px]">
        {/* Main content area */}
        <div className="flex flex-col-reverse lg:flex-row-reverse gap-6 lg:gap-10 items-center lg:items-start relative">
          {/* E-namad Badge */}
          {enamadLink ? (
            <a
              href={enamadLink}
              target="_blank"
              rel="noopener noreferrer"
              className="border border-gray-200 border-solid flex flex-col gap-2 h-28 items-center justify-center rounded-2xl w-[116px] shrink-0 hover:border-gray-300 transition-colors"
            >
              <div className="relative h-[69px] w-[89px]">
                <img
                  alt="E-namad certification"
                  className="absolute inset-0 max-w-none object-cover size-full"
                  src={imgEnamad}
                />
              </div>
            </a>
          ) : (
            <div className="border border-gray-200 border-solid flex flex-col gap-2 h-28 items-center justify-center
             rounded-2xl w-[116px] shrink-0">
              <div className="relative h-[69px] w-[89px]">
                <img
                  alt="E-namad certification"
                  className="absolute inset-0 max-w-none object-cover size-full"
                  src={imgEnamad}
                />
              </div>
            </div>
          )}
          {/* Content */}
          <div className="flex-1 flex flex-col gap-4">
            <h2 className="font-IRANYekanXVF font-semibold leading-6 lg:leading-[26px] text-white-700 text-[12.75px] lg:text-[20.5px] text-right">
              قوانین و مقررات
            </h2>

            <p
              className={`font-IRANYekanXVF font-normal  leading-6 lg:leading-[26px] text-white-500 text-[12.75px] lg:text-[14px] text-right whitespace-pre-wrap ${
                isExpanded ? "" : "line-clamp-2 lg:line-clamp-3"
              }`}
            >
              {fullText}
            </p>

            {/* Toggle Button */}
            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className="flex flex-row-reverse items-center justify-end  self-start hover:opacity-80 transition-opacity cursor-pointer"
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className={`${isExpanded ? "rotate-90" : ""}`}
              >
                <path
                  d="M12.155 13.776C12.3707 14.0456 12.3269 14.4393 12.0574 14.6549C11.7878 14.8706 11.3941 14.8268 11.1785 14.5573L7.84513 10.3906C7.66253 10.1623 7.66252 9.83761 7.84513 9.60935L11.1785 5.44269C11.3941 5.17315 11.7878 5.1294 12.0574 5.34503C12.3269 5.56066 12.3707 5.9544 12.155 6.22394L9.1342 9.99998L12.155 13.776Z"
                  fill="#F42326"
                />
              </svg>
              <p className="font-IRANYekanXVF font-medium leading-[1.7] text-primary-500 text-[12.75px]">
                {isExpanded ? "بستن" : "بیشتر"}
              </p>
            </button>
          </div>
          {/* Trust Badges Strip */}
          {/* <div className="mt-8 lg:mt-12 w-full  lg:ml-[136px] absolute bottom-0">
          <div className="relative h-[46px] w-full ">
            <img
              alt="Trust badges"
              className=" inset-0 max-w-none object-contain object-left size-full"
              src={imgTrustBadges}
            />
          </div>
        </div> */}
        </div>
      </div>
    </section>
  );
}

