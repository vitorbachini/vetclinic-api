import { Router } from 'express';
import { validateReq } from '../middlewares/validationMiddleware';
import { tutorValidator, updateTutorValidator } from '../validation/tutor';
import { getAllTutors } from '../controllers/tutorControllers/getTutors';
import { createTutor } from '../controllers/tutorControllers/createTutor';
import { updateTutor } from '../controllers/tutorControllers/updateTutor';
import { deleteTutor } from '../controllers/tutorControllers/deleteTutor';

export const tutorRouter = Router();

tutorRouter.route('/tutors').get(getAllTutors);
tutorRouter.route('/tutor').post(validateReq(tutorValidator), createTutor);
tutorRouter.route('/tutor/:id').patch(validateReq(updateTutorValidator), updateTutor);
tutorRouter.route('/tutor/:id').delete(deleteTutor);
