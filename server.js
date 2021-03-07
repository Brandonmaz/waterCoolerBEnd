const express = require("express");
const methodOverride = require("method-override");
const cors = require("cors");
const mongoose = require("mongoose");


const app = express();
const PORT = process.env.PORT || 3003;
const ObjectId = require("mongoose").Types.ObjectId;
mongoose.connect(
	"mongodb+srv://EppersonEvan:SEIRMando@cluster0.4elie.mongodb.net/todo?retryWrites=true&w=majority",
	{
		useUnifiedTopology: true,
		useNewUrlParser: true,
		useFindAndModify: false,
	}
);
const userSchema = new mongoose.Schema({
	username: String,
	password: String,
});
const User = mongoose.model("User", userSchema);
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

// MIDDLEWARE

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(methodOverride('_method'));

// pseudocode: when user visits the main site they should see the signup/login page

app.post("/", async (req, res) => {
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

app.get("/", (req, res) => {
	User.find()
		.then((users) => {
			res.send(users);
		})
		.catch((err) => console.log(err));
});

app.post("/login", async (req, res) => {
	const { username, password } = req.body;
	const user = await User.findOne({ username }).exec();
	if (!user || user.password !== password) {
		res.status(403);
		res.json({
			message: "invalid login",
		});
		return;
	}
	res.json({
		message: "success",
	});
});

app.post("/todos", async (req, res) => {
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

// ============Index Route==================

app.get("/todos", async (req, res) => {
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
// ============Show Route==================
// Fetching Data
// uses /api/tesla-info/id

// ============Update Route==================


// ============Delete Route==================

app.delete("/todos", async (req, res) => {
	const { authorization } = req.headers;
	const [, token] = authorization.split(" ");
	const [username, password] = token.split(":");
	const user = await User.findOne({ username }).exec();
	const id = req.params.id; // this may be a problem
	if (!user || user.password !== password) {
		res.status(403);
		res.json({
			message: "invalid access",
		});
		return;
	}
	const { todos } = await Todos.findByIdAndRemove(id)
	.then( data => {
		if(!data) {
			res.status(404).send({
				message: `cannot delete ${id}`
			});
		} else {
			res.send({
				message: "Todo deleted successfully"
			});
		}
	}).catch(err => {
		res.status(500).send({
			message: "could not delete todo with id=" + id
		});
	});
});

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", function () {
	app.listen(PORT, () => {
		console.log(`Example app listening at http://localhost:${PORT}`);
	});
});
