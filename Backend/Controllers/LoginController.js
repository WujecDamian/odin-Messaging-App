import { prisma } from "../../lib/prisma.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { configDotenv } from "dotenv";

const logInUser = async (req, res) => {
  const { username, password } = req.body.bodyData;
  const user = await prisma.user.findUnique({ where: { username } });
  if (!user) {
    res.json({ errorMessage: "There is no user matching given username" });
  }
  const passwordMatch = await bcrypt.compare(password, user.password);
  if (!passwordMatch) {
    res.json({ errorMessage: "Password incorrect" });
  }
  const token = jwt.sign(
    {
      userId: user.id,
    },
    process.env.JWT_SECRET,
    { expiresIn: "48h" },
  );

  res.json({ user, token });
};

export { logInUser };
