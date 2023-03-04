// const mongoose = require('mongoose')
// const Product = require('../modal/product')


// exports.getProducts = async(req, res, next) => {
//     try{
//         const products = await Product.find()
//         res.status(200).json({
//             msg: "All documents fetched successfully",
//             data: products
//         })
//     } catch(err){
//         res.status(501).json({
//             code: 0,
//             msg: "Something went wrong",
//             err: err
//         })
//     }
// }


// exports.createProduct = async (req, res, next) => {
//     try {
//         const product = new Product({
//             _id: new mongoose.Types.ObjectId(),
//             name: req.body.name,
//             price: req.body.price
//         })

//         const data =await product.save()
//         res.status(200).json({
//             create:"Product created successfully",
//             product:data
//         })
//     }catch(err){
//         res.status(200).json({
//             code:0,
//             msg:"Something went wrong",
//             err:err
//         })
//     }
// }