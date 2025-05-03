"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createSocket = void 0;
var socket_io_1 = require("socket.io");
var connections = [];
var createSocket = function (httpServer, eventEmitter) {
    var io = new socket_io_1.Server(httpServer, {
        cors: {
            origin: '*',
            methods: ["GET", "POST"],
            credentials: true
        }
    });
    eventEmitter.on('on-create', function (obj) {
        connections.forEach(function (socket) {
            socket.emit('on-create', obj);
        });
    });
    io.sockets.on('connection', function (socket) {
        connections.push(socket);
        console.log(' %s sockets is connected', connections.length);
        socket.on('disconnect', function () {
            connections.splice(connections.indexOf(socket), 1);
        });
    });
    io.on('connection', function (socket) {
        console.log('a user connected');
        io.on('disconnect', function () {
            console.log('user disconnected');
        });
        socket.broadcast;
    });
};
exports.createSocket = createSocket;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic29ja2V0LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL3dlYi1zZXJ2ZXIvc29ja2V0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUNBLHVDQUEyQztBQUczQyxJQUFNLFdBQVcsR0FBYSxFQUFFLENBQUM7QUFFakMsSUFBTSxZQUFZLEdBQUcsVUFBQyxVQUF1QixFQUFFLFlBQTBCO0lBQ3JFLElBQU0sRUFBRSxHQUFHLElBQUksa0JBQU0sQ0FBQyxVQUFVLEVBQUU7UUFDOUIsSUFBSSxFQUFFO1lBQ0YsTUFBTSxFQUFFLEdBQUc7WUFDWCxPQUFPLEVBQUUsQ0FBQyxLQUFLLEVBQUUsTUFBTSxDQUFDO1lBQ3hCLFdBQVcsRUFBRSxJQUFJO1NBQ3BCO0tBQ0osQ0FBQyxDQUFDO0lBRUgsWUFBWSxDQUFDLEVBQUUsQ0FBQyxXQUFXLEVBQUUsVUFBQyxHQUFHO1FBQzdCLFdBQVcsQ0FBQyxPQUFPLENBQUMsVUFBQSxNQUFNO1lBQ3RCLE1BQU0sQ0FBQyxJQUFJLENBQUMsV0FBVyxFQUFFLEdBQUcsQ0FBQyxDQUFBO1FBQ2pDLENBQUMsQ0FBQyxDQUFBO0lBQ04sQ0FBQyxDQUFDLENBQUE7SUFFRixFQUFFLENBQUMsT0FBTyxDQUFDLEVBQUUsQ0FBQyxZQUFZLEVBQUUsVUFBQyxNQUFNO1FBQy9CLFdBQVcsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDekIsT0FBTyxDQUFDLEdBQUcsQ0FBQywwQkFBMEIsRUFBRSxXQUFXLENBQUMsTUFBTSxDQUFDLENBQUM7UUFFNUQsTUFBTSxDQUFDLEVBQUUsQ0FBQyxZQUFZLEVBQUU7WUFDcEIsV0FBVyxDQUFDLE1BQU0sQ0FBQyxXQUFXLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO1FBQ3ZELENBQUMsQ0FBQyxDQUFDO0lBQ1AsQ0FBQyxDQUFDLENBQUM7SUFHSCxFQUFFLENBQUMsRUFBRSxDQUFDLFlBQVksRUFBRSxVQUFDLE1BQU07UUFDdkIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxrQkFBa0IsQ0FBQyxDQUFBO1FBQy9CLEVBQUUsQ0FBQyxFQUFFLENBQUMsWUFBWSxFQUFFO1lBQ2hCLE9BQU8sQ0FBQyxHQUFHLENBQUMsbUJBQW1CLENBQUMsQ0FBQTtRQUNwQyxDQUFDLENBQUMsQ0FBQTtRQUVGLE1BQU0sQ0FBQyxTQUFTLENBQUE7SUFDcEIsQ0FBQyxDQUFDLENBQUE7QUFFTixDQUFDLENBQUE7QUFFUSxvQ0FBWSJ9