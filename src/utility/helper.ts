import { NextFunction, Request, Response } from "express";
import createHttpError from "http-errors";

const withErrorHandling =
  (fn: any) => (req: Request, res: Response, next: NextFunction) => {
    return Promise.resolve(fn(req, res, next)).catch((error) =>
      next(createHttpError(500, error.message))
    );
  };

export default withErrorHandling;
