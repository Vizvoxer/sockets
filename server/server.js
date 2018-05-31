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
    console.log("new user connected");

    socket.emit("newMessage", {
        from: "Mike@example.com",
        text: "What is going on",
        createAt: 123
    });

    socket.on("createMessage", (message) => {
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