import { resolver } from "../../../../functions/resolver";

export interface ApiProps {
  name: string;
  environment: string;
  version: string;
}

export const api = resolver<null, ApiProps>(
  resolver(async () => {
    return {
      name: process.env.API_NAME,
      environment: process.env.NODE_ENV,
      version: process.env.npm_package_version || "N/A",
    };
  }),
);
