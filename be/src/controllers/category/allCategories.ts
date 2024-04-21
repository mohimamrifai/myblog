import { Request, Response } from 'express'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export async function allCategories(req: Request, res: Response) {
    try {
        const categories = await prisma.category.findMany()
        res.json({
            status: 200,
            message: "success",
            data: categories
        }).status(200)
        await prisma.$disconnect
    } catch (error) {
        console.log(error)
        res.json({
            status: 400,
            message: "bad Request"
        });
        await prisma.$disconnect
    }
}