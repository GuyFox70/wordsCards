async function routers(fastify, options) {
  const collection = fastify.mongo.db.collection('en_words_v5');
  const mime = {
    json: 'application/json; charset=utf-8',
  }

  fastify.get('/sizeCollection', async (req, reply) => {
    const result = await collection.count();
    reply
      .code(200)
      .header('Content-Type', mime.json);
    return { data: result };
  });
}

export default routers;