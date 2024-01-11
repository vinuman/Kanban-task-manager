import React from "react";
import NavBar from "./NavBar";
import SideBar from "./SideBar";
import CreateEditBoard from "../modals/CreateEditBoard";

const Layout = ({ children }) => {
  return (
    <>
      <NavBar />
      <SideBar />
      <CreateEditBoard visible={true} />
      {children}
    </>
  );
};

export default Layout;
