import { app } from './app';
import 'dotenv/config';
import { connectDB } from './db/connect';

const PORT = process.env.PORT || 3000;

const start = async () => {
    try {
        await connectDB();
        app.listen(PORT, () => {
            console.log(`Server listening on port: ${PORT}`);
        });
    } catch (error) {
        console.log(error);
    }
};

start();
