import fastify, { FastifyInstance } from "fastify"
import { prisma } from "../lib/prisma"
import z from "zod"

export async function getBooks(app: FastifyInstance){
    app.get('/books', async(req, res)=>{
        const books = await prisma.book.findMany()

        return res.status(201).send(books)
    })

    app.get('/books/:bookId', async (req, res)=>{
        const getBookParam = z.object({
            bookId: z.string().uuid(),
        })

        const {bookId} = getBookParam.parse(req.params)

        //Para realizar a consulta 
        const book = await prisma.book.findUnique({
            where:{
                id: bookId
            }
        })
        return res.status(200).send(book)

    })
}