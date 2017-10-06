const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const exphbs = require("express-handlebars");

const app = express();
const PORT = process.env.PORT || 4100;

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

app.use(bodyParser.urlencoded({extended: true }));
app.use(bodyParser.json());
app.use(express.static(__dirname, + '/public'));

// var dinoNew = require("./data/newDino.js");

// var dinoDone = require("./data/walkedDino.js");
// dinoDone(app, __dirname);

var apiRoutes = require("./routes/apiRoutes.js");
apiRoutes(app, __dirname);

var htmlRoutes = require("./routes/htmlRoutes.js");
htmlRoutes(app, __dirname);

app.listen(PORT, function() {
    console.log("app listening on PORT " + PORT);
});