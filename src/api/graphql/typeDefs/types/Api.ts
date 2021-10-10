import { gql } from "apollo-server-core";

export const typeDefs = gql`
  type Api {
    name: String!
    environment: String!
    version: String!
  }
`;
