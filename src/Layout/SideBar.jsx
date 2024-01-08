import React from "react";
import iconShowSideBar from "../assets/icon-show-sidebar.svg";

const SideBar = ({ sideBar }) => {
  return (
    <>
      {!sideBar ? (
        <div className=" w-[60px] h-screen border">
          <img className="border" src={iconShowSideBar} alt="icon"></img>
        </div>
      ) : (
        <div className="w-[300px] border h-screen absolute top-0"></div>
      )}
    </>
  );
};

export default SideBar;
