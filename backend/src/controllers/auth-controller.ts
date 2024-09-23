import { Request, Response } from "express";
import User from "../models/user.model";
import bcrypt from "bcrypt";

const jwt = require("jsonwebtoken");

export const signup = async (req: Request, res: Response) => {
  try {
    const { lastname, firstname, email, password } = req.body;

    if (!lastname || !firstname || !email || !password) {
      res.status(400).json({ message: "Хоосон утга байж болохгүй" });
    }

    const createdUser = await User.create({
      firstname,
      lastname,
      email,
      password,
    });
    res.status(201).json({ message: "User success", user: createdUser });
  } catch (error) {
    res.status(401).json({ message: "User uusehed aldaa garlaa", error });
  }
};
export const login = async (req: Request, res: Response) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });
  if (!user) {
    return res.status(400).json({ message: "Бүртгэлгүй хэрэглэгч байна" });
  }
  const isCheck = await bcrypt.compare(password, user.password);
  if (!isCheck) {
    return res
      .status(401)
      .json({ message: "Хэрэглэгчийн имэйл эсвэл пасс буруу байна" });
  } else {
    const token = jwt.sign({ id: user._id }, "JWT_TOKEN_PASS@123", {
      expiresIn: "1h",
    });
    res.status(200).json({ message: "login success", token: token });
  }
};
