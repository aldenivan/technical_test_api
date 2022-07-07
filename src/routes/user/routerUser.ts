import { Router } from "express";

import {
  deleteUserController,
  getUserProfileController,
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

routerUser.get("/users", authenticatedUser, getUsersController);

routerUser.get("/users/profile", authenticatedUser, getUserProfileController);

routerUser.post(
  "/users/register",
  validateShape(schemaRegisterUser),
  registerUserController
);

routerUser.post(
  "/users/login",
  validateShape(loginUserShape),
  loginUserController
);

routerUser.patch("/users/update", authenticatedUser, updateUserController);

routerUser.delete("/users/delete", authenticatedUser, deleteUserController);

export default routerUser;
