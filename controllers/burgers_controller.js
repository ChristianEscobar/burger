const express = require("express");
const burger = require("../models/burger");

const router = express.Router();

// Get all burgers
router.get("/", (req, res) => {
	burger.selectAll()
		.then((result) => {
			// Create object for view
			const burgersObj = {
				burgers: result[0]
			};

			// Display view
			res.render("index", burgersObj);
		}).catch((error) => {
			console.error(error);
		});
});

// Add a new burger
router.post("/", (req, res) => {
	burger.insertOne(req.body.burgerDescription, false)
		.then((result) => {

			// Reload the index view
			res.redirect("/");
		}).catch((error) => {
			console.error(error);
		});
});

// Update a specific burger
router.put("/:id", (req, res) => {
	burger.updateOne(req.params.id)
		.then((result) => {

			// Reload the index view
			res.redirect("/");
		}).catch((error) => {
			console.error(error);
		});
});

module.exports = router;