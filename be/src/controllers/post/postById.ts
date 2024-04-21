import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function postById(req: Request, res: Response) {
  try {
    const user = await prisma.post.findFirst({
      where: {
        id: req.params.id,
      },
    });
    if (!user) {
      return res
        .json({
          status: 404,
          message: "User not found!",
        })
        .status(404);
    }
    res
      .json({
        status: 200,
        message: "Success",
        data: user,
      })
      .status(200);
    await prisma.$disconnect;
  } catch (error) {
    console.log(error);
    res.json({
      status: 400,
      message: "bad Request",
    });
    await prisma.$disconnect;
  }
}
