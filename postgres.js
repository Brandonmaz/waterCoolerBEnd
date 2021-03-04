const Client = require("pg").Client;
// comment this out this is linux section 
const client = new Client({
  user: "ptcucmxkslupdt",
  host: "localhost",
  database: process.env.DATABASE_URL || "contacts" ,
  password: "2b0d312d632a8fb55b658a4bcfcf0416684c96027b71dd6a427f5afb30534e53",
  port: 5432,
  SETPGSSLMODE: require
  // ssl: true,
});
// testing this out right now to see if it can get rid of something 


// this is mac section
// const client = new Client({
// 	connectionString:
// 		process.env.DATABASE_URL || "postgresql://localhost:5432/contacts",
// });
// testing 

module.exports = client;
