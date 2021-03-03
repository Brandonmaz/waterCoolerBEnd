<<<<<<< HEAD
const Client = require('pg').Client

const client = new Client({
    connectionString:
        process.env.DATABASE_URL || "postgresql://localhost:5432/contacts",
})

module.exports = client
=======
const Client = require("pg").Pool;
// comment this out this is linux section 
// const client = new Client({
//   user: "evanepperson",
//   host: "localhost",
//   database: "contacts",
//   password: "password",
//   port: 5432,
// });

// this is mac section 
const client = new Client({
  connectionString:
    process.env.DATABASE_URL || "postgresql://localhost:5432/contacts",
});




module.exports = client;
>>>>>>> ae09d09ec1f5775b97a180b783faa5a8b8512e90
