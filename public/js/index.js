const socket = io();
let messages = document.querySelector(".messages");
let input = document.querySelector(".message");
let nickname = document.querySelector(".nickname");

const submit = document.querySelector(".send");
function createMessage(message) {
    let li = document.createElement("li");
    let from = document.createElement("span");
    from.innerHTML = `<strong>${message.from}: </strong>`;
    let targetText = document.createElement("span");
    targetText.innerText = `${message.text}`;
    li.appendChild(from);
    li.appendChild(targetText);
    messages.appendChild(li);
}

submit.addEventListener("click", () => {
    let value = input.value;
    socket.emit("createMessage", {
        from: nickname.value.length? nickname.value : "anonymous",
        text: value});
    input.value = "";
});
socket.on("connect", () => {
    console.log("connected to server");
});

socket.on("newMessage", (message) => {
    createMessage(message);
})

socket.on("disconnect", () => {
    console.log("disconnected from server");
});


