const express = require("express");
const router = express.Router();
const User = require("../models/schemaUser");
// const Todos = require("../models/schema");

// ===========POST ROUTE
router.post("/register", async (req, res) => {
	const { username, password } = req.body;
	const user = await User.findOne({ username }).exec();
	if (user) {
		res.status(500);
		res.json({
			message: "user already exists",
		});
		return;
	}
	await User.create({ username, password });
	res.json({
		message: "success",
	});
});
// ===========Show Route=================
// router.get("/", (req, res) => {
// 	User.find()
// 		.then((users) => {
// 			res.send(users);
// 		})
// 		.catch((err) => console.log(err));
// });
// router.post("/", async (req, res) => {
// 	const { username, password } = req.body;
// 	const user = await User.findOne({ username }).exec();
// 	if (user) {
// 		res.status(500);
// 		res.json({
// 			message: "user already exists",
// 		});
// 		return;
// 	}
// 	await User.create({ username, password });
// 	res.json({
// 		message: "success",
// 	});
// });
module.exports = router;
