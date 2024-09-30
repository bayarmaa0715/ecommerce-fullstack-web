import nodemailer from "nodemailer";
import { generateHTML } from "./generateHTML";

const transporter = nodemailer.createTransport({
  service: "Gmail",
  host: "smtp.gmail.com",
  secure: true,
  port: 465,
  auth: {
    user: "bayrmaa.m49@gmail.com",
    pass: "impb rkzu fjkz iijz",
  },
});

export const sendEmail = async (email: string, otp: string) => {
  return await transporter.sendMail({
    from: "bayrmaa.m49@gmail.com", // sender address
    to: email, // list of receivers
    subject: "iii ii bayrmaa bn 👻 Баярмаа тест имэйл ✔", // Subject line
    text: "Hello world? iii ii bayrmaa bn 👻", // plain text body
    html: generateHTML(otp), // html body
  });
};
