const express = require('express')
const router = express.Router()

const Product = require('../model/05_livescore')
const productController=require('../controller/05_livescore-model')
const mongoose = require('mongoose')


router.get('/', productController.getLiveData
// (req, res, next) => {
//     res.status(200).json({
//         msg: "This is a GET request for product"
//     })
// }
)

//code for product POST request
router.post('/', productController.createLiveData
// (req, res, next) => {


    // const product = {
    //     name: req.body.name,
    //     price: req.body.price
    // }

    // res.status(200).json({
    //     msg: "This is a POST request for product",
    //     create: "Product created successfully",
    //     product: product
    // })


    //Build const using product
//     const product = new Product({
//         _id: new mongoose.Types.ObjectId(),
//         name: req.body.name,
//         price: req.body.price
//     })


//     //save the const
//     product.save().then((res) => {
//         console.log(res)
//     }).catch((err) => {
//         console.log(err)
//     })

//     res.status(200).json({
//         create: "Product created successfully",
//         product: product
//     })

// }
)

// router.get('/:productId', (req, res, next) => {
//     res.status(200).json({
//         msg: "This is a GET request for product"
//     })
// })


router.get('/:productId', productController.getLiveDataById
//  (req, res, next) => {

//     const id = req.params.productId
//     if (id == "7") {
//         res.status(200).json({
//             msg: "You have a regular id with good cashback"
//         })
//     } else {
//         res.status(200).json({
//             msg: "You have a regular id with no cashback"
//         })
//     }
// }
)


router.put('/:productId', productController.updateLiveData
// (req, res, next) => {
//     const id = req.params.productId
//     res.status(200).json({
//         msg: "This is a PUT request for product",
//         id: id
//     })
// }
)

router.delete('/:productId', productController.deleteLiveData
//  (req, res, next) => {
//     const id = req.params.productId
//     res.status(200).json({
//         msg: "This is a DELETE request for product",
//         id: id
//     })
// }
)


module.exports = router