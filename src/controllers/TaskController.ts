import BaseController from './BaseController';
import TaskService from '../services/TaskService';

export default class TaskController extends BaseController {
  constructor() {
    super(new TaskService());
  }
}
