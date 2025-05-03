import { EntryEntityType } from "../../../types";
import { Request, NextFunction, Response } from 'express';
import { InMemoryDb } from "../../../databases/in-memory";

// TODO: fix any
const listEntriesHandler = async (req: Request, res: Response<any[] | string>, next: NextFunction) => {

    console.log('reached list-entries-handler')
    // implement use case and call it

    const entryEntityGateway = req.appProfile.getEntryEntityGateway();

    const entries = await entryEntityGateway.list();

    res.send(entries);
}

export { listEntriesHandler }
