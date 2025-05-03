"use strict";
// import Fastify from 'fastify'
// import cors from '@fastify/cors'
// const database = [];
// const fastify = Fastify({
//     // logger: true
// })
// await fastify.register(cors, {
//     // put your options here
// })
// const getIP = (request) => {
//     // TODO: add functionality and abstract
//     const ip = request.headers['x-forwarded-for'] || request.ip
//     return ip;
// }
// fastify.get('/user-data', async (request, reply) => {
//     const ip = getIP(request);
//     const entities = database.filter(entity => entity.ip === ip);
//     reply.send(entities)
// })
// fastify.post('/user-data', async (request, reply) => {
//     const { title, body } = JSON.parse(request.body);
//     console.log(request.body)
//     const ip = getIP(request)
//     const userData = {
//         title,
//         body,
//         ip
//     }
//     console.log(userData)
//     database.push(userData);
//     return { hello: 'world' }
// })
// const start = async () => {
//     try {
//         await fastify.listen({ port: 3000 })
//     } catch (err) {
//         fastify.log.error(err)
//         process.exit(1)
//     }
// }
// start()
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9zcmMvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLGdDQUFnQztBQUNoQyxtQ0FBbUM7QUFFbkMsdUJBQXVCO0FBRXZCLDRCQUE0QjtBQUM1QixzQkFBc0I7QUFDdEIsS0FBSztBQUVMLGlDQUFpQztBQUNqQywrQkFBK0I7QUFDL0IsS0FBSztBQUVMLCtCQUErQjtBQUMvQiw4Q0FBOEM7QUFDOUMsa0VBQWtFO0FBRWxFLGlCQUFpQjtBQUNqQixJQUFJO0FBRUosd0RBQXdEO0FBQ3hELGlDQUFpQztBQUdqQyxvRUFBb0U7QUFFcEUsMkJBQTJCO0FBQzNCLEtBQUs7QUFFTCx5REFBeUQ7QUFDekQsd0RBQXdEO0FBRXhELGdDQUFnQztBQUNoQyxnQ0FBZ0M7QUFFaEMseUJBQXlCO0FBQ3pCLGlCQUFpQjtBQUNqQixnQkFBZ0I7QUFDaEIsYUFBYTtBQUNiLFFBQVE7QUFFUiw0QkFBNEI7QUFFNUIsK0JBQStCO0FBRS9CLGdDQUFnQztBQUNoQyxLQUFLO0FBRUwsOEJBQThCO0FBQzlCLFlBQVk7QUFDWiwrQ0FBK0M7QUFDL0Msc0JBQXNCO0FBQ3RCLGlDQUFpQztBQUNqQywwQkFBMEI7QUFDMUIsUUFBUTtBQUNSLElBQUk7QUFDSixVQUFVIn0=