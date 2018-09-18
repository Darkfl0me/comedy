require('dotenv').config()

let config = {
    production: {
        port: process.env.PORT,
        secret_key: process.env.SECRET_KEY,
        database: process.env.MONGODB_URI
    },
    default: {
        port: 3000,
        secret_key: 'supersecret',
        database: 'mongodb://127.0.0.1:27017/demoDb'
    }
}

module.exports.get = function(env) {
    return config[env] || config.default
}