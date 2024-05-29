import Joi from 'joi';
import { nameRegex, birthdateRegex, carryRegex, weightRegex } from './regex';

export const petValidator = Joi.object({
    name: Joi.string().regex(nameRegex).min(3).required(),
    species: Joi.string().regex(nameRegex).min(3).required(),
    carry: Joi.string().regex(carryRegex).min(1).required(),
    birthDate: Joi.string().regex(birthdateRegex).min(1).required(),
    weight: Joi.string().regex(weightRegex).min(1).required(),
});
