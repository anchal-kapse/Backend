const mongoose = require('mongoose')
const Match = require('../model/03_match')


exports.getMatchData = async (req, res, next) => {
    try {
        const matches = await Match.find()
        res.status(200).json({
            msg: "All Data fetched successfully",
            data: matches
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
exports.getMatchDataById = async (req, res, next) => {
    try {
        const matches = await Match.findById(req.params.matchId)
        let msg = ""
        if (matches === null) {
            msg = "No document fetched"
        } else {
            msg = "Single document fetched successfully"
        }
        res.status(200).json({
            message: msg,
            data: matches
        })
    } catch (err) {
        res.status(501).json({
            code: 0,
            msg: "Something went wrong",
            err: err
        })
    }
}


exports.createMatchData = async (req, res, next) => {
    try {
        const match = new Match({
            _id: new mongoose.Types.ObjectId(),
            team_score: req.body.team_score,
            winning_Team: req.body.winning_Team,
            player_of_the_match: req.body.player_of_the_match,
            date_of_the_match_played: req.body.date_of_the_match_played,
            venue: req.body.venue
        })

        const data = await match.save()
        res.status(200).json({
            create: "Data created successfully",
            match: data
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

exports.updateMatchData = async (req, res, next) => {
    try {
        const data = await Match.findByIdAndUpdate(req.params.matchId, req.body)
        res.status(200).json({
            msg: "Data updated successfully",
            match: data
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
exports.deleteMatchData = async (req, res, next) => {
    try {
        const data = await Match.findByIdAndDelete(req.params.matchId)
        res.status(200).json({
            msg: "Data deleted successfully",
            match: data
        })
    } catch (err) {
        res.status(501).json({
            code: 0,
            msg: "Something went wrong while deleting",
            err: err
        })
    }
}