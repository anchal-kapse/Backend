const mongoose = require('mongoose')
const MemData = require('../model/04_memdata')


exports.getMemData = async (req, res, next) => {
    try {
        const products = await MemData.find()
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
exports.getMemDataById = async (req, res, next) => {
    try {
        const mems = await MemData.findById(req.params.productId)
        let msg = ""
        if (mems === null) {
            msg = "No document fetched"
        } else {
            msg = "Single document fetched successfully"
        }
        res.status(200).json({
            message: msg,
            data: mems
        })
    } catch (err) {
        res.status(501).json({
            code: 0,
            msg: "Something went wrong",
            err: err
        })
    }
}


exports.createMemData = async (req, res, next) => {
    try {
        const mem = new MemData({
            _id: new mongoose.Types.ObjectId(),
            fname: req.body.fname,
            email: req.body.email,
            city: req.body.city
        })

        const data = await mem.save()
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

exports.updateMemData = async (req, res, next) => {
    try {
        const data = await MemData.findByIdAndUpdate(req.params.productId, req.body)
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
exports.deleteMemData = async (req, res, next) => {
    try {
        const data = await MemData.findByIdAndDelete(req.params.productId)
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