import { EntryEntityType } from "../../types";
import { EntryEntityGateway } from "../../app/ports/entry-entity-gateway";
import { InMemoryDb } from "../../databases/in-memory";
import { EntryInMemoryEntityGateway } from "../../adapters/in-memory-gateways/entry-in-memory-entity-gateway";
import { EntryPostgresEntityGateway } from "../../adapters/postgres-gateways/entry-postgres-entity-gateway";
import { PostgresqlDB } from "../../databases/postgresql";
import { Client } from 'pg';
import events from 'events';

type Config = {
    inMemoryDb: InMemoryDb<EntryEntityType>;
    postgresqlClient: Client;
    eventEmitter: events;
};

abstract class AppProfile {
    private readonly inMemoryDb: InMemoryDb<EntryEntityType>;
    private readonly postgresqlClient: Client;
    private readonly eventEmitter: events;

    public constructor(config: Config) {
        this.inMemoryDb = config.inMemoryDb;
        this.postgresqlClient = config.postgresqlClient;
        this.eventEmitter = config.eventEmitter;
    }

    public getEntryEntityGateway(): EntryEntityGateway {
        const postgresqlDb = new PostgresqlDB<EntryEntityType>(this.postgresqlClient, "entries")

        return new EntryPostgresEntityGateway(postgresqlDb);
    }

    public getEventEmitter(): events {
        return this.eventEmitter
    }
}

export { AppProfile };
