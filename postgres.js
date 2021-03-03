const Client = require("pg").Pool;
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




module.exports = client;
