import React, { FC } from 'react'

interface ButtonProps {
    title: string;
    icon?: React.ReactNode;
}

export const Button:FC<ButtonProps> = ({ title, icon }) => {
  return (
    <button className=" bg-[#f42326] hover:opacity-80 transition-all hover:ease-in-out flex gap-2 h-[58px] items-center justify-center  rounded-[50px] w-[197px] cursor-pointer">
      <div className="flex-none ">
        <div className=" ">{icon}</div>
      </div>
      <p
        className="font-IRANYekanXVF font-semibold leading-[normal] not-italic relative shrink-0 text-[15.25px] text-center text-white"
        dir="auto"
      >
        {title}
      </p>
    </button>
  );
}
