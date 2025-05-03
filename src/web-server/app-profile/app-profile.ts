import { EntryEntity } from "../../types";
// import { PostEntityGateway } from "../../app/ports/entity-gateways/post-entity-gateway";
import { InMemoryDb } from "../../databases/in-memory";

type Config = {
    inMemoryDb: InMemoryDb<EntryEntity>;
};

abstract class AppProfile {
    private readonly inMemoryDb: InMemoryDb<EntryEntity>;

    public constructor(config: Config) {
        this.inMemoryDb = config.inMemoryDb;
    }

    public getEntryEntityGateway(): EntryEntityGateway {
        return new mongoDataAccess.PostMongoEntityGateway(this.mongoDb);
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
