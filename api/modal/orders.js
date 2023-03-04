const mongoose = require('mongoose')

const schema = mongoose.Schema

const orderSchema = schema({


    _id: schema.Types.ObjectId,
    name: { type: String, require: true },
    price: { type: String, require: true }

})

module.exports = mongoose.model("Order", orderSchema)