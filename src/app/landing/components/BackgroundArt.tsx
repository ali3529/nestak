"use client";
/* eslint-disable @next/next/no-img-element */

export default function BackgroundArt() {


  return (
    <>
      <div className="pointer-events-none absolute inset-x-0 -bottom-[60px] z-10 flex w-full items-center justify-between gap-4 px-4 sm:-bottom-[70px] sm:px-10 lg:px-40">
        <div className="relative h-auto w-[180px] sm:w-[280px] lg:w-[384px]">
          <img
            alt=""
            className="h-full w-full object-contain"
            src={"/img/dog.png"}
          />
        </div>
        <div className="relative h-auto w-[120px] sm:w-[180px] lg:w-[240px]">
          <img
            alt=""
            className="object-contain"
            src={"/img/cat.png"}
          />
        </div>
      </div>
    </>
  );
}
