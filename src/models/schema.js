const mongoose = require("mongoose");
const userSchema = new mongoose.Schema({
	username: String,
	password: String,
});

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
const User = mongoose.model("User", userSchema);

const Todos = mongoose.model("Todos", todosSchema);

module.exports = User;
module.exports = Todos;
