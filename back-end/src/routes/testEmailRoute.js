import { sendEmail } from "../util/sendEmail";

export const testEmailRoute = {
  path: "/api/test-email",
  method: "post",
  handler: async (req, res) => {
    try {
      await sendEmail({
        to: "denis.mazurchuk@gmail.com",
        from: "denis.mazurchuk@gmail.com",
        subject: "Does this work?",
        text: "It does!",
      });
      res.sendStatus(200);
    } catch (error) {
      console.log(error);
      res.sendStatus(500);
    }
  },
};
