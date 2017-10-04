var express = require("express");
var path = require("path");

var app = express();

function showPage(app, __dirname) {
    // // show main page
    // app.get("/", function (req, res) {
    //     res.render("index");
    // });


    // temp index page for setup
    app.get("/", function (req, res) {
        res.sendFile(path.join(__dirname, "home.html"));
    });
}

module.exports = showPage;