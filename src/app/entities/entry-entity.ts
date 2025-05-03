import { Entity } from "./entity";

class EntryEntity extends Entity {
    private title: string = "";

    private body: string = "";

    private createdTimestamp: number = Date.now();

    private ip: string = "";

    private active: boolean = true;

    public constructor(id?: string) {
        super("entry", id);
    }

    public setTitle(title: string): void {
        this.title = title;
    }

    public setBody(body: string): void {
        this.body = body;
    }

    public setCreatedTimestamp(timestamp: number): void {
        this.createdTimestamp = timestamp;
    }

    public setIP(ip: string): void {
        this.ip = ip;
    }

    public setActive(active: boolean): void {
        this.active = active;
    }

    public getTitle(): string {
        return this.title;
    }

    public getBody(): string {
        return this.body;
    }

    public getIP(): string {
        return this.ip;
    }

    public getCreatedTimestamp(): number {
        return this.createdTimestamp;
    }

    public isActive(): boolean {
        return this.active;
    }
}

export { EntryEntity };
