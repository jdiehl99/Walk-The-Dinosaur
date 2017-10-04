const express = require("express");
const path = require("path");

const app = express();

var dinoLeft = [];
var dinoRight = [];

function apiStuff(app, __dirname) {
    const dino1 = require("./../data/newDino.js");
    const dino2 = require("./../data/walkedDino.js");

    //  add new dino to left array
    app.post("/dino/new", function (req, res) {

        // take user dinosaur and puts it into left array
        var formData = req.body;
        dinoLeft.push(formData);
        res.json(dinoLeft);

    });

    //  move dino to right array
    // app.post("/dino/done", function (req, res) {

    //     // take user inputs and shove them into an array
    //     var formData = req.body;
    //     console.log("form data", formData);
    //     dino2.push(formData);

    // });
}

module.exports = apiStuff;