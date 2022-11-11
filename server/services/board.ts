import {
  createBoard,
  getBoard,
  createColumn,
  createTask,
  createMultipleTasks,
} from "../data_access/board";
import { TaskRequest } from "../types/api";

export const boardService = {
  create: async (title: string, userId: string, href: string) => {
    const response = await createBoard(title, userId, href);

    return response;
  },
  getBoard: async (boardId: string) => {
    const response = await getBoard(Number(boardId));

    return response;
  },
};

export const columnService = {
  create: async (title: string, index: number, boardId: number) => {
    const response = await createColumn(title, index, boardId);

    return response;
  },
};

export const taskService = {
  create: async (title: string, index: number, columnId: number) => {
    const response = await createTask(title, index, columnId);

    return response;
  },
  createMultiple: async (
    tasks: { title: string; index: number; columnId: number }[]
  ) => {
    const tasksArr = tasks.map((task) => ({
      title: task.title,
      index: task.index,
      column_id: task.columnId,
    }));
    const response = await createMultipleTasks(tasksArr);

    return response;
  },
};
