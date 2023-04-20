import { Router } from "express";

import {
  getOneUser,
  postOneUser
} from "../controllers/usersController.js";

const userRouter = Router();

userRouter.get("/", getOneUser);
userRouter.post("/", postOneUser);

export default userRouter;
