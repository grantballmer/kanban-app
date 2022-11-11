import { prisma } from "../app";
import { TaskRequest } from "../types/api";

export const createBoard = async (
  title: string,
  userId: string,
  href: string
) => {
  try {
    const response = prisma.board.create({
      data: {
        title: title,
        user_id: userId,
        href,
      },
    });

    return response;
  } catch (err) {
    console.log(err);
    return err;
  }
};

export const getBoard = async (boardId: number) => {
  try {
    const response = prisma.board.findUnique({
      where: {
        id: boardId,
      },
      include: {
        columns: {
          include: {
            tasks: true,
          },
        },
      },
    });

    console.log(response);

    return response;
  } catch (err) {
    console.log(err);
    return err;
  }
};

export const createColumn = async (
  title: string,
  index: number,
  boardId: number
) => {
  try {
    const response = prisma.column.create({
      data: {
        title: title,
        index: index,
        board_id: boardId,
      },
    });

    return response;
  } catch (err) {
    console.log(err);
    return err;
  }
};

export const createTask = async (
  title: string,
  index: number,
  columnId: number
) => {
  try {
    const response = prisma.task.create({
      data: {
        title: title,
        index: index,
        column_id: columnId,
      },
    });

    return response;
  } catch (err) {
    console.log(err);
    return err;
  }
};

export const createMultipleTasks = async (tasks: TaskRequest[]) => {
  try {
    const response = prisma.task.createMany({
      data: [...tasks],
    });

    return response;
  } catch (err) {
    console.log(err);
    return err;
  }
};
