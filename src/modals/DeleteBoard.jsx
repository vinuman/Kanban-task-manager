import React, { useContext } from "react";
import Button from "../components/Button";
import { BoardContext } from "../contexts/BoardContext";

const DeleteBoard = ({ deleteBoardVisible, setDeleteBoardVisible }) => {
  const { selectedIndex, board, setBoard } = useContext(BoardContext);

  const deleteBoard = () => {
    setBoard((prevBoard) => prevBoard.filter((_, i) => i !== selectedIndex));
    setDeleteBoardVisible(false);
  };

  const handleCloseModal = (e) => {
    if (e.target.classList.contains("fixed")) {
      setDeleteBoardVisible(false);
    }
  };

  return (
    <div>
      {deleteBoardVisible && (
        <div
          onClick={(e) => handleCloseModal(e)}
          className="fixed top-0 left-0 w-[100%] h-[100%] modal flex justify-center items-center"
        >
          <div className="bg-white4 p-[32px] rounded-md shadow-md w-[480px]">
            <h2 className=" text-red1 mb-8 text-[18px] font-bold">
              Delete this board?
            </h2>
            <p className=" text-[13px] font-medium text-white1">
              {` Are you sure you want to delete the ‘${board[selectedIndex].name}’ board? This
              action will remove all columns and tasks and cannot be reversed.`}
            </p>

            <div className="mt-8 flex items-center gap-4">
              <Button
                onClick={deleteBoard}
                destructive={true}
                modal={true}
                text={"Delete"}
              />
              <Button
                onClick={() => setDeleteBoardVisible(false)}
                primary={true}
                modal={true}
                text={"Cancel"}
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default DeleteBoard;
