import React, { useState } from "react";

const Toggle = () => {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  return (
    <>
      <label className="autoSaverSwitch relative inline-flex cursor-pointer select-none items-center">
        <input
          type="checkbox"
          name="autoSaver"
          className="sr-only"
          checked={isChecked}
          onChange={handleCheckboxChange}
        />
        <span
          className={`slider mr-3 flex h-[22px] w-[50px] items-center rounded-full p-1 duration-200 ${
            isChecked ? "bg-darkBlue" : " bg-darkBlue"
          }`}
        >
          <span
            className={`dot h-[18px] w-[18px] rounded-full bg-white1 duration-200 ${
              isChecked ? "translate-x-6" : ""
            }`}
          ></span>
        </span>
        <span className="label flex items-center text-sm font-medium text-black">
          <span className="pl-1"> {isChecked ? "" : ""} </span>
        </span>
      </label>
    </>
  );
};

export default Toggle;
