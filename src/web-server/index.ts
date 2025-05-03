import { createServer } from "./server";
import * as dotenv from "dotenv";
import { Entity, EntryEntity } from "../types";
import { InMemoryDb } from "../databases/in-memory";
import { Config } from "./config";

dotenv.config();

const main = async () => {
    const PORT = Config.get("web-server.port") || 1234;

    //   const postEntityGateway = new Mysql<Post>(createMysqlConnection(), "posts");

    // const mysqlClientPosts = new InMemoryDb<Post>("posts", []);

    // temp: create in memory database
    const database = new InMemoryDb<EntryEntity>("entries", []);

    const app = await createServer(database);

    app.listen(PORT, () => {
        console.log(`listening on port ${PORT}`);
    });
};

main();
