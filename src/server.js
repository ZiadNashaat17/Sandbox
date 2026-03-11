import { Filter } from "bad-words";

import { connect } from "mongoose";
import app from "./app.js";

const port = process.env.PORT;
const MONGO_URI = process.env.MONGO_URI;
const filter = new Filter();

try {
  // console.log(filter.clean("Fuck you"));
  // console.log(filter.isProfane("Fuck you"));

  // const phoneNumber = parsePhoneNumber("+201063520549", "EG");
  // const phoneNumber = "+201063520549";
  // if (isValidPhoneNumber(phoneNumber)) {
  //   logger.info("Phone number is valid");
  //   //   logger.info(phoneNumber.)
  // } else {
  //   logger.error("Invalid phone number");
  // }

  await connect(MONGO_URI);

  app.listen(port, () => {
    console.log(`Sandbox app running on port: ${port}`);
  });
} catch (error) {
  console.log("App startup error: ", error);
  process.exit(1);
}
