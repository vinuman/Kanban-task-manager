import React from "react";
import logoLight from "../assets/logo-dark.svg";
import Button from "../components/Button";

const NavBar = ({ board, selectedIndex }) => {
  return (
    <>
      <nav className="px-[24px] py-[24px] flex items-center justify-between">
        <img className=" w-[152px] h-[25px]" src={logoLight} alt="logo"></img>
        <h2 className=" text-[24px] font-bold text-black1">
          {board[selectedIndex].name}
        </h2>
        <Button text={"+ Add New Task"} primary={true} />
      </nav>
    </>
  );
};

export default NavBar;
