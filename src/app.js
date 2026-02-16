import { config } from "dotenv";
import express from "express";
import PinoHttp from "pino-http";
import logger from "./logger.js";
import twilio from 'twilio';
import otpGenerator from 'otp-generator';

config({ path: "./.env" });

const app = express();

app.use(express.json());
app.use(PinoHttp({ logger }));

app.get("/", (req, res) => {
  logger.info("Home page accessed ");
  res.status(200).send("hello world");
});

const accountSid = process.env.ACC_SID;
const authToken = process.env.AUTH_TOKEN;
const serviceSid = process.env.SERVICE_SID;
const client = twilio(accountSid, authToken);

app.get("/send-verification", async (req, res) => {
  try {
    const otp = otpGenerator.generate(6, { upperCaseAlphabets:true, specialChars:false });
    logger.info({otp})

    const verification = await client.messages.create({
      body: 'Hello there',
      from: '+16615901265',
      to: '+201063520549',
      channel: 'sms',
    });

    // logger.info(`Verification sent: ${verification.sid}`);
    res.status(200).json({ success: true, sid: verification.sid });
  } catch (error) {
    logger.error(`Failed to send verification: ${error.message}`);
    res.status(500).json({ success: false, error: error.message });
  }
});

app.get("/error", (req, res) => {
  logger.error("Something went wrong!"); // Logs an error message
  res.status(500).send("Error!");
});
export default app;
