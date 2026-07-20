import express from "express";

const router = express.Router();

import * as ChatController from "../Controllers/ChatController.js";
import verifyToken from "../Middleware/authMiddleware.js";

router.get("/", verifyToken, ChatController.getAllUserChats);

router.get("/:profileId", ChatController.getProfileById);

export default router;
