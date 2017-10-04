var express = require("express");
var path = require("path");

var app = express();

var dinoToWalk = [];
var dinoWalked = [];

function showPage(app, __dirname) {


    // show main page
    app.get("/", function (req, res) {
        res.render("index", lunches[0]);
    });
    // add new dino to list, left side, dinoToWalk array
    app.get("/dinonew", function (req, res) {
        res.render("dino-new", lunches[0]);
    })
    // move dino to right side, dinoWalked array
    app.get("/dinodone", function (req, res) {
        res.render("dino-done", lunches[0]);
    })
}

module.exports = showPage;