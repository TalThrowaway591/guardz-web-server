import { EntryEntity } from "../../../app/entities/entry-entity";
import { EntryEntityGateway } from "../../../app/ports/entry-entity-gateway";
import { InMemoryDb } from "../../../databases/in-memory";

// const mapDocumentToPost = (document: Mongo.Document): PostEntity => {
//     const postEntity = new PostEntity(document.id);

//     postEntity.setTitle(document.title);
//     postEntity.setDescription(document.description);
//     postEntity.setAuthor(document.author);
//     postEntity.setCreatedTimestamp(document.createdTimestamp);
//     postEntity.setUpdatedTimestamp(document.updatedTimestamp);
//     postEntity.setActive(document.active);

//     return postEntity;
// };

// const mapPostToDocument = (postEntity: PostEntity): Record<string, any> => {
//     const id = postEntity.getId();
//     const title = postEntity.getTitle();
//     const description = postEntity.getDescription();
//     const author = postEntity.getAuthor();
//     const createdTimestamp = postEntity.getCreatedTimestamp();
//     const updatedTimestamp = postEntity.getUpdatedTimestamp();
//     const active = postEntity.isActive();

//     return {
//         id,
//         title,
//         description,
//         author,
//         createdTimestamp,
//         updatedTimestamp,
//         active,
//     };
// };

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
