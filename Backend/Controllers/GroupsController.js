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
  });

  res.json({ group });
};

export { getAllGroups, getGroupById };
