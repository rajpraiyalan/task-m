import {beforeAll} from 'vitest';
import dynamoose from 'dynamoose';

beforeAll(async () => {
  dynamoose.aws.ddb.local();
})