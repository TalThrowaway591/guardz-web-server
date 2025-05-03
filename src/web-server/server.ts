import express, { Application, Request, Response, NextFunction } from "express";
import { Database, EntryEntityType, Entity } from "../types";
import nanoid from "nanoid";
import { InMemoryDb } from "../databases/in-memory";
import { AppProfile } from "./app-profile/app-profile";
import { LocalAppProfile } from "./app-profile/local-app-profile";
import { routes } from "./routes";
import { Config } from "./config";
import * as requestHandlers from "./request-handlers/index";
// import { LocaAppProfile } from "./app-profile/local-app-profile";
// import { Config } from "./config";
// import { AppProfile } from "./app-profile/app-profile";
// import path from "path";

// const appProfileMiddlewareFactory = (appProfile: AppProfile) => (req: Request, res: Response, next: NextFunction) => {
//     req.appProfile = appProfile;
//     next();
// };

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

const registerRequestHandlers = (app: Application): Application => {
    app.get(routes.entries.list, requestHandlers.listEntriesHandler);
    app.post(routes.entries.create, requestHandlers.createEntryHandler);

    return app;
};

const createServer = async (): Promise<Application> => {
    const app = express();

    const inMemoryDb = createInMemoryDb();

    const config = { inMemoryDb, postgresqlClient: await Config.gePostgresClient() };

    const appProfile = new LocalAppProfile(config);

    registerMiddlewares(app, appProfile);

    registerRequestHandlers(app);

    // app.use("/", express.static(path.join(__dirname, "../../public"), { etag: false, maxAge: 0 }));

    return app;
};

export { createServer };
