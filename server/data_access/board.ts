import { prisma } from "../app";

export const createBoard = async (title: string) => {
  try {
    const response = prisma.board.create({
      data: {
        title: title,
      },
    });

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
