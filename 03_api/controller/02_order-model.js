const mongoose = require('mongoose')
const Product = require('../model/02_order')


exports.getOrders = async (req, res, next) => {
    try {
        const products = await Product.find()
        res.status(200).json({
            msg: "All documents fetched successfully",
            data: products
        })
    } catch (err) {
        res.status(501).json({
            code: 0,
            msg: "Something went wrong",
            err: err
        })
    }
}

//Get single Product
exports.getOrderById = async (req, res, next) => {
    try {
        const products = await Product.findById(req.params.productId)
        let msg = ""
        if (products === null) {
            msg = "No document fetched"
        } else {
            msg = "Single document fetched successfully"
        }
        res.status(200).json({
            message: msg,
            data: products
        })
    } catch (err) {
        res.status(501).json({
            code: 0,
            msg: "Something went wrong",
            err: err
        })
    }
}


exports.createOrder = async (req, res, next) => {
    try {
        const product = new Product({
            _id: new mongoose.Types.ObjectId(),
            team: req.body.team,
            date: req.body.date
        })

        const data = await product.save()
        res.status(200).json({
            create: "Product created successfully",
            product: data
        })
    } catch (err) {
        res.status(200).json({
            code: 0,
            msg: "Something went wrong",
            err: err
        })
    }
}

//Update Product

exports.updateOrder = async (req, res, next) => {
    try {
        const data = await Product.findByIdAndUpdate(req.params.productId, req.body)
        res.status(200).json({
            msg: "Product updated successfully",
            product: data
        })
    } catch (err) {
        res.status(501).json({
            code: 0,
            msg: "Something went wrong",
            err: err
        })
    }
}

//Delete
exports.deleteOrder = async (req, res, next) => {
    try {
        const data = await Product.findByIdAndDelete(req.params.productId)
        res.status(200).json({
            msg: "Product deleted successfully",
            product: data
        })
    } catch (err) {
        res.status(501).json({
            code: 0,
            msg: "Something went wrong while deleting",
            err: err
        })
    }
}