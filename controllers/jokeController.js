const mongoose = require('mongoose')
const JokeModel = require('../models/jokeSchema')
const util = require('../libs/utility')

let getJokes = (req, res) => 
    new Promise((resolve, reject) => {
        JokeModel.find()
            .byCategory(req.query)
            .includes(req.query.inc)
            .lean()
            .then(jokesList => {
                resolve(jokesList)
            })
            .catch(err => {
                let error = util.generateError(500, 'Internal server error')
                reject(error)
            })        
    })


let postJokes = (req, res) => 
    new Promise((resolve, reject) => {
        let title = req.body.title
        let jokeBody = req.body.jokeBody
        let category = req.body.category
        let newJoke = new JokeModel({
            title: title,
            jokeBody: jokeBody,
            category: category
        })
        newJoke.save()
            .then(joke => resolve(joke))
            .catch(err => {
                console.log(err)
                let error = util.generateError(500, 'Internal server error')
                reject(error)
            })
    })

let removeJoke = (req, res) =>
    new Promise((resolve, reject)  => {
        let id = req.body.id
        JokeModel.findByIdAndDelete(id)
            .then(joke => resolve(joke))
            .catch(err => reject(err))
    })

module.exports = {
    getJokes,
    postJokes,
    removeJoke
}