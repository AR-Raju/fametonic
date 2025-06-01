import { ButtonHTMLAttributes, MouseEventHandler, ReactNode } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children?: ReactNode;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  className?: string;
  disabled?: boolean;
  rightIcon?: ReactNode | (() => ReactNode);
}

const Button = ({
  children = "GET STARTED",
  className = "",
  disabled = false,
  rightIcon = null,
  ...props
}: ButtonProps) => {
  return (
    <div className="flex flex-col space-y-2">
      <button
        disabled={disabled}
        className={` font-figtree font-bold 
            text-[20px] leading-[100%] 
            tracking-normal align-middle
  inline-flex items-center justify-center
  w-full sm:w-[300px]
   h-[40px]
  px-10 py-2
  bg-[#FC004E] 
  text-white
  rounded-[10px]
  shadow-[2px_2px_10px_0px_#00E7F9]
  hover:bg-[#e6003d] 
  active:bg-[#cc0036]
  focus:outline-none
  disabled:opacity-50 disabled:cursor-not-allowed
  transition-all duration-200 ease-in-out
  ${className}
`}
        {...props}
      >
        {children}
        {rightIcon && (
          <span className="ml-2">
            {typeof rightIcon === "function" ? rightIcon() : rightIcon}
          </span>
        )}
      </button>
      <p className="font-figtree font-normal text-[12px] leading-[16px] tracking-normal text-center align-middle sm:w-[280px]">
        1-minute quiz for personalized Insights
      </p>
    </div>
  );
};

export default Button;
