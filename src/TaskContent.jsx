import React, { useContext } from "react";
import { BoardContext } from "./contexts/BoardContext";
import { SideBarContext } from "./contexts/SidebarContext";
import Button from "./components/Button";
import TaskCard from "./components/TaskCard";

const TaskContent = () => {
  const { board, selectedIndex } = useContext(BoardContext);
  const { sideBar } = useContext(SideBarContext);
  console.log("hey>>", board[selectedIndex].columns);
  function totalTrue(arr) {
    let count = 0;
    for (let i = 0; i < arr.length; i++) {
      if (i.isCompleted === false) {
        count++;
      }
    }
    return count;
  }
  return (
    <>
      <div
        className={` h-screen bg-[#F4F7FD] flex gap-[32px] p-[24px]   ${
          sideBar ? "ml-[300px] " : " ml-[10px]"
        }`}
      >
        {board[selectedIndex].columns.length ? (
          board[selectedIndex].columns.map((column) => (
            <div className="">
              <div className="flex items-center gap-[12px]">
                <div className={`w-[15px] h-[15px] rounded-full border`}></div>
                <h2 className=" text-white1 text-[12px] tracking-[2.4px] uppercase font-bold">
                  {column.name} ({column.tasks.length})
                </h2>
              </div>
              {column.tasks.map((task) => (
                <TaskCard
                  title={task.title}
                  total={task.subtasks.length}
                  pending={totalTrue(task.subtasks)}
                />
              ))}
            </div>
          ))
        ) : (
          <div className="flex flex-col items-center justify-center gap-[32px] h-[80%] w-[100%]">
            <p className=" text-[18px] font-bold text-white1">
              This board is empty. Create a new column to get started.
            </p>
            <Button primary={true} text={"+ Add New Column"} />
          </div>
        )}
      </div>
    </>
  );
};

export default TaskContent;
