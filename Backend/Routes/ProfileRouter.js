import express from "express";

const router = express.Router();

import * as ProfileController from "../Controllers/ProfileController.js";
import verifyToken from "../Middleware/authMiddleware.js";

router.put("/:userId", verifyToken, ProfileController.editProfile);

router.get("/:userId", ProfileController.getProfileById);

export default router;
