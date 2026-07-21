import bcrypt from "bcryptjs";
import { prisma } from "../../lib/prisma.js";

const getProfileById = async (req, res) => {
  const userId = req.params.userId;
  console.log(userId);
  const profile = await prisma.user.findUnique({
    where: {
      id: Number(userId),
    },
    include: {
      profile: true,
    },
  });

  res.json({ profile });
};

const editProfile = async (req, res) => {
  const { bannerPhotoUrl, profilePhotoUrl } = req.body;
  const user = req.user;
  const userId = req.params.userId;

  if (user.id !== userId) {
    res.json({ errorMessage: "You can edit only your own profile" });
  }

  const groups = await prisma.group.update({
    where: { userId: Number(userId) },
    data: {
      profilePhotoUrl: profilePhotoUrl,
      bannerPhotoUrl: bannerPhotoUrl,
    },
  });

  res.json({ groups });
};

export { getProfileById, editProfile };
