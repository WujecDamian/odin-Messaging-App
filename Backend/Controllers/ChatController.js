import bcrypt from "bcryptjs";
import { prisma } from "../../lib/prisma.js";

const getAllUserChats = async (req, res) => {
  //get
  const userId = Number(req.user.userId);

  const chats = await prisma.messages.findMany({
    where: {
      OR: [{ senderId: Number(userId) }, { receiverId: Number(userId) }],
    },
    orderBy: {
      createdAt: "desc",
    },
  });

  res.json({ profile });
};

const getChatByUserIdAndRecipientId = async (req, res) => {
  const userId = Number(req.user.userId);
  const recipientId = Number(req.params.recipientId);
  console.log("userid:", userId);
  console.log("recipientId:", recipientId);

  const messages = await prisma.messages.findMany({
    where: {
      OR: [
        { senderId: userId, receiverId: recipientId },
        { senderId: recipientId, receiverId: userId },
      ],
    },
    orderBy: {
      createdAt: "desc",
    },
  });
  res.json({ messages });
};

export { getAllUserChats, getChatByUserIdAndRecipientId };
