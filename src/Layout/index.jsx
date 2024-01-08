import React from "react";
import NavBar from "./NavBar";
import SideBar from "./SideBar";

const Layout = ({ children, board, selectedIndex, sideBar }) => {
  return (
    <>
      <NavBar selectedIndex={selectedIndex} board={board} />
      <SideBar sideBar={sideBar} />
      {children}
    </>
  );
};

export default Layout;
