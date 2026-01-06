import { connect } from "mongoose";
import app from "./app.js";
import logger from "./logger.js";

const port = process.env.PORT;

const filter = new Filter();

try {
  await connect(DB);
  console.log("Connected to DB!");

  app.listen(port, () => {
    console.log(`Sandbox app running on port: ${port}`);
  });
} catch (error) {
  console.log("App startup error: ", error);
  process.exit(1);
}
