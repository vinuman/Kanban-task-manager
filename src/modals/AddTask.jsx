import { useContext, useState } from "react";
import React from "react";
import Button from "../components/Button";
import cross from "../assets/icon-cross.svg";
import chevronDown from "../assets/icon-chevron-down.svg";
import chevronUp from "../assets/icon-chevron-up.svg";
import { BoardContext } from "../contexts/BoardContext";

const AddTask = ({ addTaskVisible, setAddTaskVisible }) => {
  const [arr, setArr] = useState([1, 1]);
  const { selectedIndex, board, setBoard } = useContext(BoardContext);
  const [dropDownValue, setDropDownValue] = useState(
    board[selectedIndex].columns.length
      ? board[selectedIndex].columns[0].name
      : ""
  );
  const [viewOptions, setViewOptions] = useState(false);
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");

  console.log("lets solve the addTask", board[selectedIndex].columns);
  let nextKey = 0;

  const generateKey = () => {
    return nextKey++;
  };

  const handleRemoveColumn = () => {
    if (arr.length === 0) {
      return;
    }
    let newArr = [...arr];
    newArr.pop();
    setArr(newArr);
  };

  const handleAddColumn = () => {
    let newArr = [...arr];
    newArr.push(1);
    setArr(newArr);
  };

  const handleOnChange = (value, index) => {
    const newArr = [...arr];
    newArr[index] = value;
    setArr(newArr);
  };

  const handleCloseModal = (e) => {
    if (e.target.classList.contains("fixed")) {
      setAddTaskVisible(false);
    }
  };

  const saveTask = () => {
    if (title.trim() === "") return;
    let flag = true;

    arr.forEach((a) => {
      if (a === 1) {
        flag = false;
      }
    });
    if (flag === true) {
      let newTaskObj = {};
      newTaskObj.title = title;
      newTaskObj.descrition = desc;
      newTaskObj.status = dropDownValue;
      let subTaskArray = [];
      arr.forEach((a, i) => {
        let newSubObj = {};
        newSubObj.title = a;
        newSubObj.isCompleted = false;
        subTaskArray.push(newSubObj);
      });
      newTaskObj.subtasks = subTaskArray;
      let newBoard = [...board];
      newBoard[selectedIndex].columns.forEach((column) => {
        column.name === dropDownValue ? column.tasks.push(newTaskObj) : "";
      });
      setBoard(newBoard);
      setAddTaskVisible(false);
    }
  };
  return (
    <>
      {addTaskVisible && (
        <div
          onClick={(e) => handleCloseModal(e)}
          className="fixed top-0 left-0 w-[100%] h-[100%] modal flex justify-center items-center"
        >
          <div className="bg-white4 p-[32px] rounded-md shadow-md min-w-[480px]">
            <h2 className="text-black1 mb-8 text-[18px] font-bold">
              Add New Task
            </h2>
            <div className="mb-8">
              <p className="text-white1 mb-2 text-[12px] font-bold">Title</p>
              <input
                onChange={(e) => setTitle(e.target.value)}
                placeholder="e.g. Take coffee break"
                type="text"
                className="border border-white1 rounded-lg w-[100%] h-[40px] px-[16px] py-[8px] text-black1 text-[13px] font-medium outline-none"
              ></input>
            </div>
            <div className="mb-8">
              <p className="text-white1 mb-2 text-[12px] font-bold">
                Description
              </p>
              <textarea
                onChange={(e) => setDesc(e.target.value)}
                placeholder="e.g. It’s always good to take a break. This 15 minute break will 
recharge the batteries a little."
                type="text"
                className="border border-white1 rounded-lg w-[100%] h-[112px]  px-[16px] py-[8px] text-black1 text-[13px] font-medium outline-none"
              ></textarea>
            </div>
            <div>
              <p className="text-white1 mb-2 text-[12px] font-bold">Subtasks</p>
              {arr.map((_, i) => (
                <div
                  key={generateKey()}
                  className="flex justify-between items-center w-[100%] h-[40px] mb-2"
                >
                  <input
                    onChange={(e) => handleOnChange(e.target.value, i)}
                    placeholder="eg: Make mild coffee"
                    type="text"
                    className="border border-white1 rounded-lg w-[86%] h-[40px] px-[16px] py-[8px] text-black1 text-[13px] font-medium outline-none"
                  ></input>
                  <img
                    onClick={handleRemoveColumn}
                    className="w-[7%] cursor-pointer"
                    src={cross}
                    alt="close icon"
                  ></img>
                </div>
              ))}
              <Button
                onClick={handleAddColumn}
                secondary={true}
                modal={true}
                text={"+ Add New Subtask"}
              />
            </div>

            <div className="flex items-start flex-col gap-2 mt-[24px]">
              <p className="text-white1 text-[12px] font-bold">Status</p>

              {!viewOptions ? (
                <div
                  onClick={() => setViewOptions(true)}
                  className="border border-white1 rounded-lg w-[100%] h-[40px] px-[16px] py-[8px] text-white1 text-[13px] font-medium outline-none flex justify-between items-center cursor-pointer mb-4"
                >
                  {dropDownValue}
                  <img src={chevronDown} alt={"dropdown icon"}></img>
                </div>
              ) : (
                <div className="border border-white1 rounded-lg w-[100%]  px-[16px] py-[8px] text-black1 text-[13px] font-medium outline-none flex flex-col justify-between items-start cursor-pointer mb-4">
                  {board[selectedIndex].columns.map((column, index) => (
                    <div
                      onClick={() => {
                        setDropDownValue(column.name);
                        setViewOptions(false);
                      }}
                      key={index}
                      className="flex justify-between items-center gap-8 w-[100%] "
                    >
                      <p className="text-white1 text-[12px] font-bold mb-2">
                        {column.name}
                      </p>
                      {index === 0 ? (
                        <img src={chevronUp} alt={"dropdown icon"}></img>
                      ) : (
                        ""
                      )}
                    </div>
                  ))}
                </div>
              )}

              <Button
                onClick={saveTask}
                primary={true}
                modal={true}
                text={"Save Task"}
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default AddTask;
