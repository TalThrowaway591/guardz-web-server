import { Request, Response } from 'express';

const removeEntryHandler = async (req: Request, res: Response<any[] | string>) => {
    const entryId = req.params.id

    const entryEntityGateway = req.appProfile.getEntryEntityGateway();

    await entryEntityGateway.delete(entryId);

    // TODO: refactor
    res.send('success');
}

export { removeEntryHandler }
