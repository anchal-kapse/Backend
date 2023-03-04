const mongoose = require('mongoose')
const Schema = mongoose.Schema

const memSchema = Schema({
    _id: Schema.Types.ObjectId,
    fname: { type: String, require: true },
    lname: { type: String, require: true },
    email: { type: String, require: true },
    password: { type: String, require: true },
    mobno: { type: String, require: true },
    city: { type: String, require: true },
    id: { type: String, require: true }
})

module.exports = mongoose.model("Member", memSchema)