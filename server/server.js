const express = require("express");
const app = express();
app.use(express.static("public"));
const path = require("path");
const publicPath = path.join(__dirname, '/../public');
const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`listening on port ${port}`);
});

app.get("/", (req,res) => {
    res.render("index.html");
});