import React from "react";
import NavBar from "./NavBar";
import SideBar from "./SideBar";

const Layout = ({ children, board, selectedIndex, sideBar }) => {
  return (
    <>
      <NavBar selectedIndex={selectedIndex} board={board} />
      <SideBar />
      {children}
    </>
  );
};

export default Layout;
