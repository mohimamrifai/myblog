import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";
import responseJson from "../../utils/responseJson";

const prisma = new PrismaClient();

export async function postById(req: Request, res: Response) {
  try {
    const user = await prisma.post.findFirst({
      where: {
        id: req.params.id,
      },
    });
    if (!user) {
      await prisma.$disconnect;
      return responseJson(res, 404, "User not found");
    }
    await prisma.$disconnect;
    return responseJson(res, 200, "success", user)
  } catch (error) {
    console.log(error);
    await prisma.$disconnect;
    return responseJson(res, 400, "bad request")
  }
}
