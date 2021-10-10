import { app } from "../src/utils/express";
import { apollo } from "../src/utils/apollo";
import { middlewares } from "../src/utils/middlewares";

export const createApolloServer = async () => {
  await apollo.start();

  await middlewares(app, [apollo.middleware()]);

  return () => apollo.server;
};
