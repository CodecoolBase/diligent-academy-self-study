import fastify from 'fastify';
import { JsonSchemaToTsProvider } from '@fastify/type-provider-json-schema-to-ts'

export default function createApp(options = {}) {
  // App without type provider, use this one for separate type declarations
  const app = fastify(options)

  // App with type provider, use this one for type providers
  // const app = fastify(options).withTypeProvider<JsonSchemaToTsProvider>()


  app.get('/api/hello', (request, reply) => {
    reply.send({ hello: "World!" })
  })

  
  return app;
}