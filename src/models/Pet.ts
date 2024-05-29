import { Schema, model, Document } from 'mongoose';

interface Pet extends Document {
    name: string;
    species: string;
    carry: string;
    weight: number;
    date_of_birth: string;
    tutor: Schema.Types.ObjectId;
}

const PetSchema = new Schema<Pet>({
    name: { type: 'string', required: true },
    species: { type: 'string', required: true },
    carry: { type: 'string', required: true },
    weight: { type: 'number', required: true },
    date_of_birth: { type: 'string', required: true },
    tutor: { type: Schema.Types.ObjectId, ref: 'Tutor', required: true },
});

const Pet = model<Pet>('Pet', PetSchema);

export default Pet;
