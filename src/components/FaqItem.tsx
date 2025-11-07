"use client";
import { useState } from "react";

type Props = {
  question: string;
  answer: string;
};

export default function FaqItem({ question, answer }: Props) {
  const [open, setOpen] = useState(false);
  return (
    <div className="overflow-hidden rounded-2xl border border-zinc-200 bg-white dark:border-zinc-800 dark:bg-zinc-900">
      <button
        onClick={() => setOpen((v) => !v)}
        className="flex w-full items-center justify-between gap-4 px-5 py-4 text-right"
        aria-expanded={open}
      >
        <span className="text-sm font-medium text-zinc-900 dark:text-zinc-100">{question}</span>
        <span
          className={`grid h-7 w-7 place-items-center rounded-full border text-sm transition ${
            open ? "bg-primary-600 text-white border-primary-600" : "border-zinc-300 text-zinc-500"
          }`}
        >
          {open ? "–" : "+"}
        </span>
      </button>
      {open && (
        <div className="px-5 pb-5 text-xs leading-6 text-zinc-600 dark:text-zinc-300">{answer}</div>
      )}
    </div>
  );
}

