import React from "react";
import cross from "../assets/icon-cross.svg";
import { useState, useContext } from "react";
import Button from "../components/Button";
import { BoardContext } from "../contexts/BoardContext";

const CreateBoard = ({ visible, setVisible }) => {
  // State variables
  const [arr, setArr] = useState([1, 1]);
  const [boardName, setBoardName] = useState("");
  const { board, setBoard } = useContext(BoardContext);

  // Function to add a new column to the board
  const handleAddColumn = () => {
    let newArr = [...arr];
    newArr.push(1);
    setArr(newArr);
  };

  // Function to save the new board
  const handleSaveBoard = () => {
    if (boardName.trim() === "") return;
    let flag = true;
    // Check if any column is empty
    arr.forEach((a) => {
      if (a === 1) {
        flag = false;
      }
    });
    if (flag === true) {
      // Create a new board object
      let obj = {};
      obj.name = boardName;
      obj.columns = [];
      arr.forEach((a, i) => {
        obj.columns[i] = {};
        obj.columns[i].name = a;
        obj.columns[i].tasks = [];
      });
      // Update the board state with the new board
      let newBoard = [...board];
      newBoard.push(obj);
      setBoard(newBoard);
      setVisible(false); // Close the modal
    }
  };

  // Function to remove the last column
  const handleRemoveColumn = () => {
    if (arr.length === 0) {
      return;
    }
    let newArr = [...arr];
    newArr.pop();
    setArr(newArr);
  };

  // Function to close the modal when clicking outside the content
  const handleCloseModal = (e) => {
    if (e.target.classList.contains("fixed")) {
      setVisible(false);
    }
  };

  // Function to handle input value change for each column
  const handleOnChange = (value, index) => {
    const newArr = [...arr];
    newArr[index] = value;
    setArr(newArr);
  };

  // Render the component
  return (
    <>
      {visible && (
        <div
          onClick={(e) => handleCloseModal(e)}
          className="fixed top-0 left-0 w-[100%] h-[100%] modal flex justify-center items-center"
        >
          <div className="bg-white4 p-[32px] rounded-md shadow-md min-w-[480px]">
            <h2 className="text-black1 mb-8 text-[18px] font-bold">
              Add New Board
            </h2>
            <div className="mb-8">
              <p className="text-white1 mb-2 text-[12px] font-bold">
                Board Name
              </p>
              <input
                onChange={(e) => setBoardName(e.target.value)}
                placeholder="e.g. Web Design"
                type="text"
                className="border border-white1 rounded-lg w-[100%] h-[40px] px-[16px] py-[8px] text-black1 text-[13px] font-medium outline-none"
              ></input>
            </div>
            <div>
              <p className="text-white1 mb-2 text-[12px] font-bold">
                Board Columns
              </p>
              {arr.map((a, i) => (
                <div
                  key={i}
                  className="flex justify-between items-center w-[100%] h-[40px] mb-4"
                >
                  <input
                    onChange={(e) => handleOnChange(e.target.value, i)}
                    placeholder="eg: todo"
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
            </div>
            <div className="mt-8 flex flex-col gap-4">
              <Button
                onClick={handleAddColumn}
                primary={true}
                modal={true}
                text={"+ Add New Column"}
              />
              <Button
                onClick={handleSaveBoard}
                primary={true}
                modal={true}
                text={"Save New Board"}
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default CreateBoard;
