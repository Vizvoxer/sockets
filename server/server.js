const express = require("express");
const app = express();
const http = require("http");
const path = require("path");
const publicPath = path.join(__dirname, '/../public');
const port = process.env.PORT || 3000;
const socketIO = require("socket.io");
app.use(express.static("public"));

var server = http.createServer(app);

var io = socketIO(server);

io.on("connection", (socket) => {
    socket.broadcast.emit("userJoin");
    socket.emit("welcome");

    socket.on("createMessage", (message) => {
        io.emit("newMessage", {
            from: message.from,
            text: message.text,
            createdAt: new Date().getTime()
        });
        console.log(message);
    });
    socket.on("disconnect", () => {
        console.log("user was disconected");
    })
});

server.listen(port, () => {
    console.log(`listening on port ${port}`);
});

app.get("/", (req,res) => {
    res.render("index.html");
});