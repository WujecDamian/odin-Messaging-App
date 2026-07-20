import express from "express";

const router = express.Router();

import * as ProfileController from "../Controllers/ProfileController.js";
import verifyToken from "../Middleware/authMiddleware.js";

router.put("/:profileId", verifyToken, ProfileController.editProfile);

router.get("/:profileId", ProfileController.getProfileById);

export default router;
