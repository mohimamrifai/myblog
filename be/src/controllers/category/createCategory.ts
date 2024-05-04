import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";
import responseJson from "../../utils/responseJson";
import { createSlug } from "../../utils/createSlug";

const prisma = new PrismaClient();

export async function CreateCategory(req: Request, res: Response) {
  try {
    const { name } = req.body;
    const slug = await createSlug(name)
    await prisma.category.create({
        data: {
            name: name,
            slug: slug
        }
    })
    await prisma.$disconnect;
    return responseJson(res, 200, "successfully created a new category");
  } catch (error) {
    console.log(error);
    await prisma.$disconnect;
    return responseJson(res, 400, "bad request");
  }
}
