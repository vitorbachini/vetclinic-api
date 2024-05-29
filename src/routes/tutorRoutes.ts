import { Router } from 'express';

export const tutorRouter = Router();

tutorRouter.route('/tutors').get()
tutorRouter.route('/tutor').post()
tutorRouter.route('/tutor/:id').put()
tutorRouter.route('/tutor/:id').delete()
