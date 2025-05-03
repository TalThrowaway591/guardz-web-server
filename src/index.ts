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

