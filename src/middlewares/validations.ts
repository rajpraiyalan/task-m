import {NextFunction, Request, Response} from 'express';
import Joi, {ObjectSchema} from 'joi';
import ValidationError from '../errors/ValidationError';
import {TaskStatus} from '../models/Task';

export const taskCreateValidation = Joi.object({
  title: Joi.string().required(),
  description: Joi.string().required(),
  status: Joi.number().required().min(TaskStatus.Pending).max(TaskStatus.Completed).required(),
});

export const taskUpdateValidation = Joi.object({
  title: Joi.string(),
  description: Joi.string(),
  status: Joi.number().required().min(TaskStatus.Pending).max(TaskStatus.Completed).required(),
})

export const validation = function(schema: ObjectSchema) {
  return (req: Request, res: Response, next: NextFunction) => {
    const validated = schema.validate(req.body);
    if (validated.error) {
      throw new ValidationError('Invalid Request.', validated.error.details);
    }

    next();
  }
}