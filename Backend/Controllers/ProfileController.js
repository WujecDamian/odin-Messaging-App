import bcrypt from "bcryptjs";
import { prisma } from "../../lib/prisma.js";

const getProfileById = async (req, res) => {
  const userId = req.params.userId;
  const profile = await prisma.profile.findUnique({
    where: {
      id: Number(userId),
    },
  });

  res.json({ profile });
};

const editProfile = async (req, res) => {
  const { bannerPhotoUrl, profilePhotoUrl };
  const userId = req.params.userId;

  const groups = await prisma.group.update({
    where: { id: Number(userId) },
    data: {
      profilePhotoUrl: profilePhotoUrl,
      bannerPhotoUrl: bannerPhotoUrl,
    },
  });

  res.json({ groups });
};

export { getProfileById, editProfile };
