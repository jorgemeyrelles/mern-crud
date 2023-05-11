import { Router } from "express";

import {
  getAllUsers,
  getCheckOneUser,
  getOneUser,
  postOneUser
} from "../controllers/usersController.js";

const userRouter = Router();

userRouter.get("/", getAllUsers);
userRouter.get("/one", getCheckOneUser);
userRouter.post("/", postOneUser);

export default userRouter;
