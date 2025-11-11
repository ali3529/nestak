"use client";
/* eslint-disable @next/next/no-img-element */
import { useState } from "react";

interface RulesStripProps {
  content?: string;
  enamadLink?: string;
}

export default function RulesStrip({ content, enamadLink }: RulesStripProps) {
  const imgEnamad = "/img/enamad-1-300x231-1.png";
  const imgTrustBadges = "/img/figma/frame53.png";
  const imgArrowLeft = "/img/figma/arrow-left.png";

  const [isExpanded, setIsExpanded] = useState(false);

  const defaultText = "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی در شصت و سه درصد گذشت.";
  const fullText = content || defaultText;

  return (
    <section className="relative w-full px-4 py-8 md:px-8 lg:px-[155px] lg:py-16">
      <div className="mx-auto max-w-[1440px]">
        {/* Main content area */}
        <div className="flex flex-col lg:flex-row gap-6 lg:gap-10 items-start">
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
            <div className="border border-gray-200 border-solid flex flex-col gap-2 h-28 items-center justify-center rounded-2xl w-[116px] shrink-0">
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
            <h2 className="font-IRANYekanXVF font-semibold leading-normal text-white-700 text-[20.5px] text-right" dir="auto">
              قوانین و مقررات
            </h2>

            <p
              className={`font-IRANYekanXVF font-normal leading-[1.7] text-white-500 text-[14px] text-right whitespace-pre-wrap ${
                isExpanded ? "" : "line-clamp-2 lg:line-clamp-3"
              }`}
              dir="auto"
            >
              {fullText}
            </p>

            {/* Toggle Button */}
            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className="flex items-center justify-end gap-2 p-2 self-end hover:opacity-80 transition-opacity"
            >
              <div className="relative shrink-0 size-5">
                <img
                  alt=""
                  className="block max-w-none size-full"
                  src={imgArrowLeft}
                />
              </div>
              <p className="font-IRANYekanXVF font-medium leading-[1.7] text-[#f42326] text-[12.75px] text-right" dir="auto">
                {isExpanded ? "بستن" : "بیشتر"}
              </p>
            </button>
          </div>
        </div>

        {/* Trust Badges Strip */}
        <div className="mt-8 lg:mt-12 w-full max-w-[940px] lg:mr-[136px]">
          <div className="relative h-[46px] w-full">
            <img
              alt="Trust badges"
              className="absolute inset-0 max-w-none object-contain object-right size-full"
              src={imgTrustBadges}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

