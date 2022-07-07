import { NextFunction, Request, Response } from "express";
import express, { json } from "express";
import { routerUser } from "./routes";
// import { handleError } from "./utils";

const app = express();

app.use(json());
app.use("/api", routerUser);
// app.use((err: any, _: Request, res: Response, __: NextFunction) => {
//   return handleError(err, res);
// });

export default app;
