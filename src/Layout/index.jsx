import React, { useState } from "react";
import NavBar from "./NavBar";
import SideBar from "./SideBar";
import CreateBoard from "../modals/CreateBoard";
import EditBoard from "../modals/EditBoard";
import DeleteBoard from "../modals/DeleteBoard";
import AddTask from "../modals/AddTask";

const Layout = ({ children }) => {
  const [visible, setVisible] = useState(false);
  const [editBoardVisisble, setEditBoardVisisble] = useState(false);
  const [deleteBoardVisible, setDeleteBoardVisible] = useState(false);
  const [addTaskVisible, setAddTaskVisible] = useState(false);
  return (
    <>
      <NavBar
        setAddTaskVisible={setAddTaskVisible}
        setEditBoardVisisble={setEditBoardVisisble}
        setDeleteBoardVisible={setDeleteBoardVisible}
      />
      <SideBar setVisible={setVisible} />
      <div className=" overflow-scroll bg-[#F4F7FD] h-[calc(100% - )]">
        {children}
      </div>
      <CreateBoard setVisible={setVisible} visible={visible} />
      <EditBoard
        editBoardVisisble={editBoardVisisble}
        setEditBoardVisisble={setEditBoardVisisble}
      />
      <DeleteBoard
        deleteBoardVisible={deleteBoardVisible}
        setDeleteBoardVisible={setDeleteBoardVisible}
      />
      <AddTask
        addTaskVisible={addTaskVisible}
        setAddTaskVisible={setAddTaskVisible}
      />
    </>
  );
};

export default Layout;
