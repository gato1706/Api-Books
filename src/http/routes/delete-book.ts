import { FastifyInstance } from "fastify"
import z from "zod"
import { prisma } from "../lib/prisma"


export async function deleteBook(app: FastifyInstance){
    app.delete('/books/:bookId',async (req, res)=>{
        const getBookParam = z.object({
            bookId: z.string().uuid()
        })

        const {bookId} = getBookParam.parse(req.params)

        const book = await prisma.book.findUnique({
            where: {
                id: bookId
            }
        })

        if(!book){
            return res.code(404).send('Book Not Found')
        }

        await prisma.book.delete({
            where: {
                id: bookId,
            },
        })

        res.status(204).send()
    })
}