import * as mongodb from 'mongodb';

export const databaseProviders = [
    {
        provide: 'DATABASE_CONNECTION',
        useFactory: async (): Promise<mongodb.Db> => {
            try {
                const client = await mongodb.MongoClient.connect(
                    process.env.MONGODB_SRV,
                    {
                        //useUnifiedTopology: true,
                    },
                )
                const db = client.db(process.env.MONGODB_DBNAME); 

				return db;
            } catch (error) {
                throw error;
            }
        }
    }
]