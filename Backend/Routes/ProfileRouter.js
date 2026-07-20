import express from "express";

const router = express.Router();

import * as ProfileController from "../Controllers/ProfileController.js";

router.put("/:profileId", ProfileController.editProfile);

router.get("/:profileId", ProfileController.getProfileById);

export default router;
