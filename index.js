require('dotenv').config()
const express = require('./express')
const config = require('./config')
const db = require('./db/index')

const startServer = () => {
    const app = express.createServer();

    app.listen(config.port, () => {
        console.log(`App started at port ${config.port}`)
    })
}

startServer();






