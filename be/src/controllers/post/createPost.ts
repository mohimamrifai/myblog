import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";
import { createSlug } from "../../utils/createSlug";
import { calculateReadTime } from "../../utils/calculateReadTime";
import validateThumbnail from "../../utils/validateThumbnail";
import responseJson from "../../utils/responseJson";

const prisma = new PrismaClient();

export async function createPost(req: Request, res: Response) {
  try {
    const { title, excerpt, published, body, category_id, author_id } =
      req.body;
    const file = req.file;
    const thumbnail = Date.now() + "_" + file?.originalname;
    const slug = await createSlug(title);
    const read_time = calculateReadTime(body)
    const isValidThumbnail = await validateThumbnail(file)
    if (!isValidThumbnail) {
      // Tipe mime tidak valid, tanggapi dengan pesan kesalahan
      return res
        .status(400)
        .json({
          status: "Failed",
          message:
            "Invalid file type. Only PNG, WebP, and JPEG images are allowed.",
        });
    }
    await prisma.post.create({
      data: {
        title: title,
        slug: slug,
        thumbnail: thumbnail,
        excerpt: excerpt,
        published: Boolean(published),
        body: body,
        read_time: read_time,
        category_id: category_id,
        author_id: author_id
      },
    });
    await prisma.$disconnect;
    return responseJson(res, 201, "Successfully created a post")
  } catch (error) {
    console.log(error);
    res.json({
      status: 400,
      message: "bad Request",
    });
    await prisma.$disconnect;
  }
}
