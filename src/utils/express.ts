import express from "express";

export const app = express().set("trust proxy", [
  "loopback",
  "linklocal",
  "uniquelocal",
]);
