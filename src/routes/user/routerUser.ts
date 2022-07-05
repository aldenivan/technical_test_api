import { Router } from "express";

import { getUsersController } from "../../controllers";

const routerUser = Router();

routerUser.get("/", getUsersController);

export default routerUser;
