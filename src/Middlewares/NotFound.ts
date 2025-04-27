import { Request, Response } from "express";

export const NotFound = (res:Response,) => {
  res.status(404).json({
    status: 'error',
    message: 'Api Not Found',
  });
}