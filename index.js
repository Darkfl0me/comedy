const https = require('https')
const http = require('http')
const fs = require('fs')
const express = require('express')
const app = express()
const mongoose = require('mongoose')
const db = mongoose.connection
const jokes = require('./routes/jokes')
const config = require('./config').get(process.env.NODE_ENV)

const credintials = {
    key: fs.readFileSync('./cert/server.key'),
    cert: fs.readFileSync('./cert/server.cert')
}

app.use(express.urlencoded({extended: false}))

app.use('/api/v1', jokes)

app.use((req, res) => {
    res.status(404).json({status: 404, message: "Not found"})
})

// const server = https.createServer(credintials, app)

const server = http.createServer(app)
server.listen(config.port, () => {
    console.log('Server is listening on', config.port)
})

mongoose.connect(config.database, {useNewUrlParser: true})
    .then(() => console.log('we are connected'))
    .catch(err => console.log(err))

