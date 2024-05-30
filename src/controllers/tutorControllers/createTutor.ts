import { Request, Response } from 'express';
import Tutor from '../../models/Tutor';

export const createTutor = async (req: Request, res: Response) => {
    try {
        const tutor = await Tutor.create(req.body);
        res.status(201).json({ tutor });
    } catch (error) {
        res.status(500).json({ message: 'Server error' });
    }
};
