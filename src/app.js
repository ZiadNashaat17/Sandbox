import PDFKit from 'pdfkit';
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
      body: `Your OTP is ${otp} don't share it with anyone.`,
      from: '+16615901265',
      to: '+18777804236',
      channel: 'sms',
    });

    // logger.info(`Verification sent: ${verification.sid}`);
    res.status(200).json({ success: true, sid: verification.sid });
  } catch (error) {
    logger.error(`Failed to send verification: ${error.message}`);
    res.status(500).json({ success: false, error: error.message });
  }
});

app.get('/generate-chart', async(req, res)=>{
  const chartConfig = encodeURIComponent(JSON.stringify({
    type: 'bar',
    data: {
      labels: ['#1','#2','#3'],
      datasets: [{label: 'Distance (KM)', data: [8.1, 5.4, 3.8]}]
    },
    options: {
      plugins: {
        title: {
          display: true,
          text: 'My Chart Name',
          color: '#333333',       // Title color
          font: {
            size: 20,
            weight: 'bold',       // Font weight
            family: 'Arial'       // Font family
          },
          padding: {
            top: 10,
            bottom: 20
          }
        }
      }
    }
  }));

  const chartRes = await fetch(`https://quickchart.io/chart?width=500&height=300&chart=${chartConfig}`);
  console.log(chartRes);

  const buffer = await chartRes.arrayBuffer();
  const imageBuffer = Buffer.from(buffer);

  const doc = new PDFKit();

  res.setHeader('Content-Type','application/pdf');
  res.setHeader('Content-Disposition', 'attachment; filename=chart.pdf')

  doc.pipe(res);

  doc.fontSize(16).text('My Chart Report', {align: 'center'});
  doc.moveDown();
  doc.image(imageBuffer, {
    fit: [500, 300],
    align: 'center'
  });

  doc.end();

  // res.status(200).json({ success: true, chart: imageBuffer });
})

app.get("/error", (req, res) => {
  logger.error("Something went wrong!"); // Logs an error message
  res.status(500).send("Error!");
});
export default app;
