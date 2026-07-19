import bcrypt from "bcryptjs";
import { prisma } from "../../lib/prisma.js";

const createUser = async (req, res) => {
  const { username, password, displayName } = req.body;
  const hashedPassword = await bcrypt.hash(password, 10);

  const newUser = await prisma.user.create({
    data: {
      username,
      password: hashedPassword,
      displayName,
    },
  });

  res.json({ newUser });
};

export { createUser };
