import dns from 'dns';
dns.setServers(['8.8.8.8', '8.8.4.4']); // life saver for DNS resolution issues in some environments
import app from './app';
import {connectDatabase} from './src/config/database.ts'
import { env } from './src/config/env.ts';

const startServer = async () : Promise<void> => {
    try {
        await connectDatabase();
        app.listen(env.PORT , () => {
            console.log(`Server is running on http://localhost:${env.PORT}`)
        })
    } catch (error) {
        console.error("Failed to start server");
        console.error(error);

        process.exit(1);
    }
}

startServer();
