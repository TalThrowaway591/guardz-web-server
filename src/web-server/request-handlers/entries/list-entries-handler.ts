import { Request, Response } from 'express';

const listEntriesHandler = async (req: Request, res: Response<any[] | string>) => {
    const entryEntityGateway = req.appProfile.getEntryEntityGateway();

    const entries = await entryEntityGateway.list();

    res.send(entries);
}

export { listEntriesHandler }
