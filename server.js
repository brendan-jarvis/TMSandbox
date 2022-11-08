const express = require('express')
const path = require('path')
const server = express()

server.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, '/index.html'))
})

module.exports = server
