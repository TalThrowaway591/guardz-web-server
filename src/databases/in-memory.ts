import { Entity, IInMemoryDb } from "../types";

class InMemoryDb<T extends Entity> implements IInMemoryDb<T> {
    tableName: string;
    memory: Map<string, T>;

    constructor(tableName: string, data: T[]) {
        this.tableName = tableName;
        this.memory = new Map<string, T>(data.map((entity) => [entity.id, entity]));
    }

    async create(row: T) {
        this.memory.set(`${row.id}`, row);

        return (await this.find(row.id)) as T;
    }

    async get() {
        return Array.from(this.memory.values());
    }

    async find(id: string) {
        return this.memory.get(`${id}`) || null;
    }

    async update(id: string, row: T) {
        this.memory.set(`${id}`, row);
    }

    async delete(id: string) {
        this.memory.delete(`${id}`);
    }
}

export { InMemoryDb };