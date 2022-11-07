const server = require('./server')

const PORT = 3000

server.listen(PORT, () => {
  'Server is up on port', PORT
})
