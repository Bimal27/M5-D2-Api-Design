import express from 'express';
import cors from 'cors';
import listEndpoints from 'express-list-endpoints';

const server = express()

server.use(cors())

server.use(express.json())
const port = 3002

server.listen(port , ()  =>{
    console.log(`server running on port ${port}`)
})