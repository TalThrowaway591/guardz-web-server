import { EntryEntity } from "../../app/entities/entry-entity";
import { EntryEntityGateway } from "../../app/ports/entry-entity-gateway";
import { InMemoryDb } from "../../databases/in-memory";

class EntryInMemoryEntityGateway implements EntryEntityGateway {
    // TODO: change any
    protected readonly db: InMemoryDb<any>


    // TODO: change any
    public constructor(db: InMemoryDb<any>) {
        this.db = db;
    }

    async list(): Promise<EntryEntity[]> {
        const documents = this.db.get();

        return documents;
    }

    async save(entryEntity: EntryEntity): Promise<void> {
        this.db.create(entryEntity);

        return;
    }
}

export { EntryInMemoryEntityGateway };
