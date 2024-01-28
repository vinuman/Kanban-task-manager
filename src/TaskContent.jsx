import React, { useContext, useState } from "react";
import { BoardContext } from "./contexts/BoardContext";
import { SideBarContext } from "./contexts/SidebarContext";
import Button from "./components/Button";
import TaskCard from "./components/TaskCard";
import EditBoard from "./modals/EditBoard";
import CreateBoard from "./modals/CreateBoard";
import EditTask from "./modals/EditTask";

const TaskContent = () => {
  const { board, selectedIndex } = useContext(BoardContext);
  const { sideBar } = useContext(SideBarContext);
  const [visible, setVisible] = useState(false);
  const [editBoardVisisble, setEditBoardVisisble] = useState(false);
  const [editTaskVisible, setEditTaskVisible] = useState(false);
  const [editTaskData, setEditTaskData] = useState({
    name: "",
    title: "",
    desc: "",
    index: null,
    subtasks: [],
    status: "",
  });

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

  const openEditTaskModal = (data) => {
    setEditTaskData(data);
    setEditTaskVisible(true);
  };

  if (!board.length) {
    return (
      <>
        <div className="flex flex-col justify-center items-center gap-4 h-screen border overflow-auto">
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
        className={`  bg-[#F4F7FD] flex gap-[32px] p-[24px]   ${
          sideBar ? "ml-[300px] " : " ml-[10px]"
        }`}
      >
        {board && board[selectedIndex].columns.length ? (
          board[selectedIndex].columns.map((column) => (
            <div key={generateKey()} className="min-w-[280px] ">
              <div className="flex items-center gap-[12px]">
                <div className={`w-[15px] h-[15px] rounded-full border`}></div>
                <h2 className=" text-white1 text-[12px] tracking-[2.4px] uppercase font-bold">
                  {column.name} ({column.tasks.length})
                </h2>
              </div>
              {column.tasks &&
                column.tasks.map((task, index) => (
                  <TaskCard
                    onClick={() =>
                      openEditTaskModal({
                        name: column.name,
                        title: task.title,
                        desc: task.description,
                        index: index,
                        subtasks: task.subtasks,
                        status: task.status,
                      })
                    }
                    key={generateKey(task.title)}
                    title={task.title}
                    total={task.subtasks.length}
                    done={totalTrue(task.subtasks)}
                  />
                ))}
            </div>
          ))
        ) : (
          <div className="flex flex-col items-center justify-center gap-[32px] h-screen w-[100%] ">
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
        {board && board[selectedIndex].columns.length ? (
          <div
            onClick={() => setEditBoardVisisble(true)}
            className=" min-w-[280px] h-screen flex items-center justify-center text-[24px] text-white1 hover:text-black3 font-bold cursor-pointer rounded-md linear hover:border hover:border-b-lightBlue"
          >
            + New Column
          </div>
        ) : (
          ""
        )}
      </div>

      <EditBoard
        editBoardVisisble={editBoardVisisble}
        setEditBoardVisisble={setEditBoardVisisble}
      />
      <EditTask
        editTaskData={editTaskData}
        setEditTaskData={setEditTaskData}
        editTaskVisible={editTaskVisible}
        setEditTaskVisible={setEditTaskVisible}
      />
    </>
  );
};

export default TaskContent;
