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

        const client = new Client(connectionConfig)

        await client.connect();


        // TODO: add port
        console.log('connected to postgres')

        // const result = await client.query('select now()');

        return client;
    }),

}

export { Config }