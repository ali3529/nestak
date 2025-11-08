"use client";
/* eslint-disable @next/next/no-img-element */

export default function BackgroundArt() {


  return (
    <>
      <div className="flex w-full items-center justify-between  absolute -bottom-[67px] z-10 px-40">
        <div className=" h-[252px]  w-[384px] relative">
          <img
            alt=""
            className="   max-w-none w-full h-full "
            src={"/img/dog.png"}
          />
        </div>
        <div className=" h-[115px]  w-[240px] relative">
          <img
            alt=""
            className="  object-cover pointer-events-none l"
            src={"/img/cat.png"}
          />
        </div>
      </div>
    </>
  );
}
