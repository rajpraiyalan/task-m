import dynamoose from 'dynamoose';
import {uuid} from '../utils/helpers'
import {Item} from 'dynamoose/dist/Item';

export interface Cache extends Item {
  id: string;
  key: string;
  data: any;
}

const cacheSchema = new dynamoose.Schema({
  id: {
    type: String,
    hashKey: true,
    default: uuid
  },
  cacheKey: {
    type: String,
    index: true,
  },
  data: String,
}, {
  timestamps: true,
});

const CacheModel = dynamoose.model<Cache>('Cache', cacheSchema, {
  expires: 5 * 60
});

export default CacheModel;