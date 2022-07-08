import express, { json } from "express";
import { routerUser } from "./routes";

const app = express();
const cors = require("cors");
const corsOptions = {
  origin: "http://localhost:3000",
  credentials: true,
  optionSuccessStatus: 200,
};

app.use(json());
app.use("/api", routerUser);
app.use(cors(corsOptions));

export default app;
