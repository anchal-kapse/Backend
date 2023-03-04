const mongoose = require('mongoose')
const Schema = mongoose.Schema

const orderSchema = Schema({
    _id: Schema.Types.ObjectId,
    team: { type: String, require: true },
    date: { type: String, require: true }
})

module.exports = mongoose.model("Order", orderSchema)