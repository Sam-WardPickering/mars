const express = require('express')
const path = require('path')

const server = express()

const mars = require('./routes/mars')

server.use(express.json())
server.use(express.static(path.join(__dirname, 'public')))

server.use('/api/v1/mars', mars)

module.exports = server
