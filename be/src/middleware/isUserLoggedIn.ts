import { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";
import responseJson from "../utils/responseJson";

export async function isUserLoggedIn(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const token = req.headers.authorization?.split(" ")[1] || "";
  if (!token) {
    return responseJson(res, 401, "No token provided, authorization denied");
  }
  const secretKey =
    process.env.PRIVATE_KEY_TOKEN ||
    "dsadsdvdsfvjhdsbfvdsfvbhdfbsdhjafdshvbfhdsafvk";

  try {
    const isValid = await jwt.verify(token, secretKey);
    if (!isValid) {
      return responseJson(res, 401, "401 Unauthorized");
    }
    next();
  } catch (error) {
    return responseJson(res, 401, "401 Unauthorized");
  }
}
