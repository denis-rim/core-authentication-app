import { ObjectID } from "mongodb";
import jwt from "jsonwebtoken";
import { getDbConnection } from "../db";

export const verifyEmailRoute = {
  path: "/api/verify-email",
  method: "put",
  handler: async (req, res) => {
    const { verificationString } = req.body;
    const db = getDbConnection();
    const result = await db.collection("users").findOne({ verificationString });

    if (!result)
      return res
        .status(401)
        .json({ message: "The email verification code is incorrect" });

    const { _id: id, email, info } = result;

    await db
      .collection("users")
      .updateOne({ _id: ObjectID(id) }, { $set: { isVerified: true } });

    jwt.sign(
      { id, email, isVerified: true, info },
      process.env.JWT_SECRET,
      { expiresIn: "30d" },
      (error, token) => {
        if (error) {
          console.log(error);
          return res.status(500).json({ message: "Internal server error" });
        }
        res.status(200).json({ token });
      }
    );
  },
};
