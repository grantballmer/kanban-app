import { Request, Response, NextFunction } from "express";
import { boardService, columnService, taskService } from "../services/board";
import { BoardResponse, ColumnResponse } from "../types/api";

export default {
  createBoard: async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { id, title } = (await boardService.create(
        req.body.title,
        req.body.userId,
        req.body.href
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
  getBoard: async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { id, title, href, columns } = (await boardService.getBoard(
        req.params.id
      )) as BoardResponse;

      return res.status(200).json({
        id,
        title,
        href,
        columns,
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
  createTask: async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { title, index } = req.body;
      const { columnId } = req.params;

      const response = (await columnService.create(
        title,
        index,
        Number(columnId)
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
  createMultipleTasks: async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    try {
      const { tasks } = req.body;

      const response = (await taskService.createMultiple(
        tasks
      )) as ColumnResponse;

      return res.status(200).json({
        response,
      });
    } catch (err) {
      console.log(err);
      next(err);
    }
  },
};
