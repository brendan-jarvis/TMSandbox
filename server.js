const express = require('express')
const hbs = require('express-handlebars')
const server = express()

server.engine('hbs', hbs.engine({ extname: 'hbs' }))
server.set('view engine', 'hbs')

server.get('/hello', (req, res) => {
  res.send('Hello World!')
})

server.get('/', (req, res) => {
  const viewData = {
    messages: [
      {
        content: `Please run the command <code>npm run test</code> to see the tests.`,
      },
    ],
  }

  res.render('home', viewData)
})

module.exports = server
