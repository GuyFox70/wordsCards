async function routers(fastify, options) {
  const collection = fastify.mongo.db.collection('en_words_v5');
  const mime = {
    json: 'application/json; charset=utf-8',
  }

  fastify.get('/sizeCollection/:partSpeech', async (req, reply) => {
    // const result = await collection.count();
    const { params } = req;
    console.log('hsdgfjhdsfjjsd', params);
    reply
      .code(200)
      .header('Content-Type', mime.json);
    return { data: 0 };
  });
}

export default routers;