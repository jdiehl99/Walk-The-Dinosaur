const express = require("express");
const path = require("path");
const fs = require("fs");

const app = express();

var dinoLeft = [];
var dinoRight = [];

function apiStuff(app, __dirname) {
    // const dinoLeft = require("./../data/newDino.js");
    // const dinoRight = require("./../data/walkedDino.js");

    //  add new dino to left array
    app.post("/dino/new", function (req, res) {

        // take user dinosaur and puts it into left array
        var formData = req.body;
        // adds new dino to left array
        dinoLeft.push(formData);
        // returns left array
        res.json(dinoLeft);

    });

    // move dino to right array
    app.post("/dino/done", function (req, res) {

        // walks the dino and moves to right array
        var formData2 = req.body;
        dinoRight.push(formData2);
        // captures the index of dino to remove from left array
        var killit = formData2.dinoID;
        // removes dino from left array
        dinoLeft.splice(killit, 1);
        // returns both arrays 
        res.json({ sdinoLeft: dinoLeft,sdinoRight: dinoRight})
    });
}

module.exports = apiStuff;