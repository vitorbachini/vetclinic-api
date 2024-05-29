import { Router } from 'express';

export const petRouter = Router();

petRouter.route('/pet/:tutorId').post()
petRouter.route('/pet/:petId/tutor/:tutorId').put()
petRouter.route('/pet/:petId/tutor/:tutorId').delete()