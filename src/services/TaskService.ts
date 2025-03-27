import BaseService from './BaseService';
import TaskModel from '../models/Task';

export default class TaskService extends BaseService {
  constructor() {
    super(TaskModel);
  }
}