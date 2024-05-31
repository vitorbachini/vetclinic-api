import { Request, Response } from 'express';
import Pet from '../../models/Pet';
import Tutor from '../../models/Tutor';

export const createPet = async (req: Request, res: Response) => {
    const { tutorId } = req.params;
    try {
        const tutor = await Tutor.findById(tutorId);
        if (!tutor) {
            return res
                .status(404)
                .json({ message: `No tutor with id: ${tutorId}` });
        }

        const pet = new Pet({ ...req.body, tutor: tutor._id }) as any;
        await pet.save();

        tutor.pets.push(pet._id)
        await tutor.save()

        res.status(201).json({ pet })
    } catch (error) {
        res.status(500).json({ message: 'Server error' });
    }
};
