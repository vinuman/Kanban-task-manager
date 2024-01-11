import React from "react";
import cross from "../assets/icon-cross.svg";
import { useState } from "react";

const CreateEditBoard = ({ visible }) => {
  const [arr, setArr] = useState([1, 1]);
  const handleAddColumn = () => {
    let newArr = [...arr];
    newArr.push(1);
    setArr(newArr);
  };
  const handleRemoveColumn = () => {
    if (arr.length === 0) {
      return;
    }
    let newArr = [...arr];
    newArr.pop();
    setArr(newArr);
  };
  return (
    <>
      {visible && (
        <div className=" fixed top-0 left-0 w-[100%] h-[100%] modal flex justify-center items-center">
          <div className=" bg-white4 p-[32px] rounded-md shadow-md min-w-[480px]">
            <h2 className=" text-black1 mb-8 text-[18px] font-bold">
              Add New Board
            </h2>
            <div mb- className=" mb-8">
              <p className="text-white1 mb-2 text-[12px] font-bold">
                Board Name
              </p>
              <input
                placeholder="e.g. Web Design"
                type="text"
                className="border border-white1 rounded-lg w-[100%] h-[40px] px-[16px] py-[8px] text-black1  text-[13px] font-medium outline-none"
              ></input>
            </div>
            <div>
              <p className="text-white1 mb-2 text-[12px] font-bold">
                Board Columns
              </p>
              {arr.map((i) => (
                <div className="flex justify-between items-center w-[100%] h-[40px] mb-4">
                  <input
                    onChange={(e) => console.log(e.target.value)}
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
          </div>
        </div>
      )}
    </>
  );
};

export default CreateEditBoard;
