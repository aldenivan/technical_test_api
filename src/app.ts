import express, { json } from "express";
import { routerUser } from "./routes";

const app = express();
const cors = require("cors");

app.use(json());
app.use("/api", routerUser);
app.use(cors());

export default app;
