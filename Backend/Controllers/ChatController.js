import bcrypt from "bcryptjs";
import { prisma } from "../../lib/prisma.js";

const getAllUserChats = async (req, res) => {
  //get
  const user = req.user;
  const chats = await prisma.messages.findMany({
    where: {
      OR: [{ senderId: Number(user.id) }, { receiverId: Number(user.id) }],
    },
    orderBy: {
      createdAt: "desc",
    },
  });

  res.json({ profile });
};

export { getAllUserChats };
