import { Router } from 'express';
import { validateReq } from '../middlewares/validationMiddleware';
import { petValidator } from '../validation/pet';
import { createPet } from '../controllers/petControllers/createPet';
import { updatePet } from '../controllers/petControllers/updatePet';
import { deletePet } from '../controllers/petControllers/deletePet';


export const petRouter = Router();

petRouter.route('/pet/:tutorId').post(validateReq(petValidator), createPet);
petRouter.route('/pet/:petId/tutor/:tutorId').put(validateReq(petValidator), updatePet);
petRouter.route('/pet/:petId/tutor/:tutorId').delete(deletePet);
