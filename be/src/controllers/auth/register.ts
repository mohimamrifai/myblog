import { Request, Response } from "express";
import responseJson from "../../utils/responseJson";
import { PrismaClient } from "@prisma/client";
import bcrypt from "bcrypt";
import validateImage from "../../utils/validateImage";
import jwt from "jsonwebtoken";

const prisma = new PrismaClient();

export async function register(req: Request, res: Response) {
  const secretKey =
    process.env.PRIVATE_KEY_TOKEN ||
    "dsadsdvdsfvjhdsbfvdsfvbhdfbsdhjafdshvbfhdsafvk";
  try {
    const { username, email, password } = req.body;
    const avatar = req.file;

    // cek email apakah sudah terdaftar atau belum
    const isUserExist = await prisma.user.findUnique({
      where: { email: email },
    });

    if (isUserExist) {
      return responseJson(res, 400, "User already exist");
    }

    // hash password
    const passwordHashed = await bcrypt.hash(password, 10);

    // cek avatar apakah gambar
    const isValidAvatar = await validateImage(avatar);
    if (!isValidAvatar) {
      return responseJson(
        res,
        400,
        "Invalid file type. Only PNG, WebP, and JPEG images are allowed."
      );
    }

    const avatarPath = Date.now() + "_" + avatar?.originalname;
    // store ke database
    await prisma.user.create({
      data: {
        username: username,
        email: email,
        password: passwordHashed,
        avatar: avatarPath,
      },
    });

    // create token
    const token = jwt.sign({ username, email }, secretKey, { expiresIn: "1h" });

    return responseJson(res, 200, "Registered Successfully", token);
  } catch (error) {
    return responseJson(res, 400, "bad request");
  }
}
