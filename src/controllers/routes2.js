const express = require("express");
const User = require("../models/schema");
const Todos = require("../models/schema");

const router = express.Router();
// ===========POST ROUTE

router.post("/todos", async (req, res) => {
	const { authorization } = req.headers;
	const [, token] = authorization.split(" ");
	const [username, password] = token.split(":");
	const todosItems = req.body;
	const user = await User.findOne({ username }).exec();
	if (!user || user.password !== password) {
		res.status(403);
		res.json({
			message: "invalid access",
		});
		return;
	}
	const todos = await Todos.findOne({ userId: user._id }).exec();
	if (!todos) {
		await Todos.create({
			userId: user._id,
			todos: todosItems,
		});
	} else {
		todos.todos = todosItems;
		await todos.save();
	}
	res.json(todosItems);
});

// ===========Shoe Route=================
router.get("/todos", async (req, res) => {
	const { authorization } = req.headers;
	const [, token] = authorization.split(" ");
	const [username, password] = token.split(":");
	const user = await User.findOne({ username }).exec();
	if (!user || user.password !== password) {
		res.status(403);
		res.json({
			message: "invalid access",
		});
		return;
	}
	const { todos } = await Todos.findOne({ userId: user._id }).exec();
	res.json(todos);
});
