import bcrypt from "bcryptjs";
import { prisma } from "../../lib/prisma.js";

const getAllGroups = async (req, res) => {
  const groups = await prisma.group.findMany({});

  res.json({ groups });
};

const getGroupById = async (req, res) => {
  const groupId = req.params.groupId;
  const group = await prisma.group.findUnique({
    where: {
      id: Number(groupId),
    },
    include: {
      users: true,
    },
  });

  res.json({ group });
};

const addUserToGroup = async (req, res) => {
  const { userId } = req.body.bodyData;
  const groupId = Number(req.params.groupId);

  await prisma.group.update({
    where: { id: groupId },
    data: {
      users: {
        connect: { id: userId },
      },
    },
  });
};

export { getAllGroups, getGroupById, addUserToGroup };
