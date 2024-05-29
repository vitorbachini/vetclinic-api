import express from 'express';

import { tutorRouter } from './routes/tutorRoutes';
import { petRouter } from './routes/petRoutes';

export const app = express();

app.use(express.json());

app.use('/api/v1', tutorRouter);
app.use('/api/v1', petRouter);
