import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";
import responseJson from "../../utils/responseJson";
import { createSlug } from "../../utils/createSlug";

const prisma = new PrismaClient();

export async function updateCategory(req: Request, res: Response) {
  try {
    const id = req.params.id;
    const { name } = req.body;
    const newSlug = await createSlug(name);

    const category = await prisma.category.findFirst({
      where: { id: id },
    });
    if (!category) {
      return responseJson(res, 200, "Category id not found");
    }

    const updatedCategory = await prisma.category.update({
      where: { id: id },
      data: { name: name, slug: newSlug, updatedAt: new Date() },
    });

    await prisma.$disconnect;
    return responseJson(res, 200, "Category Successfully Updated", updatedCategory);
  } catch (error) {
    console.log(error);
    await prisma.$disconnect;
    return responseJson(res, 400, "bad request");
  }
}
