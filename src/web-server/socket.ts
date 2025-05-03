import http from 'http'
import { Server, Socket } from 'socket.io';
import { EventEmitter } from 'stream';

const connections: Socket[] = [];

const createSocket = (httpServer: http.Server, eventEmitter: EventEmitter): void => {
    const io = new Server(httpServer, {
        cors: {
            origin: '*',
            methods: ["GET", "POST"],
            credentials: true
        }
    });

    eventEmitter.on('on-create', (obj) => {
        connections.forEach(socket => {
            socket.emit('on-create', obj)
        })
    })

    io.sockets.on('connection', (socket) => {
        connections.push(socket);
        console.log(' %s sockets is connected', connections.length);

        socket.on('disconnect', () => {
            connections.splice(connections.indexOf(socket), 1);
        });
    });


    io.on('connection', (socket) => {
        console.log('a user connected')
        io.on('disconnect', () => {
            console.log('user disconnected')
        })

        socket.broadcast
    })

}

export { createSocket }