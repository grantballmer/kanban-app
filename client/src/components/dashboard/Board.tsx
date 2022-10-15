import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { DashboardChild } from "../../types/dashboard";
import Column from "../features/board/Column";

const Board = ({ className }: DashboardChild) => {
  const boards = useSelector((state: RootState) => state.boards);
  console.log(boards);

  return (
    <section className={className}>
      <Column />
    </section>
  );
};

export default Board;
