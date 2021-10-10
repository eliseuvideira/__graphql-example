import "../../../../fixture";

import { ApolloServer } from "apollo-server-express";
import { createApolloServer } from "../../../../createApolloServer";

describe("api", () => {
  let server: () => ApolloServer;

  beforeAll(async () => {
    server = await createApolloServer();
  });

  test("it works", async () => {
    expect.assertions(2);

    const { data, errors } = await server().executeOperation({
      query: `query { api { name, environment, version } }`,
    });

    expect(data).toEqual({
      api: {
        name: process.env.API_NAME,
        environment: process.env.NODE_ENV,
        version: process.env.npm_package_version,
      },
    });
    expect(errors).not.toBeDefined();
  });
});
