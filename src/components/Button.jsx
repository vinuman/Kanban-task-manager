import React from "react";

const Button = ({ primary, secondary, destructive, text }) => {
  return (
    <>
      <button
        className={` w-[164px] h-[48px] rounded-[20px] text-white4 text-[15px] font-bold transition-all duration-300 ${
          primary
            ? " bg-darkBlue hover:bg-lightBlue"
            : secondary
            ? " bg-white2 hover:bg-white3"
            : destructive
            ? " bg-red1 hover:bg-red2"
            : ""
        }`}
      >
        {text}
      </button>
    </>
  );
};

export default Button;
