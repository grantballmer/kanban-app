import { Request, Response, NextFunction } from "express";
import { authService } from "../services/auth";

export default {
  createUser: async (req: Request, res: Response, next: NextFunction) => {
    try {
      const response = await authService.createUser(req.body.id);

      return res.status(200).json({
        response,
      });
    } catch (err) {
      console.log(err);
      next(err);
    }
  },
  getUser: async (req: Request, res: Response, next: NextFunction) => {
    try {
      const response = await authService.getUser(req.params.id);

      return res.status(200).json({
        response,
      });
    } catch (err) {
      console.log(err);
      next(err);
    }
  },
  test: async (req: Request, res: Response, next: NextFunction) => {
    return res.status(200).json({
      success: true,
    });
  },
  different: async (req: Request, res: Response, next: NextFunction) => {
    return res.status(200).json({
      success: false,
      notsuccess: false,
    });
  },
};
