import React, { useContext, useState, useEffect } from "react";
import { BoardContext } from "../contexts/BoardContext";
import cross from "../assets/icon-cross.svg";
import Button from "../components/Button";

const EditBoard = ({ editBoardVisisble, setEditBoardVisisble }) => {
  const { board, selectedIndex, setBoard } = useContext(BoardContext);
  const [boardName, setBoardName] = useState(
    board.length > 0 ? board[selectedIndex]?.name || "" : ""
  );
  const [arr, setArr] = useState(
    board.length > 0 ? board[selectedIndex]?.columns || "" : ""
  );

  let nextKey = 0;

  const generateKey = () => {
    return nextKey++;
  };

  useEffect(() => {
    setBoardName(board[selectedIndex]?.name || "");
    setArr(board[selectedIndex]?.columns || []);
  }, [selectedIndex, board]);

  // Function to close the modal when clicking outside the content
  const handleCloseModal = (e) => {
    if (e.target.classList.contains("fixed")) {
      setEditBoardVisisble(false);
    }
  };

  const handleOnChange = (value, id) => {
    let newArr = arr.map((a, index) => {
      if (index === id) {
        return { ...a, name: value };
      } else {
        return a;
      }
    });
    setArr(newArr);
  };

  const handleRemoveColumn = (i) => {
    console.log("Before remove:", arr);
    let newArr = arr.filter((_, index) => index !== i);
    setArr(newArr);
    console.log("After remove:", arr);
  };

  const handleAddColumn = () => {
    console.log("Before add:", arr);
    setArr((prevArr) => [...prevArr, { name: "New Column", tasks: [] }]);
    console.log("After add:", arr);
  };

  const handleSaveBoard = () => {
    let newBoard = [...board];
    newBoard[selectedIndex].name = boardName;
    newBoard[selectedIndex].columns = arr;
    setBoard(newBoard);
    setEditBoardVisisble(false);
  };

  if (!board.length) {
    return null;
  }

  return (
    <>
      {editBoardVisisble && (
        <div
          onClick={(e) => handleCloseModal(e)}
          className="fixed top-0 left-0 w-[100%] h-[100%] modal flex justify-center items-center"
        >
          <div className="bg-white4 p-[32px] rounded-md shadow-md min-w-[480px]">
            <h2 className="text-black1 mb-8 text-[18px] font-bold">
              Edit Board
            </h2>
            <div className="mb-8">
              <p className="text-white1 mb-2 text-[12px] font-bold">
                Board Name
              </p>
              <input
                onChange={(e) => setBoardName(e.target.value)}
                placeholder="e.g. Web Design"
                type="text"
                value={boardName}
                className="border border-white1 rounded-lg w-[100%] h-[40px] px-[16px] py-[8px] text-black1 text-[13px] font-medium outline-none"
              ></input>
            </div>
            <div>
              <p className="text-white1 mb-2 text-[12px] font-bold">
                Board Columns
              </p>
              {arr.map((_, i) => (
                <div
                  key={generateKey()}
                  className="flex justify-between items-center w-[100%] h-[40px] mb-4"
                >
                  <input
                    value={arr[i].name}
                    onChange={(e) => handleOnChange(e.target.value, i)}
                    placeholder="eg: todo"
                    type="text"
                    className="border border-white1 rounded-lg w-[86%] h-[40px] px-[16px] py-[8px] text-black1 text-[13px] font-medium outline-none"
                  ></input>
                  <img
                    onClick={() => handleRemoveColumn(i)}
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

export default EditBoard;
