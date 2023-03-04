const mongoose = require('mongoose')
const Schema = mongoose.Schema

const liveSchema = Schema({
    _id: Schema.Types.ObjectId,
    team_name: { type: String, require: true },
    score1: { type: String, require: true },
    score2: { type: String, require: true },
    result: { type: String, require: true }
})

module.exports = mongoose.model("Livescore", liveSchema)