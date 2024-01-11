import React from "react";

const Button = ({
  primary,
  secondary,
  destructive,
  text,
  disabled,
  modal,
  onClick,
}) => {
  return (
    <>
      <button
        onClick={onClick}
        disabled={disabled}
        className={` h-[48px] rounded-[20px] text-white4 text-[15px] font-bold transition-all duration-300 ${
          primary
            ? " bg-darkBlue hover:bg-lightBlue"
            : secondary
            ? " bg-white2 hover:bg-white3"
            : destructive
            ? " bg-red1 hover:bg-red2"
            : ""
        } ${disabled ? " opacity-40 cursor-not-allowed " : ""} ${
          modal ? "w-[100%]" : " w-[164px]"
        }`}
      >
        {text}
      </button>
    </>
  );
};

export default Button;
