import mongoose from 'mongoose';
import { env } from './env';

export const connectDatabase = async (): Promise<void> => {
    try {
        // console.log("URI",env.MONGO_URI)
        const connection = await mongoose.connect(env.MONGO_URI)
        
        console.log("Database connected", connection.connection.host)
    } catch (error) {
        console.log("Error connecting Database")
        throw error;
    }
}


