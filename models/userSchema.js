const mongoose = require('mongoose')
const shortid = require('shortid')
const Schema = mongoose.Schema

let userSchema = new Schema({
    _id : {
        type: String,
        default: shortid.generate 
    }
})

module.exports = mongoose.model('User', userSchema)