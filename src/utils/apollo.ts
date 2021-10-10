import { createApollo } from "@ev-graphql-2/create-apollo";
import { logging } from "../api/graphql/plugins/logging";
import { context, Context } from "./context";
import { resolvers } from "./resolvers";
import { typeDefs } from "./typeDefs";

export const apollo = createApollo<Context>({
  typeDefs,
  resolvers,
  context,
  plugins: +(process.env.DEBUG_GRAPHQL || 0) ? [logging] : undefined,
});
