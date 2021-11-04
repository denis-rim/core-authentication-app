import { ObjectID } from "mongodb";

export const updateUserInfoRoute = {
  path: "/api/users/:userId",
  method: "put",
  handler: async (req, res) => {
    const { authorization } = req.headers;
    const { userId } = req.params;

    // extract exact values from request body
    const updates = ({ favoriteFood, hairColor, bio }) =>
      ({ favoriteFood, hairColor, bio }(req.body));

    if (!authorization) {
      return res.status(401).json({ message: "No authorization header send" });
    }

    const token = authorization.split(" ")[1];
  },
};
