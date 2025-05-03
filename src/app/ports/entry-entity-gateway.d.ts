import { EntryEntity } from "../entities/entry-entity";

interface EntryEntityGateway {
    list(): Promise<EntryEntity[]>;

    save(entryEntity: EntryEntityj): Promise<void>;
}

export { EntryEntityGateway };
