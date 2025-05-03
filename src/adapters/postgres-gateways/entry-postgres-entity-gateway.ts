import { EntryEntityType } from "../../types";
import { EntryEntityGateway } from "../../app/ports/entry-entity-gateway";
import { PostgresqlDB } from "../../databases/postgresql";
import { EntryEntity } from "../../app/entities/entry-entity";

const mapRowToEntry = (value: EntryEntityType): EntryEntity => {
    const { id, title, body, ip, createdtimestamp, active } = value;

    const entryEntity = new EntryEntity(value.id);

    entryEntity.setTitle(title);
    entryEntity.setBody(body);
    entryEntity.setIP(ip);
    // entryEntity.setCreatedTimestamp(createdtimestamp);
    entryEntity.setActive(active);

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
        console.log('entry-postgres-entity-gateway list')

        const result = await this.db.get();

        console.log(result);

        return result.map(value => mapRowToEntry(value));
    }

    async save(entryEntity: EntryEntity): Promise<void> {
        console.log('gateway: saving entry')
        console.log(entryEntity);

        console.log('converting entity')
        console.log(mapEntryToRow(entryEntity));
        this.db.create(mapEntryToRow(entryEntity));

        return;
    }
}

export { EntryPostgresEntityGateway };
