import express from "express";

const router = express.Router();

import * as GroupsController from "../Controllers/GroupsController.js";
import verifyToken from "../Middleware/authMiddleware.js";

// define the home page route
router.get("/", GroupsController.getAllGroups);

router.get("/group/:groupId", GroupsController.getGroupById);

router.post("/group/:groupId", verifyToken, GroupsController.addUserToGroup);

export default router;
