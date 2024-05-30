import { Request, Response } from 'express';
import Tutor from '../../models/Tutor';

export const updateTutor = async (req: Request, res: Response) => {
    const { id } = req.params;
    try {
        const updatedTutor = await Tutor.findByIdAndUpdate(id, req.body, {
            new: true,
        });
        if (!updatedTutor) {
            return res.status(404).json({ message: `No tutor with id: ${id}` });
        }
        res.status(200).json(updatedTutor);
    } catch (error) {
        res.status(500).json({ message: 'Server error' });
    }
};
