import React, { useState } from "react";
import NavBar from "./NavBar";
import SideBar from "./SideBar";
import CreateBoard from "../modals/CreateBoard";
import EditBoard from "../modals/EditBoard";
import DeleteBoard from "../modals/DeleteBoard";
import AddTask from "../modals/AddTask";

const Layout = ({ children }) => {
  return (
    <>
      <NavBar />
      <SideBar />
      <div className=" overflow-scroll bg-[#F4F7FD] h-[calc(100% - )]">
        {children}
      </div>
      <CreateBoard />
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
