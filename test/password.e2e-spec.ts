import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { AppModule } from './../src/app.module';

describe('AppController (e2e)', () => {
  let app: INestApplication;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  it('/password (GET) Invalid', () => {
    return request(app.getHttpServer())
      .get('/password')
      .expect(400);
  });

  it('/password (GET) Valid', () => {
    return request(app.getHttpServer())
      .get('/password')
      .send({ length: 10, options: { upperCase: true } })
      .expect(200);
  });
});
