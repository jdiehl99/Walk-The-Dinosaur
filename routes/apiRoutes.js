function apiStuff(app, __dirname) {
    const dino1 = require("./../data/newDino.js");
    const dino2 = require("./../data/walkedDino.js");

    //  add new dino to left array
    app.post("/dino/new", function (req, res) {

        // take user inputs and shove them into an array
        var formData = req.body;
        console.log("form data", formData);
        dino1.push(formData);

        $("#dinolist").html('<h2>Dinos to Walk</h2>');
        for (i=0;i<dino1.length;i++) {
            $("#dinolist").append([i] + dino[i][1] + '<button id="donetb" dinodid='+[i]+'">Walk the dinosaur!</button>"');
        }
        

    });

    //  move dino to right array
    app.post("/dino/done", function (req, res) {

        // take user inputs and shove them into an array
        var formData = req.body;
        console.log("form data", formData);
        dino2.push(formData);

    });
}

module.exports = apiStuff;