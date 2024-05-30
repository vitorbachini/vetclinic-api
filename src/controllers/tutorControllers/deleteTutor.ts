import { Request, Response } from 'express';
import Tutor from '../../models/Tutor';

export const deleteTutor = async (req: Request, res: Response) => {
    const { id } = req.params;
    try {
        const deletedTutor = await Tutor.findByIdAndDelete(id);
        if (!deletedTutor) {
            return res.status(404).json({ message: `No tutor with id: ${id}` });
        }
        res.status(200).json({ message: 'Tutor deleted successfully!' });
    } catch (error) {
        res.status(500).json({ message: 'Server error' });
    }
};
