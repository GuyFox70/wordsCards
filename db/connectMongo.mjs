import fp from "fastify-plugin";
import fastifyMongodb from "@fastify/mongodb";

async function dbConnector(fastify, options) {
  fastify.register(fastifyMongodb, {
    forceClose: true,
    url: 'mongodb://card:card123@localhost:27017/words',
  });
}

export default fp(dbConnector);