const jwt = require('jsonwebtoken')
const User = require('../models/userSchema')
const config = require('../config').get(process.env.NODE_ENV)
const util = require('../libs/utility')

let isAuthenticated = (req, res) => 
    new Promise(async (resolve, reject) => {
        if(!req.get('authorization')) {
            let error = util.generateError(401, 'Unauthorized')
            reject(error)
        }
        else {
            let header = req.get('authorization').split(' ')
            let token = header[1]
            console.log('hello')
            try {
                let decoded = jwt.verify(token, config.secret_key)
                let user = await User.findById(decoded.id)
                console.log(user)
                resolve({message: 'Authenicated'})
            } catch(err) {
                let error = util.generateError(403, 'Forbidden')
                reject(error)
            }
        }
          
    })

module.exports = {
    isAuthenticated: isAuthenticated
}