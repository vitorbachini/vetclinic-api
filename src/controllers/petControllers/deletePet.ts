import { Request, Response } from 'express';
import Pet from '../../models/Pet';
import Tutor from '../../models/Tutor';

export const deletePet = async (req: Request, res: Response) => {
    const { petId, tutorId } = req.params;
    try {
        const pet = await Pet.findById(petId);
        if (!pet) {
            return res
                .status(404)
                .json({ message: `No pet with id: ${petId}` });
        }
        await Pet.findByIdAndDelete(petId);

        const tutor = (await Tutor.findById(tutorId)) as any;
        if (!tutor) {
            return res
                .status(404)
                .json({ message: `No tutor with id: ${tutorId}` });
        }
        tutor.pets.pull(petId);
        await tutor.save();

        res.status(200).json({ message: 'Pet deleted successfully!' });
    } catch (error) {
        res.status(500).json({ message: 'Server error' });
    }
};
