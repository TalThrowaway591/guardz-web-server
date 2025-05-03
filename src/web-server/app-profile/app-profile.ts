import { EntryEntityType } from "../../types";
import { EntryEntityGateway } from "../../app/ports/entry-entity-gateway";
import { InMemoryDb } from "../../databases/in-memory";
import { EntryInMemoryEntityGateway } from "../../adapters/in-memory-gateways/entry-in-memory-entity-gateway";
import { EntryPostgresEntityGateway } from "../../adapters/postgres-gateways/entry-postgres-entity-gateway";
import { PostgresqlDB } from "../../databases/postgresql";
import { Client } from 'pg';

type Config = {
    inMemoryDb: InMemoryDb<EntryEntityType>;
    postgresqlClient: Client;
};

abstract class AppProfile {
    private readonly inMemoryDb: InMemoryDb<EntryEntityType>;
    private readonly postgresqlClient: Client;

    public constructor(config: Config) {
        this.inMemoryDb = config.inMemoryDb;
        this.postgresqlClient = config.postgresqlClient;
    }

    public getEntryEntityGateway(): EntryEntityGateway {
        const postgresqlDb = new PostgresqlDB<EntryEntityType>(this.postgresqlClient, "entries")

        return new EntryPostgresEntityGateway(postgresqlDb);
    }
}

export { AppProfile };
