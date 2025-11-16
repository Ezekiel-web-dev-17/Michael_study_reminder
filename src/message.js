import "dotenv/config";

import express from "express";
import cron from "node-cron";
import { sendEmail } from "../src/mailer/mailer.js";

const { PORT, NODE_ENV } = process.env;

const app = express();

cron.schedule("00 35 18 * * *", sendEmail, { timezone: "Africa/Lagos" });

if (process.env.RUN_CRON === "true") {
  console.log(
       `Cron Job turned on ${new Date().toLocaleTimeString(["WAT"], {
        day: "2-digit",
        month: "long",
        year: "numeric",
        hour: "2-digit",
        minute: "2-digit",
        second: "numeric",
        hour12: true,
      })}`
    );
  await sendEmail();
  process.exit(0);
} else {
  app.listen(PORT, () => {
    console.log(`Server running in ${NODE_ENV} on port ${PORT}`);
});
};
