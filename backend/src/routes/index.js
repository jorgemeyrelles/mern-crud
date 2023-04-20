import { Router } from "express";

import userRouter from "./users.js";
import listRouter from "./list.js"

const indexRouter = Router();


indexRouter.get("/", (req, res) => {
  res.send("Welcome to magazord back-end");
});

indexRouter.use("/login", userRouter);
indexRouter.use("/list", listRouter);

export default indexRouter;
