require('dotenv').config()

const http = require('http')
const app=require('./app')
const mongoose = require('mongoose')


const port = process.env.port
const host = process.env.host

// const server = http.createServer((res, req) => {
//     if (req.url == "/") {
//         res.write("hi")
//         res.end()
//     }    
// })
const server=http.createServer(app)
server.listen(port, () => {
    console.log(`server started on ${host}:${port}`)
})