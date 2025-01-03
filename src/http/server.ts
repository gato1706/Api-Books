import fastify from 'fastify'
import { createBook } from './routes/create-book'
import { getBooks } from './routes/get-books'
import { updateBook } from './routes/update-book'
import { deleteBook } from './routes/delete-book'
const app = fastify()


app.register(createBook)
app.register(getBooks)
app.register(updateBook)
app.register(deleteBook)

app.get('/', (req, res)=>{
    return res.send('endpoint home')
})

app.listen({
    host: '0.0.0.0.',
    port: 5432
}).then(()=>{
    console.log('server is running...')
})