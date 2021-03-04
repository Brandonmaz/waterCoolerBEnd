const Client = require("pg").Client;
// comment this out this is linux section 
const client = new Client({
  user: "evanepperson",
  host: "localhost",
  database: process.env.DATABASE_URL,
  password: "password",
  port: 5432,
  ssl: true
});
// testing this out 


// this is mac section
// const client = new Client({
// 	connectionString:
// 		process.env.DATABASE_URL || "postgresql://localhost:5432/contacts",
// });
// testing 

module.exports = client;
