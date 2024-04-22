import { Request, Response } from 'express'
import { PrismaClient } from '@prisma/client'
import responseJson from '../../utils/responseJson'

const prisma = new PrismaClient()

export async function allPost(req: Request, res: Response) {
    try {
        const posts = await prisma.post.findMany({
            include: {category: true}
        })
        await prisma.$disconnect
        return responseJson(res, 200, "success", posts)
    } catch (error) {
        console.log(error)
        await prisma.$disconnect
        return responseJson(res, 400, "bad request")
    }
}