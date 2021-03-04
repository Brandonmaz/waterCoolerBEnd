const Client = require("pg").Client;
// comment this out this is linux section 
const client = new Client({
  user: "evanepperson",
  host: "localhost",
  database: process.env.DATABASE_URL || "contacts",
  password: "password",
  port: 5432,
  // ssl: true,
});



const dbConfig = {
  connectionString: "postgresql://localhost:5432/contacts",
};

if (process.env.DATABASE_URL) {
  dbConfig.ssl = { rejectUnauthorized: false };
  dbConfig.connectionString = process.env.DATABASE_URL;
}

// const client = new Client(dbConfig);

module.exports = client;

