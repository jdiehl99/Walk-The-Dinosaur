const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const exphbs = require("express-handlebars");

const app = express();
const PORT = process.env.PORT || 4100;

app.use(bodyParser.urlencoded({extended: true }));
app.use(bodyParser.json());
app.use(express.static(__dirname, + '/public'));

var dinos = require("./dinosaur.js");

app.listen(PORT, function() {
    console.log("app listining on PORT " + PORT);
});