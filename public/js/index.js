const socket = io();

socket.on("connect", () => {
    console.log("connected to server");
    socket.emit("createMessage", {
        from: "jan@example.com",
        text: "Hi, it is endrew"
    })
});

socket.on("newMessage", (message) => {
    console.log(message);
})

socket.on("disconnect", () => {
    console.log("disconnected from server");
});


