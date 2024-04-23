import React, { useContext, useState } from "react";
import logoLight from "../assets/logo-dark.svg";
import ellipsis from "../assets/icon-vertical-ellipsis.svg";
import Button from "../components/Button";

const NavBar = () => {
  return (
    <>
      <nav className="px-[24px] py-[24px] h-[96px] sticky top-0 bg-white4 flex items-center justify-between">
        <img className=" w-[152px] h-[25px]" src={logoLight} alt="logo"></img>
        <h2 className=" text-[24px] font-bold text-black1 tracking-wide">
          {"asaksjkl"}
        </h2>
        <div className="flex items-center gap-4">
          <Button text={"+ Add New Task"} primary={true} />
          <img
            className=" cursor-pointer"
            src={ellipsis}
            alt="edit board options"
          ></img>
        </div>

        <div className="absolute top-20 right-8 border p-[16px] rounded-md bg-white4 flex flex-col items-center gap-4">
          <p className=" text-[16px] font-bold text-white1 hover:text-white2 cursor-pointer">
            Edit Board
          </p>
          <p className=" text-[16px] font-bold text-red1 hover:text-red2 cursor-pointer ">
            Delete Board
          </p>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
