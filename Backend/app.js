import express from "express";
const app = express();
const port = 3000;
app.use(express.json());

import loginRouter from "./Routes/LoginRouter.js";
import registerRouter from "./Routes/RegisterRouter.js";
import groupsRouter from "./Routes/GroupsRouter.js";
import profilerRouter from "./Routes/ProfileRouter.js";

app.use("/api/login", loginRouter);
app.use("/api/register", registerRouter);
app.use("/api/groups", groupsRouter);
app.use("/api/profile", profilerRouter);

app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`);
});
