import express, { Request, Response } from "express";
import dotenv from "dotenv";
import authRoute from "./routes/auth-router";
import { connectDB } from "./config/db";
import { Resend } from "resend";
import { generateHTML } from "./utils/generateHTML";

dotenv.config();
const PORT: string = process.env.PORT || "port error";
const MONGO_URI = process.env.MONGO_URI || "mongo key error";
//express ees
const app = express();

const resend = new Resend(process.env.RESEND_API_KEY) || "resend error";

//middlewares
app.use(express.json());
app.use("/api/v1/auth", authRoute);

app.get("/", async (req: Request, res: Response) => {
  const randomOTP = Math.floor(Math.random() * 10000)
    .toString()
    .padStart(4, "0");

  console.log("too", randomOTP);
  // const { data, error } = await resend.emails.send({
  //   from: "Acme <onboarding@resend.dev>",
  //   to: ["bayrmaa.m49@gmail.com"],
  //   subject: "Сайн байна уу залуусаа",
  //   html: generateHTML(randomOTP),
  // });
  // if (error) {
  //   console.log("email code sent error", { error });
  // }
  res.send("Welcome ecommerce api server");
});
connectDB(MONGO_URI);
app.listen(PORT, () => {
  console.log(`Server localhost ${PORT} аслаа aa`);
});
