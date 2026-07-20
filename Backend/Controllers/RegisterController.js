import bcrypt from "bcryptjs";
import { prisma } from "../../lib/prisma.js";
import { error } from "node:console";

const createUser = async (req, res) => {
  const { username, password, displayName } = req.body.bodyData;
  if (!username || !password || !displayName) {
    return res
      .status(400)
      .json({ error: "You need to pass username and password." });
  }
  try {
    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = await prisma.user.create({
      data: {
        username: username,
        password: hashedPassword,
        displayName: displayName,
      },
    });
    res.status(201).json({ newUser });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error while creating user." });
  }
};

export { createUser };
