import express from 'express'

const server = express()
const port = 3002

server.listen(port , ()  =>{
    console.log(`server running on port ${port}`)
})