import { Test, TestingModule } from '@nestjs/testing';
import { HttpStatus, INestApplication } from "@nestjs/common";
import * as request from 'supertest';
import { AppModule } from '../src/app.module';
import { CreateReviewDto } from '../src/review/dto/create-review.dto';
import { Types, disconnect } from 'mongoose';
import { REVIEW_NOT_FOUND_MSG } from '../src/review/review.constants';

const productId = new Types.ObjectId().toHexString();
const fakeId = new Types.ObjectId().toHexString();

const testDto: CreateReviewDto = {
  name: 'Test Review',
  title: 'Test Review Title',
  description: 'Test Review Description',
  rating: 3,
  productId,
};

describe('AppController (e2e)', () => {
  let app: INestApplication;
  let createdId: string;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  it('/review/create (POST) - success', async () => {
    return request(app.getHttpServer())
      .post('/review/create')
      .send(testDto)
      .expect(HttpStatus.CREATED)
      .then(({ body }: request.Response) => {
        createdId = body._id;
        expect(createdId).toBeDefined();
      })
    ;
  });

  it('/review/create (POST) - fail', async () => {
    return request(app.getHttpServer())
      .post('/review/create')
      .send({ ...testDto, rating: 0 })
      .expect(HttpStatus.BAD_REQUEST)
      .then(({ body }: request.Response) => {
        expect(body.message[0]).toBe('Rating can not be less than 1');
      })
      ;
  });

  it(`/review/byProduct/:productId (GET) - failed`, async () => {
    return request(app.getHttpServer())
      .get('/review/byProduct/' + fakeId)
      .expect(HttpStatus.OK)
      .then(({ body }: request.Response) => {
        expect(typeof body).toBe('object');
        expect(body.length).toBe(0);
      })
      ;
  });

  it(`/review/byProduct/:productId (GET) - success`, async () => {
    return request(app.getHttpServer())
      .get('/review/byProduct/' + productId)
      .expect(HttpStatus.OK)
      .then(({ body }: request.Response) => {
        expect(typeof body).toBe('object');
        expect(body.length).toBe(1);
      })
    ;
  });

  it(`/review/:id (DELETE) - failed`, () => {
    return request(app.getHttpServer())
      .delete('/review/' + fakeId)
      .expect(HttpStatus.NOT_FOUND, {
        statusCode: HttpStatus.NOT_FOUND,
        message: REVIEW_NOT_FOUND_MSG,
      })
    ;
  });

  it(`/review/:id (DELETE) - success`, () => {
    return request(app.getHttpServer())
      .delete('/review/' + createdId)
      .expect(HttpStatus.OK)
    ;
  });

  afterAll(() => {
    disconnect();
  });
});
