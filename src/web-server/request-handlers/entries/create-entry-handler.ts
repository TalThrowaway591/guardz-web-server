import { Request, NextFunction, Response } from 'express';
import { EntryEntity } from "../../../app/entities/entry-entity";
import { getUserIPAddress } from '../../utils/get-ip';

const createEntryHandler = async (req: Request, res: Response<any[] | string>, next: NextFunction) => {
    console.log('reached handler')
    console.log('request body')
    console.log(req.body)

    const { title, body } = req.body;

    const userIPAddress = getUserIPAddress(req);


    const entryEntityGateway = req.appProfile.getEntryEntityGateway();

    const entryEntity = new EntryEntity();

    entryEntity.setTitle(title);
    entryEntity.setBody(body);
    entryEntity.setIP(userIPAddress);
    entryEntity.setActive(true);
    entryEntity.setCreatedTimestamp(Date.now())

    console.log(entryEntity);

    const test = await entryEntityGateway.save(entryEntity);

    res.send()
}

export { createEntryHandler }
