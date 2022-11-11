import React from "react";
import styles from "./Board.module.scss";
import { DashboardChild } from "../../types/dashboard";

import {
  DragDropContext,
  Droppable,
  DroppableProvided,
  DropResult,
} from "@hello-pangea/dnd";
import Column from "../features/board/Column";
import AddColumn from "../features/board/AddColumn";

const Board = ({ className, board }: DashboardChild) => {
  const onDragEnd = (result: DropResult) => {
    const { destination, source } = result;

    if (!destination) {
      return;
    }

    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    ) {
      return;
    }

    const column = board.columns.find(
      (column) => String(column.id) === source.droppableId
    );
    console.log(column);
  };

  return (
    <section className={`${className} ${styles.board}`}>
      <DragDropContext onDragEnd={onDragEnd}>
        {board.columns.map((column, index) => {
          // if (index === 0) {
          //   return <Column key={column.id} data={column} />;
          // } else {
          //   return null;
          // }
          return <Column key={column.id} data={column} />;
        })}
      </DragDropContext>
      <AddColumn />
    </section>
  );
};

export default Board;
