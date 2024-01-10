import React, { useContext } from "react";
import logoLight from "../assets/logo-dark.svg";
import Button from "../components/Button";
import { BoardContext } from "../contexts/BoardContext";

const NavBar = () => {
  const { board, selectedIndex } = useContext(BoardContext);
  return (
    <>
      <nav className="px-[24px] py-[24px] flex items-center justify-between">
        <img className=" w-[152px] h-[25px]" src={logoLight} alt="logo"></img>
        <h2 className=" text-[24px] font-bold text-black1 tracking-wide">
          {board[selectedIndex].name}
        </h2>
        <Button
          disabled={!board[selectedIndex].columns.length}
          text={"+ Add New Task"}
          primary={true}
        />
      </nav>
    </>
  );
};

export default NavBar;
