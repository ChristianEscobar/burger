const burger = require("../models/burger");

module.exports = (app) => {
	app.get("/", (req, res) => {
		burger.selectAll();

		res.json(true);
	});

	app.post("/burger", (req, res) => {
		burger.insertOne(req.body.burgerName, req.body.devoured);

		res.json(true);
	});

	app.put("/burger", (req, res) => {
		burger.updateOne(req.body.burgerName, req.body.devoured);

		res.json(true);
	});
}
