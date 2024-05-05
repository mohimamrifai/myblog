import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";
import responseJson from "../../utils/responseJson";

const prisma = new PrismaClient();

export async function getProfile(req: Request, res: Response) {
  try {
    const id = req.params.id;

    const user = await prisma.user.findFirst({
      where: { id: id },
      select: { id: true , username: true, email: true, avatar: true}
    });

    await prisma.$disconnect;
    return responseJson(res, 200, "success", user);
  } catch (error) {
    console.log(error);
    await prisma.$disconnect;
    return responseJson(res, 400, "bad request");
  }
}
