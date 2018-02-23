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
		}).catch((error) => {
			console.error(error);
		});
});

router.post("/", (req, res) => {
	burger.insertOne(req.body.burgerDescription, false)
		.then((result) => {
			res.redirect("/");
		}).catch((error) => {
			console.error(error);
		});
});

router.put("/:id", (req, res) => {
	burger.updateOne(req.params.id)
		.then((result) => {
			res.redirect("/");
		}).catch((error) => {
			console.error(error);
		});
});

module.exports = router;