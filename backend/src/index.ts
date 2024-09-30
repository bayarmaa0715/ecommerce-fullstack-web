import express, { Request, Response } from "express";
import dotenv from "dotenv";
import authRoute from "./routes/auth-router";
import { connectDB } from "./config/db";
import categoryRoute from "./routes/category-router";

import cors from "cors";
import { sendEmail } from "./utils/sendEmail";

dotenv.config();
const PORT: string = process.env.PORT || "port error";
const MONGO_URI = process.env.MONGO_URI || "mongo key error";
//express ees
const app = express();

//middlewares
app.use(express.json());
app.use(cors());
app.use("/api/v1/auth", authRoute);
app.use("/api/v1", categoryRoute);

app.get("/", async (req: Request, res: Response) => {
  const randomOTP = Math.floor(Math.random() * 10000)
    .toString()
    .padStart(4, "0");
  console.log("too", randomOTP);
  const sendEMAIL = "oojgii0118@gmail.com";
  // sendEmail(sendEMAIL, randomOTP);
  res.send("Welcome ecommerce api server");
});
connectDB(MONGO_URI);
app.listen(PORT, () => {
  console.log(`Server localhost ${PORT} аслаа aa`);
});
