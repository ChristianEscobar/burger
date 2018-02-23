const express = require("express");
const burger = require("../models/burger");

const router = express.Router();

router.get("/", (req, res) => {
	burger.selectAll()
		.then((result) => {
			const burgersObj = {
				burgers: result[0]
			};
			res.render("index", burgersObj);
		});
});

router.post("/", (req, res) => {
	burger.insertOne(req.body.burgerDescription, false)
		.then((result) => {
			res.redirect("/");
		});
});

router.put("/burger", (req, res) => {

	/*
	burger.updateOne(req.body.burgerName, req.body.devoured)
		.then((result) => {
			res.json(result);
		});
		*/
});

module.exports = router;