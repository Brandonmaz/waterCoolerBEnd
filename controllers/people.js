const express = require("express");
const router = express.Router();
const postgres = require("../postgres.js");

router.get("/", (req, res) => {
<<<<<<< HEAD
  postgres.query("SELECT * FROM people ORDER BY id ASC;", (err, data) => {
    console.log(data);
    // testing again 
    res.json(data.rows);
  });
=======
	postgres.query("SELECT * FROM people ORDER BY id ASC;", (err, results) => {
		console.log(results);
		// testing again
		res.json(results.rows);
	});
>>>>>>> dc4271845da9014e9d052b3466e3e754f63ca3ec
});

router.post("/", (req, res) => {
	postgres.query(
		`INSERT INTO people (name, age) VALUES ('${req.body.name}', ${req.body.age})`,
		(err, results) => {
			postgres.query(
				"SELECT * FROM people ORDER BY id ASC;",
				(err, results) => {
					res.json(results.rows);
				}
			);
		}
	);
});

router.delete("/:id", (req, res) => {
	postgres.query(
		`DELETE FROM people WHERE id = ${req.params.id};`,
		(err, results) => {
			postgres.query(
				"SELECT * FROM people ORDER BY id ASC;",
				(err, results) => {
					res.json(results.rows);
				}
			);
		}
	);
});
// testing this out

router.put("/:id", (req, res) => {
	postgres.query(
		`UPDATE people SET name = '${req.body.name}', AGE = ${req.body.age} WHERE id = ${req.params.id}`,
		(err, results) => {
			postgres.query(
				"SELECT * FROM people ORDER BY id ASC;",
				(err, results) => {
					res.json(results.rows);
				}
			);
		}
	);
});

module.exports = router;
