import request from 'supertest';
import {expect, describe, it} from '@jest/globals';
import {faker} from '@faker-js/faker';

import app from '../../../src/app';

describe("Tasks API CRUD", () => {

  describe('GET /tasks', () => {
    it("should response with GET with tasks array", async () => {
      const response = await request(app).get('/tasks');

      expect(response.statusCode).toBe(200);
      expect(Array.isArray(response.body)).toBe(true);

      response.body.forEach((task: any) => {
        expect(task).toEqual(
          expect.objectContaining({
            id: expect.any(String),
            title: expect.any(String),
            description: expect.any(String),
            status: expect.any(Number),
          })
        );
      });

    });
  })

  describe('POST /tasks', () => {
    it("should response with successfully created and task object", async () => {
      const payload = {
        title: faker.book.title(),
        description: faker.lorem.paragraph(),
        status: faker.number.int({min: 0, max: 2}),
      }

      const response = await request(app).post('/tasks').send(payload);
      expect(response.statusCode).toBe(200);
      expect(response.body).toMatchObject(payload);

    });

    it("should response with 422 status errors containing missing fields", async () => {
      const response = await request(app).post('/tasks').send({});
      expect(response.statusCode).toBe(422);
      expect(response.body).toEqual(expect.objectContaining({
        message: expect.any(String),
        errors: expect.any(Array),
      }));
    });
  });

});