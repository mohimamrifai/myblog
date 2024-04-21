import { Request, Response } from 'express'
import { PrismaClient } from '@prisma/client'
import responseJson from '../../utils/responseJson'

const prisma = new PrismaClient()

export async function allCategories(req: Request, res: Response) {
    try {
        const categories = await prisma.category.findMany()
        await prisma.$disconnect
        return responseJson(res, 200, "success", categories)
    } catch (error) {
        console.log(error)
        await prisma.$disconnect
        return responseJson(res, 400, "bad request")
    }
}