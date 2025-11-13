import React, { FC } from 'react'

interface ButtonProps {
  title: string;
  icon?: React.ReactNode;
  endIcon?: React.ReactNode;
  className?: string;
  onClick?:()=> void;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
}

export const Button: FC<ButtonProps> = ({
  title,
  icon,
  endIcon,
  className,
  onClick,
  type = "button",
  disabled = false,
}) => {
  const baseClasses =
    "bg-[#f42326] hover:bg-[#ff6b6d] transition-all duration-300 ease-in-out flex gap-2 h-[48px] lg:h-[58px] items-center justify-center rounded-[50px] w-[197px] cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed";

  return (
    <button
      type={type}
      className={`${baseClasses} ${className ?? ""}`.trim()}
      onClick={onClick && onClick}
      disabled={disabled}
    >
      {icon ? (
        <div className="flex-none">
          <div>{icon}</div>
        </div>
      ) : null}
      <p
        className="font-IRANYekanXVF font-semibold leading-[normal] not-italic relative shrink-0  text-[12.75px] lg:text-[15.25px] text-center text-white"
        dir="auto"
      >
        {title}
      </p>
      {endIcon ? (
        <div className="flex-none">
          <div>{endIcon}</div>
        </div>
      ) : null}
    </button>
  );
};
