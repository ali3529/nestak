"use client";
/* eslint-disable @next/next/no-img-element */
import { useState } from "react";
import { Accordion, AccordionSummary, AccordionDetails } from "@mui/material";
import type { FAQ } from "@/types/landing";

type FaqItem = { id: string; title: string; details?: string };

interface FAQSectionProps {
  faqList?: FAQ[];
}

export default function FAQSection({ faqList }: FAQSectionProps) {
  const imgArrowDown =
    "https://www.figma.com/api/mcp/asset/a14827de-ff10-4c22-9ca0-7b3d2b4804fe";

  // Transform API data to component format
  const apiItems: FaqItem[] = faqList
    ? faqList.map((faq) => ({
        id: faq._id,
        title: faq.question,
        details: faq.answer,
      }))
    : [];

  // Default fallback data
  const defaultRightItems: FaqItem[] = [
    { id: "r-0", title: "۱. اپلیکیشن چه امکاناتی دارد؟" },
    {
      id: "r-1",
      title:
        "3. آیا می‌توانم یادآورهای مخصوص برای حیوان خانگی‌ام تنظیم کنم؟",
      details:
        "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد.",
    },
    { id: "r-2", title: "5. آیا می‌توانم از طریق اپلیکیشن خرید کنم؟" },
    { id: "r-3", title: "7. اپلیکیشن چه امکاناتی دارد؟" },
  ];

  const defaultLeftItems: FaqItem[] = Array.from({ length: 4 }).map((_, i) => ({
    id: `l-${i}`,
    title: `سوال متداول ${i + 1}`,
    details:
      "لورم ایپسوم متن ساختگی برای پاسخ نمونه. این متن جهت پر کردن فضا استفاده می‌شود.",
  }));

  // Split FAQ items into two columns
  const allItems = apiItems.length > 0 ? apiItems : [...defaultRightItems, ...defaultLeftItems];
  const midPoint = Math.ceil(allItems.length / 2);
  const rightItems = allItems.slice(0, midPoint);
  const leftItems = allItems.slice(midPoint);

  const [expandedRight, setExpandedRight] = useState<string | false>(apiItems.length > 0 ? apiItems[0]?.id : "r-1");
  const [expandedLeft, setExpandedLeft] = useState<string | false>(false);

  return (
    <div className="relative w-full px-4 py-8 md:px-8 lg:px-[155px] lg:py-7 overflow-hidden">
      <p
        className="font-IRANYekanXVF font-semibold leading-normal not-italic text-white-700 text-lg md:text-[20.5px] text-center mb-8 lg:mb-[85px]"
        dir="auto"
      >
        سوالات متداول
      </p>

      <div className="flex flex-col lg:flex-row-reverse gap-6 lg:gap-2.5 max-w-[1440px] mx-auto">
        {/* Right column */}
        <div
          className="flex flex-col gap-2 w-full lg:w-[560px]"
          dir="rtl"
        >
        {rightItems.map((item) => {
          const isExpanded = expandedRight === item.id;
          return (
            <Accordion
              key={item.id}
              className="bg-[#f4f5f7] rounded-[30px] shadow-none"
              expanded={isExpanded}
              onChange={() =>
                setExpandedRight((prev) => (prev === item.id ? false : item.id))
              }
              disableGutters
              square
              sx={{
                bgcolor: "#f4f5f7",
                borderRadius: "30px",
                boxShadow: "none",
                '&:before': { display: 'none' },
              }}
            >
              <AccordionSummary
                expandIcon={
                  <img
                    src={imgArrowDown}
                    alt="toggle"
                    className="block max-w-none size-6"
                  />
                }
                className="px-6 min-h-[87px]"
                slots={{}}
                sx={{
                  minHeight: "87px",
                  '&.Mui-expanded': { minHeight: '87px' },
                  flexDirection: 'row-reverse',
                  '& .MuiAccordionSummary-content': {
                    margin: 0,
                    alignItems: 'center',
                    justifyContent: 'flex-end',
                  },
                  '& .MuiAccordionSummary-content.Mui-expanded': { margin: 0 },
                  '& .MuiAccordionSummary-expandIconWrapper': {
                    mr: 0,
                    ml: '8px',
                  },
                }}
              >
                <p
                  className={`font-IRANYekanXVF font-medium leading-[1.7] text-[15.25px] text-right whitespace-pre-wrap w-full ${
                    isExpanded ? "text-[#f42326]" : "text-white-700"
                  }`}
                  dir="auto"
                >
                  {item.title}
                </p>
              </AccordionSummary>
              {item.details && (
                <AccordionDetails className="pt-0 pb-[31.5px] px-6">
                  <p
                    className="font-IRANYekanXVF font-normal leading-[1.7] text-white-500 text-[14px] text-right whitespace-pre-wrap"
                    dir="auto"
                  >
                    {item.details}
                  </p>
                </AccordionDetails>
              )}
            </Accordion>
          );
        })}
      </div>

        {/* Left column */}
        <div
          className="flex flex-col gap-2 w-full lg:w-[560px]"
          dir="rtl"
        >
          {leftItems.map((item) => {
            const isExpanded = expandedLeft === item.id;
            return (
              <Accordion
                key={item.id}
                className="bg-[#f4f5f7] rounded-[30px] shadow-none"
                expanded={isExpanded}
                onChange={() =>
                  setExpandedLeft((prev) => (prev === item.id ? false : item.id))
                }
                disableGutters
                square
                sx={{
                  bgcolor: "#f4f5f7",
                  borderRadius: "30px",
                  boxShadow: "none",
                  '&:before': { display: 'none' },
                }}
              >
                <AccordionSummary
                  expandIcon={
                    <img
                      src={imgArrowDown}
                      alt="toggle"
                      className="block max-w-none size-6"
                    />
                  }
                  className="px-6 min-h-[87px]"
                  sx={{
                    minHeight: "87px",
                    '&.Mui-expanded': { minHeight: '87px' },
                    flexDirection: 'row-reverse',
                    '& .MuiAccordionSummary-content': {
                      margin: 0,
                      alignItems: 'center',
                      justifyContent: 'flex-end',
                    },
                    '& .MuiAccordionSummary-content.Mui-expanded': { margin: 0 },
                    '& .MuiAccordionSummary-expandIconWrapper': {
                      mr: 0,
                      ml: '8px',
                    },
                  }}
                >
                  <p
                    className={`font-IRANYekanXVF font-medium leading-[1.7] text-[15.25px] text-right whitespace-pre-wrap w-full ${
                      isExpanded ? "text-[#f42326]" : "text-white-700"
                    }`}
                    dir="auto"
                  >
                    {item.title}
                  </p>
                </AccordionSummary>
                {item.details && (
                  <AccordionDetails className="pt-0 pb-[31.5px] px-6">
                    <p
                      className="font-IRANYekanXVF font-normal leading-[1.7] text-white-500 text-[14px] text-right whitespace-pre-wrap"
                      dir="auto"
                    >
                      {item.details}
                    </p>
                  </AccordionDetails>
                )}
              </Accordion>
            );
          })}
        </div>
      </div>
    </div>
  );
}

