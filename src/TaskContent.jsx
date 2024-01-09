import React, { useContext } from "react";
import { BoardContext } from "./contexts/BoardContext";
import { SideBarContext } from "./contexts/SidebarContext";

const TaskContent = () => {
  const { board, selectedIndex } = useContext(BoardContext);
  const { sideBar } = useContext(SideBarContext);
  return (
    <>
      <div
        className={` h-screen bg-[#F4F7FD]  ${
          sideBar ? "ml-[320px]" : "pl-[100px]"
        }`}
      >
        {board[selectedIndex].columns.map((column) => (
          <div className="border">
            <h2>{column.name}</h2>
          </div>
        ))}
      </div>
    </>
  );
};

export default TaskContent;
