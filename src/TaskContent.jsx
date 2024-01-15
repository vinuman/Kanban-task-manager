import React, { useContext, useState } from "react";
import { BoardContext } from "./contexts/BoardContext";
import { SideBarContext } from "./contexts/SidebarContext";
import Button from "./components/Button";
import TaskCard from "./components/TaskCard";
import EditBoard from "./modals/EditBoard";
import CreateBoard from "./modals/CreateBoard";

const TaskContent = () => {
  const { board, selectedIndex } = useContext(BoardContext);
  const { sideBar } = useContext(SideBarContext);
  const [visible, setVisible] = useState(false);
  const [editBoardVisisble, setEditBoardVisisble] = useState(false);

  let nextKey = 0;
  const generateKey = () => {
    return nextKey++;
  };

  function totalTrue(arr) {
    let count = 0;
    arr.forEach((item) => {
      if (item.isCompleted === true) {
        count++;
      }
    });
    return count;
  }

  if (!board.length) {
    return (
      <>
        <div className="flex flex-col justify-center items-center gap-4 h-screen">
          <p className="text-[18px] font-bold text-white1">
            There are no boards available. Create a new board to get started
          </p>
          <Button
            onClick={() => setVisible(true)}
            primary={true}
            text={"+ Add New Board"}
          />
        </div>
        <CreateBoard setVisible={setVisible} visible={visible} />
      </>
    );
  }

  return (
    <>
      <div
        className={` h-screen bg-[#F4F7FD] flex gap-[32px] p-[24px]   ${
          sideBar ? "ml-[300px] " : " ml-[10px]"
        }`}
      >
        {board && board[selectedIndex].columns.length ? (
          board[selectedIndex].columns.map((column) => (
            <div key={generateKey()} className="min-w-[280px]">
              <div className="flex items-center gap-[12px] ">
                <div className={`w-[15px] h-[15px] rounded-full border`}></div>
                <h2 className=" text-white1 text-[12px] tracking-[2.4px] uppercase font-bold">
                  {column.name} ({column.tasks.length})
                </h2>
              </div>
              {column.tasks &&
                column.tasks.map((task) => (
                  <TaskCard
                    key={generateKey(task.title)}
                    title={task.title}
                    total={task.subtasks.length}
                    done={totalTrue(task.subtasks)}
                  />
                ))}
            </div>
          ))
        ) : (
          <div className="flex flex-col items-center justify-center gap-[32px] h-[80%] w-[100%]">
            <p className=" text-[18px] font-bold text-white1">
              This board is empty. Create a new column to get started.
            </p>
            <Button
              onClick={() => setEditBoardVisisble(true)}
              primary={true}
              text={"+ Add New Column"}
            />
          </div>
        )}
      </div>
      <EditBoard
        editBoardVisisble={editBoardVisisble}
        setEditBoardVisisble={setEditBoardVisisble}
      />
    </>
  );
};

export default TaskContent;
