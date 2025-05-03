import { Database, IPostgresql } from "../types";
import { Client } from 'pg';

export class PostgresqlDB<T extends object> implements Database<T> {
    client: Client;
    tableName: string;

    constructor(client: any, tableName: string) {
        this.client = client;
        this.tableName = tableName;
    }
    async get(): Promise<T[]> {
        const query = `SELECT * FROM ${this.tableName}`

        const result = (await this.client.query(query)).rows;

        return result;
    }

    async create(row: T) {
        const columns = Object.keys(row).reduce(
            (previous: string, current: string) => `${previous.length > 0 ? `${previous},` : previous} ${current}`,
            ""
        );
        const values = Object.values(row).reduce(
            (previous: string, current: string) =>
                `${previous.length > 0 ? `${previous},` : previous} ${typeof current === "string" ? `'${current}'` : current}`,
            ""
        );

        console.log('columns', columns)
        console.log('values', values)

        const query = `INSERT INTO ${this.tableName} (${columns}) VALUES (${values})`;

        console.log('query', query)
        const result = await this.client.query(query);

        console.log(result.rows)

        return row;
    }

    async find(id: string) {
        return null
    }

}
