import {ModelType} from 'dynamoose/dist/General';
import {AnyItem} from 'dynamoose/dist/Item';

export default class BaseService {
  model: ModelType<AnyItem>

  constructor(model: ModelType<AnyItem>) {
    this.model = model;
  }

  async getAll() {
    return this.model.scan().exec();
  }

  async create(payload: AnyItem): Promise<AnyItem> {
    const item = new this.model(payload);
    return item.save();
  }

  async getById(id: string) {
    return this.model.get(id);
  }

  async update(id: string, update: AnyItem) {
    return this.model.update(id, update);
  }

  async delete(id: string) {
    await this.model.delete(id);
    return [true];
  }
}