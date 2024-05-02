import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";
import responseJson from "../../utils/responseJson";
import jwt from "jsonwebtoken";

const prisma = new PrismaClient();

export async function login(req: Request, res: Response) {
  const secretKey =
    process.env.PRIVATE_KEY_TOKEN ||
    "dsadsdvdsfvjhdsbfvdsfvbhdfbsdhjafdshvbfhdsafvk";
  try {
    const { email, password } = req.body;
    // cek apakah email yang di gunakan sudah terdaftar
    const user = await prisma.user.findFirst({
      where: { email: email },
    });

    if (!user) {
      return responseJson(res, 400, "Email atau Password salah");
    }

    // cek password apakah sama dengan yang di database
    const isValidPassword = password === user.password;
    if (!isValidPassword) {
      return responseJson(res, 400, "Email atau Password salah");
    }

    const token = jwt.sign(user, secretKey, { expiresIn: "1h" });

    await prisma.$disconnect;
    return responseJson(res, 200, "success", token);
  } catch (error) {
    console.log(error);
    await prisma.$disconnect;
    return responseJson(res, 400, "bad request");
  }
}
