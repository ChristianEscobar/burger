const express = require("express");
const methodOverride = require("method-override");
const bodyParser = require("body-parser");
const routes = require("./controllers/burgers_controller");
const path = require("path");

// Express and Port
const app = express();
const port = process.env.PORT || 3000;

// Middleware
app.use(express.static(path.join(__dirname, "public")));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

// Override with POST having ?_method=DELETE
app.use(methodOverride("_method"));

// Set Handlebars.
const exphbs = require("express-handlebars");
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Routes
app.use("/", routes);

// Listen
app.listen(port, () => {
	console.log("Server started, listening on port " + port);
})

