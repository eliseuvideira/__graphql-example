import express from "express";
import cors from "cors";
import { exception, notFound } from "@ev-fns/errors";
import fs from "fs";
import { join } from "path";
import { json } from "body-parser";
import { morgan } from "../api/rest/middlewares/morgan";

export const middlewares = async (
  app: express.Express,
  middlewares: express.RequestHandler[] = [],
) => {
  app.use(cors());
  app.use(json());
  app.use(morgan());

  if (process.env.NODE_ENV !== "production") {
    app.get("/", (_, res) => res.redirect("/graphql"));
  }

  for (const middleware of middlewares) {
    app.use(middleware);
  }

  const routesDir = join(__dirname, "..", "api", "rest", "routes");

  const routes = await fs.promises.readdir(routesDir);
  for (const route of routes) {
    const module = await import(join(routesDir, route));

    app.use(module.default);
  }

  app.use(notFound);
  app.use(exception);
};
