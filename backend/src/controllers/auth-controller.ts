import { Request, Response } from "express";
import User from "../models/user.model";
import bcrypt from "bcrypt";
import { generateToken } from "../utils/jwt";

export const signup = async (req: Request, res: Response) => {
  try {
    const { firstname, email, password } = req.body;

    if (!firstname || !email || !password) {
      res.status(400).json({ message: "Хоосон утга байж болохгүй" });
      return;
    }
    const createdUser = await User.create({
      firstname,
      email,
      password,
    });
    res.status(201).json({ message: "User success", user: createdUser });
  } catch (error) {
    res.status(401).json({ message: "User uusehed aldaa garlaa", error });
  }
};
export const login = async (req: Request, res: Response) => {
  try {
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
      const token = generateToken({ id: user._id });
      res.status(200).json({ message: "login success", token: token });
    }
  } catch (error) {
    res.status(400).json({ message: "User newtrehed aldaa garlaa", error });
  }
};
export const currentUser = async (req: Request, res: Response) => {
  const id = req.user;
  const finuser = await User.findById(id);
  res.status(200).json({ user: finuser });
};
