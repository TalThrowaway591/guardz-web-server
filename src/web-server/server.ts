import path from 'path'
import events from 'events'

import { routes } from "./routes";
import { Config } from "./config";
import { EntryEntityType } from "../types";
import { InMemoryDb } from "../databases/in-memory";
import { AppProfile } from "./app-profile/app-profile";
import * as requestHandlers from "./request-handlers/index";
import { LocalAppProfile } from "./app-profile/local-app-profile";

import express, { Application, Request, Response, NextFunction } from "express";

const appProfileMiddlewareFactory = (appProfile: AppProfile) => (req: Request, res: Response, next: NextFunction) => {
    req.appProfile = appProfile;
    next();
};

const createInMemoryDb = (): InMemoryDb<EntryEntityType> => {
    const inMemoryDb = new InMemoryDb<EntryEntityType>("entries", []);

    return inMemoryDb;
}

const addCors = (req: Request, res: Response, next: NextFunction): void => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Headers", "Accept, Content-Type");
    res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, PATCH, DELETE");
    res.setHeader("Cache-Control", "no-cache");
    res.setHeader("Expires", 0);
    next();
};

const registerMiddlewares = (app: Application, appProfile: AppProfile): Application => {
    app.use(express.json());
    app.use(express.urlencoded({ extended: true }));
    app.use(appProfileMiddlewareFactory(appProfile));
    app.use(addCors);

    return app;
};

// TODO: modify to use builder design pattern?

const registerRequestHandlers = (app: Application) => {
    app.get(routes.entries.list, requestHandlers.listEntriesHandler);

    app.post(routes.entries.create, requestHandlers.createEntryHandler);

    app.delete(routes.entries.remove, requestHandlers.removeEntryHandler);

    app.get("/heartbeat", (req: Request, res: Response) => { res.send(1) });
};

const registerStaticContent = (app: Application): void => {
    const assetsPath = path.join(__dirname, "..", "..", "public");

    console.log(assetsPath)
    app.use("/", express.static(assetsPath));

    app.use("/submit", express.static(assetsPath));

    app.use("/data", express.static(assetsPath));
}

const createServer = async (eventEmitter: events): Promise<Application> => {
    const app = express();

    const inMemoryDb = createInMemoryDb();

    const config = { inMemoryDb, postgresqlClient: await Config.gePostgresClient(), eventEmitter };

    const appProfile = new LocalAppProfile(config);

    registerMiddlewares(app, appProfile);

    registerRequestHandlers(app);

    registerStaticContent(app)

    return app;
};

export { createServer };
