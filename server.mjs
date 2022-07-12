import Fastify from 'fastify';
import dbConnector from './db/connectMongo.mjs';
import routers from './routers/index.mjs';

const port = process.env.PORT || 8000;
const fastify = Fastify({
  logger: true,
});

fastify.register(dbConnector);
fastify.register(routers);

fastify.listen({ port: port }, (err, address) => {
  if (err) {
    fastify.log.error(err);
    process.exit(1);
  } else {
    fastify.log.info(`Server is listening ${ address }!`);
  }
});