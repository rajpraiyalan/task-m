import {Request} from 'express';
import BaseService from '../services/BaseService';
import DocumentFoundError from '../errors/DocumentFoundError';
import Controller from './Controller';

export default class BaseController implements Controller {
  service: BaseService;

  constructor(service: BaseService) {
    this.service = service;
  }

  async index(request: Request) {
    return this.service.getAll();
  }

  async fetch(request: Request) {
    const item = await this.service.getById(request.params.id);
    if (!item) {
      throw new DocumentFoundError();
    }
    return item;
  }

  async create(request: Request) {
    return this.service.create(request.body);
  }

  async update(request: Request) {
    return this.service.update(request.params.id, request.body);
  }

  async delete(request: Request) {
    return this.service.delete(request.params.id);
  }
}