import { NextFunction, request, Request, Response } from "express";
import { decodeToken } from "../utils/jwt";

// interface IMyRequest extends Request {
//   user: string | object;
// }
declare global {
  namespace Express {
    interface Request {
      user: {
        id: string;
        iat: number;
        exp: number;
      };
    }
  }
} //global bga inteface oorcloh gej bn

export const auth = (req: Request, res: Response, next: NextFunction) => {
  if (!req.headers.authorization) {
    return res
      .status(400)
      .json({ message: "Энэ үйлдэл хийхийг тулд нэвтэрнэ үү" });
  }
  const token = req.headers.authorization.split(" ")[1];
  console.log("first", token);

  const user = decodeToken(token);

  req.user = user;
  next();
};
