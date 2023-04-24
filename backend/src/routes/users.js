import { Router } from "express";

import {
  getCheckOneUser,
  getOneUser,
  postOneUser
} from "../controllers/usersController.js";

const userRouter = Router();

userRouter.get("/", getOneUser);
userRouter.get("/one", getCheckOneUser);
userRouter.post("/", postOneUser);

export default userRouter;
