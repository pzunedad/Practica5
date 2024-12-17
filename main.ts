import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import { schema } from "./schema.ts";
//import { resolvers } from "./resolvers.ts";


// Configuración del servidor Apollo
const server = new ApolloServer({
  typeDefs: schema,
  //resolvers,
});

const { url } = await startStandaloneServer(server, {
  context: async () => ({

  }),
});


console.info(`🚀 Server ready at ${url}`);