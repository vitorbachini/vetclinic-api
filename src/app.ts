import express from 'express';
import swaggerUi from 'swagger-ui-express';

import { tutorRouter } from './routes/tutorRoutes';
import { petRouter } from './routes/petRoutes';

import swaggerDocs from './swagger.json';

export const app = express();

app.use(express.json());

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));

app.use('/api/v1', tutorRouter);
app.use('/api/v1', petRouter);
