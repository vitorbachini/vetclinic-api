import { Router } from 'express';
import { validateReq } from '../middlewares/validationMiddleware';
import { tutorValidator } from '../validation/tutor';

export const tutorRouter = Router();

tutorRouter.route('/tutors').get();
tutorRouter.route('/tutor').post(validateReq(tutorValidator));
tutorRouter.route('/tutor/:id').put(validateReq(tutorValidator));
tutorRouter.route('/tutor/:id').delete();
