import 'reflect-metadata';
import express from 'express';
import personRouter from './routes/person/person.routes';
import { apiEnv } from './config/env';
import documentTypesRouter from './routes/document-types/document-types.routes';
import { AppDataSource } from './repository/db';
import { handleApplicationError } from './http/middlewares/error-handler';
import swaggerUi from 'swagger-ui-express';
import { swaggerSpec } from './config/swagger';
import cors from 'cors';

const app = express();
app.use(express.json());
app.use(cors());

try {
  await AppDataSource.initialize();
  console.log('Data Source initialized succesfully!');
} catch (error) {
  console.error('Error during Data Source initialization: ', error);
}

app.use(apiEnv.API_PREFIX, personRouter);
app.use(apiEnv.API_PREFIX, documentTypesRouter);
app.use(`${apiEnv.API_PREFIX}/docs`, swaggerUi.serve, swaggerUi.setup(swaggerSpec));
app.use(handleApplicationError);

export default app;
