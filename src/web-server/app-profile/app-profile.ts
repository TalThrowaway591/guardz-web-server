import { EntryEntity } from "../../types";
import { EntryEntityGateway } from "../../app/ports/entry-entity-gateway";
import { InMemoryDb } from "../../databases/in-memory";
import { EntryInMemoryEntityGateway } from "../../adapters/in-memory-data-access/gateways/entry-in-memory-entity-gateway";

type Config = {
    inMemoryDb: InMemoryDb<EntryEntity>;
};

abstract class AppProfile {
    private readonly inMemoryDb: InMemoryDb<EntryEntity>;

    public constructor(config: Config) {
        this.inMemoryDb = config.inMemoryDb;
    }

    public getEntryEntityGateway(): EntryEntityGateway {
        return new EntryInMemoryEntityGateway(this.inMemoryDb);
    }

    // public getInteractorConfig(): InteractorConfig {
    //     return {
    //         logger: {
    //             log: console.log,
    //             warn: console.warn,
    //         },
    //     };
    // }
}

export { AppProfile };
