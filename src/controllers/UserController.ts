import {Request} from 'express';
import UserService from '../services/UserService';
import Controller from './Controller';

export default class UserController implements Controller {
  service = new UserService();

  async index(request: Request) {
    return this.service.fetchUsers();
  }
}