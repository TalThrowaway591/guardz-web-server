import 'dotenv/config'
import { createServer } from "./server";
import { Entity, EntryEntityType } from "../types";
import { InMemoryDb } from "../databases/in-memory";
import { Config } from "./config";
import { PostgresqlDB } from "../databases/postgresql";
// import { createPostgresqlConnection } from "../config";

const main = async () => {
    const PORT = Config.get("web-server.port") || 1234;

    //   const postEntityGateway = new Mysql<Post>(createMysqlConnection(), "posts");

    // const mysqlClientPosts = new InMemoryDb<Post>("posts", []);

    // temp: create in memory database
    // const database = new InMemoryDb<EntryEntity>("entries", []);

    // const postgresClient = await createPostgresqlConnection();

    // const entryEntityGateway = new PostgresqlDB<EntryEntity>(postgresClient, "entry");

    const app = await createServer();

    app.listen(PORT, () => {
        console.log(`listening on port ${PORT}`);
    });
};

main();
