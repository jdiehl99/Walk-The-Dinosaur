const express = require("express");
const path = require("path");

const app = express();

var dinoToWalk = [];
var dinoWalked = [];

function dinoDo(app, __dirname) {
console.log("dino do function called");

    // // show main page
    app.get("/", function (req, res) {
        res.render("index");
    });
//     // add new dino to list, left side, dinoToWalk array
//     app.get("/dinonew", function (req, res) {
//         res.render("dino-new", dinoToWalk);
//     });
//     // move dino to right side, dinoWalked array
//     app.get("/dinodone", function (req, res) {
//         res.render("dino-done", DinoWalked);
//     });
}

module.exports = dinoDo;