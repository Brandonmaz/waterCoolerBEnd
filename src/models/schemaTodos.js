const mongoose = require("mongoose");

const todosSchema = new mongoose.Schema({
	userId: mongoose.Schema.ObjectId,
	todos: [
		{
			checked: Boolean,
			text: String,
			id: String,
		},
	],
});

const Todos = mongoose.model("Todos", todosSchema);
module.exports = Todos;
