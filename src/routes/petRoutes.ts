import { Router } from 'express';
import { validateReq } from '../middlewares/validationMiddleware';
import { petValidator } from '../validation/pet';

export const petRouter = Router();

petRouter.route('/pet/:tutorId').post(validateReq(petValidator));
petRouter.route('/pet/:petId/tutor/:tutorId').put(validateReq(petValidator));
petRouter.route('/pet/:petId/tutor/:tutorId').delete();
