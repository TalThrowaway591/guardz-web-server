import { Request, Response } from 'express';
import { getUserIPAddress } from '../../utils/get-ip';
import { EntryEntity } from "../../../app/entities/entry-entity";

const createEntryHandler = async (req: Request, res: Response<any[] | string>) => {
    const { title, body } = req.body;

    const userIPAddress = getUserIPAddress(req);

    const entryEntityGateway = req.appProfile.getEntryEntityGateway();

    const entryEntity = new EntryEntity();

    const createdTimestamp = Date.now();

    entryEntity.setTitle(title);
    entryEntity.setBody(body);
    entryEntity.setIP(userIPAddress);
    entryEntity.setActive(true);
    entryEntity.setCreatedTimestamp(createdTimestamp)

    await entryEntityGateway.save(entryEntity);

    // save successful -> emit event
    const eventEmitter = req.appProfile.getEventEmitter();
    eventEmitter.emit('on-create', { title, body, ip: userIPAddress, createdTimestamp })



    res.send()
}

export { createEntryHandler }
