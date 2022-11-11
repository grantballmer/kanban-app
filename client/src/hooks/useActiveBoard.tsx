import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { setActiveBoard } from "../redux/boards";
import { RootState } from "../redux/store";

const useActiveBoard = () => {
  const { boards, activeBoard } = useSelector(
    (state: RootState) => state.boards
  );
  const [state, setState] = useState(activeBoard);
  const params = useParams();
  const dispatch = useDispatch();

  const currentBoard = boards.find((board) => String(board.id) === params.id);

  if (currentBoard && activeBoard) {
    if (currentBoard.id !== activeBoard.id) {
      setState(currentBoard);
      dispatch(setActiveBoard(currentBoard));
    }
  }

  useEffect(() => {
    setState(activeBoard);
  }, [activeBoard]);

  return state;
};

export default useActiveBoard;
