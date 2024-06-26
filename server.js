const express = require('express');
const app = express();
const http = require('http').createServer(app);
const io = require('socket.io')(http);

app.use(express.static('public'));

io.on("connection", (socket) => {
    console.log("Connected to client....")
    
    socket.on('newMessage', (message) => {
        console.log('new message : ', message)
        io.emit('newMessage', message)
    })
    
    socket.on("disconnect", () => {
        console.log('Disconnected from client....')
        })

})
    

http.listen(3000, () => {
    console.log("server on!!")
    console.log("http://localhost:3000/")
})