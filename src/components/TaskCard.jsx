import React from "react";
import { useContext } from "react";
import { BoardContext } from "../contexts/BoardContext";

const TaskCard = ({ title, pending, total }) => {
  return (
    <>
      <div className=" w-[280px] h-[88px] shadow-md rounded-[8px] px-[16px] mt-[20px]">
        <h2>{title}</h2>
        <p>{`${pending} of ${total} subtasks`}</p>
      </div>
    </>
  );
};

export default TaskCard;
