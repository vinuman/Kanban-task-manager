import React, { useState } from "react";
import NavBar from "./NavBar";
import SideBar from "./SideBar";
import CreateBoard from "../modals/CreateBoard";

const Layout = ({ children }) => {
  const [visible, setVisible] = useState(false);
  return (
    <>
      <NavBar />
      <SideBar setVisible={setVisible} />
      {children}
      <CreateBoard setVisible={setVisible} visible={visible} />
    </>
  );
};

export default Layout;
