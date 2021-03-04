const express = require("express");
const router = express.Router();
const postgres = require("../postgres.js");

router.get("/", (req, res) => {
	postgres.query("SELECT * FROM people ORDER BY id ASC;", (err, results) => {
		console.log(results);
		// testing again
		res.json(results.rows);
	});
});



module.exports = router;
