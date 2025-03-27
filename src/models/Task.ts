import dynamoose from 'dynamoose';
import {uuid} from '../utils/helpers'
import {Item} from 'dynamoose/dist/Item';

export interface Task extends Item {
  id: string;
  title: string
  description: string;
  status: TaskStatus;
  createdAt?: string;
  updatedAt?: string;
}

export enum TaskStatus {
  Pending,
  InProgress,
  Completed,
}

const taskSchema = new dynamoose.Schema({
  id: {
    type: String,
    hashKey: true,
    default: uuid
  },
  title: String,
  description: String,
  status: Number,
}, {
  timestamps: {
    createdAt: ['createDate', 'creation'],
    updatedAt: ['updateDate', 'updated'],
  },
});

const TaskModel = dynamoose.model<Task>('Task', taskSchema);

export default TaskModel;