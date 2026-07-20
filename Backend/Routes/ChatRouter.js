import express from "express";

const router = express.Router();

import * as ChatController from "../Controllers/ChatController.js";

router.get("/", ChatController.getAllUserChats);

router.get("/:profileId", ChatController.getProfileById);

export default router;
