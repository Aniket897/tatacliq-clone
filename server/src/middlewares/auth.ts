import { NextFunction, Request, Response } from "express";

export function authMiddleware(
  req: Request,
  resp: Response,
  next: NextFunction
) {
  try {
    if (!req.isAuthenticated()) {
      return resp.status(400).json({
        message: "Not Authenticated",
      });
    }
    next();
  } catch (error) {
    resp.status(500).json({
      message: "Internal server error",
    });
  }
}
