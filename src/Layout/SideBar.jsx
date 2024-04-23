import React, { useContext } from "react";

import iconShowSideBar from "../assets/icon-show-sidebar.svg";
import iconHideSideBar from "../assets/icon-hide-sidebar.svg";
import logoLight from "../assets/logo-dark.svg";
import boardIcon from "../assets/icon-board.svg";
import Toggle from "../components/Toggle";
import sunIcon from "../assets/icon-light-theme.svg";
import moonIcon from "../assets/icon-dark-theme.svg";

const SideBar = () => {
  return (
    <>
      {false ? (
        <div
          onClick={() => setSideBar(true)}
          className=" w-[56px] h-[48px] bg-darkBlue hover:bg-lightBlue transition-all duration-300  absolute bottom-20 cursor-pointer flex items-center justify-center rounded-r-[100px]"
        >
          <img className="" src={iconShowSideBar} alt="icon"></img>
        </div>
      ) : (
        <div className="w-[280px] pt-[32px] pr-[12px] fixed top-0 bottom-0 bg-white4">
          <img
            className="mx-[24px] w-[152px] h-[25px]"
            src={logoLight}
            alt="logo"
          ></img>
          <h2 className=" mt-[40px] px-[24px] text-[16px] font-bold tracking-[2.4px] text-white1">
            All Boards
          </h2>
          <div className=" mt-12 min-h-[400px]">
            BOARD LIST GOES HERE
            <div
              onClick={() => setVisible(true)}
              className="flex px-[24px] py-[12px] rounded-r-[100px] items-center gap-[16px] mb-[14px] group cursor-pointer"
            >
              <img
                className=" w-[16px] h-[16px]"
                src={boardIcon}
                alt="icon"
              ></img>
              <p
                className={`  text-[15px] font-bold text-white1 hover:text-darkBlue`}
              >
                + Create New Board
              </p>
            </div>
          </div>

          <div className="flex items-center justify-around p-4 w-[90%] mx-auto  bg-white3  mb-2">
            <img src={sunIcon} alt="light theme"></img>
            <Toggle />
            <img src={moonIcon} alt="dark theme"></img>
          </div>
          <div
            onClick={() => setSideBar(false)}
            className="flex items-center gap-[16px] px-[24px] rounded-r-[100px]  hover:bg-lightBlue group cursor-pointer transition-all duration-300 w-[276px] h-[48px]"
          >
            <img
              className="w-[16px] h-[16px] rounded-[50%] group-hover:bg-white4"
              src={iconHideSideBar}
              alt={"hide sidebar"}
            ></img>
            <p className=" text-[15px] font-bold text-white1 group-hover:text-white4">
              Hide Sidebar
            </p>
          </div>
        </div>
      )}
    </>
  );
};

export default SideBar;
