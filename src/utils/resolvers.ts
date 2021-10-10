import { IResolvers } from "@graphql-tools/utils";
import fs from "fs";
import path from "path";
import { loggable } from "../functions/loggable";

const resolvers: IResolvers[] = [];

const resolversDir = path.join(__dirname, "..", "api", "graphql", "resolvers");

const resolversFolders = fs.readdirSync(resolversDir);

const DEBUG = !!+(process.env.DEBUG_GRAPHQL || 0);

for (const folder of resolversFolders) {
  const currentDir = path.join(resolversDir, folder);

  const type = path.parse(currentDir).name;

  const files = fs.readdirSync(currentDir);

  for (const file of files) {
    const currentFile = path.join(currentDir, file);

    const field = path.parse(file).name;

    const module = require(currentFile);

    for (const key of Object.keys(module)) {
      resolvers.push({
        [type]: { [field]: DEBUG ? loggable(module[key]) : module[key] },
      });
    }
  }
}

export { resolvers };
