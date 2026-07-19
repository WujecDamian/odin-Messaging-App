import express from "express";

const router = express.Router();

import * as RegisterController from "../Controllers/RegisterController.js";

// define the home page route
router.post("/", RegisterController.createUser);

export default router;
