const _ = require('lodash')
const shortid = require('shortid')
const mongoose = require('mongoose')
const Schema = mongoose.Schema

let jokeSchema = new Schema({
    _id: {
        type: String,
        default: shortid.generate
    },
    title: {
        type: String,
        required: '{PATH} is required'
    },
    jokeBody: {
        type: String,
        required: true
    },
    category: {
        type: [String],
        required: true,
        enum: ['Insult', 
            'Dirty', 
            'Work', 
            'Marraige', 
            'Sarcasm', 
            'Miscellaneous'
        ],
        default: ['Miscellaneous']
    }
})

jokeSchema.query.byCategory = function(query) {
    return _.has(query, 'cat') ? this.where({category: query.cat}) : this 
}

jokeSchema.query.includes = function(query) {
    let fields = ''
    if(_.isNil(query) || !_.isEqual(query, 'id')) {
        fields = '-_id -__v'
    } else {
        fields = '-__v'
    }
    return this.select(fields)
}

module.exports = mongoose.model('Joke', jokeSchema)