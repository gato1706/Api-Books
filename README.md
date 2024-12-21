# Api REST Books
## Aplicação de CRUD de livros 
### Projeto desenvolvido com uma aula do @William Faria do canal William Faria | Dev
##### Link da Aula: https://youtu.be/E6mZSJFozvM?si=Mbsupoc12Nqq-ymG

## Sobre o Projeto

Este projeto é uma API REST desenvolvida com **Node.js** e **TypeScript**, utilizando o framework **Fastify**, **Zod** para validação de dados, e o ORM **Prisma** para facilitar a interação com o banco de dados.
 O banco de dados **PostgreSQL** foi hospedado gratuitamente no **Neon Console**, e a API foi Hospedada no **Render** também gratuitamente

## Tecnologias Utilizadas:

- TypeScript
- PostgreSQL
- Prisma
- Zod
- Fastify


Este projeto contribuiu significativamente para o meu aprendizado em **TypeScript**, **Prisma** e **Zod**. Durante o processo de desenvolvimento, segui a aula que me ajudou a entender os principais conceitos dessas tecnologias, permitindo aprimorar minhas habilidades e explorar funcionalidades adicionais


### Esta Api está disponivel no endereço: https://api-books-3cic.onrender.com

## Endpoints:

### Como a Api já esta no ar, utilize uma ferramenta de teste de requisições como o **Insomnia** ou o **Postman**.

### Listar todos os livros
- Método: **GET**
- Rota: /books
- Descrição: Retorna todos os livros no banco de dados.

### Listar um único livro por Id
- Método: **GET**
- Rota: /books/:bookId  (id do livro)
- Descrição: Retorna um unico livro e seus detalhes.

### Cadastrar um livro
- Método: **POST**
- Rota: /books
- Descrição: cadastre um novo livro no banco de dados
- Vá no **Body** e Coloque o formato **JSON**  
  A estrutura do corpo da requisição é assim:
    
  &nbsp;&nbsp;{  
   &nbsp;&nbsp;&nbsp;&nbsp;"title": "(título do livro)",  
   &nbsp;&nbsp;&nbsp;&nbsp;"author": "(autor do livro)",  
   &nbsp;&nbsp;&nbsp;&nbsp;"description": "(descrição do livro)"  
  &nbsp;&nbsp;}






