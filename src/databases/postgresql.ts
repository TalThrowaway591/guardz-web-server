import { Database, IPostgresql } from "../types";

function updateQuerySetter<G extends object>(row: G): string {
    let setQuery = "";
    for (const key of Object.keys(row)) {
        setQuery += `${key}=${typeof (row as any)[key] === "string" ? `"${(row as any)[key]}"` : (row as any)[key]}, `;
    }
    setQuery += `updatedTimestamp=${new Date().getTime()}`;

    return setQuery;
}

export class Postgresql<T extends object> implements Database<T> {
    connection: any;
    tableName: string;

    constructor(connection: any, tableName: string) {
        this.connection = connection;
        this.tableName = tableName;
    }
    async get() {
        const rows = await this.connection.promise().execute(`SELECT * FROM ${this.tableName}`);

        return rows[0];
    }

    async create(row: T) {
        const columns = Object.keys(row).reduce(
            (previous: string, current: string) => `${previous.length > 0 ? `${previous},` : previous} ${current}`,
            ""
        );
        const values = Object.values(row).reduce(
            (previous: string, current: string) =>
                `${previous.length > 0 ? `${previous},` : previous} ${typeof current === "string" ? `"${current}"` : current}`,
            ""
        );
        const query = `INSERT INTO ${this.tableName} (${columns}) VALUES (${values})`;
        const response = await this.connection.promise().execute(query);
        const id = response[0].insertId;
        const [rows] = (await this.connection.promise().execute(`SELECT * FROM ${this.tableName} WHERE id = ${id}`)) as any[];

        return rows[0];
    }

    async find(id: string): Promise<T> {
        try {
            const query = `SELECT * FROM ${this.tableName} WHERE id = "${id}"`;
            const [rows] = (await this.connection.promise().execute(query)) as any[];
            if (!rows[0]) {
                throw new Error("Row not found");
            }
            return rows[0];
        } catch (e) {
            throw new Error(`Cannot connect to ${this.tableName} ${e}`);
        }
    }

    async update(id: string, row: T) {
        const updateSubQuery = updateQuerySetter<T>(row);
        const query = `UPDATE ${this.tableName} SET ${updateSubQuery} WHERE id="${id}"`;
        await this.connection.promise().execute(query);
        return;
    }

    async delete(id: string) {
        const query = `DELETE FROM ${this.tableName} WHERE id="${id}"`;
        await this.connection.promise().execute(query);

        return;
    }
}
