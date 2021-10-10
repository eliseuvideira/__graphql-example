import supertest from "supertest";
import { app } from "../src/utils/express";
import { middlewares } from "../src/utils/middlewares";

export const createExpressRequest = async () => {
  await middlewares(app);

  return () => supertest(app);
};
