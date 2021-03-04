const express = require("express");
const app = express();
const postgres = require("./postgres.js");
const cors = require('cors')

app.use(cors());
app.use(express.json());
app.use(express.static("public"));


const peopleController = require("./controllers/people.js");
app.use("/people", peopleController);

postgres.connect();

app.listen(process.env.PORT || 3000, () => {
  console.log("listening");
});
