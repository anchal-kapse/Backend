// const express=require('express')
// const app=express()

// // app.use((req,res,next)=>{
// //    res.status(200).json({
// //     msg:"This is a simple get request"
// //    }) 
// // })
// const mongose  = require('mongoose')

// const productRouter=require('./api/routes/products')
// const orderRouter=require('./api/routes/order')

// //connect to mongo database 
// const connectionString = "mongodb+srv://fbs:12345@cluster0.oafr1ws.mongodb.net/test"
// mongose.connect(connectionString)

// //morgan
// const morgan=require('morgan')

// //body-parser
// const bodyParser=require('body-parser')
// const { default: mongoose } = require('mongoose')
// app.use(bodyParser.urlencoded({extended:true}))
// app.use(bodyParser.json({extended:true}))

// app.use(morgan("dev"))

// app.use('/products',productRouter)
// app.use('/order',orderRouter)
// module.exports=app