import 'dotenv/config'
import http from 'http';
import { createServer } from "./server";
import { Config } from "./config";
import { Server, Socket } from 'socket.io';
import { EventEmitter } from 'stream';
import { createSocket } from './socket';

const main = async () => {

    const PORT = Config.get("web-server.port") || 80;

    const emitter = new EventEmitter();

    const app = await createServer(emitter);

    const server = http.createServer(app);

    createSocket(server, emitter)

    server.listen(PORT, () => {
        console.log(`listening on port ${PORT}`);
    });
};

main();
