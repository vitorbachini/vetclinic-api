import { Schema, model, Document } from 'mongoose';

interface Tutor extends Document {
    name: string;
    phone: string;
    email: string;
    date_of_birth: string;
    cep: string;
    pets: Schema.Types.ObjectId[];
}

const TutorSchema = new Schema<Tutor>({
    name: { type: 'string', required: true },
    phone: { type: 'string', required: true },
    email: { type: 'string', required: true },
    date_of_birth: { type: 'string', required: true },
    cep: { type: 'string', required: true },
    pets: [{ type: Schema.Types.ObjectId, ref: 'Pet' }],
});

const Tutor = model<Tutor>('Tutor', TutorSchema);

export default Tutor;
