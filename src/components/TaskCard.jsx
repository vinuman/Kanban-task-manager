import React from "react";

const TaskCard = ({ title, done, total, onClick }) => {
  return (
    <>
      <div
        onClick={onClick}
        className=" w-[280px] shadow-md rounded-[8px] p-[16px] mt-[20px] cursor-pointer bg-white4"
      >
        <h2 className=" text-[15px] font-bold text-black1 mb-[8px]">{title}</h2>
        <p className=" text-[12px] font-bold text-white1">{`${done} of ${total} subtasks`}</p>
      </div>
    </>
  );
};

export default TaskCard;
