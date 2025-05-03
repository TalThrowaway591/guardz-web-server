import { EntryEntityType } from "../../../types";
import { Request, NextFunction, Response } from 'express';
import { InMemoryDb } from "../../../databases/in-memory";
import { getUserIPAddress } from "../../utils/get-ip";
// TODO: fix any
const listEntriesHandler = async (req: Request, res: Response<any[] | string>, next: NextFunction) => {

    console.log('reached list-entries-handler')
    // implement use case and call it

    const entryEntityGateway = req.appProfile.getEntryEntityGateway();

    const ipAddress = getUserIPAddress(req);

    const entries = await entryEntityGateway.listByIP(ipAddress);

    res.send(entries);
}

export { listEntriesHandler }
