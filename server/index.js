const express = require("express");
const bodyParser = require("body-parser");
const PORT = process.env.PORT || 3000;

const app = express();

app.use(bodyParser.urlencoded({extended: false}));
app.use('/', express.static('client'));

app.listen(PORT, () => console.log("Server started on port 3000"));