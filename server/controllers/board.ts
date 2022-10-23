import { Request, Response, NextFunction } from "express";
import { boardService, columnService } from "../services/board";
import { BoardResponse, ColumnResponse } from "../types/api";

export default {
  createBoard: async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { id, title } = (await boardService.create(
        req.body.title,
        req.body.userId
      )) as BoardResponse;

      return res.status(200).json({
        id,
        title,
      });
    } catch (err) {
      console.log(err);
      next(err);
    }
  },
  createColumn: async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { title, index } = req.body;
      const { boardId } = req.params;

      const response = (await columnService.create(
        title,
        index,
        Number(boardId)
      )) as ColumnResponse;

      return res.status(200).json({
        id: response.id,
        title,
        index,
      });
    } catch (err) {
      console.log(err);
      next(err);
    }
  },
};
