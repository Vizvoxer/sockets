const express = require("express");
const app = express();
app.use(express.static("public"));
const path = require("path");
const publicPath = path.join(__dirname, '/../public');

app.listen(3000, () => {
    console.log("listening on port 3000");
});

app.get("/", (req,res) => {
    res.render("index.html");
});