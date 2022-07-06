import { Router } from "express";

import {
  deleteUserController,
  getUsersController,
  loginUserController,
  registerUserController,
  updateUserController,
} from "../../controllers";
import {
  authenticatedUser,
  userAdmAuthenticated,
  validateShape,
} from "../../middlewares";
import { loginUserShape, schemaRegisterUser } from "../../schemas";

const routerUser = Router();

routerUser.get("/", authenticatedUser, getUsersController);

routerUser.post(
  "/register",
  validateShape(schemaRegisterUser),
  registerUserController
);

routerUser.post("/login", validateShape(loginUserShape), loginUserController);

routerUser.patch("/update", authenticatedUser, updateUserController);

routerUser.delete("/delete", authenticatedUser, deleteUserController);

export default routerUser;
