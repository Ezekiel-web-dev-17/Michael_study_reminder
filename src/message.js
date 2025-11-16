import "dotenv/config";

import express from "express";
import cron from "node-cron";
import { sendEmail } from "../src/mailer/mailer.js";

const { PORT, NODE_ENV } = process.env;

const app = express();

cron.schedule("37 14 * * *", sendEmail, { timezone: "Africa/Lagos" });

app.listen(PORT, () => {
  console.log(`Server running in ${NODE_ENV} on port ${PORT}`);
  console.log(
    `Server deployed on ${new Date().toLocaleTimeString(["WAT"], {
      day: "2-digit",
      month: "long",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
      second: "numeric",
      hour12: true,
    })}`
  );
});
