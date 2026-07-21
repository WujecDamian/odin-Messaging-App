import express from "express";

const router = express.Router();

import * as ChatController from "../Controllers/ChatController.js";
import verifyToken from "../Middleware/authMiddleware.js";

router.get("/", verifyToken, ChatController.getAllUserChats);
router.get(
  "/chat/:recipientId",
  verifyToken,
  ChatController.getChatByUserIdAndRecipientId,
);
router.post("/chat/:recipientId", verifyToken, ChatController.createMessage);

export default router;
