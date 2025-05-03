export interface Database<T> {
    tableName: string;
    create: (cat: T) => Promise<T>;
    get: () => Promise<T[]>;
    find: (id: string) => Promise<T | null>;
    // update: (id: string, row: T) => Promise<void>;
    // delete: (id: string) => Promise<void>;
}

export interface IInMemoryDb<T> extends Database<T> {
    memory: Map<string, T>;
}

export interface IPostgresql<T> extends Database<T> {
    connection: { promise: () => { execute: (query: string) => any } };
}

export type Entity = {
    id: string;
};

export type EntryEntityType = Entity & {
    title: string;
    body: string;
    ip: string;
    createdtimestamp: string;
    active: boolean;
};

