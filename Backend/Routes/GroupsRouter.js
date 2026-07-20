import express from "express";

const router = express.Router();

import * as GroupsController from "../Controllers/GroupsController.js";

// define the home page route
router.get("/", GroupsController.getAllGroups);

router.get("/group/:groupId", GroupsController.getGroupById);

export default router;
