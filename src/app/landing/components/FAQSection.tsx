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

  

  // Split FAQ items into two columns
  const allItems =
    apiItems.length > 0
      ? apiItems
      : []
  const midPoint = Math.ceil(allItems.length / 2);
  const rightItems = allItems.slice(0, midPoint);
  const leftItems = allItems.slice(midPoint);

  const [expandedRight, setExpandedRight] = useState<string | false>(
    apiItems.length > 0 ? apiItems[0]?.id : "r-1"
  );
  const [expandedLeft, setExpandedLeft] = useState<string | false>(false);

  return (
    <div className="relative w-full px-4 py-8 md:px-8 lg:px-[155px] lg:py-7 overflow-hidden">
      <p
        className="font-IRANYekanXVF font-semibold leading-normal not-italic text-white-700 text-lg md:text-[20.5px] text-center mb-8 lg:mb-[56px]"
        dir="auto"
      >
        سوالات متداول
      </p>

      <div className="flex flex-col lg:flex-row-reverse gap-6 lg:gap-2.5 max-w-[1440px] mx-auto">
        {/* Right column */}
        <div className="flex flex-col gap-2 w-full lg:w-[560px]" dir="rtl">
          {rightItems.map((item) => {
            const isExpanded = expandedRight === item.id;
            return (
              <Accordion
                key={item.id}
                className="bg-[#f4f5f7] rounded-[20px] lg:rounded-[30px] shadow-none"
                expanded={isExpanded}
                onChange={() =>
                  setExpandedRight((prev) =>
                    prev === item.id ? false : item.id
                  )
                }
                disableGutters
                square
                sx={{
                  bgcolor: "#f4f5f7",

                  boxShadow: "none",
                  "&:before": { display: "none" },
                }}
              >
                <AccordionSummary
                  slotProps={{
                    root: {
                      sx: {
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                        padding: "18px",
                      },
                    },
                  }}
                  expandIcon={
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M16.5311 9.41406C16.8545 9.15531 17.327 9.20781 17.5857 9.53125C17.8445 9.8547 17.792 10.3272 17.4686 10.5859L12.4686 14.5859C12.1946 14.8051 11.805 14.8051 11.5311 14.5859L6.53105 10.5859C6.20761 10.3272 6.15511 9.8547 6.41387 9.53125C6.67262 9.2078 7.14511 9.15531 7.46855 9.41406L11.9998 13.0391L16.5311 9.41406Z"
                        fill={isExpanded ? "#ef4444" : "#919191"}
                      />
                    </svg>
                  }
                  className="px-6 min-h-[87px]"
                  sx={{
                    minHeight: "87px",
                    "&.Mui-expanded": { minHeight: "87px" },
                    flexDirection: "row-reverse",
                    "& .MuiAccordionSummary-content": {
                      margin: 0,
                      alignItems: "center",
                      justifyContent: "flex-end",
                    },
                    "& .MuiAccordionSummary-content.Mui-expanded": {
                      margin: 0,
                    },
                    "& .MuiAccordionSummary-expandIconWrapper": {
                      mr: 0,
                      ml: "8px",
                    },
                  }}
                >
                  <p
                    className={`font-IRANYekanXVF font-medium lg:leading-[1.7] text-[14px] lg:text-[15.25px] text-right whitespace-pre-wrap w-full ${
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
        <div className="flex flex-col gap-2 w-full lg:w-[560px]" dir="rtl">
          {leftItems.map((item) => {
            const isExpanded = expandedLeft === item.id;
            return (
              <Accordion
                key={item.id}
                className="bg-[#f4f5f7]  shadow-none rounded-[20px] lg:rounded-[30px]"
                expanded={isExpanded}
                onChange={() =>
                  setExpandedLeft((prev) =>
                    prev === item.id ? false : item.id
                  )
                }
                disableGutters
                square
                sx={{
                  bgcolor: "#f4f5f7",
                  
                  boxShadow: "none",
                  "&:before": { display: "none" },
                }}
              >
                <AccordionSummary
                  slotProps={{
                    root: {
                      sx: {
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                        padding: "18px",
                      },
                    },
                  }}
                  expandIcon={
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M16.5311 9.41406C16.8545 9.15531 17.327 9.20781 17.5857 9.53125C17.8445 9.8547 17.792 10.3272 17.4686 10.5859L12.4686 14.5859C12.1946 14.8051 11.805 14.8051 11.5311 14.5859L6.53105 10.5859C6.20761 10.3272 6.15511 9.8547 6.41387 9.53125C6.67262 9.2078 7.14511 9.15531 7.46855 9.41406L11.9998 13.0391L16.5311 9.41406Z"
                        fill={isExpanded ? "#ef4444" : "#919191"}
                      />
                    </svg>
                  }
                  className="px-6 min-h-[87px]"
                  sx={{
                    minHeight: "87px",
                    "&.Mui-expanded": { minHeight: "87px" },
                    flexDirection: "row-reverse",
                    "& .MuiAccordionSummary-content": {
                      margin: 0,
                      alignItems: "center",
                      justifyContent: "flex-end",
                    },
                    "& .MuiAccordionSummary-content.Mui-expanded": {
                      margin: 0,
                    },
                    "& .MuiAccordionSummary-expandIconWrapper": {
                      mr: 0,
                      ml: "8px",
                    },
                  }}
                >
                  <p
                    className={`font-IRANYekanXVF font-medium  lg:leading-[1.7] text-[14px] lg:text-[15.25px] text-right whitespace-pre-wrap w-full ${
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
