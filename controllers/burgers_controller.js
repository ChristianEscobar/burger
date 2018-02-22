const express = require("express");
const burger = require("../models/burger");

const router = express.Router();

router.get("/", (req, res) => {
	burger.selectAll()
		.then((result) => {
			res.render("index");
		});
});

router.post("/burger", (req, res) => {
	burger.insertOne(req.body.burgerName, req.body.devoured)
		.then((result) => {
			res.json(result);
		});
});

router.put("/burger", (req, res) => {
	burger.updateOne(req.body.burgerName, req.body.devoured)
		.then((result) => {
			res.json(result);
		});
});

module.exports = router;