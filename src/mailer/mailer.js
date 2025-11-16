import nodemailer from "nodemailer";
import dotenv from "dotenv";

dotenv.config();

const { MAIL_TO, MAIL_PASS, MAIL_USER } = process.env;

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: MAIL_USER,
    pass: MAIL_PASS,
  },
});

const mailJSON = [
  {
    subject: "Tonight at 9 — small steps, big results",
    html: `
<html lang="en">
  <body
    style="
      padding: 0.5rem 3rem;
      box-sizing: border-box;
      color-scheme: light dark;
      min-height: 100dvh;
    "
  >
  <h2
  style="
  background: blue;
  color: white;
        border-radius: 15px;
        padding: 3px 12px;
        font-family: cursive;
      "
    >
      COME AND STUDY. IT'S 9:00PM ALREADY, small steps, big results
    </h2>
    <p>
      Hey — quick note. Start reading your books
      <strong style="font-family: monospace; font-size: x-large">NOW</strong> No
      Pressure to finish everything; Just show up open a book, and do one small,
      visible thing.
    </p>
    <p>
      Keep doing that i won't say do that for five times but always do it.
      Little by Little one step at a time. Remember Broski;
      <strong style="font-family: monospace; font-size: x-large"
        >"I BELIEVE IN YOU. YOU CAN DO THIS."</strong
      >
    </p>
  </body>
</html>`,
    text: "COME AND STUDY. IT'S 9:00PM ALREADY, small steps, big results, \nHey — quick note. Start reading your books NOW No Pressure to finish everything; Just show up open a book, and do one small, visible thing. Keep doing that i won't say do that for five times but always do it. Little by Little one step at a time. Remember Broski; 'I BELIEVE IN YOU. YOU CAN DO THIS.'",
  },

  {
    subject: "You are in for a 9 PM study sprint?",
    html: `<html lang="en">
  <body
    style="
      padding: 0.5rem 3rem;
      box-sizing: border-box;
      color-scheme: light dark;
      min-height: 100dvh;
    "
  >
    <h2
      style="
        background: #18d828;
        color: white;
        border-radius: 15px;
        padding: 3px 12px;
        font-family: cursive;
      "
    >
      9 PM study sprint <br />- 1 hour = huge momentum
    </h2>
    <p>
      Big Guy, You in for a <strong>9:00PM</strong> study sprint? Turn off
      distractions, set a <strong>50-minute timer</strong>, and go. On focuses
      beats there scattered hours.
    </p>
    <p>
      Think of tonight as an investment in tomorrow's freedom - finish early,
      sleep knowing you earned it.
    </p>
  </body>
</html>`,
    text: "You are in for a 9 PM study sprint? Turn off distractions, set a 50 minute timer, and go. One focused hour beats three scattered hours. Think of tonight as an investment in tomorrow's freedom - finish early, sleep knowing you earned it.",
  },

  {
    subject: "Imagine telling future-you I started at 9",
    text: "Future-you will thank present-you. if you start at 9 PM tonight for even 30 minutes, you're a step closer to the grade you want. Little choices pile up — let tonight's be a smart one. I'll check in tomorrow — you've got this.",
    html: `<html lang="en">
  <body
    style="
      padding: 0.5rem 3rem;
      box-sizing: border-box;
      color-scheme: light dark;
      min-height: 100dvh;
      font-family: Verdana;
    "
  >
    <h2
      style="
        background: #d81818;
        color: white;
        border-radius: 15px;
        padding: 3px 12px;
        font-family: cursive;
      "
    >
      Imagine telling the future-you "I started at 9"
    </h2>
    <p>
      Future-you will thank present-you. Start at
      <strong>9:00 PM</strong> tonight for even <strong>30 minutes</strong> —
      that's a step closer to the grade, or progress you want.
    </p>
    <p>
      Little choice pile up. Let tonight's be a smart one. I'll check in
      tomorrow — you've got this.
    </p>
    <footer>Yours sincerely, AI</footer>
  </body>
</html>
`,
  },

  {
    subject: "Two truths: it's 9 PM and studying works",
    text: "Truth one: it's 9 PM. \nTruth two: consistent tiny sessions beat sporadic marathons.\nGive me 30 focused minutes tonight — read one section, solve one problem, or summarize one page. That single win makes the next one easier.",
    html: `<html lang="en">
  <body
    style="
      padding: 0.5rem 3rem;
      box-sizing: border-box;
      color-scheme: light dark;
      min-height: 100dvh;
      font-family: Tahoma;
    "
  >
    <h2
      style="
        background: #000;
        color: white;
        border-radius: 15px;
        padding: 8px 12px;
        font-family: cursive;
      "
    >
      Two truths: it's 9 PM and studying works
    </h2>
    <p>
      <strong>Truth one:</strong> it's 9 PM. <br /><strong>Truth two:</strong>
      consistent tiny sessions beat sporadic marathons.
    </p>
    <p>
      Give me <strong>30 focused minutes</strong> tonight — read one section,
      solve one problem, or summarize one page. That single win makes the next
      one easier.
    </p>
    <footer>
      Yours sincerely,<br />
      AI
    </footer>
  </body>
</html>
`,
  },

  {
    subject: "Quick win at 9 — reward included",
    text: "Plan: study at 9PM for 40 minutes, then reward yourself. pick a small reward now — a snack, 20 minutes of a show, a quick walk or write some lines of code",
    html: `<html lang="en">
  <body
    style="
      background-color: #000;
      color: #fff;
      padding: 0.5rem 3rem;
      box-sizing: border-box;
      color-scheme: light dark;
      min-height: 100dvh;
      font-family: Arial;
    "
  >
    <h2
      style="
        background: #000;

        border-radius: 15px;
        padding: 8px 12px;
        font-family: cursive;
      "
    >
      Quick win at 9 — reward included
    </h2>
    <p>
      Plan: study at <strong>9:00 PM</strong> for <strong>40 minutes</strong>,
      then reward yourself. Pick a reward now — a snack, 20 minutes of a show, a
      quick walk or write some lines of code.
    </p>
    <p>Rewards make habits sticky. Start tonight and bank them wins.</p>
    <footer>
      Yours sincerely,<br />
      AI
    </footer>
  </body>
</html>`,
  },

  {
    subject: "Short, Sharp, Smart — 9 PM check-in",
    text: "No drama — just a short, sharp session at 9 PM. Close yor phone tabs, open your notes, and aim to complete one specific task (example: Practice 10 past questions or listen to one of the lectures on LASUVLAP). Finish it and  feel human again - focused and proud.",

    html: `<html lang="en">
  <body
    style="
      background-color: #000;
      color: #fff;
      padding: 0.5rem 3rem;
      box-sizing: border-box;
      color-scheme: light dark;
      min-height: 100dvh;
      font-family: Arial;
    "
  >
    <h2
      style="
        background: #20f504;

        border-radius: 15px;
        padding: 8px 12px;
        font-family: cursive;
      "
    >
      Short, Sharp, Smart — 9 PM check-in
    </h2>
    <p>
      No drama — just a short, sharp session at 9 PM. Close yor phone tabs, open
      your notes, and aim to complete one specific task (example: Practice 10
      past questions or listen to one of the lectures on LASUVLAP).
    </p>
    <p>Finish it and feel human again - focused and proud.</p>
    <footer>
      Yours sincerely,<br />
      AI
    </footer>
  </body>
</html>`,
  },

  {
    subject: "Great Job. let's go study once more for fun this weekend",
    text: "I am proud of you. Let's study once more for the last time this week. You've done really well. Revise what you've learnt. If you've forgotten anything don't feel bad just study it again that way you are building the muscles of your Brain. BRAIN POWER!! Let's rock and roll.",
    html: `<html lang="en">
  <body
    style="
      background-color: #000;
      color: #fff;
      padding: 0.5rem 3rem;
      box-sizing: border-box;
      color-scheme: light dark;
      min-height: 100dvh;
      font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI',
        Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue',
        sans-serif;
    "
  >
    <h2
      style="
        background: #fff;
        color: black;
        border-radius: 15px;
        padding: 8px 12px;
        font-family: Calibri;
      "
    >
      Great Job. let's go study once more for fun this weekend
    </h2>
    <p>
      I am proud of you. Let's study once more for the last time this week.
      You've done really well. But it ain't over yet. One last battle to win.
    </p>
    <p>
      Revise what you've learnt.If you've forgotten anything don't feel bad just study it again that way you are building the
      muscles of your Brain and that's how to win in this battle. BRAIN POWER!!
      Let's rock and roll.
      </p>
      <footer>
      Yours sincerely,<br />
      AI
      </footer>
      </body>
      </html>`,
  },
];

export const sendEmail = async () => {
  try {
    console.log(
      `Sending email for today: ${new Date().toLocaleDateString()} to Micheal by ${new Date().toLocaleTimeString()}`
    );
    const info = await transporter.sendMail({
      from: `Ezekiel <${MAIL_USER}>`,
      to: MAIL_TO,
      ...mailJSON[new Date().getDay()],
    });

    console.log("Email sent: ", info.response);

    await transporter.sendMail({
      from: `Ezekiel <${MAIL_USER}>`,
      to: MAIL_USER,
      text: "Mail sent successfully to Michael",
      html: `<html lang="en">
    <body
      style="
        background-color: #000;
        color: #fff;
        padding: 0.5rem 3rem;
        box-sizing: border-box;
        color-scheme: light dark;
        min-height: 100dvh;
        font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI',
          Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue',
          sans-serif;
      "
    >
      <p>Email sent to michael successfully</p>
      <div>${mailJSON[new Date().getDay()].text}</div>
    </body>
    </html>`,
    });
    console.log("All messages sent successfully including your reminder.");
  } catch (error) {
    console.error("Error sending mail: ", error);
    return {
      success: false,
      message: `Failed to send email on: ${new Date().toLocaleTimeString(
        ["WAT"],
        {
          day: "2-digit",
          month: "long",
          year: "numeric",
          hour: "2-digit",
          minute: "2-digit",
          second: "numeric",
          hour12: true,
        }
      )} WAT`,
    };
  }
};
