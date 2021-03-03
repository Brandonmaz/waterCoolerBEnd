const Client = require("pg").Pool;
<<<<<<< HEAD
// comment this out this is linux section
// const client = new Client({
//   user: "evanepperson",
//   host: "localhost",
//   database: "contacts",
//   password: "password",
//   port: 5432,
// });
// testing this out

const client = new Client({
	connectionString:
		process.env.DATABASE_URL || "postgressql://localhost:5432/contacts",
});
=======
// comment this out this is linux section 
const client = new Client({
  user: "evanepperson",
  host: "localhost",
  database: "contacts",
  password: "password",
  port: 5432,
});
// testing this out 

// this is mac section 
// const client = new Client({
//   connectionString:
//     process.env.DATABASE_URL || "postgresql://localhost:5432/contacts",
// });
>>>>>>> 44f5d710ec38fb790b8f2d3c153e2dc109d1f006

module.exports = client;
