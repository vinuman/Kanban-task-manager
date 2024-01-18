import React, { useContext } from "react";
import { SideBarContext } from "../contexts/SidebarContext";
import { BoardContext } from "../contexts/BoardContext";
import iconShowSideBar from "../assets/icon-show-sidebar.svg";
import iconHideSideBar from "../assets/icon-hide-sidebar.svg";
import logoLight from "../assets/logo-dark.svg";
import boardIcon from "../assets/icon-board.svg";
import Toggle from "../components/Toggle";
import sunIcon from "../assets/icon-light-theme.svg";
import moonIcon from "../assets/icon-dark-theme.svg";

const SideBar = ({ setVisible }) => {
  const { sideBar, setSideBar, board } = useContext(SideBarContext);
  const { selectedIndex, setSelectedIndex } = useContext(BoardContext);
  const generateKey = (pre) => {
    return `${pre}_${new Date().getTime()}`;
  };
  if (!board.length) {
    return null;
  }
  return (
    <>
      {!sideBar ? (
        <div
          onClick={() => setSideBar(true)}
          className=" w-[56px] h-[48px] bg-darkBlue hover:bg-lightBlue transition-all duration-300  absolute bottom-20 cursor-pointer flex items-center justify-center rounded-r-[100px]"
        >
          <img className="" src={iconShowSideBar} alt="icon"></img>
        </div>
      ) : (
        <div className="w-[280px] pt-[32px] pr-[12px] h-screen absolute top-0  bg-white4">
          <img
            className="mx-[24px] w-[152px] h-[25px]"
            src={logoLight}
            alt="logo"
          ></img>
          <h2 className=" mt-[40px] px-[24px] text-[16px] font-bold tracking-[2.4px] text-white1">
            All Boards({board.length})
          </h2>
          <div className=" mt-12 min-h-[400px] ">
            {board.map((b, index) => (
              <div
                onClick={() => setSelectedIndex(index)}
                className={`flex px-[24px] py-[12px] rounded-r-[100px] items-center gap-[16px] mb-[14px] group cursor-pointer ${
                  selectedIndex === index ? " bg-darkBlue " : ""
                }`}
                key={generateKey(b.name)}
              >
                <img
                  className=" w-[16px] h-[16px]"
                  src={boardIcon}
                  alt="icon"
                ></img>
                <p
                  className={`  text-[15px] font-bold ${
                    selectedIndex === index
                      ? "text-white4 "
                      : "text-white1 group-hover:text-darkBlue opacity-100"
                  }`}
                >
                  {b.name}
                </p>
              </div>
            ))}
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

          <div className="flex items-center justify-around p-4 w-[90%] mx-auto mt-[40px] bg-white3">
            <img src={sunIcon} alt="light theme"></img>
            <Toggle />
            <img src={moonIcon} alt="dark theme"></img>
          </div>
          <div
            onClick={() => setSideBar(false)}
            className="flex items-center gap-[16px] px-[24px] rounded-r-[100px] absolute bottom-20 hover:bg-lightBlue group cursor-pointer transition-all duration-300 w-[276px] h-[48px]"
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
