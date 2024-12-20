import { FastifyInstance } from "fastify";
import z from 'zod'
import { prisma } from "../lib/prisma";

export async function updateBook (app: FastifyInstance){
    app.patch('/books/:bookId', async(req, res)=>{
        const getBookParam = z.object({
            bookId: z.string().uuid(),
        })

        const getBookBody = z.object({
            isFavorite: z.optional(z.boolean()),
            isReading: z.optional(z.boolean()),
            isFinished: z.optional(z.boolean()),
        })

        const {bookId} = getBookParam.parse(req.params)
        const {isFavorite, isReading, isFinished} = getBookBody.parse(req.body)

        const book = await prisma.book.findUnique({
            where: {
                id: bookId
            }
        })

        if(!book) {
            res.code(404).send('Book Not Found')
        }

        await prisma.book.update({
            where: {
                id: bookId
            },
            data: {
                isFavorite: isFavorite || book?.isFavorite ,
                isReading: isReading || book?.isReading ,
                isFinished: isFinished || book?.isFinished ,
            },
        })

        res.send()
    })  


}