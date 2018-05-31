const socket = io();

socket.on("connect", () => {
    console.log("connected to server");
    socket.emit("createMessage", {
        from: "jan@example.com",
        text: "Hi, it is endrew"
    })
});

socket.on("disconnect", () => {
    console.log("disconnected from server");
});

socket.on("newMessage", (email) => {
    console.log("new message", email);
});

