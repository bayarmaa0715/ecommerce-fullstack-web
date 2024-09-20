import express, { Request, Response } from "express";
import dotenv from "dotenv";
import authRoute from "./routes/auth-router";
import { connectDB } from "./config/db";

dotenv.config();
const PORT: string = process.env.PORT || "";
const MONGO_URI = process.env.MONGO_URI || "";
//express ees
const app = express();

//middlewares
app.use(express.json());
app.use("/api/v1/auth", authRoute);

app.get("/", (req: Request, res: Response) => {
  res.send("Welcome ecommerce");
});
connectDB(MONGO_URI);
app.listen(PORT, () => {
  console.log(`Server localhost ${PORT} аслаа aa`);
});
