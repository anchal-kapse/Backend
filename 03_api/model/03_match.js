const mongoose = require('mongoose')
const Schema = mongoose.Schema

const matchSchema = Schema({
    _id: Schema.Types.ObjectId,
    team_score: { type: String, require: true },
    winning_Team: { type: String, require: true },
    player_of_the_match: { type: String, require: true },
    date_of_the_match_played: { type: String, require: true },
    venue: { type: String, require: true },
    id: { type: String, require: true }
})

module.exports = mongoose.model("Match", matchSchema)