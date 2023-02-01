const express = require("express");
const bodyParser = require("body-parser");
const User = require("./users");
const path = require("path");
const PORT = process.env.PORT || 3000;

const app = express();

app.use(express.static(path.join(__dirname, "/client")));
app.use(bodyParser.urlencoded({extended: false}));

// Routes
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, 'client/views/register.html'));
});


app.listen(PORT, () => console.log("Server started on port 3000"));