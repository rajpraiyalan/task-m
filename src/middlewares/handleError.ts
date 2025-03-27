import {NextFunction, Request, Response} from 'express';
import BaseError from '../errors/BaseError';

const handleError = function(err: any, req: Request, res: Response, next: NextFunction) {
  if (err instanceof BaseError) {
    res.status(err.status).json({
      message: err.message,
      errors: err.errors,
    });
    return;
  }

  next(err);
}

export default handleError;