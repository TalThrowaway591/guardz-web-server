import { EntryEntityType } from "../../types";
import { EntryEntityGateway } from "../../app/ports/entry-entity-gateway";
import { PostgresqlDB } from "../../databases/postgresql";
import { EntryEntity } from "../../app/entities/entry-entity";

const mapRowToEntry = (value: EntryEntityType): EntryEntity => {
    const { id, title, body, ip, createdtimestamp, active } = value;

    const entryEntity = new EntryEntity(id);

    entryEntity.setTitle(title);
    entryEntity.setBody(body);
    entryEntity.setIP(ip);
    entryEntity.setActive(active);
    entryEntity.setCreatedTimestamp(Date.parse(createdtimestamp))

    return entryEntity;
};

const mapEntryToRow = (entryEntity: EntryEntity): EntryEntityType => {
    const id = entryEntity.getId();
    const title = entryEntity.getTitle();
    const body = entryEntity.getBody();
    const ip = entryEntity.getIP();
    const createdtimestamp = new Date(entryEntity.getCreatedTimestamp()).toISOString();
    const active = !!entryEntity.isActive();

    return {
        id,
        title,
        body,
        ip,
        createdtimestamp,
        active
    }
};

class EntryPostgresEntityGateway implements EntryEntityGateway {
    protected readonly db: PostgresqlDB<EntryEntityType>

    protected readonly tableName: string;

    public constructor(db: PostgresqlDB<EntryEntityType>) {
        this.db = db;
        this.tableName = "entries"
    }

    async list(): Promise<EntryEntity[]> {
        const result = await this.db.get();

        const entries = result.map(value => mapRowToEntry(value));

        return entries.filter(entry => !!entry.isActive);
    }

    async listByIP(ipAddress: string): Promise<EntryEntity[]> {
        const result = await this.db.get();

        const entries = result.map(value => mapRowToEntry(value));

        return entries.filter(entry => entry.getIP() === ipAddress && entry.isActive)
    }

    async save(entryEntity: EntryEntity): Promise<void> {
        await this.db.create(mapEntryToRow(entryEntity));

        return;
    }

    async delete(entryId: string): Promise<void> {
        await this.db.delete(entryId);

        return;
    }
}

export { EntryPostgresEntityGateway };
