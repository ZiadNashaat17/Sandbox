import { config } from "dotenv";
import express from "express";
import PinoHttp from "pino-http";
import logger from "./logger.js";

config({ path: "./config.env" });

const app = express();

app.use(express.json());
app.use(PinoHttp({ logger }));

app.get("/", (req, res) => {
  logger.info("Home page accessed ");
  res.status(200).send("hello world");
});

app.get("/error", (req, res) => {
  logger.error("Something went wrong!"); // Logs an error message
  res.status(500).send("Error!");
});
export default app;
