import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";
import responseJson from "../../utils/responseJson";

const prisma = new PrismaClient();

export async function categoryById(req: Request, res: Response) {
  try {
    const id = req.params.id;
    const category = await prisma.category.findFirst({
      where: { id: id },
    });
    if (!category) {
      return responseJson(res, 200, "success", category);
    }
    await prisma.$disconnect;
    return responseJson(res, 200, "success", category);
  } catch (error) {
    console.log(error);
    await prisma.$disconnect;
    return responseJson(res, 400, "bad request");
  }
}
