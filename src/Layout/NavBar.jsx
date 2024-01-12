import React, { useContext, useState } from "react";
import logoLight from "../assets/logo-dark.svg";
import ellipsis from "../assets/icon-vertical-ellipsis.svg";
import Button from "../components/Button";
import { BoardContext } from "../contexts/BoardContext";

const NavBar = ({ setEditBoardVisisble }) => {
  const { board, selectedIndex } = useContext(BoardContext);
  const [editDeleteOption, setEditDeleteOption] = useState(false);
  return (
    <>
      <nav className="px-[24px] py-[24px] flex items-center justify-between">
        <img className=" w-[152px] h-[25px]" src={logoLight} alt="logo"></img>
        <h2 className=" text-[24px] font-bold text-black1 tracking-wide">
          {board[selectedIndex].name}
        </h2>
        <div className="flex items-center gap-4">
          <Button
            disabled={!board[selectedIndex].columns.length}
            text={"+ Add New Task"}
            primary={true}
          />
          <img
            onClick={() => setEditDeleteOption(!editDeleteOption)}
            className=" cursor-pointer"
            src={ellipsis}
            alt="edit board options"
          ></img>
        </div>
        {editDeleteOption && (
          <div className="absolute top-20 right-8 border p-[16px] rounded-md bg-white4 flex flex-col items-center gap-4">
            <p
              onClick={() => {
                setEditBoardVisisble(true);
                setEditDeleteOption(false);
              }}
              className=" text-[16px] font-bold text-white1 hover:text-white2 cursor-pointer"
            >
              Edit Board
            </p>
            <p className=" text-[16px] font-bold text-red1 hover:text-red2 cursor-pointer ">
              Delete Board
            </p>
          </div>
        )}
      </nav>
    </>
  );
};

export default NavBar;
