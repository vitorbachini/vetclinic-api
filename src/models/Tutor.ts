import { Schema, model, Document } from 'mongoose';

interface Tutor extends Document {
    name: string;
    phone: string;
    email: string;
    birthDate: string;
    cep: string;
    pets: Schema.Types.ObjectId[];
}

const TutorSchema = new Schema<Tutor>({
    name: { type: 'string', required: true },
    phone: { type: 'string', required: true },
    email: { type: 'string', required: true },
    birthDate: { type: 'string', required: true },
    cep: { type: 'string', required: true },
    pets: [{ type: Schema.Types.ObjectId, ref: 'Pet' }],
});

const Tutor = model<Tutor>('Tutor', TutorSchema);

export default Tutor;
