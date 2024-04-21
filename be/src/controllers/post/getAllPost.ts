import { Request, Response } from 'express'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export async function allPost(req: Request, res: Response) {
    try {
        const users = await prisma.post.findMany({
            include: {category: true}
        })
        res.json({
            status: 200,
            message: "success",
            data: users
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