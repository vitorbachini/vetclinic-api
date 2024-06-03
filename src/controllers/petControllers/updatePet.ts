import { Request, Response } from 'express';
import Pet from '../../models/Pet';

export const updatePet = async (req: Request, res: Response) => {
    const { petId } = req.params;
    try {
        const updatedPet = await Pet.findByIdAndUpdate(petId, req.body, {
            new: true,
            runValidators: true,
        });
        if (!updatePet) {
            return res
                .status(404)
                .json({ message: `No pet with id: ${petId}` });
        }
        res.status(200).json(updatedPet);
    } catch (error) {
        res.status(500).json({ message: 'Server error' });
    }
};
