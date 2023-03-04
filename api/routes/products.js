// const express = require('express')
// const router = express.Router()

// const mongoose = require('mongoose')
// const Product=require('../modal/product')
// const productController=require('../controller/product-model')

// router.get('/', (req, res, next) => {
//     res.status(200).json({
//         msg: "Get Product"
//     })
// })

// router.post('/', productController.createProduct
// // (req, res, next) => {

//     // const product={
//     //     name:req.body.name,
//     //     price:req.body.price
//     // }


//     // res.status(200).json({
//     //     msg:"Post Product",
//     //     create:"Product created successfully",
//     //     product:product
//     // })

//     // const product = new product({
//     //     _id: new mongoose.Types.ObjectId(),
//     //     name: req.body.name,
//     //     price: req.body.price
//     // })

   
//     // product.save().then((res) => {
//     //     console.log(res)
//     // }).catch((err) => {
//     //     console.log(err)
//     // })

//     // res.status(200).json({
//     //     create: "Product created successfully",
//     //     product: product
//     // })
// // }
// )

// // router.get('/:productId',(req,res,next)=>{
// //     res.status(200).json({
// //         msg:"Single Product"
// //     })
// // })

// router.get('/:productId', (req, res, next) => {
//     const id = req.params.productId

//     if (id == "8") {
//         res.status(200).json({
//             msg: "Cashback"
//         })
//     }
//     else {
//         res.status(200).json({
//             msg: "Soory"
//         })
//     }

// })

// router.put('/:productId', (req, res, next) => {
//     const id = req.params.productId

//     res.status(200).json({
//         msg: "Put Product",
//         id: id
//     })

// })


// router.delete('/:productId', (req, res, next) => {
//     const id = req.params.productId

//     res.status(200).json({
//         msg: "Delete Product",
//         id: id
//     })

// })

// module.exports = router