import { Request, Response } from 'express';
import Tutor from '../../models/Tutor';

export const getAllTutors = async (req: Request, res: Response) => {
    try {
        const tutors = await Tutor.find().populate('pets');
        res.status(200).json(tutors);
    } catch (error) {
        res.status(500).json({ message: 'Server error' });
    }
};
