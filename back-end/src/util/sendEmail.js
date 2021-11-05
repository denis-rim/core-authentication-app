// using Twilio SendGrid's v3 Node.js Library
// https://github.com/sendgrid/sendgrid-nodejs
import sendgrid from "@sendgrid/mail";

sendgrid.setApiKey(process.env.SENDGRID_API_KEY);

export const sendEmail = ({ to, from, subject, text, html }) => {
  const msg = { to, from, subject, text, html };
  return sendgrid.send(msg);
};
