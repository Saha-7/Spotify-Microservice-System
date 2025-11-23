import express from "express";
import { loginUser, myProfile, registerUser } from "./controller.js";
import { isAuth } from "./middleware.js";

const userRouter = express.Router()

userRouter.post("/user/register", registerUser)
userRouter.post("/user/login", loginUser)
userRouter.get("/user/my-profile", isAuth, myProfile)

export default userRouter