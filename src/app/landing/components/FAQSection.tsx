"use client";
/* eslint-disable @next/next/no-img-element */
import { useState } from "react";
import { Accordion, AccordionSummary, AccordionDetails } from "@mui/material";

type FaqItem = { id: string; title: string; details?: string };

export default function FAQSection() {
  const imgArrowDown =
    "https://www.figma.com/api/mcp/asset/a14827de-ff10-4c22-9ca0-7b3d2b4804fe";

  const rightItems: FaqItem[] = [
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

  const leftItems: FaqItem[] = Array.from({ length: 4 }).map((_, i) => ({
    id: `l-${i}`,
    title: `سوال متداول ${i + 1}`,
    details:
      "لورم ایپسوم متن ساختگی برای پاسخ نمونه. این متن جهت پر کردن فضا استفاده می‌شود.",
  }));

  const [expandedRight, setExpandedRight] = useState<string | false>("r-1");
  const [expandedLeft, setExpandedLeft] = useState<string | false>(false);

  return (
    <div className="absolute h-[668px] left-0 overflow-clip top-[2645px] w-[1440px]">
      <p
        className="absolute font-IRANYekanXVF font-semibold leading-[normal] left-[calc(50%+0.5px)] not-italic text-[#303030] text-[20.5px] text-center top-[28px] translate-x-[-50%]"
        dir="auto"
      >
        سوالات متداول
      </p>

      {/* Right column */}
      <div
        className="absolute content-stretch flex flex-col gap-[8px] items-start left-[725px] top-[113px] w-[560px]"
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
                    className="block max-w-none size-[24px]"
                  />
                }
                className="px-[24px] min-h-[87px]"
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
                    isExpanded ? "text-[#f42326]" : "text-[#303030]"
                  }`}
                  dir="auto"
                >
                  {item.title}
                </p>
              </AccordionSummary>
              {item.details && (
                <AccordionDetails className="pt-0 pb-[31.5px] px-[24px]">
                  <p
                    className="font-IRANYekanXVF font-normal leading-[1.7] text-[#919191] text-[14px] text-right whitespace-pre-wrap"
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
        className="absolute content-stretch flex flex-col gap-[8px] items-start left-[155px] top-[113px] w-[560px]"
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
                    className="block max-w-none size-[24px]"
                  />
                }
                className="px-[24px] min-h-[87px]"
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
                    isExpanded ? "text-[#f42326]" : "text-[#303030]"
                  }`}
                  dir="auto"
                >
                  {item.title}
                </p>
              </AccordionSummary>
              {item.details && (
                <AccordionDetails className="pt-0 pb-[31.5px] px-[24px]">
                  <p
                    className="font-IRANYekanXVF font-normal leading-[1.7] text-[#919191] text-[14px] text-right whitespace-pre-wrap"
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
  );
}

