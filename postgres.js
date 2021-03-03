const Client = require("pg").Client;

const client = new Client({
	connectionString:
		process.env.DATABASE_URL || "postgressql://localhost:5432/contacts",
});

module.exports = client;
