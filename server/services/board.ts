import { createBoard, createColumn } from "../data_access/board";
import { ColumnSchema } from "../types/board";

export const boardService = {
  create: async (title: string) => {
    const response = await createBoard(title);

    return response;
  },
};

export const columnService = {
  create: async (title: string, index: number, boardId: number) => {
    const response = await createColumn(title, index, boardId);

    return response;
  },
};
