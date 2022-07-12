async function routers(fastify, options) {
  const collection = fastify.mongo.db.collection('users');

  fastify.get('/', async (req, reply) => {
    const result = await collection.find().toArray()
    
    return result;
  });
}

export default routers;