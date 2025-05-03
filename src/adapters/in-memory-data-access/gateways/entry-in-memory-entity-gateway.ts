import { EntryEntity } from "../../../types";
import { InMemoryDb } from "../../../databases/in-memory";
class EntryInMemoryDataAccess {
    protected collection: EntryEntity[] = []

    public constructor(db: InMemoryDb<EntryEntity>) {
        this.collection = db.memory;
    }

    list(): EntryEntity[] {
        const documents = this.collection.filter(document => document.active)

        return documents;
    }
}