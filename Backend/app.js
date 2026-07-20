import express from "express";
const app = express();
const port = 3000;
app.use(express.json());

import loginRouter from "./Routes/LoginRouter.js";
import registerRouter from "./Routes/RegisterRouter.js";
import groupsRouter from "./Routes/GroupsRouter.js";
import profilerRouter from "./Routes/ProfileRouter.js";
import chatRouter from "./Routes/ChatRouter.js";
//import jwt verify/authorize middleware
import verifyToken from "./Middleware/authMiddleware.js";

app.use("/api/login", verifyToken, loginRouter);
app.use("/api/register", verifyToken, registerRouter);
app.use("/api/groups", verifyToken, groupsRouter);
app.use("/api/profile", verifyToken, profilerRouter);
app.use("/api/chats", verifyToken, chatRouter);

app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`);
});
