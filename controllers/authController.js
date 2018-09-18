const util = require('../libs/utility')
const jwt = require('jsonwebtoken')
const User = require('../models/userSchema')
const config = require('../config').get(process.env.NODE_ENV)

let registerUser = (req, res) => 
    new Promise((resolve, reject) => {
        let newUser = new User()
        newUser.save()
            .then(user => {
                let token = jwt.sign({id: user._id}, 
                    config.secret_key, 
                    { expiresIn: '30d'})
                let response = {
                    auth: true,
                    token: token
                }
                resolve(response)
                })
            .catch(err => reject(err))
        })
        
        
module.exports ={
    registerUser: registerUser
}