const express = require("express");
const path = require("path");
const fs = require("fs");

const app = express();

var dinoLeft = [];
var dinoRight = [];

function apiStuff(app, __dirname) {

    //  add new dino to left array
    app.post("/dino/new", function (req, res) {
        // take user dinosaur and puts it into left array
        var dinoname = req.body.dinonew;
        // adds new dino to left array
        dinoLeft.push({dinoName: dinoname});
        // returns left array
        res.redirect("/");

    });

    // move dino to right array
    app.post("/dino/done", function (req, res) {
        // walks the dino and moves to right array
        var mydino = req.body.dinoName;
        var dinoID = req.body.id;
        dinoRight.push({dinoName: mydino});
        // removes dino from left array
        dinoLeft.splice(dinoID, 1);
        // returns both arrays 
        res.redirect("/");
    });

    app.get("/", function(req,res) {
        res.render("index", { sdinoLeft: dinoLeft, sdinoRight: dinoRight });
    });
}

module.exports = apiStuff;