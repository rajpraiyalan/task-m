import {Router} from 'express';
import TaskController from '../controllers/TaskController';
import {validation, taskCreateValidation, taskUpdateValidation} from '../middlewares/validations';
import asyncControlWrapper from '../middlewares/asyncControlWrapper';

const router = Router();

const controller = new TaskController();
const asyncWrapper = asyncControlWrapper(controller);

router.route('/')
  .get(asyncWrapper(controller.index))
  .post(validation(taskCreateValidation), asyncWrapper(controller.create))
;
router.route('/:id')
  .get(asyncWrapper(controller.fetch))
  .post(validation(taskUpdateValidation), asyncWrapper(controller.update))
  .delete(asyncWrapper(controller.delete))
;

export default router;