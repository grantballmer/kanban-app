import { Request, Response, NextFunction } from "express";

export default {
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
