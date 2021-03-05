const express = require("express");
const User = require("../models/schema");
const Todos = require("../models/schema");

const router = express.Router();
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
