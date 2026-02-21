import { NextFunction, Request, Response } from 'express';
import { ApplicationError } from '../exceptions/user-http.exception';

export function handleApplicationError(err: Error, req: Request, res: Response, next: NextFunction) {
  console.error(err);
  if (err instanceof ApplicationError) {
    return res.status(err.httpStatusCode).json({
      message: err.message,
      details: err.cause ?? err.name,
    });
  }

  res.status(500).json({
    message: `Ocurrió un error inesperado: ${err.message}`,
    details: err.cause ?? err.name,
  });
}
