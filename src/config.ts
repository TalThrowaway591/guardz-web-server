import { Client } from 'pg';

const createConfig = () => ({
    port: 3000,
    postgresql: {
        host: process.env.POSTGRESQL_HOST,
        port: Number(process.env.POSTGRESQL_PORT),
        user: process.env.POSTGRESQL_USERNAME,
        database: process.env.POSTGRESQL_DATABASE,
        password: process.env.POSTGRESQL_PASSWORD,
    },
});

// const createPostgresqlConnection = async () => {
//     const config = createConfig();

//     const client = new Client(config.postgresql);

//     await client.connect();

//     console.log(`Connected to postgres DB on port ${config.postgresql.port}`)

//     return client;
// };

const getDatabase = () => {
    if (process.env.NODE_ENV === 'local') {
        // mysql database
    } else {

    }

}

export { createConfig };
