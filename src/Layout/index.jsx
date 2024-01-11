import React, { useState } from "react";
import NavBar from "./NavBar";
import SideBar from "./SideBar";
import CreateEditBoard from "../modals/CreateEditBoard";

const Layout = ({ children }) => {
  const [visible, setVisible] = useState(false);
  return (
    <>
      <NavBar />
      <SideBar setVisible={setVisible} />
      {children}
      <CreateEditBoard setVisible={setVisible} visible={visible} />
    </>
  );
};

export default Layout;
