const mongoose = require('mongoose')
const Product = require('../model/05_livescore')


exports.getLiveData = async (req, res, next) => {
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
exports.getLiveDataById = async (req, res, next) => {
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


exports.createLiveData = async (req, res, next) => {
    try {
        const product = new Product({
            _id: new mongoose.Types.ObjectId(),
            team_name: req.body.team_name,
            score1: req.body.score1,
            score2: req.body.score2,
            result: req.body.result,
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

exports.updateLiveData = async (req, res, next) => {
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
exports.deleteLiveData = async (req, res, next) => {
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