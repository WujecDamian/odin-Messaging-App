import express from "express";

const router = express.Router();

import * as LoginController from "../Controllers/LoginController.js";

// define the home page route
router.post("/", LoginController.logInUser);

export default router;
