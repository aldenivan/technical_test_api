import express, { json } from "express";
import { routerUser } from "./routes";

const app = express();
const cors = require("cors");

app.use(json());
app.use(cors());
app.use("/api", routerUser);

export default app;
