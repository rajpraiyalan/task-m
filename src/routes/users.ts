import {Router} from 'express';
import UserController from '../controllers/UserController';
import asyncControlWrapper from '../middlewares/asyncControlWrapper';

const router = Router();
const controller = new UserController();
const asyncWrapper = asyncControlWrapper(controller);

router.route('/')
  .get(asyncWrapper(controller.index, {cache: true}))
;

export default router;