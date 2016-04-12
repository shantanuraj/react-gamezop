/**
 * Server configuration
 */

const Path      = require('path')

const Server    = require('hapi').Server
const Inert     = require('inert')
const H2o2      = require('h2o2')

const server    = new Server()

server.connection({ port: '8899' })

server.register([Inert, H2o2], (err) => {
    if (err) {
        throw err
    }
})

server.route({
    method: 'GET',
    path: '/{p*}',
    handler: {
        directory: {
            path: Path.join(__dirname, 'src')
        }
    }
})

server.route({
    method: 'GET',
    path: '/api/initial',
    handler: {
        proxy: {
            uri: 'https://mario.gamezop.io/v1/games/initial?deviceId=120'
        }
    }
})

server.start((err) => {
    if (!err) {
        console.log(`Server up at ${server.info.uri}`)
    }
})
