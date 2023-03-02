const WebSocket = require('ws')
const server = new WebSocket.Server({port:'6969'})

server.on('connection', socket=>{
    socket.on('message', message=>{
        socket.send(message)
    })
})