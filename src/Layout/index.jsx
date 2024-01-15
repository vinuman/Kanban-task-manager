import React, { useState } from "react";
import NavBar from "./NavBar";
import SideBar from "./SideBar";
import CreateBoard from "../modals/CreateBoard";
import EditBoard from "../modals/EditBoard";
import DeleteBoard from "../modals/DeleteBoard";

const Layout = ({ children }) => {
  const [visible, setVisible] = useState(false);
  const [editBoardVisisble, setEditBoardVisisble] = useState(false);
  const [deleteBoardVisible, setDeleteBoardVisible] = useState(false);
  return (
    <>
      <NavBar
        setEditBoardVisisble={setEditBoardVisisble}
        setDeleteBoardVisible={setDeleteBoardVisible}
      />
      <SideBar setVisible={setVisible} />
      {children}
      <CreateBoard setVisible={setVisible} visible={visible} />
      <EditBoard
        editBoardVisisble={editBoardVisisble}
        setEditBoardVisisble={setEditBoardVisisble}
      />
      <DeleteBoard
        deleteBoardVisible={deleteBoardVisible}
        setDeleteBoardVisible={setDeleteBoardVisible}
      />
    </>
  );
};

export default Layout;
