import { EntryEntity } from "../types";

interface EntryEntityGateway {
    list(): Promise<EntryEntity[]>;

    save(entryEntity: EntryEntityj): Promise<void>;
}

export { EntryEntityGateway };
