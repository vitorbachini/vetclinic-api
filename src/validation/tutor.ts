import Joi from 'joi';
import { nameRegex, birthdateRegex, phoneRegex, cepRegex } from './regex';

export const tutorValidator = Joi.object({
    name: Joi.string().regex(nameRegex).min(3).required(),
    phone: Joi.string().regex(phoneRegex).min(9).required(),
    email: Joi.string().email().required(),
    birthDate: Joi.string().regex(birthdateRegex).min(1).required(),
    cep: Joi.string().regex(cepRegex).min(1).required()
})

export const updateTutorValidator = Joi.object({
    name: Joi.string().regex(nameRegex).min(3).optional(),
    phone: Joi.string().regex(phoneRegex).min(9).optional(),
    email: Joi.string().email().optional(),
    birthDate: Joi.string().regex(birthdateRegex).min(1).optional(),
    cep: Joi.string().regex(cepRegex).min(1).optional()
}).or('name', 'phone', 'email', 'birthDate', 'cep');