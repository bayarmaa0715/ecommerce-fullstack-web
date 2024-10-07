import { Request, Response } from "express";
import User from "../models/user.model";
import bcrypt from "bcrypt";
import { generateToken } from "../utils/jwt";
import { sendEmail } from "../utils/sendEmail";
import crypto from "crypto";

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
      console.log("first genereta token", token);
      res.status(200).json({ message: "login success", token: token });
    }
  } catch (error) {
    res.status(400).json({ message: "User newtrehed aldaa garlaa", error });
  }
};
export const currentUser = async (req: Request, res: Response) => {
  try {
    const { id } = req.user;
    console.log("id ?", id);
    const finUser = await User.findById(id);
    res.status(200).json({ message: "Success user", user: finUser });
  } catch (error) {
    console.log("current user erro", error);
    res.status(400).json({
      message: "Newtersen hereglegciin medeell tatahad aldaa garlaa",
      error,
    });
  }
};

export const forgetPassword = async (req: Request, res: Response) => {
  try {
    const { email } = req.body;
    const findUser = await User.findOne({ email: email });
    if (!findUser) {
      return res
        .status(400)
        .json({ message: "Бүртгэлтэй хэрэглэгч олдсонгүй" });
    }
    const otp = Math.floor(Math.random() * 10_000)
      .toString()
      .padStart(4, "0");
    findUser.otp = otp;
    await findUser.save();
    await sendEmail(email, otp);
    res.status(200).json({ message: "OTP code is sent email successfully" });
  } catch (error) {
    res.status(400).json({ message: "OTP code is not sent email " });
  }
};

export const verifyOtp = async (req: Request, res: Response) => {
  try {
    const { email, otpValue } = req.body;

    const findUser = await User.findOne({ email: email, otp: otpValue });
    if (!findUser) {
      return res
        .status(401)
        .json({ message: "Бүртгэлтэй хэрэглэгчийн OTP олдсонгүй" });
    }

    //sent email
    const resetToken = crypto.randomBytes(25).toString("hex");
    // console.log("token harah crypto", resetToken);
    const hashedResetToken = crypto
      .createHash("sha256")
      .update(resetToken)
      .digest("hex");
    findUser.passwordResetToken = hashedResetToken;
    findUser.passwordResetTokenExpire = new Date(Date.now() + 10 * 60 * 1000);
    await findUser.save();
    console.log("Reset token harah", resetToken);
    await sendEmail(
      email,
      `<a href="http://localhost:3000/forgetpass/newpass?resettoken=${resetToken}"&email=${email} >Нууц үг сэргээх холбоос</a>`
    );
    res.status(200).json({ message: "Нууц үг сэргээх имэйл илгээлээ" });
  } catch (error) {
    console.log("reset token husekt aldaa garsan", error);
  }
};

export const verifyPassword = async (req: Request, res: Response) => {
  try {
    const { password, resetToken } = req.body;

    const hashedResetToken = crypto
      .createHash("sha256")
      .update(resetToken)
      .digest("hex");
    const findUser = await User.findOne({
      passwordResetToken: hashedResetToken,
      passwordResetTokenExpire: { $gt: Date.now() },
    });
    console.log("req irsen pass", password);
    console.log("req irsen token", findUser);
    if (!findUser) {
      return res
        .status(400)
        .json({ message: "таны нууц үг сэргээх хугацаа дууссан байнав" });
    }
    findUser.password = password;
    await findUser.save();
    res.status(200).json({ message: "нууц үг амжилттай сэргээлээ" });
  } catch (error) {
    console.log("reset token shalgah aldaa garsan", error);
  }
};

export const updateUser = async (req: Request, res: Response) => {
  const { id } = req.params;
  const updatedUser = await User.findByIdAndUpdate(id, req.body, { new: true });
  res.status(200).json({
    message: "Хэрэглэгчийн мэдээлэл амжилттай шинэчлэгдлээ",
    updatedUser,
  });
};
