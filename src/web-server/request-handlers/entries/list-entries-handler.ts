import { EntryEntity } from "../../../app/entities/entry-entity";
import { Request, NextFunction } from 'express';
import { InMemoryDb } from "../../../databases/in-memory";

const listEntriesHandler = async (req: Request, res: Response<EntryEntity[] | string> next: NextFunction) => {
    // implement use case and call it


    const appProfile = req.appProfile;

    const useCase = new 
    
}