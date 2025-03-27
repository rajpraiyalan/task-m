import BaseController from '../controllers/BaseController';
import {NextFunction, Request, Response} from 'express';

const asyncControlWrapper = function(controller: BaseController) {
  return function(method: Function) {

    return (req: Request, res: Response, next: NextFunction) => {
      method = method.bind(controller);

      method(...(method.length === 2 ? [req, res] : [req]))
        .then((payload: any) => {
          res.json(payload);
        })
        .catch((err: any) => {
          next(err);
        });
    };
  }
};

export default asyncControlWrapper;