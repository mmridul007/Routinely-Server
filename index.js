import express from "express";
import dotenv from "dotenv"
import "./db.js";
import cookieParser from "cookie-parser";
import authRouter from "./routes/auth.js";

const app = express();
dotenv.config();
app.use(express.json());
app.use(cookieParser());
app.use("/api/auth", authRouter);

const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log("App is running.......");
});
