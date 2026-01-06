import { Filter } from "bad-words";

import { isValidPhoneNumber } from "libphonenumber-js";
import { parsePhoneNumber } from "libphonenumber-js/min";
import app from "./app.js";
import logger from "./logger.js";

const port = process.env.PORT;

const filter = new Filter();

try {
  console.log(filter.clean("Fuck you"));
  console.log(filter.isProfane("Fuck you"));

  // const phoneNumber = parsePhoneNumber("+201063520549", "EG");
  const phoneNumber = "+201063520549";
  if (isValidPhoneNumber(phoneNumber)) {
    logger.info("Phone number is valid");
    //   logger.info(phoneNumber.)
  } else {
    logger.error("Invalid phone number");
  }

  app.listen(port, () => {
    console.log(`Sandbox app running on port: ${port}`);
  });
} catch (error) {
  console.log("App startup error: ", error);
  process.exit(1);
}
