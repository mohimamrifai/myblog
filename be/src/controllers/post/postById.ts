import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";
import responseJson from "../../utils/responseJson";

const prisma = new PrismaClient();

export async function postById(req: Request, res: Response) {
  try {
    const post = await prisma.post.findFirst({
      where: {
        id: req.params.id,
      },
      include: {
        author: {
          select: {
            id: true,
            username: true,
            email: true 
          }
        },
        category: {
          select: {
            id: true,
            name: true,
            slug: true
          }
        }
      }
    });
    if (!post) {
      await prisma.$disconnect;
      return responseJson(res, 404, "Post Not Found");
    }
    await prisma.$disconnect;
    return responseJson(res, 200, "success", post)
  } catch (error) {
    console.log(error);
    await prisma.$disconnect;
    return responseJson(res, 400, "bad request")
  }
}
