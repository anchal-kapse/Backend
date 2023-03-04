const mongoose = require('mongoose')
const Product = require('../model/06_signup')


exports.getSignupData = async (req, res, next) => {
    try {
        const products = await Product.find()
        res.status(200).json({
            msg: "All Data fetched successfully",
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
exports.getSignupDataById = async (req, res, next) => {
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


exports.createSignupData = async (req, res, next) => {
    try {
        const product = new Product({
            _id: new mongoose.Types.ObjectId(),
            email: req.body.email,
            password: req.body.password
        })

        const data = await product.save()
        res.status(200).json({
            create: "Data created successfully",
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

exports.updateSignupData = async (req, res, next) => {
    try {
        const data = await Product.findByIdAndUpdate(req.params.productId, req.body)
        res.status(200).json({
            msg: "Data updated successfully",
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
exports.deleteSignupData = async (req, res, next) => {
    try {
        const data = await Product.findByIdAndDelete(req.params.productId)
        res.status(200).json({
            msg: "Data deleted successfully",
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