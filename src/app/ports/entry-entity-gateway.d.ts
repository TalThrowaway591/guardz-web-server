import { EntryEntity } from "../types";

interface EntryEntityGateway {
    save(entryEntity: EntryEntityj): Promise<void>;

    list(): Promise<EntryEntity[]>;

    listByIP(ipAddress: string): Promise<EntryEntity[]>;
}

export { EntryEntityGateway };
