import { EntryEntity } from "../types";

interface EntryEntityGateway {
    save(entryEntity: EntryEntityj): Promise<void>;

    list(): Promise<EntryEntity[]>;

    // delete(id: string): Promise<void>;
}

export { EntryEntityGateway };
