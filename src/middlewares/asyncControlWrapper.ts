import {NextFunction, Request, Response} from 'express';
import Controller from '../controllers/Controller';
import Cache from '../models/Cache';

const getCacheKey = (req: Request)=> {
  // TODO include auth/tenant parameters or headers if needed
  return Buffer.from(`${req.method}:${req.originalUrl}`).toString('base64');
}

const getCache = async function (key: string) {
  const value = await Cache.query('cacheKey').eq(key).limit(1).exec();
  return value[0] ? JSON.parse(value[0].data) : null;
}

const setCache = async (key: string, payload: any) => {
  const cache = new Cache({cacheKey: key, data: JSON.stringify(payload)});
  return cache.save();
}

const asyncControlWrapper = function(controller: Controller) {
  return function(method: Function, settings?: {cache: boolean}) {

    return async (req: Request, res: Response, next: NextFunction) => {
      method = method.bind(controller);

      if (settings && settings.cache) {
        const payload = await getCache(getCacheKey(req));
        if (payload) {
          res.json(payload);
          return;
        }
      }

      try {
        const payload = await method(...(method.length === 2 ? [req, res] : [req]));
        if (settings && settings.cache) {
          await setCache(getCacheKey(req), payload)
        }

        res.json(payload);
      } catch (err) {
        next(err);
      }
    };
  }
};

export default asyncControlWrapper;