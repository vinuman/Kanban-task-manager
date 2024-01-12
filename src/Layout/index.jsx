import React, { useState } from "react";
import NavBar from "./NavBar";
import SideBar from "./SideBar";
import CreateBoard from "../modals/CreateBoard";
import EditBoard from "../modals/EditBoard";

const Layout = ({ children }) => {
  const [visible, setVisible] = useState(false);
  const [editBoardVisisble, setEditBoardVisisble] = useState(false);
  return (
    <>
      <NavBar setEditBoardVisisble={setEditBoardVisisble} />
      <SideBar setVisible={setVisible} />
      {children}
      <CreateBoard setVisible={setVisible} visible={visible} />
      <EditBoard
        editBoardVisisble={editBoardVisisble}
        setEditBoardVisisble={setEditBoardVisisble}
      />
    </>
  );
};

export default Layout;
