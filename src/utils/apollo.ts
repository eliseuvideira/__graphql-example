import { createApollo } from "@ev-graphql-2/create-apollo";
import { context, Context } from "./context";
import { resolvers } from "./resolvers";
import { typeDefs } from "./typeDefs";

export const apollo = createApollo<Context>({
  typeDefs,
  resolvers,
  context,
});
