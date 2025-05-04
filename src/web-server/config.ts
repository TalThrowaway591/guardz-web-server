import config from "config";
import { once } from "./utils/once";
import { Client } from 'pg'
const Config = {
    get(key: string): any {
        try {
            return config.get(key);
        } catch (e) {
            return undefined;
        }
    },

    gePostgresClient: once(async (): Promise<Client> => {
        const connectionConfig = config.get("postgresql") as object;

        console.log('connectionConfig')
        console.log(connectionConfig)
        const client = new Client(connectionConfig)

        await client.connect();

        // @ts-ignore
        console.log(`Connected to Postgres database on port ${connectionConfig.port}`)

        return client;
    }),

}

export { Config }