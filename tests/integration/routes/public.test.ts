import request from 'supertest';
import {expect, test, describe} from '@jest/globals';

import app from '../../../src/app';

describe("Testing Landing Root page", () => {
  test("It should response the GET method", async () => {
    const response = await request(app).get("/");
    expect(response.statusCode).toBe(200);
  });
});