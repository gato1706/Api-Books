import { FastifyInstance } from "fastify";
import {z} from "zod";
import { prisma} from "../lib/prisma"

export async function createBook( app: FastifyInstance){
    app.post('/books', async (require,res)=>{
        
        const createBookBody = z.object({
            title: z.string(),
            author: z.string(),
            description: z.string()
        })

        const {title, author, description}= createBookBody.parse(require.body)

        const book = await prisma.book.create({
            data: {
                title,
                author,
                description
            }
        })

        return res.status(201).send({bookId: book.id})
    })
}