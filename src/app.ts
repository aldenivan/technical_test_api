import express, { json } from "express";
import { routerUser } from "./routes";

const app = express();

app.use(json());
app.use("/users", routerUser);

export default app;
